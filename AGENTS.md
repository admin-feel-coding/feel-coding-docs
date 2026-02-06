# Repository Guidelines

## Project Structure & Module Organization
- `docs/` holds all documentation, organized by numbered sections that define reading order: `00-company`, `01-frameworks`, `02-delivery`, `03-diagrams`, `04-templates`, `05-glossary`.
- Core references:
  - `docs/00-company/company-bible.md` is the source of truth for how Feel Coding operates.
  - `docs/01-frameworks/d2e-framework.md` describes the D2E (Decide, Execute, Operate) framework.
- Content is Markdown (`.md`) and Mermaid diagrams (`.mmd`). Diagrams live in `docs/03-diagrams/`.

## Build, Test, and Development Commands
This is a documentation-only repository with no build system, tests, or runtime. Typical workflows are:
- Edit Markdown files directly (for example, `docs/02-delivery/` content).
- Preview Mermaid diagrams using GitHub’s renderer or a Mermaid-capable viewer (see `docs/03-diagrams/README.md`).

## Coding Style & Naming Conventions
- Follow the writing conventions in `CLAUDE.md`.
- Tone: calm, professional, modern. Avoid buzzwords and marketing language.
- Prefer plain language; rewrite anything that a new engineer or client would struggle to understand.
- Use Mermaid format for diagrams and reference them from Markdown using relative links (for example, `../03-diagrams/d2e-overview.mmd`).
- Keep templates in `docs/04-templates/` generic and self-contained so they can be copied into other projects.

## Testing Guidelines
There are no tests or automated checks in this repository.

## Commit & Pull Request Guidelines
No Git history or repository-specific commit/PR conventions are available in this workspace. If this repo is managed elsewhere, follow the team’s standard commit and PR process.

## Agent-Specific Instructions
Before making changes, review `CLAUDE.md` for repository-specific writing and documentation rules.
