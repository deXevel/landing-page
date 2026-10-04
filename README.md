# Asif Vudi — personal landing page

"Build the software. Automate the work." A founder-led landing page for custom
software and business process automation, aimed at business owners in the UK
and Ireland.

## Run it

No build step, no dependencies. Open `index.html` in a browser, or serve the
folder with any static server:

```bash
python -m http.server 8000   # http://localhost:8000
npm test                     # content + design-discipline checks (node only)
```

The repo root IS the deployable site. `index.html`, `styles.css`, `tokens.css`,
`fonts.css`, and `fonts/` go to any static host — GitHub Pages, Netlify,
Cloudflare Pages, S3, or the dexevel.com server — as plain files. All asset
links are relative, so it works at any base path.

## Stack

- Pure HTML + CSS. Zero frameworks, zero client-side JavaScript, zero build
  step (standing rule: client-facing sites are plain HTML/CSS/JS).
- Plain CSS with a locked token system (`tokens.css`). No CSS framework, no UI
  library, no animation library. `styles.css` references colours/fonts by
  token name only.
- Fonts self-hosted in `fonts/` (`fonts.css`): Space Grotesk (display), Geist
  (body), Geist Mono (outlier — wordmark + hero figures only), each with
  metric-matched local fallbacks. No CDN.

## Structure

- `index.html` — the whole page: hero, problem, what I build, approach,
  process, portfolio, about, final CTA. Metadata + Open Graph + JSON-LD in
  `<head>`.
- `tokens.css` — design tokens (colour, type scale, space, rules, motion).
- `styles.css` — all component styles (hallmark Split Studio macrostructure).
- `fonts.css` + `fonts/` — self-hosted font faces.
- `scripts/check.mjs` — `npm test`: banned words, CTA hierarchy, document
  structure, stack discipline (no framework, no JS), hallmark design gates,
  responsive affordances, repo hygiene.
- `docs/cro-prd-critique.md` — CRO critique scorecard (PRD-mode pass before
  the first line of code).

## Deploy notes

- `out/` is a leftover checkout of the `gh-pages` branch from the previous
  Next.js deployment. It is stale — redeploy by copying the static files to
  the `gh-pages` branch (no `.nojekyll`/`basePath` concerns with plain files,
  though keeping `.nojekyll` is harmless).
- Source of truth: `C:\Users\Asif\Projects\landing-page`
  (github.com/deXevel/landing-page).
