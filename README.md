# Asif Vudi — personal landing page

"Build the software. Automate the work."

One-page personal consultancy site for Asif Vudi: custom software, workflow
automation, and AI for service businesses in the UK and Ireland. Founder-led,
conversation-first — the page's job is to start a conversation, not to book a
demo.

## Stack

Pure HTML, CSS, and a little static metadata. No framework, no bundler, no
build toolchain — this follows the standing stack rule for client-facing sites
(the repo history of `github.com/deXevel/landing-page` records the decision).
The three npm scripts are thin Node conveniences with **zero dependencies**.

## Prerequisites

- Node.js 18 or newer — only for the `npm run dev` / `npm run build` /
  `npm test` scripts. The page itself is static and needs nothing installed.

## Commands

```bash
npm install       # optional — the project has zero dependencies
npm run dev       # serves the site at http://localhost:4173 (PORT=… to change)
npm run build     # runs the full check suite, then writes the deployable copy to out/
npm test          # content + design-discipline checks (no test framework)
npm run qa        # release QA: keyboard, contrast, responsive, metadata (needs Chrome or Edge)
```

`npm run build` refuses to write `out/` if any check fails.

## Where things live

| Path | What it is |
|---|---|
| `index.html` | the whole page — all section copy lives here |
| `tokens.css` | **locked design tokens** — every colour, font, type step, spacing step, rule, radius, easing, duration |
| `styles.css` | page styles; consumes tokens by name only (no inline values) |
| `fonts.css` + `fonts/` | self-hosted font faces (Space Grotesk display, Geist body, Geist Mono outlier) |
| `favicon.svg` | site mark |
| `og-image.png` | 1200×630 share card for Open Graph / Twitter (rendered from `scripts/og-card.html`) |
| `scripts/check.mjs` | the test suite (`npm test`) |
| `scripts/qa.mjs` | release QA harness (`npm run qa`) — keyboard, contrast, responsive, metadata |
| `scripts/og-card.html` | source of the share card; regenerate `og-image.png` with headless Chrome |
| `scripts/serve.mjs` | zero-dependency dev server (`npm run dev`) |
| `scripts/build.mjs` | validation build (`npm run build`) |
| `scripts/deploy.mjs` | publishes `out/` to the `gh-pages` branch (`npm run deploy`) |
| `out/` | build output (gitignored) — a clean deployable copy |

### Design tokens

All design values are CSS variables in `tokens.css`. To change colour, type,
spacing, radii, or motion: edit the token there, never a raw value in
`styles.css`. The visual system (near-black surfaces, teal signal, geometric
display sans) is inherited from the accepted build — treat `tokens.css` as the
locked system for this site.

### Where to update copy

Everything visible is in `index.html`, in PRD order:
hero (`#hero-title`) · problem (`#problem-title`) · what I build
(`#build-title`) · approach (`#approach-title`) · process (`#process-title`) ·
mid-page CTA · portfolio (`#things-ive-built`) · about (`#about-title`) ·
questions — risk reversal + FAQ (`#faq-title`) · final CTA (`#final-title`).

## Content rules (non-negotiable)

Every claim on the page traces to the vault sources (Master CV, PRD v1,
LinkedIn Profile, Service Strategy) via the two research inputs in this
repository: `content-pack.md` and `research-brief-prd-cro-audit.md`.

- Never invent clients, testimonials, metrics, revenue, or results.
- Unverified figures are marked with the `Details to be confirmed` placeholder
  (`.tbc`) — replace only with client-approved data.
- The testimonial slot is an HTML comment inside the portfolio section; fill it
  only with client-approved quotes.
- Do not state the founder's location. Market framing is UK + Ireland only.
- No degree claim.

### Banned words

The PRD's banned-word list is enforced by `npm test` section 1 against the
page-copy files (`index.html`, `styles.css`, `tokens.css`, `fonts.css`,
`README.md`). `scripts/check.mjs` assembles the list from string fragments,
so a literal `grep -ri` of the whole repo for the flagged tokens returns
nothing — test data included. The two research inputs at the repository root
(`content-pack.md`, `research-brief-prd-cro-audit.md`) quote flagged words
deliberately (marked in the research brief) and are never served as page
copy.

## CTA map

| Label | Target |
|---|---|
| Primary — "Tell me what you're trying to improve" (hero + mid-page repeat) | https://www.dexevel.com/contact-us |
| Secondary — "See what I build" | `#things-ive-built` (portfolio) |
| Final — "Start a conversation" (also the header button) | https://www.dexevel.com/contact-us |
| Booking fallback | https://cal.com/dexevel/15min |
| Email fallback | mailto:asifvudi@gmail.com |

## Deployment

The repo root is directly deployable to any static host; `npm run build`
produces the same tree under `out/`. Asset paths are relative, so the site
works at any base path. The canonical repository is
`github.com/deXevel/landing-page` (main).

### GitHub Pages (`gh-pages` branch)

The live site is served from the `gh-pages` branch at
`https://dexevel.github.io/landing-page/`. Deploy with:

```bash
npm run deploy                    # optional message: npm run deploy "deploy: <what changed>"
```

`scripts/deploy.mjs` runs the validation build (which writes `out/`), clones
the `gh-pages` branch into a temp directory, replaces its contents with
`out/` (keeping `.nojekyll`), commits, and pushes. It needs git push
credentials for `github.com/deXevel/landing-page`. Note that `npm run build`
wipes `out/` on every run — `out/` is build output only, never a checkout.
No `basePath` is needed — plain files with relative asset paths work at any
base.

### Share card (`og:image`)

`og-image.png` (1200×630) is a real asset rendered from `scripts/og-card.html`
with the site's own fonts and design tokens. The Open Graph and Twitter tags
point at `https://www.dexevel.com/og-image.png`, matching the canonical URL —
make sure the file is published at that path when deploying (it also ships
with the site itself at `https://dexevel.github.io/landing-page/og-image.png`).
To regenerate it
after a design change (headless Chrome or Edge):

```bash
chrome --headless=new --screenshot=og-image.png --window-size=1200,630 --hide-scrollbars scripts/og-card.html
```

## Release QA

`npm run qa` drives headless Chrome (or Edge) over CDP — zero npm
dependencies — and verifies the release criteria:

- **Keyboard**: real Tab-key walkthrough of every interactive element in
  document order, a visible focus ring on every stop, the skip link jumps to
  `#main`, and the anchor CTA reaches `#things-ive-built`.
- **Contrast**: WCAG AA ratios computed from the tokens in `tokens.css` for
  every text/background pair used by body and CTA text.
- **Responsive**: 320 / 375 / 414 / 768 / 1280 px — no horizontal overflow,
  display headers not italic, CTAs inside the viewport.
- **Metadata**: title, meta description, canonical, full Open Graph + Twitter
  card tags (founder + tagline), favicon, JSON-LD.

`npm test` is the content and design-discipline suite; run both before
release.
