# AI-Powered Development – Personal Leadership Site

This folder contains AI-related assets for developing this repository with Cursor and other AI assistants.

## What’s in This Folder

### [context/](context/)
Living project knowledge:
- **PROJECT_STRUCTURE.md** – Folder structure, conventions, where things live
- **RECENT_CHANGES.md** – Latest changes and decisions
- **COMMON_PATTERNS.md** – Astro, Tailwind, Motion One patterns
- **TECH_STACK.md** – Versions and tech choices
- **CODING_STANDARDS.md** – Quick reference standards

### [docs/](docs/)
Project documentation:
- **CURSOR_SETUP.md** – Cursor setup and usage for this repo
- Feature and deployment docs (timestamped when useful)

### [skills/](skills/)
Reusable patterns for common tasks:
- Astro component patterns
- Tailwind / design-system usage
- i18n and copy patterns
- SVG diagram style

### [agents/](agents/)
Specialized workflows (when added):
- e.g. documentation, code review, SEO checks

### [prompts/](prompts/)
Prompt templates:
- Code review, documentation, copy transformation, etc.

## Quick Start

### 1. Context

Before changing code, check:
- **.cursorrules** – Rules and design system
- **ai/context/PROJECT_STRUCTURE.md** – Where to put files
- **ai/context/COMMON_PATTERNS.md** – How to implement patterns

### 2. Skills

Ask Cursor to apply a skill, e.g.:
- “Use the Astro component pattern for a new section”
- “Follow the design system for this card”

### 3. After Changes

- Update **ai/context/RECENT_CHANGES.md** for notable changes
- Add or update **ai/docs/** when you add features or change architecture

## Cursor Integration

- **.cursorrules** – Loaded by Cursor; defines stack, design system, i18n, file locations
- **CURSOR.md** – High-level context and structure
- **ai/context/** – Referenced for structure, patterns, and recent work

## Project Conventions (Summary)

- **Stack:** Astro, TypeScript, TailwindCSS, Motion One
- **i18n:** EN default, ES supported; one component set, no unnecessary duplication
- **Design:** Minimal, calm, neutral palette, one accent; light default, dark toggle
- **Copy:** Impact-first, quantified, leadership-focused; no lorem ipsum
- **SEO & a11y:** Meta, schema, sitemap, robots; WCAG AA basics

## Navigation

| Goal | Where to look |
|------|----------------|
| Where does X go? | `ai/context/PROJECT_STRUCTURE.md` |
| How do we do Y? | `ai/context/COMMON_PATTERNS.md` |
| What changed recently? | `ai/context/RECENT_CHANGES.md` |
| Rules and standards | `.cursorrules`, `ai/context/CODING_STANDARDS.md` |
| Cursor setup | `ai/docs/CURSOR_SETUP.md` |

## Maintenance

- Keep **RECENT_CHANGES.md** updated after meaningful changes
- Add patterns to **COMMON_PATTERNS.md** as they repeat
- Update **TECH_STACK.md** when dependencies or versions change

---

**Version:** 1.0  
**For:** Personal leadership site (Astro, TypeScript, Tailwind, Motion One, i18n)  
**Also see:** `.cursorrules`, `CURSOR.md`, `CURSOR_QUICK_START.md`
