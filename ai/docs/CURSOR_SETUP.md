# Cursor Setup – Personal Leadership Site

This repo is set up for AI-driven development with Cursor.

## What’s configured

- **.cursorrules** – Project rules: Astro, TypeScript, Tailwind, Motion One, i18n (EN/ES), design system, copy rules, file locations.
- **CURSOR.md** – High-level context and project structure.
- **CURSOR_QUICK_START.md** – Short reference and example prompts.
- **ai/** – Context, docs, skills, agents, prompts.

## How Cursor uses it

1. **.cursorrules** is loaded automatically – follow it for stack, design, and conventions.
2. **CURSOR.md** gives quick context – structure, sections, run/deploy.
3. **ai/context/** is where to look for:
   - PROJECT_STRUCTURE.md – where files go
   - COMMON_PATTERNS.md – Astro/Tailwind/Motion patterns
   - RECENT_CHANGES.md – latest changes
   - TECH_STACK.md – versions and choices
   - CODING_STANDARDS.md – standards

## Suggested workflows

- **New section:** Check PROJECT_STRUCTURE and COMMON_PATTERNS; create component in `src/components/` and use in `src/pages/`.
- **i18n:** Add or edit strings in `src/i18n/`; keep one component set.
- **Design:** Stick to design system (minimal, neutral, one accent; light default, dark toggle).
- **After changes:** Update RECENT_CHANGES.md; add ai/docs/ entries for new features if needed.

## Quick prompts

- “Add a new hero metric with Motion One counter”
- “Implement the experience timeline with collapsible roles”
- “Add ES translations for the Technical Stack”
- “Create the Contact form with success state”
- “Add Person schema and improve meta tags for SEO”

See **CURSOR_QUICK_START.md** for more examples.
