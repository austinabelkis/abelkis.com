/**
 * The checks that aren't about geometry: links that go nowhere, images with
 * no alt text, heading order, metadata, and copy that shouldn't ship.
 *
 * Usage: node scripts/qa-content.cjs [baseUrl]
 */
const { chromium } = require("playwright");

const BASE = process.argv[2] || "http://localhost:3100";
const ROUTES = ["/", "/work", "/about", "/cv", "/contact"];

// Words that mean a draft escaped.
const PLACEHOLDER = /\b(lorem ipsum|TODO|FIXME|TBD|coming soon|placeholder|xxx+)\b/i;
// British spellings — the CV and the site should agree, and it's a US audience.
const BRITISH = /\b(colour|organis|programme|realise|recognise|licence|centre|behaviour|favourite)\w*/i;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const problems = [];
  const internal = new Set();
  const external = new Set();

  for (const route of ROUTES) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: "load", timeout: 30000 });
    await page.waitForTimeout(800);

    const data = await page.evaluate(() => {
      const abs = (h) => {
        try {
          return new URL(h, location.href).href;
        } catch {
          return null;
        }
      };
      return {
        title: document.title,
        description:
          document.querySelector('meta[name="description"]')?.content ?? null,
        text: document.body.innerText,
        links: [...document.querySelectorAll("a[href]")].map((a) => ({
          href: abs(a.getAttribute("href")),
          raw: a.getAttribute("href"),
          text: (a.textContent || "").trim().slice(0, 40),
        })),
        images: [...document.querySelectorAll("img")].map((i) => ({
          src: i.getAttribute("src"),
          alt: i.getAttribute("alt"),
        })),
        headings: [...document.querySelectorAll("h1,h2,h3,h4")].map((h) => ({
          level: +h.tagName[1],
          text: (h.textContent || "").trim().slice(0, 50),
        })),
        videos: [...document.querySelectorAll("video")].map((v) => ({
          src: v.getAttribute("src"),
          label: v.getAttribute("aria-label"),
        })),
      };
    });

    if (!data.title || data.title.length < 5)
      problems.push(`${route}: missing or thin <title>`);
    if (!data.description)
      problems.push(`${route}: no meta description`);

    const h1s = data.headings.filter((h) => h.level === 1);
    if (h1s.length !== 1)
      problems.push(`${route}: ${h1s.length} <h1> (want exactly 1)`);

    // Heading levels shouldn't skip on the way down.
    let prev = 0;
    for (const h of data.headings) {
      if (prev && h.level > prev + 1)
        problems.push(`${route}: heading jumps h${prev}→h${h.level} at "${h.text}"`);
      prev = h.level;
    }

    for (const img of data.images) {
      if (img.alt === null) problems.push(`${route}: <img> with no alt — ${img.src}`);
      else if (img.alt.trim() === "" ) problems.push(`${route}: empty alt — ${img.src}`);
    }
    for (const v of data.videos) {
      if (!v.label) problems.push(`${route}: <video> with no aria-label — ${v.src}`);
    }

    const ph = data.text.match(PLACEHOLDER);
    if (ph) problems.push(`${route}: placeholder copy — "${ph[0]}"`);
    const br = data.text.match(BRITISH);
    if (br) problems.push(`${route}: British spelling — "${br[0]}"`);

    for (const l of data.links) {
      if (!l.href) {
        problems.push(`${route}: unparseable href "${l.raw}" on "${l.text}"`);
        continue;
      }
      if (l.href.startsWith(BASE)) internal.add(l.href.split("#")[0]);
      else if (/^https?:/.test(l.href)) external.add(l.href);
      else if (!/^mailto:/.test(l.href)) problems.push(`${route}: odd link "${l.raw}"`);
    }

    await page.close();
  }

  // Every internal link must resolve. Files meant to download (the CV PDF)
  // abort navigation by design, so check those with a request instead.
  for (const url of internal) {
    if (/\.(pdf|zip|docx?)$/i.test(url)) {
      const res = await ctx.request.get(url).catch(() => null);
      if (!res || res.status() >= 400)
        problems.push(`download ${res ? res.status() : "unreachable"} → ${url}`);
      continue;
    }
    const p = await ctx.newPage();
    try {
      const res = await p.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
      if (!res || res.status() >= 400)
        problems.push(`internal link ${res ? res.status() : "no response"} → ${url}`);
    } catch (e) {
      problems.push(`internal link failed → ${url} (${String(e).split("\n")[0].slice(0, 60)})`);
    }
    await p.close();
  }
  await browser.close();

  console.log(`${ROUTES.length} pages · ${internal.size} internal links · ${external.size} external links`);
  console.log("\nExternal links (verify these by hand):");
  for (const u of [...external].sort()) console.log(`   ${u}`);

  if (!problems.length) {
    console.log("\ncontent checks clean");
    process.exit(0);
  }
  console.log(`\n${problems.length} problem(s):`);
  for (const p of problems) console.log(`   ${p}`);
  process.exit(1);
})();
