# Coding Standards

Quick reference for this repository.

## General

- **Indentation:** 2 spaces.
- **Naming:** camelCase (variables, functions), PascalCase (components), kebab-case for filenames where conventional.
- **TypeScript:** Strict; type all props and public APIs.

## Astro

- Use `.astro` components; prefer static rendering where possible.
- Define `interface Props` for every component with props.
- Colocate components in `src/components/` by feature or section.

## Tailwind

- Utility-first; avoid one-off arbitrary values unless necessary.
- Use design tokens (neutral + one accent); keep dark mode in sync.
- Prefer responsive utilities (`sm:`, `md:`, `lg:`).

## Motion One

- Use for: metric counters, section reveals, hover/button feedback only.
- Keep animations subtle and short; consider `prefers-reduced-motion`.

## i18n

- No duplicate components per locale; one component set, data from i18n.
- Default EN; support ES; auto-detect + manual switch.

## Accessibility & SEO

- Semantic HTML (header, main, nav, section, footer).
- Focus styles, labels, alt text; WCAG AA basics.
- Meta, canonical, OpenGraph, Person schema, sitemap, robots.txt.

## Copy

- Impact-first; quantify; leadership and systems thinking.
- No generic buzzwords; no lorem ipsum.

## File locations

- Components: `src/components/`
- Layouts: `src/layouts/`
- Pages: `src/pages/`
- Content: `src/content/`
- Styles: `src/styles/`
- i18n: `src/i18n/`
- Static: `public/`
