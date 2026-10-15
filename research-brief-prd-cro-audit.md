<!-- Hallmark · pre-emit critique: P5 H5 E5 S5 R4 V4 -->

# Research Brief — Personal Landing Page PRD v1: CRO Audit + Vault Fact Sheet

**Task:** t_031d2b5d (task 0 — input for build card t_74045b86)
**Date:** 2026-10-15
**Mode:** `cro-review` PRD mode (critic pass BEFORE any code) + `hallmark` pre-emit self-critique stamp
**Sources read in full (all in `C:\Users\Asif\Documents\Obsidian Vault\deXevel\`):**

| Vault file | Role |
|---|---|
| `Personal Landing Page PRD v1.md` | source-of-truth PRD (scored artifact) |
| `Asif Vudi Personal\Asif Vudi.md` | founder profile, positioning, constraints |
| `Asif_Vudi_Master_CV.md` | portfolio facts, projects, stack, delivery process |
| `LinkedIn Profile.md` | voice angle, final profile copy, claim audit |
| `Service Strategy.md` | positioning, offer stack, value ladder, pricing rules |

---

## 0. Initial Assessment (cro-review PRD mode checklist)

- **Page type:** personal landing page (founder-led consultancy site), one page, 8 sections.
- **Primary conversion goal:** conversation start — not signup, not purchase. CTA copy ("Tell me what you're trying to improve") makes the conversion a problem statement, not a booking.
- **Audience / traffic context:** UK + Ireland business owners, founders, operators arriving warm-to-cold from LinkedIn (profile → page), referrals, and the dexevel.co scanner. Visitor does not know what technology they need ("Sell the OUTCOME/PROBLEM first, technology second." — `Personal Landing Page PRD v1.md`).
- **Assumption stated per skill:** traffic is primarily LinkedIn + referral; the page must therefore message-match the LinkedIn profile copy in `LinkedIn Profile.md` (angle "Your Process, My Scale").

---

## 1. Scorecard (pre) — 7 dimensions

Scores 1–5. Every critique line quotes the offending (or missing) text. "Justification" = one line per the task spec.

| # | Dimension | Score | One-line justification (evidence) | Concrete quick win |
|---|---|---|---|---|
| 1 | **Offer clarity** | **4/5** | Offer and core message are explicit ("Core positioning: 'Build the software. Automate the work.'", "You don't need to know whether you need software, automation, or AI…"), but the PRD never defines what happens after a CTA click — no destination, no next-step expectation anywhere in `Personal Landing Page PRD v1.md`. | Define the conversion path: one destination for primary + final CTA (contact form or `cal.com/dexevel/15min` — real per `LinkedIn Profile.md` / `Service Strategy.md`), plus a one-line expectation setter under the hero CTA. |
| 2 | **Audience targeting** | **3/5** | The audience block is a 5-way list ("Business owners, founders, operators / Companies with repetitive manual processes / …") with no primary ICP; `Service Strategy.md` names one ("Small service businesses (2-30 people)", especially agencies) and the PRD drops it. | Add a primary-ICP line to the Problem section opener: "For small service businesses (2–30 people) — agencies especially — where the founder is still in every detail." (`Service Strategy.md` ideal-client list). |
| 3 | **Value proposition** | **4/5** | The differentiator is strong ("Not every business problem needs another automation tool." — `Personal Landing Page PRD v1.md`) but the PRD omits the vault's sharpest value-prop line: "They have a systems problem disguised as a tool problem." (`LinkedIn Profile.md`) and the solo-operator advantage ("The person who diagnoses the problem is the person who builds the system."). | Fold the "system, not another tool" argument and the diagnose→build→stay line into the Approach and About sections (verbatim sources below). |
| 4 | **CTA hierarchy** | **4/5** | Exact hierarchy is locked and good ("Primary CTA: 'Tell me what you're trying to improve'. Secondary: 'See what I build'. Not 'Book a discovery call'."), but there is no CTA between Process (§5) and Final CTA (§8) — the visitor must scroll past proof with no decision point. | Insert a mid-page CTA repeat after Process with a context line, and specify anchors: secondary CTA → `#things-ive-built`. |
| 5 | **Friction / risk reversal** | **2/5** | The 8-section structure (lines: "1. Hero … 8. Final CTA") contains no FAQ, no objection handling, no risk reversal — while the vault already holds real ones: "the audit fee is credited in full toward any build engagement that follows within 30 days" and "If they don't, they keep the roadmap" (`Service Strategy.md`). | Add a Risk Reversal + 4-question FAQ block before Final CTA answering: do-I-need-to-know, cost, already-have-tools, what-happens-next — all from vault facts (Addendum C). |
| 6 | **Message match** | **3/5** | The tagline matches the hero and the build card, but the page language ("software, automation, AI") doesn't match the traffic source's language: `LinkedIn Profile.md` deliberately uses "system" ("I build the system that runs your business without you in every detail.", "Your Process, My Scale.") — a LinkedIn visitor lands on different words than the ones that sent them. | Align Problem opener with the LinkedIn About pain ("every time you try to scale, you become the bottleneck") and let the Approach section carry "system" wording; keep the tagline untouched (Addendum F). |
| 7 | **Proof / credibility** | **3/5** | Real proof exists and the no-invention rule is explicit ("Every fact must trace to [[Asif_Vudi_Master_CV]]… Never invent clients, metrics, revenue, testimonials, or results."), but the PRD gives no placement rule: no proof slots near CTAs or after benefit claims, and the verifiable anchors ("dexevel.co: live funnel-audit scanner… perceptron.site: agency site with published case studies" — `Asif_Vudi_Master_CV.md`) are not assigned positions. | Add a proof-placement rule: verifiable-link strip + one CV-fact credibility line beside both CTA blocks; testimonial slot stays a labelled placeholder (Addendum D). |

**Pre total: 23/35.**

---

## 2. Quick wins applied

Each quick win above is applied verbatim in the **PRD Addendum (§6, at the end of this brief)** — ready to paste into `Personal Landing Page PRD v1.md`:

| Dim | Quick win | Lands in |
|---|---|---|
| 1 | Conversion path + expectation line under hero CTA | Addendum A |
| 2 | Primary ICP line in Problem opener | Addendum E |
| 3 | "Systems problem disguised as a tool problem" + diagnose→build→stay | Addendum C (FAQ) + F (Approach sub-line) |
| 4 | Mid-page CTA after Process + anchor targets | Addendum B |
| 5 | Risk reversal + 4-question FAQ block | Addendum C |
| 6 | Message-match alignment ("system" language, LinkedIn pain opener) | Addendum E + F |
| 7 | Proof placement rule + verifiable anchors near CTAs | Addendum D |

**High-impact (NOT quick wins — positioning/IA decisions the builder must not make silently):**

1. **Single primary ICP.** The PRD serves 5 audience segments at once ("says everything instead of the one thing" is a rubric failure smell). Choosing agency-owners-vs-all-service-businesses changes every section's copy. Founder call.
2. **Surface the value ladder or not.** `Service Strategy.md` runs free scanner → paid diagnostic (credited) → build. The PRD keeps the page conversation-first. If the ladder is surfaced, friction drops but the page starts selling; if not, risk reversal alone must carry it. Founder call (Addendum C's risk-reversal block assumes ladder-lite: diagnostic mentioned only inside FAQ/risk reversal).
3. **Portfolio IA.** Seven real builds (ETC Organic, Qashup, Rogue Tactical, Qravy, TreatMe, Shwapno, deXevel scanner) compete for one section. Lead-with-3 + secondary strip vs. full grid is an information-architecture choice with proof-density consequences (Addendum G gives the bounded material either way).

---

## 3. Fact sheet — verbatim, traceable

Every entry names its source vault file. Quotes are verbatim; ⚠ marks a quote containing a page-banned token (see `Personal Landing Page PRD v1.md` Voice Rules) — paraphrase before publishing, never paste onto the page.

### 3.1 Services offered

**From `Personal Landing Page PRD v1.md`:**
- **Custom Software** — "internal business applications, operational dashboards, customer portals, CRM/operations systems, custom web applications, databases and backend systems."
- **Automation** — "workflow automation, data processing, lead management, notifications and follow-ups, reporting, business process automation, API integrations, system-to-system workflows."
- **AI** — "AI-powered workflows, document/data processing, AI assistants, classification and extraction, natural-language interfaces to business data, AI integrated into existing systems. Never magical, never overhyped."
- Technical capabilities (supporting, never the pitch): "JavaScript, Python, Next.js, Node.js, NestJS, PostgreSQL, Supabase, REST APIs, n8n, Apify, Docker, LLMs / AI APIs."

**From `Service Strategy.md` (offer stack, for framing only — not page copy):**
- Offer 0 — AI Operations Audit: "map the client's workflows, identify where revenue leaks, and deliver a blueprintted plan before any code is written."
- Offer 1 — AI Infrastructure for Agencies (AI Foundation, Workflow Automation, AI Employees).
- Offer 2 — White-label Technical Partner: "The partner sells. deXevel builds."
- Offer 3 — Agency Operating System: "Rebuild the agency around AI."
- Delivery shape (`Asif_Vudi_Master_CV.md`): "free scanner / mini-audit → paid diagnostic (credited toward build) → foundation build → infrastructure build → ⚠ end-to-end operating system redesign → white-label technical delivery for partner agencies."

### 3.2 Process steps

- **Page process (`Personal Landing Page PRD v1.md`, the one to use):** "Understand → Design → Build → Deploy → Maintain. Short descriptions."
- Perceptron delivery (`Asif_Vudi_Master_CV.md`): "Project Requirement Document → UI/UX & System Design → Backend & Frontend Development → UAT → Beta Release & Updates → Maintenance & Support (30 days free post-completion)."
- Diagnostic entry (`Service Strategy.md`): "Free mini-audit (lead magnet) → Paid AI Operations Audit (£500-1,500 flat)… The audit fee is credited in full toward any build engagement that follows within 30 days → Build engagement. If they don't [proceed], they keep the roadmap."
- Build discipline (`Asif_Vudi_Master_CV.md`): "Schema-first: designed the full document relationship model … and validated it with the client before code. Tested core business logic as pseudocode first."

### 3.3 Positioning claims & voice

- "Build the software. Automate the work." — core positioning (`Personal Landing Page PRD v1.md`).
- "Not every business problem needs another automation tool." — differentiator section headline (`Personal Landing Page PRD v1.md`).
- "Your team shouldn't have to do work a computer can do." — problem-section core idea (`Personal Landing Page PRD v1.md`).
- "You don't need to know whether you need software, automation, or AI. Tell me what is taking too much time or requiring too much manual work, and I'll figure out what should be built." — core message (`Personal Landing Page PRD v1.md`).
- "Software engineer who happens to build with AI." (`Asif Vudi.md`).
- "Builds like an engineer … Thinks like a consultant … Ships like a solo operator … Prices like a product." (`Asif Vudi.md`).
- "Sells, diagnoses, architects, and builds. No team, no overhead, no handoffs." (`Asif Vudi.md`).
- "Your Process, My Scale." — voice angle (`LinkedIn Profile.md`).
- "I build the system that runs your business without you in every detail." (`LinkedIn Profile.md`, banner).
- "Most service businesses don't have an AI problem. They have a systems problem disguised as a tool problem. They buy a tool, it works for the happy path, then something edge-case happens and it breaks. Because they didn't need a tool. They needed a system." (`LinkedIn Profile.md`).
- "You'll work with me directly. No account manager, no handoff. The person who diagnoses the problem is the person who builds the system." (`LinkedIn Profile.md`).
- "We turn proven business processes into scalable software." / customers should think "They rebuilt how our business runs." — not "They built us an n8n workflow." (`Service Strategy.md`).
- Voice rules: "a technically capable founder speaking directly to another business owner. Clear, direct, specific, understated. No corporate fluff." (`Personal Landing Page PRD v1.md`).
- Claim audit precedent (`LinkedIn Profile.md`): "Zero client counts, zero testimonials, zero results. Passes zero-proof."

### 3.4 Market & constraints

- **Market: UK + Ireland only.** "Market: UK + Ireland. (Older notes mention NZ — ignore, scope is UK + IE.)" (`Personal Landing Page PRD v1.md`); "UK & Ireland market focus" (`Asif_Vudi_Master_CV.md`).
- Location: **not disclosed to prospects** — "Won't reveal his location to prospects" (`Asif Vudi.md`). Do not put a location on the page.
- Solo operator: "Cannot take more than 2-3 active builds at once." / "The person who sells is the person who builds." (`Asif Vudi.md`).
- Contact constraints: "Cannot do international phone calls (uses Zoom/Google Meet)" (`Asif Vudi.md`); booking link `cal.com/dexevel/15min`; "The free tier is the scanner + 15-min intro call only. Beyond 15 minutes, it's paid." (`Service Strategy.md`).
- Pricing discipline: "Value-based (20% rule). Never below 10% of value created. Always three-option proposals." (`Asif Vudi.md`); "The numbers below are reference ranges, not quotes." (`Service Strategy.md`).

### 3.5 Portfolio / CV data (real, verbatim-scoped)

| Build | Facts (source: `Asif_Vudi_Master_CV.md` unless noted) |
|---|---|
| Perceptron (perceptron.site) | "Co-Founder (Aug 2023 – Present)"; "48 repositories of production and product code (25 TypeScript, 17 JavaScript) across 15+ product lines"; "Published client marquee: TechMerch, Reviva, Rogue Tactical, ETC Organic, Stampkit"; "no missed delivery windows across the documented client portfolio"; "4+ developers led on the Qashup platform and guided the dev team on the ETC Organic ERP" |
| ETC Organic (Bangladesh, Aug 2023 – Feb 2024) | "MLM medical-products company: E-commerce + custom ERP + Android app. (React, TailwindCSS, Node, Express, MongoDB; React Native + Expo for mobile.)"; "binary-tree MLM compensation engine… Chain Sales Bonus (CSB) distributed accurately across 7 generations"; "real-time inventory sync across branches"; "Role: architecture lead" |
| Qashup (Thailand, Dec 2023 – Nov 2024, extensions through Aug 2025) | "Inventory management module inside the live business-management platform of a Thai restaurant chain (qashup.co)"; "(Next.js, NestJS, TypeScript, Prisma, PostgreSQL, MySQL, Docker)"; "MAC/WAC cost accounting over continuously changing stock"; "Moved the module from monolith to microservices"; "Managed 2 developers" |
| Rogue Tactical (USA, Dec 2023 – Feb 2024) | "Internal management system for a gun shop. MERN… + TailwindCSS"; "Shipped in 3 months: employee management, vendor management, orders, invoices, expense tracking, and a central document hub for legal files"; "Role-based access control throughout" |
| Qravy (Apr 2024 – active) | "Digital menu and ordering system for restaurants. Multi-sided: business portal… admin console… restaurant client… and API server. Live deployments on Render; active development through 2026." |
| TreatMe (2024 – 2025) | "Consumer product: treat anyone to a meal at any restaurant. TypeScript server plus three clients… Multi-role marketplace architecture." |
| Shwapno (2025) | "QR-driven dual-platform ERP + e-commerce: scan a QR code to see product availability across branches… Live: shwapno-server, shwapno-company on Render." |
| Automation Opportunity Scanner (deXevel) | "an 8-step deterministic diagnostic that audits any company website and generates a client-side report plus a branded PDF in under 60 seconds" (`Asif_Vudi_Master_CV.md`); "8-step website diagnostic with branded PDF report" (`Personal Landing Page PRD v1.md`) |
| Personal AI agent stack (deXevel) | "local agent runtime + n8n workflows + LLM APIs handling list-building, message drafting, lead dossiers, and pipeline tracking; replaced paid SDR tooling subscriptions with owned infrastructure" |
| Diagnostic consulting case | "mapped a prospect's funnel, quantified a 93% drop-off at the dashboard stage, and prescribed the fix (a revenue-leak calculator) before any pitch was made" |
| Verifiable proof links | "dexevel.co: live funnel-audit scanner; run it on any company website, and get a gap report in under 60 seconds." / "perceptron.site: agency site with published case studies (ETC Organic, Qashup, Rogue Tactical) and client marquee." |
| Other builds (github.com/perceptronbd) | supply-sense-ai (2025), mental-health-server (2025), linklead (2025), email-verification (2025), interface-dynamic-365 (2025), tesla-server / tesla-client (2025), casMock-server / casMock-Client (2026) |

### 3.6 Contact & identity (from `Asif_Vudi_Master_CV.md`)

- asifvudi@gmail.com · linkedin.com/in/asif-vudi · github.com/asif-bhuti · github.com/perceptronbd · perceptron.site · dexevel.co
- Education line as written: "Computer Science Engineering: North South University" — see DO NOT INVENT #7.

---

## 4. DO NOT INVENT

Hard list. Nothing here may appear on the page unless the founder supplies it in writing.

1. **Testimonials / client quotes.** None exist — "Zero client counts, zero testimonials, zero results." (`LinkedIn Profile.md`). Testimonial slots stay clearly-labelled placeholders ("fill only with client-approved quotes").
2. **Outcome metrics: time saved %, conversion lifts, ROI, revenue generated.** "No unsupported time-saving percentages." (`Personal Landing Page PRD v1.md`). The 93% figure is one prospect's funnel observation (see #6) — never a client result.
3. **Revenue figures or fixed prices on-page.** Service Strategy numbers are "reference ranges, not quotes" and quoting requires the value-discovery workflow. If pricing appears at all, it must carry that caveat or be omitted.
4. **Client names beyond the published marquee** ("TechMerch, Reviva, Rogue Tactical, ETC Organic, Stampkit" — `Asif_Vudi_Master_CV.md`) — and no logo images or "trusted by" counts without client approval. No fabricated client counts ("first clients came from cold outreach and referrals" is the only count-level claim available).
5. **Any market besides UK + Ireland** — no NZ (stale in `Asif Vudi.md` "Serves UK, IE, NZ remotely" and `Service Strategy.md` "market: UK/IE/NZ"; the PRD overrides: "Older notes mention NZ — ignore").
6. **The 93% drop-off case as a success story.** Use only as scoped: "quantified a 93% drop-off at the dashboard stage, and prescribed the fix (a revenue-leak calculator) before any pitch was made" — a live-diagnosis capability example, not a delivered result.
7. **A degree claim.** The CV lists "Computer Science Engineering: North South University" with no completion status; never state or imply a completed degree.
8. **Asif's location or country** on the page ("Won't reveal his location to prospects" — `Asif Vudi.md`).
9. **Per-project results for ETC Organic / Qashup / Rogue Tactical.** Only scope, stack, dates, role, and delivery facts above are documented. No invented outcomes.
10. **Merged scanner claims.** "8-step… report plus a branded PDF in under 60 seconds" is the Automation Opportunity Scanner; the "10-dimension conversion audit… 1-page report + outreach pack" is a *different* module (Website Conversion Audit, `Asif_Vudi_Master_CV.md` product line). Don't blend the numbers.
11. **"Ships solo in days"** (`Asif Vudi.md` comparison table) — vault-sourced but aggressive as a published claim; needs founder sign-off before use on-page.

---

## 5. Scorecard (post — after applying the addendum) + Top 3

| # | Dimension | Pre | Post | Delta driver |
|---|---|---|---|---|
| 1 | Offer clarity | 4 | **5** | Conversion path defined + expectation line (Addendum A) |
| 2 | Audience targeting | 3 | **4** | Primary ICP line, second-person pain opener (Addendum E) |
| 3 | Value proposition | 4 | **5** | "Systems problem disguised as a tool problem" + diagnose→build→stay (Addendum C, F) |
| 4 | CTA hierarchy | 4 | **5** | Mid-page CTA at decision point + anchors (Addendum B) |
| 5 | Friction / risk reversal | 2 | **4** | Risk reversal + FAQ answers all four standard objections (Addendum C) |
| 6 | Message match | 3 | **4** | LinkedIn pain language + "system" framing in body, tagline locked (Addendum E, F) |
| 7 | Proof / credibility | 3 | **4** | Proof slots beside CTAs, CV credibility line, bounded placeholders (Addendum D) |

**Post total: 31/35** (was 23/35).

**Top 3 changes worth arguing about (highest delta, not easiest):**

1. **Risk reversal + FAQ block (dim 5: 2→4).** The page currently asks a cold stranger to "start a conversation" with zero objection handling. The vault already contains every answer (audit credited in full, roadmap kept, direct-to-builder, three-option proposals). Biggest single delta.
2. **Define the conversion path (dims 1+5).** CTA copy is locked but destinations don't exist in the PRD; "Tell me what you're trying to improve" with no defined response is a dead end. Founder must pick: short contact form vs. `cal.com/dexevel/15min`.
3. **Proof placement discipline (dim 7: 3→4).** dexevel.co and perceptron.site are 60-second-verifiable proof ("Proof of work (verifiable in 60 seconds)" — `Asif_Vudi_Master_CV.md`) sitting unplaced while placeholder cards get spec'd first.

---

# PRD Addendum — paste-ready (quick wins applied)

> Append to `Personal Landing Page PRD v1.md`. Nothing here contradicts the v1 PRD; it fills the gaps the scorecard found. All factual claims trace to the vault files named in §3.

## Addendum A — Conversion path (insert after "## UX Requirements")

- **Primary CTA** "Tell me what you're trying to improve" → destination: short contact form (name, email, one textarea: "What's taking too much time?") — fallback/secondary link: `cal.com/dexevel/15min` (real booking link, `LinkedIn Profile.md`, `Service Strategy.md`).
- **Secondary CTA** "See what I build" → anchors to `#things-ive-built`.
- **Final CTA** "Start a conversation" → same destination as primary.
- **Expectation line under hero CTA** (pick one):
  1. "A 15-minute conversation. No pitch deck." (grounded: free 15-min intro call — `Service Strategy.md`)
  2. "Tell me what's broken. I'll tell you what I'd build." (grounded: diagnosis-first — `Asif Vudi.md`)
  3. "You don't need to know what to ask for. That's my job." (grounded: "I'll figure out what should be built" — `Personal Landing Page PRD v1.md`)

## Addendum B — Mid-page CTA (insert after §5 Process)

Repeat primary CTA with context line: **"If any of that sounds like your week, tell me which part."** Same destination as hero CTA. One risk-reversal line beneath it (Addendum C).

## Addendum C — Risk reversal + FAQ (insert before §8 Final CTA)

**Risk reversal block (verbatim sources):**
- "You'll work with me directly. No account manager, no handoff. The person who diagnoses the problem is the person who builds the system." (`LinkedIn Profile.md`)
- "If we go further, the diagnostic is a paid engagement — and the fee is credited in full toward any build if you proceed within 30 days. If you don't, you keep the roadmap." (`Service Strategy.md`, paraphrase-safe)

**FAQ — the four standard objections:**
1. **"Do I need to know what I need?"** — "No. You don't need to know whether you need software, automation, or AI. Tell me what is taking too much time or requiring too much manual work, and I'll figure out what should be built." (`Personal Landing Page PRD v1.md` — keep verbatim, it's the core message.)
2. **"What does it cost?"** — "Scoped per engagement, after diagnosis. You see the plan and a three-option proposal before you commit to a build price." (`Service Strategy.md`: "Build estimate (three-option proposal if they want to proceed)", "de-risks the build (client sees the plan before committing to a price)")
3. **"We already bought a tool / someone built us an automation."** — "Most service businesses don't have an AI problem. They have a systems problem disguised as a tool problem." (`LinkedIn Profile.md`) + "Not every business problem needs another automation tool." (`Personal Landing Page PRD v1.md`)
4. **"What happens after I get in touch?"** — "A short conversation about how the work currently runs. If there's a fit, a written diagnostic comes next. If there isn't, I'll say so." (grounded: value-first ladder "free audit -> paid roadmap -> build" — `Asif Vudi.md`; last sentence is founder-voice copy, sign-off recommended)

## Addendum D — Proof placement rules (insert into §6 "Things I've Built" spec)

1. **Beside both CTA blocks:** verifiable-link strip — "See it working: dexevel.co (free scanner) · perceptron.site (case studies)" (`Asif_Vudi_Master_CV.md`, "Proof of work (verifiable in 60 seconds)").
2. **Credibility line (exact CV wording, one line max):** "48 repositories across 15+ product lines. No missed delivery windows across the documented client portfolio."
3. **Portfolio cards** follow v1 format (Problem → System built → What it does), lead cards: ETC Organic, Qashup, Rogue Tactical + the deXevel scanner (bounded material in §3.5).
4. **Testimonial slot:** HTML-comment placeholder only, labelled "client-approved quote required". Never filled from imagination.

## Addendum E — Audience sharpening (rewrite §2 "Target Audience" opener)

Primary ICP line: **"For small service businesses (2–30 people) — agencies especially — where the founder is still in every detail."** (`Service Strategy.md` ideal client). Keep the v1 symptom list beneath it.

Problem-section opener candidates (LinkedIn message-match):
1. "You know how to run your business. But every time you try to scale, you become the bottleneck." (`LinkedIn Profile.md`)
2. "More leads means more manual follow-up. More clients means more admin. More revenue means more of your time." (`LinkedIn Profile.md`)
3. Keep v1 closer as the section's closing line: "Your team shouldn't have to do work a computer can do."

## Addendum F — Message-match alignment (§4 "The Approach")

- Headline stays locked: "Not every business problem needs another automation tool."
- Add sub-line (verbatim source): the goal is that a client thinks **"They rebuilt how our business runs."** — not "They built us an n8n workflow." (`Service Strategy.md`)
- Body may use the LinkedIn "system" language: "The system is the answer. Not another tool." (`LinkedIn Profile.md`) so LinkedIn-sourced visitors see the same words that sent them.
- Tagline "Build the software. Automate the work." is locked by the build card — do not rewrite. Hero support line alternatives (rationale in brackets):
  1. "Custom software and automation for businesses whose tools stopped keeping up." [outcome framing, no jargon]
  2. "The person who diagnoses the problem is the person who builds the system." [`LinkedIn Profile.md`, trust + differentiation in one line]
  3. "You don't need to know whether you need software, automation, or AI." [PRD core message as hook; rest moves to sub-line]

## Addendum G — Portfolio material bounds (for the builder)

- Lead cards (3): ETC Organic, Qashup, Rogue Tactical — facts strictly per §3.5 table.
- Secondary row: Qravy, TreatMe, Shwapno — one line each per §3.5.
- deXevel builds (2): Automation Opportunity Scanner ("8-step… branded PDF… under 60 seconds"), personal AI agent stack ("replaced paid SDR tooling subscriptions with owned infrastructure").
- "Other builds" strip: the github.com/perceptronbd list in §3.5, names + years only.
- No card carries an outcome metric, client quote, or logo.

---

## Appendix — hallmark pre-emit self-critique (expanded)

Stamp at top of this artifact: `P5 H5 E5 S5 R4 V4` — all axes ≥ 3, no revision pass required.

| Axis | Score | Note |
|---|---|---|
| Philosophy | 5 | Honest-copy discipline held: every fact attributed to a named vault file; gaps declared instead of filled. |
| Hierarchy | 5 | Scorecard → applied wins → facts → post-score → paste-ready addendum; a skimmer gets the argument from headers alone. |
| Execution | 5 | All 7 dimensions scored with quoted evidence; pre/post totals computed and consistent (23/35 → 31/35). |
| Specificity | 5 | Quotes carry file names and exact strings; DO NOT INVENT enumerates 11 concrete falsification risks. |
| Restraint | 4 | Locked items (tagline, CTA strings) left untouched; alternatives offered with locks flagged — slight verbosity in the fact sheet is deliberate (verbatim requirement). |
| Variety | 4 | Tables for scorecard/facts, prose for critique, paste-ready blocks for the addendum; a working document, not a designed artifact. |

**cro-review PRD-mode checklist status:** (1) PRD read in full + initial assessment ✓ · (2) 7 dimensions scored with evidence ✓ · (3) quick wins vs high-impact split ✓ · (4) refined artifact = PRD Addendum with copy alternatives ✓ · (5) re-score delivered ✓ · (6) top-3 arguments ✓.
