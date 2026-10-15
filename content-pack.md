# Content Pack — Asif Vudi Personal Landing Page

Companion to `Personal Landing Page PRD v1.md`. Every fact below traces to a named vault source. Where the vault has no data, the placeholder `Details to be confirmed` is used verbatim. Nothing is invented.

**Sources:**
- **[CV]** = `deXevel/Asif_Vudi_Master_CV.md`
- **[PRD]** = `deXevel/Personal Landing Page PRD v1.md`
- **[LI]** = `deXevel/LinkedIn Profile.md`
- **[GAP]** = no vault source exists; see note

**Known source gap:** the PRD links a `[[Asif Vudi]]` founder-profile note; no such file exists in the vault. Positioning lines attributed to it in the PRD ("software engineer who happens to build with AI", capability list) are taken from the PRD's own quoting [PRD] and marked accordingly. If that note is created later, re-check section (c) against it.

---

## (a) Candidate "About" blurbs

Each is limited to facts present in [CV], [PRD] and [LI]. Pick one; do not merge.

### Blurb 1 — direct and factual (98 words)

I'm Asif Vudi, a software builder and business operator. I've spent three years building and running software companies: co-founder of Perceptron, where we shipped 48 repositories across 15+ product lines for clients in Thailand, the USA, and Bangladesh, and founder of deXevel, where I work with service businesses in the UK and Ireland. When you come to me with a slow or manual process, I work out whether the answer is custom software, workflow automation, AI, or a combination — then build it. You work with me directly, from diagnosis to deployment. [CV, PRD]

### Blurb 2 — outcome-first, matches the page's core message (104 words)

You don't need to know whether your problem calls for software, automation, or AI. That's my job to figure out. I'm Asif Vudi. I've built and run software companies for three years — co-founding Perceptron (ERP, e-commerce, inventory, and internal systems for clients across Thailand, the USA, and Bangladesh) and founding deXevel, an AI-automation consultancy for service businesses in the UK and Ireland. I designed and shipped a 7-module revenue automation stack and a public audit tool in under 12 months, running sales, delivery, support, and documentation alone. I handle the full arc myself: requirements, design, code, deployment, and support. [CV]

### Blurb 3 — understated, founder-to-owner voice (88 words)

I build software and automate business work. Three years in, that's meant co-founding Perceptron — 48 repositories of ERP, e-commerce, inventory, and internal tools for companies in Thailand, the USA, and Bangladesh — and founding deXevel, where I build AI automation and revenue systems for service businesses in the UK and Ireland. I chose to work solo. The person who diagnoses your problem is the person who designs the schema, writes the code, reviews it, deploys it, and picks up the phone afterwards. [CV]

---

## (b) Portfolio data structure

Format per card: `role_or_context`, `client`, `location`, `problem`, `system_built`, `outcome`, `category`, `stack`, `source`. Use the PRD's Problem → System built → What it does display shape. Categories from the PRD: business operations system, automated lead workflow, AI business assistant, data processing pipeline, custom internal application.

### Card 1 — ETC Organic

```yaml
role_or_context: "Co-founder / architecture lead, Perceptron"
client: "ETC Organic (MLM medical-products company)"
location: "Bangladesh"
period: "Aug 2023 – Feb 2024"
problem: >
  An MLM medical-products company needed three connected products —
  an e-commerce platform, a custom ERP, and an Android app — running
  on one data model, plus a binary-tree MLM compensation engine that
  paid Chain Sales Bonus accurately across 7 generations.
system_built: >
  Three connected products on one data model. Binary-tree MLM
  compensation engine (two referrals per user, CSB across 7
  generations, bubble sort / binary-graph / LIFO-FIFO algorithms).
  Points economy: points earned, spent on product, or converted to
  cash, with exact balances tracked end to end. ERP with money
  withdrawals, purchase requests, point redemptions, and real-time
  inventory sync across branches — online and in-store sales update
  one stock number — with role-based employee permissions.
outcome: "Details to be confirmed"   # CV states scope and delivery, no business metrics
category: "business operations system"
stack: "React, TailwindCSS, Node, Express, MongoDB; React Native + Expo"
source: "[CV] lines 29-35"
```

### Card 2 — Qashup

```yaml
role_or_context: "Inventory module owner, Perceptron; 2 developers managed"
client: "Qashup (business-management platform for a Thai restaurant chain)"
location: "Thailand"
period: "Dec 2023 – Nov 2024 core build; extensions through Aug 2025"
problem: >
  A live restaurant-chain platform needed an inventory module: stock
  movement between branches, purchase request → purchase order chains,
  and MAC/WAC cost accounting over continuously changing stock, all
  without breaking existing functionality.
system_built: >
  Inventory module owned end-to-end. Schema-first design: the full
  document relationship model (requests, orders, items, transfers)
  validated with the client before code; core business logic tested
  as pseudocode before integration. Later moved the module from
  monolith to microservices so multiple teams could work in isolation.
outcome: >
  CV-recorded engineering outcomes: fewer code conflicts, easier
  maintenance, better performance after the microservices move;
  agile delivery against frequent requirement changes. Business
  metrics: "Details to be confirmed"
category: "custom internal application"
stack: "Next.js, NestJS, TypeScript, Prisma, PostgreSQL, MySQL, Docker"
source: "[CV] lines 37-43"
```

### Card 3 — Rogue Tactical

```yaml
role_or_context: "Co-founder / delivery, Perceptron"
client: "Rogue Tactical (gun shop)"
location: "USA"
period: "Dec 2023 – Feb 2024"
problem: >
  A gun shop needed an internal management system: employees, vendors,
  orders, invoices, expenses, and a secure home for legal documents.
system_built: >
  Internal management system shipped in 3 months: employee management,
  vendor management, orders, invoices, expense tracking, and a central
  document hub for legal files (licenses, permits). Role-based access
  control throughout — the owner sets per-employee permissions, and
  sensitive legal and financial data stays restricted. Customizable
  notification and settings panel (permit renewals, machinery
  maintenance, document preferences).
outcome: "Details to be confirmed"   # CV gives the 3-month shipping fact only
category: "custom internal application"
stack: "MongoDB, Express, React, Node (MERN), TailwindCSS"
source: "[CV] lines 45-49"
```

### Card 4 — Automation Opportunity Scanner (deXevel)

```yaml
role_or_context: "Founder, deXevel (solo)"
client: "deXevel — own product, public tool"
location: "Remote (UK & Ireland market)"
period: "Dec 2025 – present (deXevel founding)"
problem: >
  Business owners need a fast, concrete answer to "where is my process
  leaking manual work?" before committing to any build.
system_built: >
  An 8-step deterministic diagnostic that audits any company website
  and generates a client-side report plus a branded PDF in under 60
  seconds. Live at dexevel.co.
outcome: "Details to be confirmed"   # speed fact (under 60 seconds) is verbatim from CV; no adoption metrics exist
category: "data processing pipeline"
stack: "n8n, LLM APIs, website scraping"
source: "[CV] lines 11, 122; [PRD] line 87"
```

### Card 5 — Personal AI agent stack (deXevel)

```yaml
role_or_context: "Founder, deXevel (solo)"
client: "Internal — runs deXevel's own operations"
location: "Remote"
period: "Dec 2025 – present"
problem: >
  Paid SDR tooling subscriptions were doing work that owned
  infrastructure could do: list-building, message drafting, lead
  dossiers, pipeline tracking.
system_built: >
  Personal AI agent stack — local agent runtime + n8n workflows + LLM
  APIs — handling list-building, message drafting, lead dossiers, and
  pipeline tracking. Replaced paid SDR tooling subscriptions with
  owned infrastructure. Also runs the full outbound engine solo:
  signal-scored lead lists, comment-first LinkedIn ladder, one-job-
  per-touch message SOPs, 2-day follow-up rules, response logging.
outcome: >
  CV-recorded outcome: paid SDR tooling subscriptions replaced with
  owned infrastructure. Savings figures: "Details to be confirmed"
category: "AI business assistant"
stack: "Local agent runtime, n8n, LLM APIs"
source: "[CV] lines 12-13"
```

### Card 6 — Shwapno

```yaml
role_or_context: "Builder (Perceptron product line)"
client: "Shwapno"
location: "Details to be confirmed"
period: "2025"
problem: "Details to be confirmed"
system_built: >
  QR-driven dual-platform ERP + e-commerce: scanning a QR code shows
  product availability across branches. Server, company portal,
  e-commerce client, and shared module in TypeScript. Server and
  company portal live on Render.
outcome: "Details to be confirmed"
category: "business operations system"
stack: "TypeScript (shwapno-server, shwapno-company, shwapno-ecom, shwapno-client-shared)"
source: "[CV] lines 57-58"
```

### Card 7 — Qravy

```yaml
role_or_context: "Builder (active product)"
client: "Qravy — own product"
location: "Details to be confirmed"
period: "Apr 2024 – active"
problem: "Details to be confirmed"
system_built: >
  Digital menu and ordering system for restaurants. Multi-sided:
  business portal, admin console, restaurant client, and API server.
  Live deployments on Render; active development through 2026.
outcome: "Details to be confirmed"
category: "custom internal application"
stack: "qravy-client-business, qravy-client-admin, qravy-client-restaurant, qravy-server"
source: "[CV] lines 51-52"
```

### Card 8 — TreatMe

```yaml
role_or_context: "Builder (consumer product)"
client: "TreatMe — own product"
location: "Details to be confirmed"
period: "2024 – 2025"
problem: "Details to be confirmed"
system_built: >
  Consumer product: treat anyone to a meal at any restaurant.
  TypeScript server plus three clients — admin, business, consumer —
  on a shared client module. Multi-role marketplace architecture.
outcome: "Details to be confirmed"
category: "custom internal application"
stack: "TypeScript (treatme-server, treatme-admin-client, treatme-business-client, treat-me-client-shared, treat-me-client)"
source: "[CV] lines 54-55"
```

**Display guidance (from PRD [PRD] lines 85-89):** show cards as Problem → System built → What it does. Cards 1-5 carry the page; cards 6-8 can sit in a compact secondary list ("also built"). A tasteful placeholder card is acceptable where info is thin, clearly marked replaceable. Client marquee for a logo strip: TechMerch, Reviva, Rogue Tactical, ETC Organic, Stampkit [CV line 18]. Note: TechMerch, Reviva and Stampkit have no case-study detail in the vault — names only.

---

## (c) Capability statements — three service lines

Voice: what it is, when it makes sense, what gets built, what problem it addresses. Honest framing per the PRD — the AI line especially must stay unmagical. Technical stack is supporting detail, never the pitch [PRD line 70].

### Custom Software

> Most off-the-shelf tools fit a generic business. Yours has its own workflow, its own rules, and its own data. I build internal business applications, operational dashboards, customer portals, CRM and operations systems, custom web applications, and the databases and backend systems underneath them. This makes sense when your existing software doesn't support how your operation actually runs — or when you're running the business out of spreadsheets. Built on full-stack TypeScript: Node.js, NestJS, Express, React, Next.js, PostgreSQL, MySQL, MongoDB, Prisma, Docker. [PRD lines 62, 70; CV lines 80-88]

### Automation

> The repetitive work — copying between systems, manual data entry, lead follow-up, recurring reports, updating three places instead of one — is work a computer can do. I build workflow automation, data processing, lead management, notifications and follow-ups, reporting, and system-to-system API integrations. This makes sense when a defined process eats hours every week and doesn't need human judgment at every step. Built with n8n, custom API integrations, and browser automation — and I run these systems in my own company daily, including the stack that replaced my paid SDR tooling. [PRD line 64; CV lines 12-13, 87]

### AI

> AI is useful for specific jobs: processing documents and data, classification and extraction, assistants that answer from your business data, natural-language interfaces to your systems, and AI integrated into the software you already run. It is not magic, and I won't sell it as such. If a plain automation solves the problem, that's what you'll get. This makes sense when the work involves reading, extracting, drafting, or sorting at a volume no person should be doing manually. I use LLM APIs and AI agent runtimes in daily production in my own business. [PRD line 66; CV line 87]

**Supporting capability list (plain, verbatim-safe):** JavaScript, Python, Next.js, Node.js, NestJS, PostgreSQL, Supabase, REST APIs, n8n, Apify, Docker, LLMs / AI APIs. [PRD line 70]

---

## (d) Verbatim-usable sentences from the vault

Eight-plus sentences, exact as written, each with its source. Safe to paste as section copy.

1. "Build the software. Automate the work." — [PRD line 40; also PRD frontmatter]
2. "Not every business problem needs another automation tool." — [PRD line 46]
3. "You don't need to know whether you need software, automation, or AI. Tell me what is taking too much time or requiring too much manual work, and I'll figure out what should be built." — [PRD line 58]
4. "Your team shouldn't have to do work a computer can do." — [PRD line 75]
5. "Have a process that shouldn't require so much manual work?" — [PRD line 81]
6. "Tell me how it currently works. You don't need to know whether the answer is software, automation, or AI." — [PRD line 81]
7. "You'll work with me directly. No account manager, no handoff. The person who diagnoses the problem is the person who builds the system." — [LI line 53]
8. "Your process stays. The manual work goes." — [LI line 43]
9. "Most service businesses don't have an AI problem. They have a systems problem disguised as a tool problem." — [LI line 47]
10. "The message: he understands business problems and can build the underlying systems." — [PRD line 44; rewrite in first person for page use: "I understand business problems and can build the underlying systems."]
11. "Architecture is chosen from the actual business problem, never forced into one tool." — [PRD line 46; adjust to first person: "Architecture is chosen from the actual business problem, never forced into one tool." — already works in first person]
12. "Three years building and running software companies." — [CV line 6, PRD line 32]

**Explicit gaps (do not fill with anything):** no client counts, testimonials, revenue figures, or business-outcome metrics exist anywhere in the sources. The only quantified facts available are engineering facts: 48 repositories, 15+ product lines, 3-month Rogue Tactical delivery, 7-generation MLM payout accuracy, under-60-second scanner, 93% drop-off diagnostic case. [CV throughout; LI Claim Audit line 80 confirms zero-proof discipline]

---

## Banned-word check

Checked against the full banned list from the PRD's Voice Rules: zero occurrences in this file.
