# Xiang Ma Personal Homepage

Astro-based personal academic homepage published from
`BMProjects/BMProjects.github.io`.

Production URL:

```text
https://bmprojects.github.io/
```

This repository is intentionally GitHub Pages-only. It does not contain Docker,
nginx, PM2, cloud-server scripts, or generated `dist/` output.

## Project Structure

- `.github/workflows/deploy.yml`: GitHub Pages build and deploy workflow.
- `src/pages/`: Astro pages.
- `src/components/`: shared page components.
- `src/data/profile.ts`: bio, courses, and supervision data.
- `src/data/research.ts`: research groups and the shared software topic taxonomy.
- `src/content/projects/`: project cards and GitHub links.
- `src/content/publications/`: publication entries.
- `src/content/grants/`: grant entries.
- `public/images/projects/`: project preview images.
- `docs/`: local maintenance notes.

Local-only source materials, such as CV and BibTeX working files, can stay in
`materials/`; that directory is ignored by Git.

## Local Development

```bash
nvm use
npm install
npm run dev
```

Local URL:

```text
http://localhost:4321/
```

## Check Before Publishing

```bash
npm run build
```

The site is built for the root path, so no `SITE_BASE` setting is needed.

## Publish

Push to `main`. GitHub Actions builds the Astro site and deploys it through
GitHub Pages.

```bash
git status
git add .
git commit -m "Update homepage content"
git push origin main
```

In GitHub, Pages should use:

```text
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
```

## Common Updates

- Update research groups and software topics: edit `src/data/research.ts`.
- Choose homepage publications: set `featured: true` in the publication entries; selected papers are grouped by year.
- The homepage keeps the original academic layout. All four software groups are
  shown directly; only the complete paper list stays in a native expandable
  section. `/cv/` provides a printable CV; `/projects/` remains available as a
  direct software index.
- Add or revise a project: edit `src/content/projects/*.md`.
- Add project images: put files under `public/images/projects/` and reference them from the project markdown.
- Update publications: edit `src/content/publications/*.md`.
- Update grants: edit `src/content/grants/*.md`.
- Adjust visual design: edit `src/styles/global.css` and files in `src/components/`.
