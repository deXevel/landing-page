// Release QA for the landing page: accessibility, metadata, responsive layout.
// Run: npm run qa   (zero npm dependencies; drives headless Chrome/Edge over CDP)
//
// What it verifies:
//   1. Landmarks        — header / nav / main / footer present and correctly placed
//   2. Images           — every <img> carries non-empty alt text
//   3. Keyboard         — real Tab-key walkthrough of every interactive element,
//                         visible focus indicator on each, skip link works
//   4. Responsive       — 320 / 375 / 414 / 768 / 1280 px: no horizontal overflow,
//                         display headers not italic, CTAs inside the viewport
//   5. Contrast         — WCAG AA (4.5:1) for every text/background token pair
//                         actually used by body and CTA text
//   6. Metadata         — title, description, canonical, full Open Graph + Twitter
//                         card tags referencing the founder and the tagline, favicon

import { readFileSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL, fileURLToPath } from "node:url";
import { spawn, spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let passes = 0;
let failures = 0;

function ok(name, detail) {
  passes += 1;
  console.log(`  ok   ${name}${detail ? ` — ${detail}` : ""}`);
}
function fail(name, detail) {
  failures += 1;
  console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
}
function check(name, condition, detail) {
  condition ? ok(name, detail) : fail(name, detail);
}
function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

// ---------------------------------------------------------------- colour math
// oklch(L% C H) -> linear sRGB -> WCAG contrast ratio (exact, no browser needed)
function oklchToLinearRgb(L, C, H) {
  const h = (H * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}
function luminance([r, g, b]) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(fg, bg) {
  const a = luminance(fg) + 0.05;
  const b = luminance(bg) + 0.05;
  return Math.max(a, b) / Math.min(a, b);
}

function parseTokens(css) {
  const out = {};
  const re = /--(color-[a-z0-9-]+):\s*oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)\s*\)/g;
  let m;
  while ((m = re.exec(css))) {
    out[m[1]] = oklchToLinearRgb(Number(m[2]) / 100, Number(m[3]), Number(m[4]));
  }
  return out;
}

// ------------------------------------------------------------- CDP plumbing
function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "google-chrome",
    "chromium",
  ].filter(Boolean);
  for (const c of candidates) {
    if (c.includes("/") || c.includes("\\")) {
      if (existsSync(c)) return c;
    } else {
      const r = spawnSync(c, ["--version"], { stdio: "ignore" });
      if (r.status === 0) return c;
    }
  }
  return null;
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      }
    });
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    });
  }
}

async function connect(url) {
  const ws = new WebSocket(url);
  await new Promise((res, rej) => {
    ws.addEventListener("open", res, { once: true });
    ws.addEventListener("error", rej, { once: true });
  });
  return new CDP(ws);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function evalJs(cdp, expression) {
  const r = await cdp.send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text);
  return r.result.value;
}

// ------------------------------------------------------------------- run
const html = read("index.html");
const css = read("styles.css");
const tokensCss = read("tokens.css");

console.log("\nA. Metadata (title, description, canonical, Open Graph, Twitter)");
const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
check(
  "title carries the founder and the tagline",
  title.includes("Asif Vudi") && title.includes("Build the software. Automate the work."),
  title
);
const desc = (html.match(/<meta\s+name="description"\s+content="([^"]*)"/) || [])[1] || "";
check("meta description present (>= 50 chars)", desc.length >= 50, `${desc.length} chars`);
check("canonical present", /<link rel="canonical" href="https:\/\/[^"]+/.test(html));
for (const prop of [
  "og:type",
  "og:url",
  "og:site_name",
  "og:title",
  "og:description",
  "og:locale",
  "og:image",
  "og:image:width",
  "og:image:height",
  "og:image:alt",
]) {
  check(`Open Graph tag ${prop}`, new RegExp(`property="${prop.replace(/:/g, "\\:")}"`).test(html));
}
for (const name of ["twitter:card", "twitter:title", "twitter:description", "twitter:image"]) {
  check(`Twitter tag ${name}`, html.includes(`name="${name}"`));
}
const ogTitle = (html.match(/property="og:title"\s+content="([^"]*)"/) || [])[1] || "";
check(
  "OG/Twitter title references founder + tagline",
  ogTitle.includes("Asif Vudi") && ogTitle.includes("Build the software. Automate the work."),
  ogTitle
);
const ogImage = (html.match(/property="og:image"\s+content="([^"]*)"/) || [])[1] || "";
const ogImagePath = ogImage.split("/").pop();
check("og:image points at an absolute URL", /^https?:\/\//.test(ogImage), ogImage);
check("og:image asset exists in the repo", existsSync(join(root, ogImagePath)), ogImagePath);
check("favicon linked", html.includes('href="favicon.svg"') && existsSync(join(root, "favicon.svg")));
const ld = (html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/) || [])[1];
let ldOk = false;
try {
  const parsed = JSON.parse(ld);
  ldOk = parsed["@type"] === "Person" && parsed.name === "Asif Vudi";
} catch {}
check("JSON-LD Person schema parses and names the founder", ldOk);

console.log("\nB. Landmarks and alt text (static)");
check("banner landmark: <header>", /<header\b/.test(html));
check("main landmark: <main> (exactly one)", (html.match(/<main\b/g) || []).length === 1);
check("contentinfo landmark: <footer>", /<footer\b/.test(html));
const navCount = (html.match(/<nav\b/g) || []).length;
check("navigation landmarks: >= 2 (primary + footer), each labelled", navCount >= 2, `nav=${navCount}`);
check("primary nav labelled", /<nav[^>]*aria-label="Primary"/.test(html));
const imgTags = html.match(/<img\b[^>]*>/g) || [];
const missingAlt = imgTags.filter((t) => !/alt="[^"]+"/.test(t) && !/aria-hidden="true"/.test(t));
check(
  `every <img> has alt text (${imgTags.length} found)`,
  missingAlt.length === 0,
  missingAlt.join(" | ")
);
const badTabindex = html.match(/tabindex="\s*[1-9]/g) || [];
check("no positive tabindex (natural tab order preserved)", badTabindex.length === 0);

console.log("\nC. Contrast — WCAG AA from the locked tokens");
const T = parseTokens(tokensCss);
const requiredPairs = [
  ["ink-2 on paper (body text)", "color-ink-2", "color-paper"],
  ["ink on paper (headings)", "color-ink", "color-paper"],
  ["ink on paper-3 (skip link)", "color-ink", "color-paper-3"],
  ["ink on paper-2 (card headings)", "color-ink", "color-paper-2"],
  ["ink-2 on paper-2 (card body)", "color-ink-2", "color-paper-2"],
  ["muted on paper (labels, footer links)", "color-muted", "color-paper"],
  ["muted on paper-2 (card labels)", "color-muted", "color-paper-2"],
  ["accent on paper (CTA + link text)", "color-accent", "color-paper"],
  ["accent on paper-2 (card link text)", "color-accent", "color-paper-2"],
  ["accent-ink on accent (CTA hover fill)", "color-accent-ink", "color-accent"],
  ["focus ring on paper", "color-focus", "color-paper"],
];
for (const [label, fg, bg] of requiredPairs) {
  if (!T[fg] || !T[bg]) {
    fail(`contrast ${label}`, `token missing (${fg} / ${bg})`);
    continue;
  }
  const r = contrast(T[fg], T[bg]);
  check(`contrast ${label} >= 4.5:1`, r >= 4.5, r.toFixed(2) + ":1");
}
const informational = [
  ["neutral on paper (decorative separators, disabled CTA)", "color-neutral", "color-paper"],
];
for (const [label, fg, bg] of informational) {
  const r = contrast(T[fg], T[bg]);
  ok(`contrast ${label} (non-text / disabled — informational)`, r.toFixed(2) + ":1");
}

console.log("\nD. Keyboard walkthrough + responsive layout (headless Chrome)");
const browserPath = findBrowser();
if (!browserPath) {
  fail("browser available for live checks", "no Chrome/Edge found — set CHROME_PATH");
} else {
  const port = 9400 + Math.floor(Math.random() * 400);
  const profile = mkdtempSync(join(tmpdir(), "qa-chrome-"));
  const chrome = spawn(
    browserPath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profile}`,
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true }
  );
  const cleanup = () => {
    try {
      chrome.kill();
    } catch {}
    try {
      rmSync(profile, { recursive: true, force: true });
    } catch {}
  };
  process.on("exit", cleanup);

  let target = null;
  for (let i = 0; i < 50 && !target; i++) {
    await sleep(200);
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      target = list.find((t) => t.type === "page");
    } catch {}
  }
  if (!target) {
    fail("headless browser started", `no CDP page target on port ${port}`);
    cleanup();
  } else {
    const cdp = await connect(target.webSocketDebuggerUrl);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Emulation.setFocusEmulationEnabled", { enabled: true });

    const url = pathToFileURL(join(root, "index.html")).href;
    await cdp.send("Page.navigate", { url });
    for (let i = 0; i < 50; i++) {
      await sleep(100);
      if ((await evalJs(cdp, "document.readyState")) === "complete") break;
    }

    // -- landmarks live
    const live = await evalJs(
      cdp,
      `(() => ({
        header: !!document.querySelector("body > header"),
        main: !!document.querySelector("body > main"),
        footer: !!document.querySelector("body > footer"),
        navs: [...document.querySelectorAll("nav")].map(n => n.getAttribute("aria-label") || ""),
      }))()`
    );
    check("live: header/main/footer are top-level landmarks", live.header && live.main && live.footer);
    check("live: every <nav> has an accessible name", live.navs.length > 0 && live.navs.every(Boolean), live.navs.join(" · "));

    // -- keyboard walkthrough
    const key = async (k, code, vk, mods = 0) => {
      const base = { key: k, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, modifiers: mods };
      await cdp.send("Input.dispatchKeyEvent", { type: "keyDown", ...base });
      await cdp.send("Input.dispatchKeyEvent", { type: "keyUp", ...base });
      await sleep(60);
    };
    // tag every focusable with its document-order index (links can share href+text)
    await evalJs(
      cdp,
      `[...document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')]
        .forEach((el, i) => el.setAttribute("data-qa-index", String(i)))`
    );
    const activeInfo = () =>
      evalJs(
        cdp,
        `(() => {
          const el = document.activeElement;
          if (!el || el === document.body) return { tag: "BODY" };
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          return {
            tag: el.tagName,
            cls: el.className || "",
            idx: el.getAttribute("data-qa-index") || "",
            text: (el.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 40),
            href: el.getAttribute("href") || "",
            outline: cs.outlineStyle + " " + cs.outlineWidth,
            outlineVisible: cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) >= 1,
            onscreen: r.width > 0 && r.height > 0 && r.top >= -1 && r.top < window.innerHeight,
          };
        })()`
      );

    await evalJs(cdp, "document.activeElement && document.activeElement.blur()");
    const order = [];
    let first = null;
    const seen = new Set();
    for (let i = 0; i < 80; i++) {
      await key("Tab", "Tab", 9);
      const info = await activeInfo();
      if (info.tag === "BODY") break;
      if (!first) first = info;
      if (seen.has(info.idx)) break; // wrapped around — full cycle collected
      seen.add(info.idx);
      order.push(info);
    }
    check("keyboard: first Tab lands on the skip link", first && first.cls.includes("skip-link"), first ? first.text : "nothing focused");
    check("keyboard: skip link becomes visible on focus", first && first.onscreen, first ? `onscreen=${first.onscreen}` : "");

    const domOrder = await evalJs(
      cdp,
      `[...document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')]
        .map(el => ({ idx: el.getAttribute("data-qa-index"), cls: el.className || "", href: el.getAttribute("href") || "" }))`
    );
    check(
      `keyboard: every interactive element reachable (${domOrder.length} in DOM, ${order.length} tab stops)`,
      domOrder.length === order.length,
      `dom=${domOrder.length} tab=${order.length}`
    );
    const orderOk = domOrder.every((d, i) => order[i] && order[i].idx === d.idx);
    check("keyboard: tab order follows document order", orderOk);
    const invisible = order.filter((e) => !e.outlineVisible);
    check(
      "keyboard: visible focus indicator on every stop",
      order.length > 0 && invisible.length === 0,
      invisible.map((e) => e.text || e.href).join(" | ")
    );

    // Shift+Tab from the last element returns to the second-to-last
    const last = domOrder[domOrder.length - 1];
    const prev = domOrder[domOrder.length - 2];
    await evalJs(cdp, `document.querySelector('[data-qa-index="${last.idx}"]').focus()`);
    await key("Tab", "Tab", 9, 8); // Shift+Tab
    const back = await activeInfo();
    check("keyboard: Shift+Tab returns to the previous stop", back.idx === prev.idx, `landed on #${back.idx} “${back.text}”`);

    // Keyboard activation: skip link -> #main, anchor CTA -> #things-ive-built
    await evalJs(cdp, `document.querySelector('[data-qa-index="0"]').focus()`);
    await key("Enter", "Enter", 13);
    await sleep(150);
    const hashAfterSkip = await evalJs(cdp, "location.hash");
    check("keyboard: Enter on the skip link jumps to #main", hashAfterSkip === "#main", hashAfterSkip || "(no hash)");

    await evalJs(cdp, `document.querySelector('a[href="#things-ive-built"]').focus()`);
    await key("Enter", "Enter", 13);
    await sleep(150);
    const hashAfterAnchor = await evalJs(cdp, "location.hash");
    check("keyboard: Enter on the anchor CTA jumps to #things-ive-built", hashAfterAnchor === "#things-ive-built", hashAfterAnchor || "(no hash)");

    // -- responsive
    for (const width of [320, 375, 414, 768, 1280]) {
      await cdp.send("Emulation.setDeviceMetricsOverride", {
        width,
        height: 800,
        deviceScaleFactor: 1,
        mobile: width < 768,
      });
      await sleep(120);
      const m = await evalJs(
        cdp,
        `(() => {
          const de = document.documentElement;
          const italics = [...document.querySelectorAll("h1, h2, h3")]
            .filter(el => getComputedStyle(el).fontStyle !== "normal").length;
          const ctaOut = [...document.querySelectorAll(".cta")]
            .filter(el => { const r = el.getBoundingClientRect(); return r.right > window.innerWidth + 1 || r.left < -1; }).length;
          return { sw: de.scrollWidth, cw: de.clientWidth, italics, ctaOut, headings: document.querySelectorAll("h1, h2, h3").length };
        })()`
      );
      check(
        `${width}px: no horizontal overflow`,
        m.sw <= m.cw,
        `scrollWidth=${m.sw} clientWidth=${m.cw}`
      );
      check(`${width}px: display headers not italic (0 of ${m.headings})`, m.italics === 0);
      check(`${width}px: all CTAs inside the viewport`, m.ctaOut === 0);
    }
    await cdp.send("Emulation.clearDeviceMetricsOverride");

    cleanup();
  }
}

console.log(`\n${passes} passed, ${failures} failed`);
process.exit(failures > 0 ? 1 : 0);
