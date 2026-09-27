# Asif Vudi — personal landing page

"Build the software. Automate the work." A founder-led landing page for custom
software and business process automation, aimed at business owners in the UK
and Ireland.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # content + design-discipline checks (no test framework needed)
npm run build   # static export -> out/
```

The build is a static export (`output: "export"` in `next.config.ts`), so
`out/` deploys to any static host — Vercel, Netlify, Cloudflare Pages, S3, or
the dexevel.com server as plain files. `npm start` is not needed; serve `out/`.

## Stack

- Next.js (App Router) + TypeScript, React Server Components only — zero
  client-side JavaScript ships.
- Plain CSS with a locked token system (`tokens.css`). No CSS framework, no UI
  library, no animation library. `app/globals.css` imports the tokens and
  references colours/fonts by token name only.
- Fonts via `next/font` (self-hosted at build, `display: swap`): Space Grotesk
  (display), Geist (body), Geist Mono (outlier — wordmark + hero figures only).

## Structure

| Path | What it is |
| --- | --- |
| `app/layout.tsx` | Metadata + Open Graph, JSON-LD (Person), nav (N9), footer (Ft2) |
| `app/page.tsx` | The page: hero, problem, what I build, approach, process, work, about, final CTA |
| `app/globals.css` | Page CSS (Hallmark stamp at top) |
| `tokens.css` | Design tokens — colour, type, space, rules, motion |
| `scripts/check.mjs` | `npm test`: banned words, CTA strings, structure, design discipline |
| `docs/cro-prd-critique.md` | CRO scorecards (pre/post) from the PRD critic pass |

## Content rules (do not break)

- Every project fact traces to `Asif_Vudi_Master_CV` / the founder profile.
  Never invent clients, metrics, testimonials, or results. The testimonial slot
  in `app/page.tsx` is marked as a placeholder — fill it only with
  client-approved quotes.
- Banned words (PRD voice rules): delve, elevate, streamline, synergy,
  seamlessly, tailored solutions, cutting-edge, digital transformation, unlock
  your potential, leverage the power of AI, end-to-end. `npm test` enforces this.
- Market framing is UK + Ireland. Asif's location is deliberately not stated.

## Before deploying

1. `CONTACT_URL` appears in `app/layout.tsx` and `app/page.tsx` — currently
   `https://www.dexevel.com/contact-us`. Update if the contact destination
   changes.
2. `metadataBase` in `app/layout.tsx` is `https://www.dexevel.com`. Set the
   final canonical URL, and add an `og:image` (1200×630) once a deploy URL
   exists — the slot is intentionally empty rather than faked.
3. Run `npm test && npm run build`.
