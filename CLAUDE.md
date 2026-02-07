# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **documentation repository** for Feel Coding. Public docs live under `website/docs/`. A Docusaurus site under `website/` publishes them as a searchable wiki. Legacy content is archived in `docs-archive/`.

## Repository structure

Public docs are organized under `website/docs/` in topic folders. Legacy docs remain in `docs-archive/` and should not be edited unless explicitly requested.

Key files:
- `website/docs/company/company-bible.md` — single source of truth for how Feel Coding operates; takes precedence over all other docs
- `website/docs/framework/d2e.md` — the D2E (Decide, Execute, Operate) delivery framework, central to how the company structures work

## Writing conventions

- **Tone:** Calm, professional, modern. No buzzwords, no marketing fluff.
- **Language:** Plain language over jargon. If a new engineer or client cannot understand it quickly, it needs rewriting.
- **Diagrams:** Use Mermaid code blocks inside Markdown files under `website/docs/`.
- **Cross-linking:** Documents should link to related docs using relative paths (e.g., `../framework/d2e.md`).
- **Templates** in `website/docs/templates/` are meant to be copied into new projects — keep them generic and self-contained.

## Content principles (from Company Bible)

- Documentation is a deliverable, not an afterthought.
- Clarity over cleverness.
- Simplicity by default — every layer of complexity must earn its place.
- Do not invent tools, products, or services. Focus on structure, principles, and clarity.

## Docusaurus site (website/)

The `website/` directory contains a Docusaurus v3 site (Node 20, ESM config).

### Commands

```bash
cd website
npm install          # install dependencies
npm start            # dev server at http://localhost:3000/feel-coding-docs/
npm run build        # production build → website/build/
npm run serve        # preview production build locally
```

### Key files

- `website/docusaurus.config.js` — site config, GitHub Pages deployment settings, Mermaid + local search setup
- `website/sidebars.js` — manual sidebar definition (Home, Framework, Delivery)
- `website/docs/` — wiki content (Markdown with Mermaid code blocks)
- `website/static/img/` — static images referenced from docs
- `.github/workflows/deploy-docs.yml` — CI/CD to GitHub Pages on push to `main`

### Mermaid in docs

Use fenced code blocks with the `mermaid` language tag inside any `.md` file under `website/docs/`. The `@docusaurus/theme-mermaid` plugin renders them automatically.

### Deployment

Automatic via GitHub Actions on push to `main`. Uses `actions/deploy-pages@v4`. Requires GitHub Pages source set to "GitHub Actions" in repo settings.
