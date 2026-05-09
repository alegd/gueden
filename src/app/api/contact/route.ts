import { getClientIp, verifyTurnstile } from '@/app/lib/turnstile';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  turnstileToken?: string;
  website?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { name, email, subject, message, turnstileToken, website } = body;

  if (typeof website === 'string' && website.length > 0) {
    return NextResponse.json({ success: true });
  }

  if (!turnstileToken) {
    return NextResponse.json({ error: 'Verificación fallida' }, { status: 403 });
  }

  let verification;
  try {
    verification = await verifyTurnstile(turnstileToken, getClientIp(request));
  } catch (err) {
    console.error('[contact] Turnstile siteverify network error:', err);
    return NextResponse.json({ error: 'Servicio no disponible' }, { status: 503 });
  }

  if (!verification.success) {
    console.warn('[contact] Turnstile verification failed:', verification['error-codes']);
    return NextResponse.json({ error: 'Verificación fallida' }, { status: 403 });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'gueden.com <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL || '',
    replyTo: email,
    subject: `[gueden.com] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
