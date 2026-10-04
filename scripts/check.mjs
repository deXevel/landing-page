// Content + design-discipline checks for the landing page.
// Run: npm test  (no test framework, no dependencies)

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
const source = html;
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
    (source.match(/href="https:\/\/www\.dexevel\.com\/contact-us"/g) || [])
      .length >= 4
);

console.log("\n3. Document structure");
check("exactly one <h1", (html.match(/<h1/g) || []).length === 1);
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
check("skip link present", source.includes('class="skip-link"'));
check("lang attribute set", html.includes('<html lang="en"'));
check("Open Graph metadata present", html.includes('property="og:'));
check("JSON-LD person schema present", html.includes("application/ld+json"));

console.log("\n4. Stack discipline (pure HTML/CSS/JS, no build step)");
const scripts = html.match(/<script\b[^>]*>/g) || [];
const executableScripts = scripts.filter(
  (s) => !s.includes('type="application/ld+json"')
);
check(
  "zero client-side JavaScript (JSON-LD only)",
  executableScripts.length === 0,
  executableScripts.join(" | ")
);
check(
  "no framework artefacts referenced (no _next/, no bundler paths)",
  !html.includes("_next") && !css.includes("_next") && !fonts.includes("../")
);
check(
  "asset links are relative (deployable at any base path)",
  (html.match(/(href|src)="\/(?!\/)/g) || []).length === 0
);
check(
  "all three stylesheets linked",
  ["fonts.css", "tokens.css", "styles.css"].every((f) =>
    html.includes(`href="${f}"`)
  )
);
check(
  "no package dependencies left behind",
  !existsSync(join(root, "package-lock.json")) &&
    !existsSync(join(root, "node_modules"))
);

console.log("\n5. Design discipline (hallmark gates)");
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
  !bareValue.test(css.replace(/\/\*[\s\S]*?\*\//g, "")) && !bareValue.test(html)
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
const noFontFaces = (css + tokens).replace(/@font-face\s*\{[^}]*\}/g, "");
const fontFamilyLines = noFontFaces
  .split("\n")
  .filter((l) => l.includes("font-family"));
const rawFont = fontFamilyLines.filter((l) => !l.includes("var(--font-"));
check(
  "every font-family references a named token",
  rawFont.length === 0,
  rawFont.join(" | ")
);
const faceCount = (fonts.match(/@font-face/g) || []).length;
const swapCount = (fonts.match(/font-display:\s*swap/g) || []).length;
const fallbackCount = (fonts.match(/Fallback;/g) || []).length;
check(
  "self-hosted font faces use font-display: swap (metric fallbacks exempt)",
  faceCount === swapCount + fallbackCount,
  `faces=${faceCount} swap=${swapCount} fallback=${fallbackCount}`
);

console.log("\n6. Responsive affordances");
const ctaRules = css.slice(css.indexOf(".cta {"));
check("CTA labels are nowrap", ctaRules.includes("white-space: nowrap"));
check("coarse-pointer hit targets", css.includes("pointer: coarse"));
check("hover effects gated behind pointer queries", css.includes("hover: hover"));

console.log("\n7. Repo hygiene");
check("README.md exists", existsSync(join(root, "README.md")));
check(
  "build artefacts excluded via .gitignore",
  existsSync(join(root, ".gitignore"))
);

console.log(`\n${passes} passed, ${failures} failed`);
process.exit(failures > 0 ? 1 : 0);
