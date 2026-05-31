# Xiang Ma Personal Homepage

Astro-based personal academic homepage for `BMProjects/BMProjects.github.io`.

## Edit Content

- Profile and research directions: `src/data/profile.ts`
- Projects: `src/content/projects/`
- Publications: `src/content/publications/`
- Grants: `src/content/grants/`
- Project preview images: `public/images/projects/`

## Develop Locally

```bash
nvm use
npm install
npm run dev
```

Local URL: <http://localhost:4321/>

## Check Before Publishing

```bash
npm run build
```

## Publish

Push to `main`. GitHub Actions builds and deploys the site with GitHub Pages.

Expected Pages URL:

```text
https://bmprojects.github.io/
```
