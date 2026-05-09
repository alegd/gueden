# gueden.com

Personal site of Alejandro Guerra. Fullstack developer and solution architect based in Madrid.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS 4
- Contentlayer2 (MDX)
- next-intl (ES/EN)
- Vercel

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Tests

```bash
pnpm test
```

Tests live alongside source as `*.test.ts`. Run via Vitest.

## Contact form spam protection

The `/contact` form is protected by **Cloudflare Turnstile** (Managed mode) plus
a hidden honeypot field. Both must validate before the email is sent via Resend.

### Required environment variables

```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...    # public, exposed to client
TURNSTILE_SECRET_KEY=...              # server-only, used for siteverify
```

The site key is configured in the [Cloudflare Turnstile dashboard](https://dash.cloudflare.com/?to=/:account/turnstile)
under the widget for `gueden.com`.

### Local development with Cloudflare test keys

Cloudflare publishes [test keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/)
that always pass or always fail. Use them in local `.env.local`:

```
# always passes
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA

# always fails
NEXT_PUBLIC_TURNSTILE_SITE_KEY=2x00000000000000000000AB
TURNSTILE_SECRET_KEY=2x0000000000000000000000000000000AA
```

### Manual test scenarios

1. **Happy path** — fill form, solve captcha, submit → email arrives
2. **Honeypot triggered** — set the hidden `website` input via devtools, submit → backend silently returns 200, no email sent
3. **No token** — disable JS or remove the widget, submit → `403 Verificación fallida`
4. **Invalid token** — use the always-fails test keys → `403 Verificación fallida`
5. **siteverify network error** — block `challenges.cloudflare.com` in devtools, submit → `503 Servicio no disponible`

## License

MIT
