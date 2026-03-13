# Midwest Open Source Alliance Website

The official website for the Midwest Open Source Alliance (MOSA), built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

**Live site:** [midwestopensourcealliance.org](https://midwestopensourcealliance.org/)

## About MOSA

Midwest Open Source Alliance promotes the education, support and development of Drupal and related open source software within the Midwest Drupal community and beyond. We are an Illinois nonprofit and a federal 501(c)(3) tax-exempt organization (EIN 83-1560285).

## Development

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) v0.147.0 or later
- [Go](https://go.dev/) 1.21 or later (for Hugo modules)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/mosa-chicago/mosa.git
cd mosa

# Start the development server
hugo server --buildDrafts
```

The site will be available at `http://localhost:1313/`.

### Adding Content

Content is written in Markdown and lives in the `content/` directory:

```
content/
├── _index.md          # Home page
├── about/             # About MOSA
├── board/             # Board of Directors
├── bylaws/            # Organizational bylaws
├── contact/           # Contact page
├── docs/              # Documentation & Handbook
│   └── handbook/      # Community handbook
├── donate/            # Donation page
├── events/            # Sponsored events
├── meetings/          # Meeting schedule, agendas & minutes
│   ├── agendas/       # Meeting agendas
│   └── minutes/       # Meeting minutes
└── sponsor/           # Sponsor MOSA
```

To create a new page, add a Markdown file (e.g., `content/meetings/agendas/2026-01-15.md`) with front matter:

```markdown
---
title: "January 2026 Meeting Agenda"
date: 2026-01-15
---

## Agenda items...
```

### Building for Production

```bash
hugo --gc --minify
```

The built site will be in the `public/` directory.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch. See [`.github/workflows/hugo.yml`](.github/workflows/hugo.yml) for the workflow configuration.

## License

See [LICENSE](LICENSE) for details.
