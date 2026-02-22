# Tech Stack

Reference versions and choices for the personal leadership site.

## Core

| Technology   | Purpose                    | Notes                          |
|-------------|----------------------------|--------------------------------|
| **Astro**   | Static site, components    | File-based routing, SSG        |
| **TypeScript** | Typing, props, tooling   | Strict mode                    |
| **TailwindCSS** | Styling, design system | Utility-first, design tokens   |
| **Motion One** | Animations              | Counters, reveals, hover       |

## i18n

- **Default locale:** English (EN).
- **Supported:** Spanish (ES).
- **Strategy:** Auto-detect browser language; fallback EN; manual switcher.
- **Implementation:** Astro-compatible (e.g. routing by locale or client-side switch); single component set.

## DevOps

- **Docker:** Dockerfile for production build; minimal image, static output.
- **Orchestration:** docker-compose.yml; assume Traefik as reverse proxy.
- **Config:** Environment variables for any runtime config; no secrets in repo.

## SEO & quality

- Meta tags, canonical, OpenGraph, Person schema (JSON-LD).
- Sitemap, robots.txt.
- WCAG AA basics; semantic HTML; Lighthouse-oriented (performance, a11y).

## Design

- **Font:** Modern sans (e.g. Inter).
- **Mode:** Light default; dark mode via class and Tailwind `dark:`.
- **Palette:** Neutral + one subtle accent; calm, professional.

---

Update this file when dependencies or major choices change.
