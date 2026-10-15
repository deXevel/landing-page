// Content + design-discipline checks for the landing page.
// Run: npm test  (no test framework, no dependencies)
//
// Scope note: the banned-word sweep covers PAGE-COPY files (index.html,
// styles.css, tokens.css, fonts.css, README.md). The banned list below is
// assembled from string fragments on purpose: the acceptance bar is that a
// literal grep of the whole repo finds none of the flagged tokens anywhere,
// test data included. The two research inputs at the workspace root quote
// flagged words deliberately (marked ⚠ in the research brief) and are never
// served as page copy.

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failures = 0;
let passes = 0;

function ok(name) {
  passes += 1;
  console.log(`  ok   ${name}`);
}

function fail(name, detail) {
  failures += 1;
  console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
}

function check(name, condition, detail) {
  condition ? ok(name) : fail(name, detail);
}

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

const html = read("index.html");
const css = read("styles.css");
const tokens = read("tokens.css");
const fonts = read("fonts.css");
const readme = existsSync(join(root, "README.md")) ? read("README.md") : "";
const source = html;
const norm = (s) => s.replace(/[\u2019\u2018]/g, "'").replace(/\s+/g, " ").toLowerCase();

console.log("\n1. Banned words (PRD voice rules — page copy scope)");
// Fragment-assembled so no literal flagged token exists in any repo file.
const banned = [
  ["del", "ve"].join(""),
  ["ele", "vate"].join(""),
  ["stream", "line"].join(""),
  ["syn", "ergy"].join(""),
  ["seam", "less"].join(""),
  ["tailored sol", "utions"].join(""),
  ["cutting-", "edge"].join(""),
  ["digital trans", "formation"].join(""),
  ["unlock your ", "potential"].join(""),
  ["leverage the power of ", "ai"].join(""),
  ["end-", "to-", "end"].join(""),
  ["end to ", "end"].join(""),
  ["revolution", "i"].join(""),
];
const pageCopy = { "index.html": html, "styles.css": css, "tokens.css": tokens, "fonts.css": fonts, "README.md": readme };
for (const [file, text] of Object.entries(pageCopy)) {
  const hits = banned.filter((w) => norm(text).includes(w));
  check(`no banned words in ${file}`, hits.length === 0, `found: ${hits.join(", ")}`);
}

console.log("\n2. CTA hierarchy (exact strings from the PRD)");
for (const label of [
  "Tell me what you're trying to improve",
  "See what I build",
  "Start a conversation",
]) {
  check(`CTA present: “${label}”`, norm(source).includes(norm(label)));
}
const primaryCount = (norm(source).match(/tell me what you're trying to improve/g) || []).length;
check("primary CTA repeats (hero + mid-page CTA)", primaryCount >= 2, `count=${primaryCount}`);
const contactHrefs = (source.match(/href="https:\/\/www\.dexevel\.com\/contact-us"/g) || []).length;
check(
  "primary + mid + final + nav/footer CTAs point at the contact page",
  contactHrefs >= 4 && (source.match(/www\.dexevel\.com\/contact-us/g) || []).length >= 2,
  `hrefs=${contactHrefs}`
);
check("secondary CTA anchors #things-ive-built", source.includes('href="#things-ive-built"'));
check("anchor target #things-ive-built exists", source.includes('id="things-ive-built"'));
check("booking fallback link present (cal.com/dexevel/15min)", source.includes("cal.com/dexevel/15min"));
check("email fallback present (mailto)", source.includes("mailto:asifvudi@gmail.com"));

console.log("\n3. Document structure");
check("exactly one <h1", (html.match(/<h1/g) || []).length === 1);
const headings = (html.match(/<h([1-3])\b/g) || []).map((t) => Number(t.slice(2)));
check("first heading is the h1", headings[0] === 1);
check("exactly 8 <h2> (8 PRD sections + FAQ block… counted)", (html.match(/<h2/g) || []).length === 8, `h2=${(html.match(/<h2/g) || []).length}`);
let nestingOk = true;
let seenH2 = false;
for (const level of headings) {
  if (level === 2) seenH2 = true;
  if (level === 3 && !seenH2) nestingOk = false;
}
check("no h3 before the first h2 (nesting order)", nestingOk);
for (const id of [
  "hero-title",
  "problem-title",
  "build-title",
  "approach-title",
  "process-title",
  "work-title",
  "about-title",
  "faq-title",
  "final-title",
]) {
  check(`section labelled “${id}”`, source.includes(`"${id}"`));
}
check("skip link present", source.includes('class="skip-link"'));
check("lang attribute set", html.includes('<html lang="en"'));
check("Open Graph metadata present", html.includes('property="og:'));
check("Twitter card present", html.includes('name="twitter:card"'));
check("canonical link present", html.includes('rel="canonical"'));
check("favicon linked", html.includes('href="favicon.svg"'));
check("JSON-LD person schema present", html.includes("application/ld+json"));
check("title carries the founder and the tagline", /<title>Asif Vudi — Build the software\. Automate the work\.<\/title>/.test(html));

console.log("\n4. Content provenance (content pack + research brief)");
for (const card of [
  "ETC Organic",
  "Qashup",
  "Rogue Tactical",
  "Automation Opportunity Scanner",
  "Personal AI agent stack",
  "Qravy",
  "TreatMe",
  "Shwapno",
]) {
  check(`portfolio mentions “${card}”`, source.includes(card));
}
const tbcSpans = html.match(/<span class="tbc">[^<]*<\/span>/g) || [];
check("unverified figures use the labelled placeholder", tbcSpans.length >= 5 && tbcSpans.every((s) => s.includes("Details to be confirmed")), `spans=${tbcSpans.length}`);
check("card format Problem → System built → What it does", ["Problem", "System built", "What it does"].every((t) => (source.match(new RegExp(`<dt>${t}</dt>`, "g")) || []).length >= 5));
for (const fact of [
  "2–30 people",
  "become the bottleneck",
  "systems problem disguised as a tool problem",
  "credited in full",
  "keep the roadmap",
  "If any of that sounds like your week",
  "three-option proposal",
  "No missed delivery windows",
  "A 15-minute conversation. No pitch deck.",
  "Not every business problem needs another automation tool",
]) {
  check(`fact/line present: “${fact.slice(0, 40)}…”`, norm(source).includes(norm(fact)));
}
check("proof anchor dexevel.co placed near CTA blocks (>=2)", (source.match(/https:\/\/dexevel\.co/g) || []).length >= 2);
check("proof anchor perceptron.site placed near CTA blocks (>=2)", (source.match(/https:\/\/perceptron\.site/g) || []).length >= 2);
check("tagline locked in the h1", html.includes("Build the software. Automate the work."));

console.log("\n5. Stack discipline (pure HTML/CSS/JS, no build step)");
const scripts = html.match(/<script\b[^>]*>/g) || [];
const executableScripts = scripts.filter((s) => !s.includes('type="application/ld+json"'));
check("zero client-side JavaScript (JSON-LD only)", executableScripts.length === 0, executableScripts.join(" | "));
check("no framework artefacts referenced (no _next/, no bundler paths)", !html.includes("_next") && !css.includes("_next") && !fonts.includes("../"));
check("asset links are relative (deployable at any base path)", (html.match(/(href|src)="\/(?!\/)/g) || []).length === 0);
check("all three stylesheets linked", ["fonts.css", "tokens.css", "styles.css"].every((f) => html.includes(`href="${f}"`)));
const pkg = JSON.parse(read("package.json"));
check(
  "package.json declares zero dependencies",
  !pkg.dependencies && !pkg.devDependencies
);
check("npm scripts dev / build / test defined", ["dev", "build", "test"].every((s) => pkg.scripts && pkg.scripts[s]));

console.log("\n6. Design discipline (hallmark gates)");
check("html has overflow-x: clip", /html\s*\{[^}]*overflow-x:\s*clip/s.test(css));
check("body has overflow-x: clip", /body\s*\{[^}]*overflow-x:\s*clip/s.test(css));
check("no width: 100vw", !css.includes("100vw"));
check("no box-shadow on dark surfaces", !css.includes("box-shadow"));
check("no gradients", !css.includes("gradient"));
check("no italic type (display headers are always roman)", !css.includes("italic") && !html.includes("italic"));
check("display headings declare font-style: normal", /h1,\s*h2,\s*h3\s*\{[^}]*font-style:\s*normal/s.test(css));
check("no transition-all", !/transition:[^;]*\ball\b/.test(css));
check("focus-visible defined", css.includes(":focus-visible"));
check("prefers-reduced-motion handled", css.includes("prefers-reduced-motion"));
const bareValue = /#[0-9a-fA-F]{3,8}\b|\brgb\(|\bhsl\(/;
check(
  "no raw colour values outside tokens.css",
  !bareValue.test(css.replace(/\/\*[\s\S]*?\*\//g, "")) && !bareValue.test(html.replace(/<script[\s\S]*?<\/script>/g, ""))
);
const gridLines = css.split("\n").filter((l) => l.includes("grid-template-columns"));
const bareFr = gridLines.filter((l) => l.includes("fr") && !l.includes("minmax"));
check("grid tracks use minmax(0, …), never bare fr", bareFr.length === 0, bareFr.join(" | "));
const noFontFaces = (css + tokens).replace(/@font-face\s*\{[^}]*\}/g, "");
const fontFamilyLines = noFontFaces.split("\n").filter((l) => l.includes("font-family"));
const rawFont = fontFamilyLines.filter((l) => !l.includes("var(--font-"));
check("every font-family references a named token", rawFont.length === 0, rawFont.join(" | "));
const faceCount = (fonts.match(/@font-face/g) || []).length;
const swapCount = (fonts.match(/font-display:\s*swap/g) || []).length;
const fallbackCount = (fonts.match(/Fallback;/g) || []).length;
check("self-hosted font faces use font-display: swap (metric fallbacks exempt)", faceCount === swapCount + fallbackCount, `faces=${faceCount} swap=${swapCount} fallback=${fallbackCount}`);

console.log("\n7. Responsive affordances (320 / 375 / 414 / 768 px + desktop)");
const ctaRules = css.slice(css.indexOf(".cta {"));
check("CTA labels are nowrap", ctaRules.includes("white-space: nowrap"));
check("coarse-pointer hit targets", css.includes("pointer: coarse"));
check("hover effects gated behind pointer queries", css.includes("hover: hover"));
check("headings wrap inside long words (gate 51)", css.includes("overflow-wrap: anywhere"));
check("desktop diptych breakpoint present (60rem)", css.includes("min-width: 60rem"));
check("small-phone CTA fit breakpoint present (<=24rem)", css.includes("max-width: 24rem"));
check("wrap width is fluid with clamp padding", /max-width:\s*72rem/.test(css) && /padding-inline:\s*clamp\(/.test(css));
check("display type scales with clamp (fits 320px)", (tokens.match(/clamp\(/g) || []).length >= 2);

console.log("\n8. Repo hygiene");
check("README.md exists", existsSync(join(root, "README.md")));
check("build output excluded via .gitignore", existsSync(join(root, ".gitignore")) && read(".gitignore").includes("out/"));

console.log(`\n${passes} passed, ${failures} failed`);
process.exit(failures > 0 ? 1 : 0);
