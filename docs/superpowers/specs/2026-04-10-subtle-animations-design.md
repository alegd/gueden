# Subtle Animations — Design Spec

## Goal

Add fade-in on scroll and hover micro-interactions to give life to the minimal black/white site without compromising its editorial feel. Zero external dependencies.

## Approach

Tiny `<Animate>` client component (~20 lines) using `IntersectionObserver` + CSS transitions for scroll reveals. Pure Tailwind for hover micro-interactions.

---

## 1. `<Animate>` Component

**File:** `src/components/Animate.tsx`

Client component that wraps elements and triggers a CSS transition when they enter the viewport.

**Props:**

- `delay?: number` — stagger delay in ms (default: 0)
- `className?: string` — additional classes
- `children: ReactNode`

**Behavior:**

- Initial state: `opacity-0 translate-y-4`
- When element enters viewport (via `IntersectionObserver`, threshold ~0.1): transition to `opacity-100 translate-y-0`
- Transition: `duration-700 ease-out`
- Fires once (`once: true` by default — unobserves after triggering)
- The `delay` prop maps to `transitionDelay` inline style

**Implementation notes:**

- Use `useRef` + `useState` for the `inView` flag
- `useEffect` to set up/tear down the observer
- Render a `<div>` with conditional classes based on `inView`
- No `IntersectionObserver` polyfill needed (browser support is universal)

---

## 2. Fade-in on Scroll — Placement

### Home (`src/app/ui/home/Home.tsx`)

| Element                               | Delay | Notes                                       |
| ------------------------------------- | ----- | ------------------------------------------- |
| Hero section (whole)                  | 0ms   | Wraps eyebrow + h1 + intro + CTAs           |
| Hero H1 line 1                        | 0ms   | Individual `<Animate>` for staggered reveal |
| Hero H1 line 2                        | 200ms | Slight offset for cinematic feel            |
| Featured projects section eyebrow row | 0ms   | Triggers on scroll into view                |
| Project card 1                        | 0ms   | Stagger start                               |
| Project card 2                        | 100ms | Staggered sibling                           |
| Latest posts section eyebrow row      | 0ms   | Triggers on scroll                          |
| Post row 1                            | 0ms   | Stagger start                               |
| Post row 2                            | 80ms  |                                             |
| Post row 3                            | 160ms |                                             |

### Portfolio (`src/app/[locale]/portfolio/page.tsx`)

| Element                    | Delay |
| -------------------------- | ----- |
| Page header (eyebrow + h1) | 0ms   |
| Project row 1              | 0ms   |
| Project row 2              | 80ms  |
| Project row 3              | 160ms |

### About (`src/layouts/AuthorLayout.tsx`)

| Element                          | Delay |
| -------------------------------- | ----- |
| Header (eyebrow + avatar + name) | 0ms   |
| Prose body                       | 100ms |
| Social footer                    | 200ms |

### Contact (`src/app/[locale]/contact/page.tsx`)

| Element                          | Delay |
| -------------------------------- | ----- |
| Header (eyebrow + h1 + subtitle) | 0ms   |
| ContactForm                      | 100ms |
| Direct footer                    | 200ms |

---

## 3. Hover Micro-Interactions

All via Tailwind utility classes, no JS.

| Element                            | Classes to add                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Project cards (home grid)          | `hover:-translate-y-0.5 hover:shadow-sm transition-all`                                                       |
| Project rows (portfolio list)      | `hover:translate-x-1 transition-transform`                                                                    |
| CTA bordered button (home hero)    | `hover:scale-[1.02] transition-transform`                                                                     |
| Arrow links ("Ver todos →")        | Wrap arrow in `<span>` with `inline-block group-hover:translate-x-1 transition-transform` + `group` on parent |
| Post rows (home)                   | `hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors`                                                   |
| Status dots with `building` status | `animate-pulse` (Tailwind built-in)                                                                           |

---

## 4. Files Modified

| File                                  | Changes                                                       |
| ------------------------------------- | ------------------------------------------------------------- |
| `src/components/Animate.tsx`          | **New** — client component                                    |
| `src/app/ui/home/Home.tsx`            | Wrap sections in `<Animate>`, add hover classes, staggered H1 |
| `src/app/[locale]/portfolio/page.tsx` | Wrap header + rows in `<Animate>`, add hover classes          |
| `src/layouts/AuthorLayout.tsx`        | Wrap sections in `<Animate>`                                  |
| `src/app/[locale]/contact/page.tsx`   | Wrap sections in `<Animate>`                                  |

---

## 5. Non-Goals

- No page transition animations (route changes)
- No exit animations (elements leaving viewport)
- No animation on blog list/post layouts (out of scope per refresh plan)
- No reduced-motion media query in this pass (flag for future — `prefers-reduced-motion`)
- No animation library dependencies (Framer Motion, GSAP, etc.)

---

## 6. Verification

- All pages still pass `npm run build`
- Animations visible on scroll in dev server across: `/`, `/portfolio`, `/about`, `/contact`
- Dark mode doesn't break any animation
- Status dot pulse only on "building" projects
- Hover effects work on desktop, don't interfere on mobile (touch)
