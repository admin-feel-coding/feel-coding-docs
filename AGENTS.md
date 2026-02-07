# Repository Guidelines

## Project Structure & Module Organization
- `website/docs/` holds the public documentation used by the Docusaurus site.
- `docs-archive/` contains legacy documentation and is not the source of truth.
- Core references (public):
  - `website/docs/company/company-bible.md` is the source of truth for how Feel Coding operates.
  - `website/docs/framework/d2e.md` describes the D2E (Decide, Execute, Operate) framework.
- Content is Markdown (`.md`). Mermaid diagrams live alongside the docs.

## Build, Test, and Development Commands
This is a documentation-only repository with no build system, tests, or runtime. Typical workflows are:
- Edit Markdown files directly (for example, `website/docs/delivery/` content).
- Preview Mermaid diagrams using GitHub’s renderer or a Mermaid-capable viewer.

## Coding Style & Naming Conventions
- Follow the writing conventions in `CLAUDE.md`.
- Tone: calm, professional, modern. Avoid buzzwords and marketing language.
- Prefer plain language; rewrite anything that a new engineer or client would struggle to understand.
- Use Mermaid format for diagrams in Markdown files.
- Keep templates in `website/docs/templates/` generic and self-contained so they can be copied into other projects.

## Testing Guidelines
There are no tests or automated checks in this repository.

## Commit & Pull Request Guidelines
No Git history or repository-specific commit/PR conventions are available in this workspace. If this repo is managed elsewhere, follow the team’s standard commit and PR process.

## Agent-Specific Instructions
Before making changes, review `CLAUDE.md` for repository-specific writing and documentation rules.
