// Content + design-discipline checks for the landing page.
// Run: npm test  (no test framework, no dependencies)

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
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

function walk(rel, out = []) {
  const abs = join(root, rel);
  for (const entry of readdirSync(abs)) {
    const child = join(rel, entry);
    if (statSync(join(root, child)).isDirectory()) walk(child, out);
    else out.push(child);
  }
  return out;
}

const page = read("app/page.tsx");
const layout = read("app/layout.tsx");
const css = read("app/globals.css");
const tokens = read("tokens.css");
const source = page + "\n" + layout;
const norm = (s) => s.replace(/[\u2019\u2018]/g, "'").toLowerCase();

console.log("\n1. Banned words (PRD voice rules)");
const banned = [
  "delve",
  "elevate",
  "streamline",
  "synergy",
  "seamless",
  "tailored solutions",
  "cutting-edge",
  "digital transformation",
  "unlock your potential",
  "leverage the power of ai",
  "end-to-end",
];
const bannedHits = banned.filter((w) => norm(source).includes(w));
check(
  `none of ${banned.length} banned words appear in page copy`,
  bannedHits.length === 0,
  `found: ${bannedHits.join(", ")}`
);

console.log("\n2. CTA hierarchy (exact strings from the PRD)");
for (const label of [
  "Tell me what you're trying to improve",
  "See what I build",
  "Start a conversation",
]) {
  check(`CTA present: “${label}”`, norm(source).includes(norm(label)));
}
check(
  "primary + final CTAs point at the contact page",
  (source.match(/www\.dexevel\.com\/contact-us/g) || []).length >= 2 &&
    (source.match(/href=\{CONTACT_URL\}/g) || []).length >= 4
);

console.log("\n3. Document structure");
check("exactly one <h1", (page.match(/<h1/g) || []).length === 1);
for (const id of [
  "hero-title",
  "problem-title",
  "build-title",
  "approach-title",
  "process-title",
  "work-title",
  "about-title",
  "final-title",
]) {
  check(`section labelled “${id}”`, source.includes(`"${id}"`));
}
check("skip link present", source.includes('className="skip-link"'));
check("lang attribute set", layout.includes('lang="en"'));
check("Open Graph metadata present", layout.includes("openGraph"));
check("JSON-LD person schema present", layout.includes("application/ld+json"));

console.log("\n4. Design discipline (hallmark gates)");
check("html has overflow-x: clip", /html\s*\{[^}]*overflow-x:\s*clip/s.test(css));
check("body has overflow-x: clip", /body\s*\{[^}]*overflow-x:\s*clip/s.test(css));
check("no width: 100vw", !css.includes("100vw"));
check("no box-shadow on dark surfaces", !css.includes("box-shadow"));
check("no gradients", !css.includes("gradient"));
check("no italic type", !css.includes("italic"));
check("no transition-all", !/transition:[^;]*\ball\b/.test(css));
check("focus-visible defined", css.includes(":focus-visible"));
check("prefers-reduced-motion handled", css.includes("prefers-reduced-motion"));
const bareValue = /#[0-9a-fA-F]{3,8}\b|\brgb\(|\bhsl\(/;
check(
  "no raw colour values outside tokens.css",
  !bareValue.test(css.replace(/\/\*[\s\S]*?\*\//g, "")) && !bareValue.test(page)
);
const gridLines = css
  .split("\n")
  .filter((l) => l.includes("grid-template-columns"));
const bareFr = gridLines.filter(
  (l) => l.includes("fr") && !l.includes("minmax")
);
check(
  "grid tracks use minmax(0, …), never bare fr",
  bareFr.length === 0,
  bareFr.join(" | ")
);
const fontFamilyLines = (css + tokens)
  .split("\n")
  .filter((l) => l.includes("font-family"));
const rawFont = fontFamilyLines.filter((l) => !l.includes("var(--font-"));
check(
  "every font-family references a named token",
  rawFont.length === 0,
  rawFont.join(" | ")
);

console.log("\n5. Responsive affordances");
const ctaRules = css.slice(css.indexOf(".cta {"));
check("CTA labels are nowrap", ctaRules.includes("white-space: nowrap"));
check("coarse-pointer hit targets", css.includes("pointer: coarse"));
check("hover effects gated behind pointer queries", css.includes("hover: hover"));

console.log("\n6. Repo hygiene");
check("README.md exists", existsSync(join(root, "README.md")));
check(
  "no node_modules or out committed check needed (build artefacts excluded via .gitignore)",
  existsSync(join(root, ".gitignore"))
);

console.log(`\n${passes} passed, ${failures} failed`);
process.exit(failures > 0 ? 1 : 0);
