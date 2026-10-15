// Validation build. Run: npm run build
// 1. runs the full check suite (npm test) — any failure fails the build;
// 2. syncs the deployable static tree into out/.
// The repo root is also directly deployable; out/ is the clean copy.

import { spawnSync } from "node:child_process";
import { rmSync, mkdirSync, cpSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "out");

console.log("build · running checks first");
const result = spawnSync(process.execPath, [join(root, "scripts", "check.mjs")], {
  stdio: "inherit",
});
if (result.status !== 0) {
  console.error("build · checks failed — nothing written to out/");
  process.exit(1);
}

const files = ["index.html", "tokens.css", "styles.css", "fonts.css", "favicon.svg", "og-image.png", "README.md"];
const dirs = ["fonts"];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const f of files) cpSync(join(root, f), join(out, f));
for (const d of dirs) cpSync(join(root, d), join(out, d), { recursive: true });

const count = readdirSync(out).length;
console.log(`build · ok — ${count} entries written to out/`);
