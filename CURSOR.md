# Cursor Context – Personal Leadership Site

> **Note:** This file gives Cursor quick context. For full guidelines, see `.cursorrules`.

## 🎯 Quick Context

**Purpose:** Recruiter-optimized personal website for an Engineering Manager. Leadership positioning platform: minimalist, elegant, calm. Strong section headers, metrics, scannable layout, clear value proposition.

**Tech Stack:**
- **Astro** – Static site, TypeScript
- **TailwindCSS** – Styling, design system
- **Motion One** – Subtle animations (counters, section reveals, hover)
- **i18n** – EN (default) / ES; auto-detect + manual switch
- **Docker** – Production build; Traefik-ready

## 📁 Project Structure

```
santimarquez/
├── src/
│   ├── components/     # Reusable Astro/UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Astro routes
│   ├── content/        # Content and data
│   ├── styles/         # Global / Tailwind
│   ├── i18n/           # Translations (EN, ES)
│   └── ...
├── public/             # Static assets
├── ai/                 # AI development infrastructure
│   ├── context/        # Living project context
│   ├── docs/           # Feature and setup docs
│   ├── skills/         # Reusable AI patterns
│   ├── agents/         # Specialized workflows
│   ├── prompts/        # Prompt templates
│   └── README.md       # AI system guide
├── Dockerfile
├── docker-compose.yml
└── .dockerignore
```

## 📚 Essential Context Files

1. **`.cursorrules`** – Architecture, code style, design system, i18n, copy rules, file locations.
2. **`ai/README.md`** – How to use AI agents, skills, prompts, and context.
3. **`ai/context/`**
   - **PROJECT_STRUCTURE.md** – Detailed structure and conventions
   - **RECENT_CHANGES.md** – Latest changes
   - **COMMON_PATTERNS.md** – Astro/Tailwind/Motion patterns
   - **TECH_STACK.md** – Versions and choices
   - **CODING_STANDARDS.md** – Quick reference

## 🏗️ Site Sections (Reference)

1. **Hero** – Headline, subheadline, 3–4 metrics, CTAs (Contact, Download CV).
2. **Technical Stack** – Categories; grid; hover microinteractions.
3. **Experience Timeline** – Vertical; leadership impact first; collapsible roles.
4. **Projects** – e.g. AlertaCoches + This Website; clean SVG diagrams.
5. **Contact** – Form (name, email, message); accessible; success animation.

## 🎨 Design & UX

- Minimalist, calm, lots of whitespace; neutral palette; one subtle accent.
- Light default; dark mode toggle with smooth transition.
- Typography: modern (e.g. Inter). Motion One for counters and subtle transitions only.

## 🔍 SEO & Accessibility

- Meta, canonical, OpenGraph, Person schema, sitemap, robots.txt.
- WCAG AA basics; semantic HTML; focus and labels.

## 🐳 Run & Deploy

- **Local:** `npm run dev` (or project’s dev command).
- **Build:** Production build per `package.json`; output static.
- **Docker:** Use `Dockerfile` and `docker-compose.yml`; assume Traefik; env vars for config.

## 💡 Tips for AI Assistants

- Follow `.cursorrules` and design system (minimal, professional).
- Use `ai/context/COMMON_PATTERNS.md` for Astro/Tailwind/Motion patterns.
- Update `ai/context/RECENT_CHANGES.md` after notable changes.
- No lorem ipsum; use structured placeholders aligned with CV/positioning.

## 📞 Help & Resources

- **Full guidelines:** `.cursorrules`
- **AI guide:** `ai/README.md`
- **Context:** `ai/context/`

---

**Version:** 1.0  
**For:** Cursor AI Assistant  
**Also see:** `.cursorrules`, `ai/README.md`
