const CONTACT_URL = "https://www.dexevel.com/contact-us";

export default function Home() {
  return (
    <main id="main">
      {/* ---------- Hero (H2 split diptych: text | proof column) ---------- */}
      <section className="wrap split hero" aria-labelledby="hero-title">
        <div className="split__a">
          <h1 id="hero-title">Build the software. Automate the work.</h1>
          <p className="hero__lede">
            I’m Asif Vudi — a software engineer who builds the systems business
            owners don’t have time to spec. When work is eating your team’s
            hours — copying between systems, manual data entry, follow-ups,
            reports rebuilt by hand — I diagnose the process and build what
            fixes it. Software, automation, AI, or a mix. You don’t have to
            know which.
          </p>
          <div className="hero__actions">
            <a className="cta cta--primary" href={CONTACT_URL}>
              Tell me what you’re trying to improve
            </a>
            <a className="cta cta--link" href="#what-i-build">
              See what I build
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <aside className="split__b" aria-label="Proof of work">
          <p className="proof__title">Proof of work</p>
          <ul className="proof__list">
            <li>
              <span className="proof__figure">48</span>
              <span className="proof__label">
                repositories shipped at Perceptron, across 15+ product lines
              </span>
            </li>
            <li>
              <span className="proof__figure">3</span>
              <span className="proof__label">
                years building and running software companies
              </span>
            </li>
            <li>
              <span className="proof__figure">60 s</span>
              <span className="proof__label">
                for the free website diagnostic at dexevel.co — real report, no
                signup
              </span>
            </li>
          </ul>
          <p className="proof__links">
            Published case studies:{" "}
            <a href="https://perceptron.site">perceptron.site</a>
          </p>
        </aside>
      </section>

      {/* ---------- Problem (flipped diptych: statement right, list left) ---------- */}
      <section className="wrap split problem" aria-labelledby="problem-title">
        <div className="split__a">
          <h2 id="problem-title">
            Your team shouldn’t have to do work a computer can do.
          </h2>
          <p className="problem__note">
            Somebody copies the same numbers into three systems every morning.
            Leads wait in an inbox until someone has time to sort them. The
            weekly report gets rebuilt by hand because the tool that should
            produce it doesn’t exist.
          </p>
          <p className="problem__note">
            It doesn’t need a bigger team. It needs the repetitive part taken
            off people’s hands.
          </p>
        </div>
        <div className="split__b">
          <ul className="problem__list">
            <li>Copying data between systems by hand</li>
            <li>Repetitive data entry</li>
            <li>Leads processed manually, one at a time</li>
            <li>The same emails, written again every week</li>
            <li>Recurring reports assembled by hand</li>
            <li>One change, updated in three different systems</li>
            <li>Processes that live in spreadsheets and one person’s memory</li>
          </ul>
        </div>
      </section>

      {/* ---------- What I build (break-out · spec sheet) ---------- */}
      <section className="wrap services" id="what-i-build" aria-labelledby="build-title">
        <div className="services__head">
          <h2 id="build-title">What I build</h2>
          <p className="problem__note">
            The diagnosis decides which of these you need. Often it’s more than
            one.
          </p>
        </div>

        <div className="spec-row">
          <h3>Custom software</h3>
          <div className="spec-cell">
            <p className="spec-label">When it makes sense</p>
            <p>
              Your business runs on spreadsheets, workarounds, or tools that no
              longer fit how the work actually happens.
            </p>
          </div>
          <div className="spec-cell">
            <p className="spec-label">What gets built</p>
            <p>
              Internal business applications, operational dashboards, customer
              portals, CRM and operations systems, custom web applications,
              databases and backends.
            </p>
          </div>
        </div>

        <div className="spec-row">
          <h3>Automation</h3>
          <div className="spec-cell">
            <p className="spec-label">When it makes sense</p>
            <p>
              The same process runs again and again, and a person is the glue
              holding the systems together.
            </p>
          </div>
          <div className="spec-cell">
            <p className="spec-label">What gets built</p>
            <p>
              Workflow automation, data processing, lead management,
              notifications and follow-ups, reporting, API integrations, and
              system-to-system workflows.
            </p>
          </div>
        </div>

        <div className="spec-row">
          <h3>AI</h3>
          <div className="spec-cell">
            <p className="spec-label">When it makes sense</p>
            <p>
              The work needs judgement over information nobody has tagged —
              documents, messages, messy data.
            </p>
          </div>
          <div className="spec-cell">
            <p className="spec-label">What gets built</p>
            <p>
              AI-powered workflows, document and data processing,
              classification and extraction, assistants that answer questions
              from your business data, and AI added to the systems you already
              use.
            </p>
          </div>
        </div>

        <p className="services__note">
          Built with JavaScript, TypeScript, Python, Next.js, Node.js, NestJS,
          PostgreSQL, Supabase, REST APIs, n8n, Apify, Docker, and LLM APIs.
          The tools follow the problem — this list is here so you know the
          work is real, not so you have to choose.
        </p>
      </section>

      {/* ---------- Approach ---------- */}
      <section className="wrap split approach" aria-labelledby="approach-title">
        <div className="split__a">
          <h2 id="approach-title">
            Not every business problem needs another automation tool.
          </h2>
          <p className="approach__aside">
            If I don’t think software is the answer, I’ll say so on the first
            call.
          </p>
        </div>
        <div className="split__b approach__body">
          <p>
            Most businesses don’t have an automation problem. They have a
            process problem that looks like a tool problem. The tool handles
            the easy cases, then something unusual happens and it breaks —
            because what was needed was a system built around how the business
            actually works.
          </p>
          <p>
            I start from the problem, not from the tool. Sometimes the answer
            is custom software. Sometimes it’s a workflow connecting systems
            you already pay for. Sometimes it’s AI where judgement is needed
            and plain code where it isn’t. Sometimes the right move is deleting
            a step instead of automating it.
          </p>
          <p>
            Your process works — it got the business this far. The job is to
            keep what works and take out the manual part.
          </p>
        </div>
      </section>

      {/* ---------- Process (step sequence) ---------- */}
      <section className="wrap split process" aria-labelledby="process-title">
        <div className="split__a">
          <h2 id="process-title">How I work</h2>
          <p className="problem__note">
            Understand → Design → Build → Deploy → Maintain. You work with me
            directly the whole way — the person who maps the problem is the
            person who builds the system.
          </p>
        </div>
        <div className="split__b">
          <ol className="steps">
            <li>
              <span className="steps__num">01</span>
              <div>
                <h3>Understand</h3>
                <p>
                  You show me how the process works today. I ask the awkward
                  questions and map where time and money leak.
                </p>
              </div>
            </li>
            <li>
              <span className="steps__num">02</span>
              <div>
                <h3>Design</h3>
                <p>
                  You get the plan before any code: what gets built, what it
                  replaces, what it costs. Nothing starts until that’s agreed.
                </p>
              </div>
            </li>
            <li>
              <span className="steps__num">03</span>
              <div>
                <h3>Build</h3>
                <p>
                  I build it, and you see it take shape at each stage — not a
                  black box that appears at the end.
                </p>
              </div>
            </li>
            <li>
              <span className="steps__num">04</span>
              <div>
                <h3>Deploy</h3>
                <p>
                  It goes live against real data, with documentation your team
                  can actually use.
                </p>
              </div>
            </li>
            <li>
              <span className="steps__num">05</span>
              <div>
                <h3>Maintain</h3>
                <p>
                  Systems drift as businesses change. I stay on for fixes,
                  changes, and the next stage once this one is running.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ---------- Things I’ve built (break-out · portfolio) ---------- */}
      <section className="wrap work" id="work" aria-labelledby="work-title">
        <div className="work__head">
          <h2 id="work-title">Things I’ve built</h2>
          <p className="problem__note">
            Real projects, in the same format every time: the problem, the
            system, what it does. Selected from three years of client and
            product work.
          </p>
        </div>

        <div className="work__grid">
          <article className="work-card">
            <p className="work-card__cat">Business operations system</p>
            <h3>
              ETC Organic
              <span className="work-card__where">Bangladesh</span>
            </h3>
            <dl>
              <dt>Problem</dt>
              <dd>
                An MLM medical-products company running e-commerce, back
                office, and field activity on separate systems.
              </dd>
              <dt>System built</dt>
              <dd>
                Three connected products on one data model: an e-commerce
                platform, a custom ERP, and an Android app.
              </dd>
              <dt>What it does</dt>
              <dd>
                Runs the binary-tree compensation engine — bonuses distributed
                across seven generations from tree position and referral
                activity — tracks a points economy end to end, and keeps one
                stock number in sync across online and in-store sales.
                Role-based permissions over orders, stock, and financial data.
              </dd>
            </dl>
            <p className="work-card__stack">
              Architecture lead · React · Node · MongoDB · React Native
            </p>
          </article>

          <article className="work-card">
            <p className="work-card__cat">Custom internal application</p>
            <h3>
              Qashup
              <span className="work-card__where">Thailand</span>
            </h3>
            <dl>
              <dt>Problem</dt>
              <dd>
                A Thai restaurant platform needed inventory that matched how a
                multi-branch chain actually moves stock.
              </dd>
              <dt>System built</dt>
              <dd>
                An inventory module inside the live platform: purchase
                requests, purchase orders, transfers, and cost accounting.
              </dd>
              <dt>What it does</dt>
              <dd>
                Stock moves between branches with real-time level impact from
                received orders and transfers, with MAC and WAC cost accounting
                over stock that never stops changing. Designed schema-first and
                validated with the client before code; later moved from
                monolith to microservices so teams could work in isolation.
              </dd>
            </dl>
            <p className="work-card__stack">
              Module owner · 2 developers managed · Next.js · NestJS · Prisma ·
              PostgreSQL · Docker
            </p>
          </article>

          <article className="work-card">
            <p className="work-card__cat">Custom internal application</p>
            <h3>
              Rogue Tactical
              <span className="work-card__where">USA</span>
            </h3>
            <dl>
              <dt>Problem</dt>
              <dd>
                A gun shop running employees, vendors, orders, invoices, and
                legal files with nothing holding it together.
              </dd>
              <dt>System built</dt>
              <dd>
                An internal management system with a central document hub for
                licences and permits.
              </dd>
              <dt>What it does</dt>
              <dd>
                Employee and vendor management, orders, invoices, expense
                tracking, and role-based access throughout — sensitive legal
                and financial data stays restricted to authorised roles.
                Notification settings for permit renewals and equipment
                maintenance. Shipped in three months.
              </dd>
            </dl>
            <p className="work-card__stack">MERN · TailwindCSS</p>
          </article>

          <article className="work-card">
            <p className="work-card__cat">Automated lead workflow</p>
            <h3>
              Automation Opportunity Scanner
              <span className="work-card__where">deXevel</span>
            </h3>
            <dl>
              <dt>Problem</dt>
              <dd>
                Prospects couldn’t see where their website was losing
                enquiries, and there was no honest first step before a sales
                call.
              </dd>
              <dt>System built</dt>
              <dd>
                An 8-step deterministic diagnostic that audits any company
                website.
              </dd>
              <dt>What it does</dt>
              <dd>
                Produces a client-side gap report plus a branded PDF in under
                60 seconds. Free, no signup — it’s the first step of every
                conversation I have.
              </dd>
            </dl>
            <p className="work-card__stack">Live at dexevel.co</p>
          </article>

          <article className="work-card">
            <p className="work-card__cat">AI business assistant</p>
            <h3>
              Personal AI agent stack
              <span className="work-card__where">deXevel</span>
            </h3>
            <dl>
              <dt>Problem</dt>
              <dd>
                Outbound list-building, message drafting, and pipeline tracking
                were slow by hand and expensive through paid SDR tooling.
              </dd>
              <dt>System built</dt>
              <dd>
                A personal AI agent stack: local agent runtime, n8n workflows,
                and LLM APIs.
              </dd>
              <dt>What it does</dt>
              <dd>
                Handles list-building, message drafting, lead dossiers, and
                pipeline tracking on infrastructure I own and run. Replaced
                paid SDR subscriptions with systems I control.
              </dd>
            </dl>
            <p className="work-card__stack">LLM APIs · n8n · Node.js</p>
          </article>
        </div>

        {/* Testimonial slot — to confirm: client-approved quotes + names only. Never invent. */}
        <p className="work__more">
          Also built: Qravy — a digital menu and ordering system for
          restaurants. TreatMe — a marketplace for gifting meals at any
          restaurant. Shwapno — QR-driven ERP and e-commerce with live stock
          across branches. Want detail on any of these — architecture,
          trade-offs, what I’d do differently? Ask on a call.
        </p>
      </section>

      {/* ---------- About ---------- */}
      <section className="wrap split about" aria-labelledby="about-title">
        <div className="split__a about__body">
          <h2 id="about-title">About</h2>
          <p>
            I’ve spent three years building and running software companies. I
            co-founded Perceptron, a software agency where I led technical
            direction and delivery across 48 repositories and 15+ product
            lines — ERP, e-commerce, inventory, compensation engines, internal
            tools — for client companies in Thailand, the USA, and Bangladesh.
            In December 2025 I started deXevel, and I run it solo.
          </p>
          <p>
            That last part matters. The person who diagnoses the problem is the
            person who writes the code. No account manager, no handoff, no
            three-person team where one is learning on your budget. I do the
            full arc — requirements, system design, schema, code, review,
            deployment, and the conversations in between.
          </p>
          <p>
            If you want to see how I think before we talk, run the scanner at{" "}
            <a href="https://dexevel.co">dexevel.co</a> on your own website.
            It’s free, it takes minutes, and it’s a fair sample of the work.
          </p>
        </div>
        <div className="split__b">
          <ul className="about__facts">
            <li>
              <span className="about__fact-label">Founder</span>
              <span className="about__fact-value">
                deXevel — AI automation and revenue systems, December 2025 –
                present
              </span>
            </li>
            <li>
              <span className="about__fact-label">Co-founder</span>
              <span className="about__fact-value">
                Perceptron — software agency, August 2023 – present
              </span>
            </li>
            <li>
              <span className="about__fact-label">Education</span>
              <span className="about__fact-value">
                Computer Science Engineering, North South University
              </span>
            </li>
            <li>
              <span className="about__fact-label">Market</span>
              <span className="about__fact-value">
                Businesses across the UK and Ireland
              </span>
            </li>
            <li>
              <span className="about__fact-label">Calls</span>
              <span className="about__fact-value">Zoom or Google Meet</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="wrap split final" aria-labelledby="final-title">
        <div className="split__a">
          <h2 id="final-title">
            Have a process that shouldn’t require so much manual work?
          </h2>
          <p className="final__body">
            Tell me how it currently works. You don’t need to know whether the
            answer is software, automation, or AI — that’s the diagnosis, and
            it comes first.
          </p>
        </div>
        <div className="split__b final__actions">
          <a className="cta cta--primary" href={CONTACT_URL}>
            Start a conversation
            <span aria-hidden="true">→</span>
          </a>
          <div className="final__notes">
            <p>
              Not sure yet? Describe the process that annoys you most. That’s
              enough for a first conversation.
            </p>
            <p>
              How pricing works: after the diagnosis you get the plan and the
              price before any build starts. Fixed scope, agreed up front — no
              open-ended hourly billing.
            </p>
            <p>
              Prefer email?{" "}
              <a href="mailto:asifvudi@gmail.com">asifvudi@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
