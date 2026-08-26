# Gueden Blog — Coding Standards

Next.js 16 / React 19 / TypeScript / Tailwind 4. Content-driven personal blog.

## Testing — TDD is MANDATORY

Every new feature and bug fix follows **Red → Green → Refactor**:

1. **Red** — write a failing test that states the expected behaviour.
2. **Green** — write the minimum code that makes it pass.
3. **Refactor** — clean up with the test still green.

If you did not watch the test fail, you do not know it tests the right thing.

| Case                       | Rule                                                           |
| -------------------------- | -------------------------------------------------------------- |
| New code                   | Test written first.                                            |
| Existing code modification | Add the missing test for the behaviour you touch, then change. |

## Test stack

- **Runner**: Vitest 3. Command: `npm test`.
- **Location**: co-located with the source as `*.test.ts` (see `src/app/lib/turnstile.test.ts`).
- **Coverage**: no threshold configured. Do not claim one until it exists.
- **Naming**: name tests as behaviour, not as the function under test.

## Scope note

Test the logic, not the content pipeline. Worth testing: integrations under `src/app/lib/` (Turnstile, API clients), i18n key resolution, routing helpers, slug and metadata generation. Not worth testing: MDX prose, static copy, Tailwind classes.
