# Copilot / AI Agent Instructions

## Purpose
This repo is a minimal single-page static portfolio (folder: `portfolio/`). The site is plain HTML/CSS/JS (no build step). These notes tell an AI agent how to be immediately productive making content edits, small UX fixes, and managing deployment.

## Quick start ✅
- Install deps: `cd portfolio && npm ci`
- Run locally: `cd portfolio && npm run dev` (Vite dev server). Open the URL shown by Vite (usually `http://localhost:5173`).
- Build: `cd portfolio && npm run build` (outputs `portfolio/dist` for publishing).

## Where content lives (actionable edits) 🔧
- Main content data: `portfolio/src/data.ts` — edit `aboutText`, `memberships`, `judging`, `publications`, `media` arrays.
- React components: `portfolio/src/components/` (`About`, `Memberships`, `Judging`, `Publications`, `Media`).
- App entry: `portfolio/src/App.tsx` and `portfolio/src/main.tsx`.
- Static assets: `portfolio/assets/certs/` and `portfolio/assets/images/` (referenced from `data.ts`).
- Styling: `portfolio/src/styles.css` — global styles that mirror the original site.

## Runtime & UX patterns to respect ⚠️
- No backend: file `input` uploads in the judging modal are stored client-side only via `FileReader` (no persistence). If you add server-side storage, you must add a new API and update the README and deployments.
- Modal behavior: uses `aria-hidden` and closes when clicking outside or pressing the close button. Keep accessibility attributes and `rel="noopener"` on external links.
- Keep external links `target="_blank" rel="noopener"` (this pattern is used across `js/app.js`).

## Deployment & workflows 📦
- GitHub Pages deployment is automated by `.github/workflows/deploy.yml`:
  - Trigger: push to `main` branch.
  - Action: `peaceiris/actions-gh-pages@v3` publishes `./portfolio` to GitHub Pages.
- To change the branch or publish path, edit `.github/workflows/deploy.yml` accordingly.
- Check Actions logs on the repository page to troubleshoot failed deploys.

## Project-specific conventions & small rules 📐
- Single-file content model: prefer updating arrays in `js/app.js` for content changes rather than editing HTML markup directly.
- Lightweight, no tooling: there is no bundler, test runner, or CI beyond the Pages deploy workflow—keep changes small and declarative.
- If adding new JS/CSS files, register them in `index.html` and update README with manual test steps.

## Example edits (copy/paste) 💡
- Add a new membership:
  ```js
  memberships.push({title:'New Org Member', org:'New Org', certUrl:'assets/certs/new-cert.svg'})
  ```
- Add a publication:
  ```js
  publications.push({title:'Paper X', citation:'Author, Title, Venue, 2025', url:'https://doi.org/...'});
  ```

## Troubleshooting notes 🔍
- 404 on Pages site: confirm workflow ran and `publish_dir: ./portfolio` is correct, and `main` branch was pushed.
- Local dev: if a linked asset 404s, verify relative path under `portfolio/assets` and that file exists.

## What not to assume 🚫
- There are no unit or integration tests in this repo. Do not add test instructions unless you also add test tooling and document it here.
- Secret management: workflow uses the automatically provided `GITHUB_TOKEN`; do not commit secrets into the repo.

---
If anything above is unclear or you want more examples (e.g., CSS tweaks, modal accessibility improvements, or adding CI tests), tell me which area to expand. ✅