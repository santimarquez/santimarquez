# AI Agents

Optional specialized workflows for this repo (e.g. documentation, code review, SEO checks).

## Purpose

Agents define multi-step workflows that Cursor can follow, such as:
- Documentation: ensure RECENT_CHANGES and ai/docs are updated
- Code review: check design system, a11y, SEO
- SEO: validate meta, schema, sitemap, robots

## Usage

When agent files exist, invoke in Cursor chat, e.g.:
- “Run the documentation agent for this change”
- “Use the SEO agent to check the site”

## Adding agents

1. Create `ai/agents/<name>-agent.md`.
2. Include: purpose, triggers, steps, examples.
3. List the agent in this README.

## Reference

- Main AI guide: `ai/README.md`
- Context: `ai/context/`
