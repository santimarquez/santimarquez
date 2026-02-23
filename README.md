# Santi Márquez — Personal Website

Production-ready, recruiter-optimized personal website for an Engineering Manager. Built with Astro, TypeScript, TailwindCSS, and Motion One. EN/ES i18n, dark mode, SEO, and Docker-ready for Traefik.

## Tech stack

- **Framework:** Astro (static)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Motion One
- **i18n:** Astro built-in (EN/ES), locale detection, manual switcher

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Root `/` redirects to `/en` or `/es` based on browser language (or stored preference).

## Production build

```bash
npm run build
```

Output is in `dist/`. Preview with:

```bash
npm run preview
```

## Docker

Build and run:

```bash
docker compose up --build
```

Site is served on [http://localhost:8080](http://localhost:8080) (port 80 inside the container).

### Deploy behind Traefik

1. Uncomment the Traefik labels in `docker-compose.yml` and set your domain in `Host(...)`.
2. Ensure the service is on the same network as Traefik.
3. Run `docker compose up -d`.

The container exposes port 80. No reverse proxy config is needed inside the container; Traefik handles HTTPS and routing.

## Project structure

```
src/
  components/   layout, sections, ui, diagrams
  data/         techStack, experience
  i18n/         en.json, es.json
  layouts/      MainLayout.astro
  pages/        index (redirect), en/index, es/index
  styles/       global.css
  utils/        i18n, schema (Person JSON-LD)
public/         favicon, robots.txt, sitemap.xml, cv/
```

## SEO

- Meta tags, canonical URL, Open Graph and Twitter Card using the profile picture as `og:image` (multi-platform social previews).
- JSON-LD Person schema in layout.
- Static `public/sitemap.xml` and `public/robots.txt`.

## CV

Place your PDF at `public/cv/SantiMarquez-CV.pdf` for the “Download CV” button.

## Environment

Optional: copy `.env.example` to `.env` and set `SITE_URL` if you need to override the site URL (e.g. for staging).

**Contact form (production):** For the contact form to send email when running in Docker/production, pass `MAIL_HOST`, `MAIL_USERNAME`, and `MAIL_PASSWORD` (and optionally `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME`) to the container. The repo’s `docker-compose.yml` uses `env_file: .env`, so ensure `.env` exists on the host where you run `docker compose` and contains those variables. **Use no leading spaces in variable names** (e.g. `MAIL_HOST=...` not ` MAIL_HOST=...`), or some parsers will use the space as part of the key.
