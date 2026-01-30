# Copilot / AI Agent Instructions

## Purpose
This repo is a minimal single-page static portfolio (folder: `portfolio/`). The site is plain HTML/CSS/JS (no build step). These notes tell an AI agent how to be immediately productive making content edits, small UX fixes, and managing deployment.

## Quick start ✅
- Run locally: `python -m http.server 8000` (also available via `npm start` script in `portfolio/package.json`).
- Open: http://localhost:8000 (site root serves the `portfolio/` folder).

## Where content lives (actionable edits) 🔧
- Main content data arrays: `portfolio/js/app.js`
  - `aboutText` — edit the About text.
  - `memberships` — list of membership objects (e.g., `{title:'ACM Member', org:'ACM', certUrl:'assets/certs/cert-acm.svg'}`).
  - `judging` — judging entries with `certImg` and sample `pics` arrays (images are client-only).
  - `publications` and `media` — arrays of link objects.
- Markup: `portfolio/index.html` — sections use IDs (`#about`, `#memberships`, `#judging`, `#publications`, `#media`) that the nav links target.
- Static assets: `portfolio/assets/certs/` and `portfolio/assets/images/`.
- Styling: `portfolio/css/styles.css` — small, global styles and modal CSS.

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