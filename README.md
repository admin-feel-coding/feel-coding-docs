# Feel Coding

Feel Coding is a software company focused on building well-structured, well-documented technology for teams that care about clarity and long-term ownership.

We work with clients across the full lifecycle of a software project — from early decisions through execution and ongoing operations. Our delivery model is **Decide (Discovery) → Execute (SDLC) → Operate**. Every engagement is designed to leave the client with complete understanding and control of what was built.

## Purpose of this repository

This repository is the central knowledge base for Feel Coding. It contains:

- Company principles and ways of working
- Delivery frameworks used across projects
- Templates for common documentation needs
- Diagrams that explain key processes
- A shared glossary of terms

This is not a codebase. It is a documentation and knowledge system meant to be read, shared, and reused.

## How to navigate

The documentation is organized into numbered sections:

| Folder | Contents |
|---|---|
| [00-company](docs/00-company/) | Who we are, what we believe, and how we operate |
| [01-frameworks](docs/01-frameworks/) | Delivery frameworks used in client engagements |
| [02-delivery](docs/02-delivery/) | Project lifecycle, pricing, and exit processes |
| [03-diagrams](docs/03-diagrams/) | Visual representations of key processes |
| [04-templates](docs/04-templates/) | Reusable document templates |
| [05-glossary](docs/05-glossary/) | Definitions of terms used across the company |

Start with `docs/00-company/start-here.md` for the recommended reading order. Then review the Company Bible and the D2E framework.

## Documentation site

The docs are also published as a searchable wiki built with [Docusaurus](https://docusaurus.io/).

**Live site:** https://admin-feel-coding.github.io/feel-coding-docs/

### Local development

```bash
cd website
npm install
npm start        # starts dev server at http://localhost:3000/feel-coding-docs/
```

### Production build

```bash
cd website
npm run build    # outputs to website/build/
npm run serve    # preview the production build locally
```

### Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions. Manual deploys are also supported via workflow dispatch.

To enable GitHub Pages for the first time, go to **Settings > Pages > Source** and select **GitHub Actions**.
