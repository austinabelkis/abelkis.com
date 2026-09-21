# abelkis.com

Austin Abelkis — portfolio. Static Next.js site (`output: "export"`), no
database, no env vars. The visual identity extends the 2026 CV: cream stock,
near-black ink, forest green, Fraunces display type.

## Commands

```bash
npm run dev      # dev server on http://localhost:3100
npm run build    # static build → out/
```

```bash
node scripts/qa-render.cjs
```

That last one is the important one. It opens all five pages at desktop and
phone width in a real browser and asserts on computed geometry: sideways
scroll, tap targets under 24px, text squeezed to a sliver, broken images,
text the colour of its background, console and uncaught errors. It also
writes full-page screenshots to `screenshots/`. Needs the dev server running.

A build succeeds through every visual bug there is — this is what catches
them. It has already caught a nav overflowing the phone viewport, 19px tap
targets, and every pairing rendering open because a class selector beat the
`[hidden]` attribute.

## Deploying to abelkis.com

1. Push this repo to GitHub.
2. Vercel → Add New Project → import it. Framework preset: Next.js. No env
   vars needed.
3. Vercel → Settings → Domains → add `abelkis.com` and `www.abelkis.com`.
4. At the registrar, point the domain at Vercel using the exact records
   Vercel shows (an A record for the apex, CNAME for `www`).

DNS changes take up to a few hours to propagate. Vercel issues the HTTPS
certificate automatically once the records resolve.

## Things still open

- [ ] **Footer credit on boulderwaldorf.com** ("Site by Austin Abelkis" →
      abelkis.com) — the main referral channel; needs a yes from the school.
- [ ] **abelkis.com in Austin's email signature.**
- [ ] **Link swaps on other launches**: when the new BWK site takes over
      boulderwaldorf.com, point the case study there instead of the
      vercel.app preview; same for wagsworks.com when the rebuild ships.
- [ ] **Sommeliers Academy** — role stated as "Website & growth strategy";
      adjust if the scope was different.
- [ ] **CV PDF** at `public/Austin-Abelkis-CV.pdf` is the Sept 2026 resume
      (Claude Design export, matched to LinkedIn; Austin approved it as-is,
      header layout and Swedish phone number included). Only its internal PDF
      title was changed, from "Resume redesign consultation" to "Austin
      Abelkis Resume" — re-apply that to future exports. The /cv page mirrors
      its titles, dates and bullets; update both together.
- [ ] **WagsWorks team photos are swapped at the source** —
      `~/assets/team/austin-abelkis.jpg` is Scott and vice versa.

## Content decisions on record

- **Bar Balans is deliberately not on the site** — one of its decks is
  marked "discreet". Add it when the project is public.
- **No phone number published.** Email and LinkedIn only; the CV PDF still
  carries the number for people who ask for it.
- **The wine offer is deliberately cut (Aug 2026).** No Serve lane, no
  wine-list service, no sommelier pitch — Austin doesn't want to be hired
  for wine work. The biography stays: the About page kitchens paragraph,
  the ASI cert in the facts grid, the CV entry, and the Sommeliers Academy
  case study (which is web work). Don't reintroduce the offer.
- **Prices are published deliberately**: $1,500–$5,000+ fixed, $0–200/month
  optional aftercare.
- **wagsworks.com (Squarespace) is not shown** — it is the old site being
  replaced, and it isn't your design work.
- **Screenshots of admin software must only ever show invented records.**
  The Boulder Waldorf admin shots come from
  `boulder-waldorf/scripts/qa-portfolio-shots.mjs`, which mints one fake
  family, photographs only single-record pages plus config pages that hold
  no family data, and deletes everything in a `finally` block. Never
  screenshot a list page — those contain real families.

- **WagsWorks OS claims are sourced from the app itself** — its in-app help
  text and git history in `~/Desktop/Coding Projects/wagsworks-app`. When
  the app changes, re-check them: e.g. "just one outside library" is the
  Anthropic SDK, added Sept 19, 2026 for contract scanning (before that the
  site said "no dependencies"); "13 sections" counts the sidebar, which
  gained Accounting (QuickBooks) the same week.

## WagsWorks OS screenshot rules (they're live on /work)

Real screens from the running platform, captured by Austin, redacted before
publishing: every dollar figure blurred, private individuals' names on
guestlists blurred. Client and festival names stay — they're the roster.
The "Crystal Blocks" / "West Side Entertainment District" task is cropped
out entirely: an unannounced McMenamins property's working name must never
appear, and a crop can't be reversed the way a blur sometimes can.
