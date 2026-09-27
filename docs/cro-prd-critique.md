# CRO Review — PRD mode (critic beat)

Artifact: Personal Landing Page PRD v1 (`Personal Landing Page PRD v1.md`, vault)
Run: 2026-09-28, before any code was written (per kanban card t_a4d96d2d).
Skill: cro-review v1.0.0, PRD mode.

## Initial assessment

- Page type: personal landing page (founder-led consultancy, custom software + automation + AI).
- Primary conversion goal: conversation start (contact). Secondary: credibility read (portfolio).
- Audience/traffic: UK + Ireland business owners, founders, operators with manual processes.
  Arrives from LinkedIn profile, referrals, cold outreach — mixed cold/warm, low tech literacy.

## Scorecard (pre — the PRD as written)

| # | Dimension | Score | Evidence |
|---|-----------|-------|----------|
| 1 | Value proposition clarity | 4/5 | Core message "You don't need to know whether you need software, automation, or AI" (L58) is outcome-first and differentiated. Deduct: hero plan (L74) carries headline + CTAs but never says *who he helps* or names the problems in the fold — the 10-second test (L107) is asserted as a goal, not designed into the hero. |
| 2 | Headline effectiveness | 4/5 | "Build the software. Automate the work." — 6 words, concrete verbs, names both service sides. Deduct: message match with the LinkedIn angle "Your Process, My Scale" is loose; two different value stories for the same visitor. |
| 3 | CTA placement, copy, hierarchy | 4/5 | Explicit 3-level hierarchy with value-carrying copy: "Tell me what you're trying to improve" (L74), "Start a conversation" (L81). Strong. Deduct: no CTA destination is named anywhere in the PRD — a build-blocking gap the implementer must resolve. |
| 4 | Visual hierarchy / scan logic | 4/5 | Section order (L72–81) reconstructs as an argument from headers alone: problem → what I build → approach → process → proof → about → CTA. Deduct: proof arrives late; no "who this is for" signal until the problem list. |
| 5 | Trust signals and social proof | 3/5 | "Never invent clients, metrics, revenue, testimonials, or results" (L85) is correct discipline — but the page plan places no proof *near CTAs*, and the strongest verifiable proof (live scanner at dexevel.co, published case studies at perceptron.site) is not mentioned in the page structure at all. |
| 6 | Objection handling | 2/5 | The four standard objections are unaddressed in the page plan: price/value ("what will it cost?"), fit ("will this work for my situation?"), implementation ("how disruptive is this?"), risk ("what if it doesn't work?"). Process (L79) answers implementation only, and only partially. |
| 7 | Friction | 4/5 | One primary action, no form on page, short copy rules. Deduct: unnamed CTA destination (see 3); mobile path never specified beyond "excellence". |

Pre total: 26/35.

## Quick wins (applied in the build)

1. Hero lede names the audience ("business owners") and the concrete problems (copying between systems, manual data entry, follow-ups, reports) — closes the 10-second test gap (dim 1).
2. Proof-of-work links (dexevel.co scanner, perceptron.site case studies) placed in the hero proof column and about section — verifiable trust near the primary CTA (dim 5).
3. CTA destination named: https://www.dexevel.com/contact-us for contact CTAs (standing deXevel convention); "See what I build" anchors to #work (dim 3, 7).
4. Objection lines woven into existing sections rather than a bolted-on FAQ (dim 6):
   - fit → approach: "If I don't think software is the answer, I'll say so on the first call."
   - implementation → process: plan-and-price-before-code; work with the builder directly.
   - price/value → final CTA: pricing is per project, agreed before the build starts.
   - risk → final CTA: "Not sure yet? Describe the process that annoys you most."
5. Hero stat/proof figures only from CV facts (48 repos, 15+ product lines, 3 countries) — no invented metrics (honest-copy gate 46).

## High-impact (positioning / IA)

1. Objection handling as a first-class block (biggest rubric delta). The PRD structure is fixed by the acceptance criteria, so objections are woven into approach/process/final-CTA copy instead of a new section.
2. Proof earlier: the hero's right half becomes a proof column (Split Studio pairing) instead of decoration.
3. Single voice: hero reuses the PRD core message verbatim-ish; LinkedIn's "Your Process, My Scale" angle is used only in the process section ("your process stays; the manual work goes") to avoid two competing stories.

## Scorecard (post — the refined artifact actually built)

| # | Dimension | Score | Evidence |
|---|-----------|-------|----------|
| 1 | Value proposition clarity | 5/5 | Hero: headline + lede naming audience, problems, and "you don't have to know which" in the fold. |
| 2 | Headline effectiveness | 4/5 | Unchanged headline (PRD-mandated); lede now carries the match to visitor language. |
| 3 | CTA placement, copy, hierarchy | 5/5 | Three mandated strings, exact; destinations explicit; primary repeated in nav and final CTA. |
| 4 | Visual hierarchy / scan logic | 4/5 | Headers-only argument intact; proof column added to hero; portfolio stays where the PRD puts it. |
| 5 | Trust signals and social proof | 4/5 | Verifiable proof links (live scanner, published case studies, real project cards with stacks and roles); testimonial slot marked in code as placeholder — no invented quotes. |
| 6 | Objection handling | 4/5 | All four standard objections answered in-section; no FAQ block added (structure constraint). |
| 7 | Friction | 5/5 | Contact path obvious at every depth; anchors; single-line CTA labels engineered for 320 px; no forms. |

Post total: 31/35. Delta: +5.

## Top 3 changes worth arguing about

1. Objection handling (2 → 4): price/fit/risk lines in the final CTA and approach are the highest-delta copy on the page. If any of these lines feels off-voice, argue here first.
2. Trust anchors near CTAs (3 → 4): linking dexevel.co + perceptron.site makes proof verifiable in 60 seconds. If linking the agency site undercuts the personal positioning, this is the trade-off to debate.
3. Hero fold completeness (dim 1): the lede now answers who/what/problems before any scroll. If a shorter, cleverer hero is wanted, this is where it gets traded away.
