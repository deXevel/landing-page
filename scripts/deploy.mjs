// Deploy: npm run deploy ["<commit message>"]
// Runs the validation build (scripts/build.mjs → out/), then publishes out/
// to the gh-pages branch of origin. Needs git push credentials for the repo.
// Note: npm run build wipes out/ on every run — out/ is build output only,
// never a checkout. This script clones gh-pages into a temp dir instead.

import { spawnSync } from "node:child_process";
import { rmSync, cpSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function run(cmd, args, cwd) {
  const r = spawnSync(cmd, args, { stdio: "inherit", cwd });
  if (r.status !== 0) {
    console.error(`deploy · failed: ${cmd} ${args.join(" ")}`);
    process.exit(r.status ?? 1);
  }
}

// 1. validation build — refuses to write out/ if any check fails
run(process.execPath, [join(root, "scripts", "build.mjs")], root);

// 2. resolve origin and clone gh-pages fresh into a temp dir
const remote = spawnSync("git", ["-C", root, "remote", "get-url", "origin"], {
  encoding: "utf8",
});
if (remote.status !== 0) {
  console.error("deploy · no origin remote configured");
  process.exit(1);
}
const url = remote.stdout.trim();
const tmp = join(tmpdir(), `gh-pages-deploy-${process.pid}`);
rmSync(tmp, { recursive: true, force: true });
run("git", ["clone", "--depth", "1", "--branch", "gh-pages", "--single-branch", url, tmp], root);

// 3. replace the checkout contents with out/ (keep .git; refresh .nojekyll)
for (const entry of readdirSync(tmp)) {
  if (entry === ".git") continue;
  rmSync(join(tmp, entry), { recursive: true, force: true });
}
for (const entry of readdirSync(join(root, "out"))) {
  cpSync(join(root, "out", entry), join(tmp, entry), { recursive: true });
}
writeFileSync(join(tmp, ".nojekyll"), "");

// 4. commit and push
run("git", ["-C", tmp, "add", "-A"], root);
const msg = process.argv[2] || `deploy: ${new Date().toISOString().slice(0, 10)}`;
run("git", ["-C", tmp, "commit", "-m", msg], root);
run("git", ["-C", tmp, "push", "origin", "gh-pages"], root);
rmSync(tmp, { recursive: true, force: true });
console.log("deploy · pushed out/ to gh-pages");
