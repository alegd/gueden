# gueden — Brand Guidelines

## Brand DNA

### Origin

**gueden** = **Gue**rra + **Den**is. The first three letters of each surname. It's not a product name or a studio name — it's a personal mark. This distinction matters: everything on gueden.com should feel like it comes from a specific person, not a faceless agency.

### Brand promise

"I build things that work, and I'll show you how."

The site should communicate three things within 10 seconds of landing:

1. This person ships real products (not tutorials, not toy projects)
2. This person has depth (10+ years, multiple stacks, multiple domains)
3. This person is direct and approachable (no corporate theater)

### Personality traits

| Trait          | What it means in practice                                                 | What it's NOT                                                      |
| -------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Competent**  | Clean code, working demos, real numbers                                   | Arrogant, "10x developer" posturing                                |
| **Authentic**  | First-person voice, honest about failures, Cuban-Spanish identity visible | Oversharing, performative vulnerability                            |
| **Deliberate** | Every design choice has a reason, minimal but not empty                   | Lazy minimalism (blank pages disguised as design)                  |
| **Builder**    | Emphasis on shipping, not theorizing                                      | Hustle culture, grindset, "building in public" as content strategy |

### Voice

- **First person, active tense.** "Construí esto" not "Se construyó esto."
- **Short sentences.** If a paragraph has more than 4 sentences, break it up.
- **Technical when needed, never when showing off.** Name the tech stack, don't explain what React is.
- **Bilingual naturally.** Spanish is the default. English is available. No apologies for either.
- **No buzzwords.** Never say "passion," "disrupting," "leveraging," "ecosystem," or "synergy."

---

## Visual identity

### Design philosophy

**Refined minimalism with intentional contrast.**

The aesthetic is closer to a well-typeset book than a startup landing page. White space is the primary design element. Color is used surgically — only to encode status or draw attention to one thing.

### Color system

#### Core palette

| Token            | Light mode | Dark mode | Usage                               |
| ---------------- | ---------- | --------- | ----------------------------------- |
| `--bg-primary`   | `#FFFFFF`  | `#000000` | Page background                     |
| `--bg-surface`   | `#FAFAFA`  | `#0A0A0A` | Cards, code blocks, raised surfaces |
| `--text-primary` | `#000000`  | `#FFFFFF` | Headlines, names, CTAs              |
| `--text-body`    | `#4A4A4A`  | `#A0A0A0` | Body text, descriptions             |
| `--text-muted`   | `#9A9A9A`  | `#666666` | Dates, labels, metadata             |
| `--border`       | `#E5E5E5`  | `#1A1A1A` | Section dividers, card borders      |
| `--border-hover` | `#999999`  | `#444444` | Interactive element hover borders   |

#### Accent colors (status dots only)

These colors appear exclusively as small indicators — 8px dots, tiny pills, or status badges. They should never be used for backgrounds, buttons, or large surfaces.

| Token               | Hex                     | Usage                           |
| ------------------- | ----------------------- | ------------------------------- |
| `--accent-live`     | `#10B981` (emerald-500) | Project status: live/production |
| `--accent-building` | `#3B82F6` (blue-500)    | Project status: in development  |
| `--accent-beta`     | `#F59E0B` (amber-500)   | Project status: beta            |

#### Selection color

Text selection uses inverted colors: black text on white selection in dark mode, white text on black selection in light mode. This is a small signature detail that reinforces the monochrome identity.

### Typography

#### Type system

| Role             | Font             | Weight        | Size (desktop) | Size (mobile) | Tracking        |
| ---------------- | ---------------- | ------------- | -------------- | ------------- | --------------- |
| Wordmark         | Space Grotesk    | Medium (500)  | 18px           | 18px          | -0.5px          |
| Page headline    | Space Grotesk    | Medium (500)  | 48px           | 36px          | -1px            |
| Section headline | Space Grotesk    | Medium (500)  | 20px           | 18px          | —               |
| Eyebrow label    | Space Grotesk    | Medium (500)  | 14px           | 14px          | +2px, uppercase |
| Body text        | Space Grotesk    | Regular (400) | 16px           | 16px          | —               |
| Small/meta text  | Space Grotesk    | Regular (400) | 14px           | 14px          | —               |
| Code inline      | System monospace | Regular (400) | 14px           | 14px          | —               |

#### Type rules

- Only two font weights exist in this brand: **400** (regular) and **500** (medium). Never use bold (700). Hierarchy comes from size and color, not weight.
- Line height for body text: 1.7. For headlines: 1.2.
- Maximum content width: `42rem` (672px). This is the reading measure for all prose content.
- Links in prose: underlined with `--border` color, transitioning to `--text-primary` on hover. No color change on links — they stay the same text color as surrounding copy.

### Logo/Wordmark

The gueden logo is purely typographic — the word "gueden" set in Space Grotesk Medium at 18px with -0.5px letter-spacing. No icon, no symbol, no graphic mark.

#### Wordmark specifications

- **Text:** "gueden" (all lowercase, always)
- **Never** capitalize, never "Gueden", never "GUEDEN"
- **Minimum clear space:** 1em on all sides
- **Minimum size:** 14px (below this it becomes illegible)
- **Color:** `--text-primary` (black in light mode, white in dark mode)
- **No accompanying icon.** If a square mark is needed (favicons, social avatars), use a solid black (or white) square with "g" in Space Grotesk Medium, centered.

#### Favicon

- Primary: black square with white "g" in Space Grotesk Medium
- Dark mode variant: white square with black "g"
- Sizes to generate: 16x16, 32x32, 180x180 (apple-touch-icon), 192x192, 512x512

### Spacing

The site uses a consistent spacing scale based on multiples of 4px:

| Token | Value | Usage                                             |
| ----- | ----- | ------------------------------------------------- |
| `xs`  | 4px   | Inline gaps within components                     |
| `sm`  | 8px   | Between related items                             |
| `md`  | 16px  | Between components in a section                   |
| `lg`  | 32px  | Between sections within a page                    |
| `xl`  | 48px  | Between major page zones (hero → projects → blog) |
| `2xl` | 80px  | Top padding on page hero sections (desktop)       |

### Layout

- Maximum content width: `max-w-2xl` (42rem / 672px)
- All pages share this width — homepage, portfolio, about, contact, blog posts
- No full-width bleeds, no sidebar layouts. The homepage hero photo is the single exception — it sits behind the content with a gradient mask, it doesn't push the text layout around
- Content is always left-aligned (not centered) within the container
- The container itself is horizontally centered on the page

### Borders and dividers

- Always `1px solid var(--border)` — never thicker
- Section dividers span the full `max-w-2xl` width
- Card borders use `border-radius: 8px` (Tailwind `rounded-lg`)
- No persistent box shadows. A subtle `shadow-sm` on hover for interactive cards is acceptable. No drop shadows, no glow effects.

### Motion and interaction

#### Scroll reveals

Sections fade in with a subtle `opacity-0 translate-y-4 → opacity-100 translate-y-0` transition (700ms ease-out) as they enter the viewport via `IntersectionObserver`. Sibling items within a section (project cards, post rows) stagger with 80–100ms delays for a cascade effect. The hero H1 uses a per-line stagger (200ms offset between lines). All reveals fire once — no re-animation when scrolling back up.

**Implementation:** `src/components/Animate.tsx` — a zero-dependency client component (~20 lines). Wrap any element in `<Animate delay={ms}>`.

#### Hover micro-interactions

| Element                     | Effect                                                       |
| --------------------------- | ------------------------------------------------------------ |
| Project cards (home)        | `hover:-translate-y-0.5 hover:shadow-sm` — tiny lift         |
| Project rows (portfolio)    | `hover:translate-x-1` — rightward nudge                      |
| CTA bordered button         | `hover:scale-[1.02]` — micro-scale                           |
| Arrow links ("Ver todos →") | `group-hover:translate-x-1` on the arrow span                |
| Post rows                   | `hover:bg-gray-50 dark:hover:bg-gray-900` — subtle highlight |

All hover effects use `transition-all` or `transition-transform` with default duration.

#### Status dot pulse

Status dots with `building` status use `animate-pulse` to convey active development. This is the only looping animation on the site.

#### What is NOT allowed

- **No loading skeleton animations.** If content loads, show a blank space, not a pulsing gray bar.
- **No parallax, scroll-jacking, or page transition animations.**
- **No exit animations.** Elements don't animate when leaving the viewport.
- **Cursor:** default system cursor everywhere. No custom cursors.

### Photography and imagery

- **Avatar:** Grayscale, small (64-72px), round. Used only on the About page.
- **Hero photo:** The homepage features a B&W portrait on the right side of the hero section (desktop only), fading into the background via a left-to-right gradient mask. This is the only large image on the site. No project screenshots on the homepage. No stock photography.
- **Blog posts:** May include diagrams, screenshots, or code blocks. Images within blog posts should have a subtle 1px border in `--border` color.
- **Project cards:** No images. Projects are represented by their text description and a colored status dot. The absence of images is a deliberate brand choice — it says "the work speaks for itself."

---

## Content guidelines

### Blog post conventions

- **Title format:** Sentence case, no periods. "How I built Yappie in 4 weeks" not "How I Built Yappie In 4 Weeks."
- **Date format:** `DD MMM YYYY` in display, ISO in frontmatter
- **Tags:** lowercase, hyphenated. `clean-architecture`, `nestjs`, `side-projects`
- **Summary:** 1-2 sentences max. Written for the blog list page, not SEO.
- **Code blocks:** Use language tags. Prefer short focused snippets over full file dumps.

### Portfolio/project conventions

- **Description:** 1-2 sentences. What it is + who it's for. No superlatives.
- **Tech stack:** Listed as `·`-separated text. Framework first, then database, then notable services.
- **Status labels:**
  - `live` = deployed and being used
  - `building` = actively in development, not yet public
  - `beta` = available but pre-release

### Pages that exist

| Page                  | Purpose                                                   | Tone                    |
| --------------------- | --------------------------------------------------------- | ----------------------- |
| Home `/`              | First impression. Hero + featured projects + latest posts | Confident, concise      |
| Projects `/portfolio` | Full project list with descriptions                       | Factual, no sales pitch |
| Blog `/blog`          | Index of writing                                          | Clean, scannable        |
| About `/about`        | Bio + professional background                             | Personal, first-person  |
| Contact `/contact`    | Form + direct links                                       | Welcoming, brief        |

---

## Brand don'ts

- **Don't add decorative gradients.** Not on backgrounds, not on text, not on buttons. Functional gradients used as legibility masks (e.g. fading the hero photo into the background) are allowed — they are composition tools, not decoration.
- **Don't use colored backgrounds.** The only backgrounds are `--bg-primary` and `--bg-surface`.
- **Don't add testimonials or social proof badges.** No "Featured in..." bars.
- **Don't add a skills/tech radar/progress bars section.** The projects demonstrate the skills.
- **Don't use emoji in content.** Not in headings, not in body text, not in navigation.
- **Don't add a "Services" page or pricing table.** This isn't a freelance agency site.
- **Don't use stock illustrations** (undraw, humaaans, etc.). If there's no real image, use no image.
- **Don't add particle effects, parallax, or scroll-jacking.**
- **Don't use more than 2 font weights (400, 500).**
- **Don't capitalize the wordmark.** It's always "gueden", never "Gueden" or "GUEDEN."

---

## File reference

When implementing or reviewing changes, these are the files that enforce the brand:

| Brand element                      | File(s)                                            |
| ---------------------------------- | -------------------------------------------------- |
| Colors, spacing, typography        | `tailwind.config.js`, `src/css/tailwind.css`       |
| Scroll reveal animations           | `src/components/Animate.tsx`                       |
| Wordmark                           | `src/components/logo/Logo.tsx`                     |
| Favicons                           | `public/static/favicons/`                          |
| Social preview image               | `public/static/images/twitter-card.png`            |
| Site metadata (title, description) | `data/siteMetadata.js`                             |
| Author bio                         | `data/authors/default.mdx`                         |
| Translation copy                   | `locales/es/common.json`, `locales/en/common.json` |

---

## Usage in Claude Code

When working on gueden.com with Claude Code, start every session by reading this file:

```
Read BRAND.md before making any visual or copy changes. Follow the color system, typography rules, and brand don'ts strictly.
```

This ensures consistent output across sessions regardless of which Claude instance is working on the site.
