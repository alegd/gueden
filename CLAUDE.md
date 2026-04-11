# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog for gueden.com. Next.js 16 App Router with MDX content managed by Contentlayer2, internationalized with next-intl (ES default, EN secondary). Originally forked from timlrx's starter blog template, now heavily customized.

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build (includes postbuild script for RSS/search index)
- `npm run lint` — ESLint with auto-fix
- `npm run analyze` — Bundle analysis
- `npm run serve` — Serve production build

## Architecture

### Content Pipeline

Blog posts are MDX files in `data/blog/`. Contentlayer2 (`contentlayer.config.ts`) processes them at build time with remark/rehype plugins (GFM, math, syntax highlighting via Prism, citations, image optimization). Computed fields include reading time, slug, TOC, and structured data (schema.org). Author profiles live in `data/authors/`.

Tag counts are pre-computed to `src/app/tag-data.json` during build.

### Internationalization

- **next-intl** with middleware-based routing (`src/middleware.ts`)
- Locales: `es` (default), `en` — configured in `src/app/config/i18.config.ts`
- Prefix mode: `never` (no `/es` or `/en` in URLs)
- Translation files: `locales/{locale}/common.json`
- All routes are under `src/app/[locale]/`

### Routing & Layouts

- `src/app/[locale]/layout.tsx` — Root layout (theme provider, analytics, search)
- `src/layouts/` — Post rendering layouts: `PostLayout`, `PostSimple`, `PostBanner`, `ListLayout`, `ListLayoutWithTags`, `AuthorLayout`
- Layout selection is per-post via MDX frontmatter `layout` field

### Key Integrations

- **Comments**: Giscus (GitHub Discussions) — configured in `data/siteMetadata.js`
- **Search**: kbar — documents generated at build via postbuild script
- **Analytics**: Umami + Google Analytics (env vars: `NEXT_UMAMI_ID`, `GA_MEASUREMENT_ID`)
- **UI Library**: pliny (provides Pre, TOCInline, BlogNewsletterForm, analytics, search components)

### Path Aliases (tsconfig)

`@/app`, `@/components`, `@/data`, `@/layouts`, `@/css` — always use these instead of relative paths.

## Conventions

- **Formatting**: Prettier — 2 spaces, 100-char lines, single quotes, no trailing commas
- **Git hooks**: Husky + lint-staged auto-lints on commit
- **Site config**: `data/siteMetadata.js` is the central configuration (social links, analytics, comments, search, newsletter)
- **Navigation**: `data/headerNavLinks.ts`
- **MDX components**: Custom wrappers in `src/components/MDXComponents.tsx` (Link, Image, TableWrapper)
- **Security**: CSP headers configured in `next.config.js` — update when adding external script/image sources

## Quality standards

### Code style

- TypeScript strict mode. No `any` types. No `@ts-ignore`. No `as unknown as X` casts.
- All components must have explicit return types.
- Use named exports, not default exports (exception: Next.js page/layout files which require default exports).
- Imports: absolute paths via `@/` alias. Group in this order: (1) external libraries, (2) internal components, (3) internal utils/types, (4) styles. Blank line between groups.
- No console.log in committed code. Use structured logging if logging is needed.
- No commented-out code. Delete it. Git has history.

### Components

- One component per file. File name matches component name (PascalCase).
- Props interfaces defined in the same file, named `{ComponentName}Props`.
- Server components by default. Only add `'use client'` when hooks or browser APIs are required.
- No inline styles. Use Tailwind classes exclusively.
- Accessibility: all interactive elements need aria labels. All images need alt text. Semantic HTML (nav, main, section, article, footer) over div soup.

### CSS/Tailwind

- Follow BRAND.md color system. Never hardcode hex colors — use Tailwind tokens or CSS variables.
- Dark mode: every color declaration needs a `dark:` variant. Test in both modes.
- Responsive: mobile-first. Test at 375px (iPhone SE) and 1440px (desktop).
- Maximum of 10 Tailwind classes per element before extracting to a shared utility or component.

### Content/i18n

- All user-facing strings must use translation keys from locales/\*.json.
- Never hardcode Spanish or English strings in components.
- When adding new UI text, add keys to BOTH locale files in the same commit.

### Git

- Conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`.
- One logical change per commit. Don't bundle unrelated changes.
- Commit message body explains WHY, not WHAT (the diff shows what).
