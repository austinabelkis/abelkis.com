/**
 * Every page, actually rendered, checked for the things a build cannot see.
 *
 * Same idea as the harness on the Boulder Waldorf project: open each page at
 * desktop and phone width and assert on computed geometry — sideways scroll,
 * text squeezed to a sliver, controls too small to hit, broken images, text
 * the colour of its background, uncaught errors. Screenshots land in
 * screenshots/ so the pages can be eyeballed too.
 *
 * Usage: node scripts/qa-render.cjs [baseUrl]
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = process.argv[2] || "http://localhost:3100";
const SHOTS = path.join(__dirname, "..", "screenshots");
const ROUTES = ["/", "/work", "/about", "/cv", "/contact"];
const VIEWPORTS = [
  { label: "desktop", width: 1440, height: 900 },
  { label: "phone", width: 390, height: 844 },
];

fs.mkdirSync(SHOTS, { recursive: true });

const INSPECT = () => {
  const problems = [];
  const visible = (el) => {
    if (
      el.checkVisibility &&
      !el.checkVisibility({ opacityProperty: true, visibilityProperty: true })
    )
      return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  // sideways scroll
  const doc = document.documentElement;
  if (doc.scrollWidth > doc.clientWidth + 1) {
    const wide = [...document.querySelectorAll("*")]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.right > doc.clientWidth + 1 && visible(el);
      })
      .slice(0, 3)
      .map((el) => `${el.tagName.toLowerCase()}.${el.className || "?"}`.slice(0, 60));
    problems.push({
      kind: "overflows-sideways",
      detail: `${doc.scrollWidth}px in a ${doc.clientWidth}px window — ${wide.join(", ")}`,
    });
  }

  // broken images
  for (const img of document.querySelectorAll("img")) {
    if (!img.complete || img.naturalWidth === 0)
      problems.push({ kind: "broken-image", detail: img.getAttribute("src") || "?" });
  }

  // broken video — a 404 mp4 renders as a silent black box, which looks
  // deliberate and is invisible to a build.
  for (const v of document.querySelectorAll("video")) {
    if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
      problems.push({ kind: "broken-video", detail: v.getAttribute("src") || "?" });
    } else if (v.readyState === 0) {
      problems.push({
        kind: "video-no-metadata",
        detail: `${v.getAttribute("src")} — never reported dimensions`,
      });
    }
  }

  // text the colour of its background
  for (const el of document.querySelectorAll("p, h1, h2, h3, li, a, span, dd, dt")) {
    // aria-hidden marks decoration — outlined numerals, ornaments. Their fill
    // contrast is meaningless and the real text carries the meaning.
    if (el.closest("[aria-hidden='true']")) continue;
    if (!visible(el) || !el.textContent.trim()) continue;
    const s = getComputedStyle(el);
    let bgEl = el;
    let bg = s.backgroundColor;
    while (bgEl && (bg === "rgba(0, 0, 0, 0)" || bg === "transparent")) {
      bgEl = bgEl.parentElement;
      if (!bgEl) break;
      bg = getComputedStyle(bgEl).backgroundColor;
    }
    // color-mix() computes to `color(srgb 0.96 0.94 0.9 / 0.72)` — channels in
    // 0–1, not 0–255. Reading those as 8-bit made every element on a mixed
    // background report near-black and fail contrast. Six false positives came
    // from this before it was handled.
    const nums = (c) => {
      const raw = (c.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
      return /^color\(/.test(c) ? raw.map((n) => n * 255) : raw;
    };
    const [fr, fg, fb] = nums(s.color);
    const [br, bgc, bb] = nums(bg || "rgb(255,255,255)");
    if ([fr, fg, fb, br, bgc, bb].some((n) => n === undefined)) continue;
    const lum = (r, g, b) => {
      const a = [r, g, b].map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
    };
    const l1 = lum(fr, fg, fb);
    const l2 = lum(br, bgc, bb);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    if (ratio < 3) {
      problems.push({
        kind: "low-contrast-text",
        detail: `${ratio.toFixed(1)}:1 — "${el.textContent.trim().slice(0, 40)}"`,
      });
      break;
    }
  }

  // tap targets too small on touch widths
  if (window.innerWidth < 800) {
    for (const el of document.querySelectorAll("a, button")) {
      if (!visible(el)) continue;
      const r = el.getBoundingClientRect();
      // inline links inside a paragraph wrap; only flag standalone controls
      const inline = getComputedStyle(el).display === "inline";
      if (!inline && (r.height < 24 || r.width < 24)) {
        problems.push({
          kind: "tap-target-too-small",
          detail: `${Math.round(r.width)}×${Math.round(r.height)} — "${el.textContent
            .trim()
            .slice(0, 30)}"`,
        });
        break;
      }
    }
  }

  // text squeezed to a sliver by a flex parent
  for (const el of document.querySelectorAll("p, h1, h2, h3")) {
    if (!visible(el) || el.textContent.trim().length < 20) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 80) {
      problems.push({
        kind: "text-squeezed",
        detail: `${Math.round(r.width)}px wide — "${el.textContent.trim().slice(0, 40)}"`,
      });
      break;
    }
  }

  return problems;
};

(async () => {
  const browser = await chromium.launch();
  const failures = [];
  let checked = 0;

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    for (const route of ROUTES) {
      const page = await ctx.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      page.on("console", (m) => {
        if (m.type() === "error" && !/favicon|Fast Refresh/i.test(m.text()))
          consoleErrors.push(m.text());
      });
      page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));

      try {
        const res = await page.goto(BASE + route, { waitUntil: "load", timeout: 30000 });
        await page.waitForTimeout(1200);
        const problems = await page.evaluate(INSPECT);
        if (res && res.status() >= 400)
          problems.push({ kind: "http-error", detail: String(res.status()) });
        for (const e of consoleErrors) problems.push({ kind: "console-error", detail: e.slice(0, 120) });
        for (const e of pageErrors) problems.push({ kind: "uncaught-error", detail: e.slice(0, 120) });

        const name = (route === "/" ? "home" : route.slice(1).replace(/\//g, "-")) + `-${vp.label}`;
        await page.screenshot({ path: path.join(SHOTS, `${name}.png`), fullPage: true });

        checked++;
        if (problems.length) failures.push({ route, viewport: vp.label, problems });
        process.stdout.write(problems.length ? "✗" : "·");
      } catch (err) {
        failures.push({
          route,
          viewport: vp.label,
          problems: [{ kind: "did-not-load", detail: String(err).split("\n")[0].slice(0, 120) }],
        });
        process.stdout.write("✗");
      }
      await page.close();
    }
    await ctx.close();
  }
  await browser.close();

  console.log(`\n\n${checked} page renders checked across ${VIEWPORTS.length} widths`);
  if (!failures.length) {
    console.log("every page rendered clean");
    process.exit(0);
  }
  for (const f of failures) {
    console.log(`\n  ${f.route}  [${f.viewport}]`);
    for (const p of f.problems) console.log(`      ${p.kind}: ${p.detail}`);
  }
  console.log(`\n${failures.length} page/viewport combination(s) with problems`);
  process.exit(1);
})();
