# Personal Portfolio (single-page)

This is a minimal single-page portfolio scaffold. Sections:

- About
- Memberships (tiles linking to certificates)
- Judging (click to open modal with certificate + upload local pictures)
- Publications (citations link to papers)
- Media articles

Run locally (Vite + Node.js):

```bash
cd portfolio
npm ci
npm run dev
```

Then open the dev URL printed by Vite (usually `http://localhost:5173`).

You can customize content in `src/data.ts` and the React components under `src/components/`.

Sample assets were added in `assets/`:

- `assets/certs/` contains example SVG certificates (cert-acm.svg, cert-ieee.svg, cert-judging1.svg, cert-judging2.svg).
- `assets/images/` contains placeholder images (sample-art1.svg, sample-art2.svg).

Update the paths in `js/app.js` to point to your real certificates and images.

## GitHub Pages deployment

1. Create a GitHub repository and push this project (root contains the `.github/` workflow created here).

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

2. The workflow `.github/workflows/deploy.yml` will run on pushes to `main` and publish the `portfolio/` folder to GitHub Pages using the `gh-pages` branch.

3. After the workflow completes, visit `https://<your-user>.github.io/<your-repo>/portfolio/` (or configure Pages to point to the `gh-pages` branch root) to view the site. For a user/organization site, adjust routing accordingly.

Notes:
- The workflow uses the automatically provided `GITHUB_TOKEN`; no manual secret is needed.
- If your default branch is not `main`, edit the workflow trigger branch accordingly.
