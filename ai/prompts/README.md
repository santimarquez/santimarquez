# Prompts

Prompt templates for consistent AI assistance.

## Purpose

Templates for:
- Code review (Astro, Tailwind, a11y, SEO)
- Copy transformation (CV → impact statements, metrics)
- Documentation (feature docs, RECENT_CHANGES)
- Diagram description (clean SVG, minimalist)

## Usage

In Cursor, reference a prompt by name or path, e.g.:
- “Use the code-review prompt for this component”
- “Apply the copy transformation rules to this section”

## Adding prompts

1. Create `ai/prompts/<name>.md`.
2. Include: context, task, requirements, format, example if helpful.
3. Mention the prompt in this README.

## Reference

- Copy rules: `.cursorrules` (Copy Rules section)
- Patterns: `ai/context/COMMON_PATTERNS.md`
