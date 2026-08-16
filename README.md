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

## Things to confirm before launch

- [ ] **Photo.** There is no portrait on the site. The best existing one
      (rose garden, white t-shirt) is well shot but casual and several years
      old. A current photo on the About page would help the "you deal
      directly with me" pitch — worth 20 minutes with a decent camera.
- [ ] **The before/after ledgers** on the Work page describe how Boulder
      Waldorf and WagsWorks operated *before* the software. Written from
      what the projects imply — check the specifics are fair.
- [ ] **Sommeliers Academy** — role is stated as "Website & growth
      strategy". Adjust if the scope was different.
- [ ] **WagsWorks site rebuild** — presented as your rebuild replacing the
      old Squarespace site, linking to the GitHub Pages preview. If it goes
      live at wagsworks.com, update the link.
- [ ] **Dates** — TEDxPortland is "2014 onward"; fine-dining is "ongoing".
      Tighten if you want exact ranges.
- [ ] **CV PDF** at `public/Austin-Abelkis-CV.pdf` is the June 2026 designed
      resume. Replace when it changes.

## Content decisions on record

- **Bar Balans is deliberately not on the site** — one of its decks is
  marked "discreet". Add it when the project is public.
- **No phone number published.** Email and LinkedIn only; the CV PDF still
  carries the number for people who ask for it.
- **No prices published.** Soft language only ("boutique rates", "weeks not
  quarters") so quoting stays per project.
- **wagsworks.com (Squarespace) is not shown** — it is the old site being
  replaced, and it isn't your design work.
- **Screenshots of admin software must only ever show invented records.**
  The Boulder Waldorf admin shots come from
  `boulder-waldorf/scripts/qa-portfolio-shots.mjs`, which mints one fake
  family, photographs only single-record pages plus config pages that hold
  no family data, and deletes everything in a `finally` block. Never
  screenshot a list page — those contain real families.

## Still to do

- **WagsWorks OS interior shots.** The case study copy is written and waiting
  — only the sign-in screen is currently shown. Four screens are worth
  having: **Deals** (client cards with the red/amber/green stage bars),
  **To Do** (including the quick-add hint, since parsing a due date,
  assignee and priority out of a typed sentence is the single most
  impressive detail), **Revenue**, and **Invoices** with something overdue.

  These can't be captured automatically: there is no service-role key on this
  machine, so unlike Boulder Waldorf no demo account can be minted, and
  screenshots taken inside the assistant's browser pane can't be written to
  disk. Grab them with Cmd+Shift+4 and they can be cropped and redacted from
  the Desktop.

  Before publishing any of them: blur every dollar figure, and blur
  individual people's names on guestlists (those are private individuals).
  Sponsor and festival names can stay — they read as a client roster.
  **Keep the "Crystal Blocks" / "West Side Entertainment District" task out
  entirely** — that is a working name for an unannounced McMenamins property.

- **A recording of WagsWorks OS**, same as the Boulder Waldorf one, once the
  above is sorted.
