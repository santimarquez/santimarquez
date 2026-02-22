# Common Patterns

Reference patterns for Astro, Tailwind, and Motion One in this project.

## Astro

### Component with TypeScript props

```astro
---
interface Props {
  title: string;
  metric?: number;
}
const { title, metric } = Astro.props;
---
<section>
  <h2>{title}</h2>
  {metric != null && <span data-metric>{metric}</span>}
</section>
```

### Using i18n

- Load strings from `src/i18n/` based on current locale (from Astro middleware or page).
- Single set of components; pass translated strings as props or use a shared i18n helper.

### Layout usage

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title={title}>
  <slot />
</BaseLayout>
```

## Tailwind

### Design system tokens

- **Neutral palette:** `neutral-*` for text and surfaces.
- **Accent:** One subtle accent (e.g. `blue-600` or `indigo-600`) for CTAs and key highlights.
- **Spacing:** Prefer `space-y-*`, `gap-*`, consistent padding (e.g. `p-6`, `py-12`).

### Dark mode

- Use class strategy: `dark:` variants.
- Toggle a class on `<html>` or a wrapper; transition with `transition-colors`.

### Section container

```html
<section class="max-w-4xl mx-auto px-6 py-12 md:py-16">
  <!-- content -->
</section>
```

## Motion One

### Animated counter (hero metrics)

- Use Motion One to animate from 0 to value on scroll or mount.
- Keep duration short (e.g. 1–1.5s); ease out.

### Section reveal

- Animate opacity and optional slight Y on scroll-into-view.
- Subtle; avoid distracting motion.

### Hover / button feedback

- Short scale or opacity change on hover/focus.
- Respect `prefers-reduced-motion` when possible.

## SVG diagrams

- Clean lines; limited palette (stroke/fill from design system).
- Prefer inline SVG or components for consistency and theming.
- Keep diagrams simple; no decorative clutter.

## Copy

- Lead with impact: “Shipped X that led to Y” rather than “Responsible for X”.
- Use numbers: team size, scale, % improvement, time saved.
- Short bullets; recruiter-scannable.
