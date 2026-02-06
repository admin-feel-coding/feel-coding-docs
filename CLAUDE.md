# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **documentation repository** for Feel Coding. Raw docs live as Markdown/Mermaid under `docs/`. A Docusaurus site under `website/` publishes them as a searchable wiki.

## Repository structure

Docs are organized under `docs/` in numbered sections (`00-company`, `01-frameworks`, `02-delivery`, `03-diagrams`, `04-templates`, `05-glossary`). The numbering defines reading order and logical grouping.

Key files:
- `docs/00-company/company-bible.md` — single source of truth for how Feel Coding operates; takes precedence over all other docs
- `docs/01-frameworks/d2e-framework.md` — the D2E (Decide, Execute, Operate) delivery framework, central to how the company structures work

## Writing conventions

- **Tone:** Calm, professional, modern. No buzzwords, no marketing fluff.
- **Language:** Plain language over jargon. If a new engineer or client cannot understand it quickly, it needs rewriting.
- **Diagrams:** Use Mermaid format (`.mmd` files) in `docs/03-diagrams/`. Reference them from Markdown docs via relative links.
- **Cross-linking:** Documents should link to related docs using relative paths (e.g., `../01-frameworks/d2e-framework.md`).
- **Templates** in `04-templates/` are meant to be copied into new projects — keep them generic and self-contained.

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
