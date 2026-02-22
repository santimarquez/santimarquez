# Project Structure

Last updated: 2026-02-22

## Overview

This is a static personal leadership site built with Astro. Recruiter-optimized; minimalist, elegant, calm.

## Repository Layout

```
santimarquez/
├── src/
│   ├── components/     # Reusable Astro/UI components
│   ├── layouts/        # Base and section layouts
│   ├── pages/          # Astro file-based routes
│   ├── content/        # Content, data, copy (or content collections)
│   ├── styles/         # Global CSS, Tailwind entry
│   └── i18n/           # Translations (EN, ES) – Astro-compatible
├── public/             # Static assets (images, fonts, favicon)
├── ai/                 # AI context, docs, skills, agents, prompts
├── astro.config.mjs    # Astro config (when project is bootstrapped)
├── tailwind.config.mjs # Tailwind config
├── tsconfig.json       # TypeScript config
├── Dockerfile          # Production image
├── docker-compose.yml  # Local/production services
├── .dockerignore
├── .cursorrules        # Cursor guidelines
├── CURSOR.md           # Cursor context
└── CURSOR_QUICK_START.md
```

## Section Mapping

| Section              | Suggested location                    |
|----------------------|---------------------------------------|
| Hero                 | `src/components/` + `src/pages/`     |
| Technical Stack      | `src/components/` (grid, categories)  |
| Experience Timeline  | `src/components/` (timeline, collapsible) |
| Projects             | `src/components/` + `src/content/`   |
| Contact              | `src/components/` (form, success state) |
| i18n                 | `src/i18n/` (EN, ES)                  |

## Conventions

- **Components:** Colocate by feature or section; use TypeScript props.
- **Layouts:** One base layout; optional section wrappers in `layouts/`.
- **Pages:** Astro file-based routing; use layouts and i18n.
- **Content:** Prefer `src/content/` or i18n JSON/TS; no lorem ipsum.
- **Diagrams:** Clean SVG in `src/components/` or `public/`; minimalist, theme-consistent.

## AI Folder

- **ai/context/** – Living docs (this file, RECENT_CHANGES, COMMON_PATTERNS, TECH_STACK, CODING_STANDARDS).
- **ai/docs/** – Feature docs, CURSOR_SETUP.
- **ai/skills/** – Reusable patterns for Cursor.
- **ai/agents/** – Workflow definitions (optional).
- **ai/prompts/** – Prompt templates.
