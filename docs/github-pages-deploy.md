# GitHub Pages deployment

This repository is maintained as a GitHub Pages Astro site for
`BMProjects/BMProjects.github.io`.

## What must be committed

- `.github/workflows/deploy.yml`: GitHub Actions build and deploy workflow.
- `.nvmrc`, `package.json`, `package-lock.json`: Node version and dependency lock.
- `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`: site build configuration.
- `src/`: page layout, components, content collections, publications, grants, projects, and profile data.
- `public/`: favicon and project preview images.
- `docs/`: lightweight maintenance notes.

## What should not be committed

- `node_modules/`: recreated by `npm ci`.
- `dist/`: recreated by `npm run build` and uploaded by the workflow.
- `.astro/`: local Astro cache.
- `.claude/`, editor caches, temporary files, and local-only notes.
- `materials/`: source CV, BibTeX, and working documents used to prepare content.

## Local development

```bash
cd /mnt/Data/Dev/PersonalPage
nvm use
npm install
npm run dev
```

Local URL: <http://localhost:4321/>

## Build checks

```bash
cd /mnt/Data/Dev/PersonalPage
nvm use
npm run build
```

This build checks the root-path output used by `https://bmprojects.github.io/`.

## One-time GitHub Pages settings

In `BMProjects/BMProjects.github.io`:

1. Go to `Settings` -> `Pages`.
2. Set `Build and deployment` -> `Source` to `GitHub Actions`.
3. Keep the default branch as `main`.

After each push to `main`, open `Actions` and wait for
`Deploy Astro site to GitHub Pages`.

Default URL:

```text
https://bmprojects.github.io/
```

## Publish to the organization homepage repository

```bash
git clone git@github.com:BMProjects/BMProjects.github.io.git /tmp/BMProjects.github.io
cd /tmp/BMProjects.github.io
git switch main

rsync -a --delete \
  --exclude .git \
  --exclude node_modules \
  --exclude dist \
  --exclude .astro \
  --exclude .claude \
  --exclude materials \
  --exclude DESIGN.md \
  /mnt/Data/Dev/PersonalPage/ \
  /tmp/BMProjects.github.io/

git status --short
git add .
git commit -m "Replace sample site with Xiang Ma personal homepage"
git push origin main
```

## Future maintenance

- Profile and research directions: edit `src/data/profile.ts`.
- Projects: edit files in `src/content/projects/`; add preview images to `public/images/projects/`.
- Publications: edit files in `src/content/publications/`.
- Grants: edit files in `src/content/grants/`.
- Visual style: edit `src/styles/global.css` and component files in `src/components/`.
- Before pushing: run `npm run build`.

## Repository scope

This repository is GitHub Pages-only. Keep source files, content files, static
images, and the Pages workflow. Generated output and local working files stay
outside the repository.
