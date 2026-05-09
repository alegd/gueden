import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getClientIp, verifyTurnstile } from './turnstile';

describe('verifyTurnstile', () => {
  const ORIGINAL_SECRET = process.env.TURNSTILE_SECRET_KEY;

  beforeEach(() => {
    process.env.TURNSTILE_SECRET_KEY = 'test-secret';
  });

  afterEach(() => {
    process.env.TURNSTILE_SECRET_KEY = ORIGINAL_SECRET;
    vi.restoreAllMocks();
  });

  it('throws when secret is missing', async () => {
    delete process.env.TURNSTILE_SECRET_KEY;
    await expect(verifyTurnstile('token')).rejects.toThrow('TURNSTILE_SECRET_KEY');
  });

  it('returns success: true on valid response', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ success: true, hostname: 'gueden.com' }), { status: 200 })
    );

    const result = await verifyTurnstile('valid-token', '1.2.3.4');
    expect(result.success).toBe(true);
    expect(result.hostname).toBe('gueden.com');
  });

  it('returns success: false on invalid token', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ success: false, 'error-codes': ['invalid-input-response'] }), {
        status: 200
      })
    );

    const result = await verifyTurnstile('invalid-token');
    expect(result.success).toBe(false);
    expect(result['error-codes']).toEqual(['invalid-input-response']);
  });

  it('throws when siteverify returns non-2xx', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response('error', { status: 500 }));

    await expect(verifyTurnstile('token')).rejects.toThrow('500');
  });

  it('sends remoteip in body when provided', async () => {
    const fetchSpy = vi
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }));

    await verifyTurnstile('token', '1.2.3.4');

    const init = fetchSpy.mock.calls[0][1];
    const body = init?.body as URLSearchParams;
    expect(body.get('remoteip')).toBe('1.2.3.4');
  });

  it('omits remoteip when not provided', async () => {
    const fetchSpy = vi
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }));

    await verifyTurnstile('token');

    const init = fetchSpy.mock.calls[0][1];
    const body = init?.body as URLSearchParams;
    expect(body.has('remoteip')).toBe(false);
  });
});

describe('getClientIp', () => {
  it('prefers cf-connecting-ip', () => {
    const request = new Request('https://gueden.com', {
      headers: {
        'cf-connecting-ip': '1.1.1.1',
        'x-forwarded-for': '2.2.2.2'
      }
    });
    expect(getClientIp(request)).toBe('1.1.1.1');
  });

  it('falls back to first x-forwarded-for entry', () => {
    const request = new Request('https://gueden.com', {
      headers: { 'x-forwarded-for': '2.2.2.2, 3.3.3.3' }
    });
    expect(getClientIp(request)).toBe('2.2.2.2');
  });

  it('returns undefined when no proxy headers present', () => {
    const request = new Request('https://gueden.com');
    expect(getClientIp(request)).toBeUndefined();
  });
});
