import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: WagsWorks OS, Boulder Waldorf Kindergarten & Preschool, Sommeliers Academy Sweden, the WagsWorks site rebuild — and a decade of live events.",
};

export default function Work() {
  return (
    <main className="wrap">
      <section className="hero" style={{ paddingBottom: "clamp(32px, 5vw, 56px)" }}>
        <p className="kicker">Work</p>
        <h1 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
          Receipts, not claims.
        </h1>
        <p className="standfirst">
          Everything here is built and running, or happened on the day it was
          meant to. Where you see software, the money is blurred and private
          names are hidden — looking after client information is half the job.
        </p>
      </section>

      {/* ------------------------------------------------ the argument */}
      <section className="argument" id="the-75-problem">
        <div className="two-col">
          <div>
            <p className="kicker">Why the software exists</p>
            <h2 className="display">The 75% problem.</h2>
          </div>
          <div className="prose">
            <p>
              You need software. You try Asana, Monday, or the one built for
              your industry. It does about <b>75% of what you actually need</b>.
            </p>
            <p>
              So you pay every month, forever, and bend how you work around
              the part it got wrong. One more login. One more tool to learn.
            </p>
            <p>
              I build the whole thing instead — software shaped to how your
              business already runs. That’s what WagsWorks and Boulder Waldorf
              got in place of another subscription, and it’s why it disappears
              into the day instead of getting in the way.
            </p>
            <p>
              This used to take a team and a six-figure budget. Boulder
              Waldorf’s site and admissions system took months, one person,
              and less than most businesses spend renting software that
              almost fits.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 01 WagsWorks OS */}
      <article className="case" id="wagsworks-os">
        <div className="case-head">
          <span className="case-no" aria-hidden="true">01</span>
          <div>
            <p className="kicker" style={{ marginBottom: 4 }}>
              Internal platform · 2025–present
            </p>
            <h2>WagsWorks OS — the agency’s entire back office in one app.</h2>
          </div>
        </div>
        <div className="case-grid">
          <div>
            <div className="prose">
              <p>
                WagsWorks sells and delivers sponsorships for festivals and
                concert series across the US. That business used to live in
                spreadsheets, inboxes, and memory. Now it lives in one system —
                designed and built by me, used by the team every working day.
              </p>
              <p>
                It isn&apos;t an off-the-shelf to-do app with sponsorship words
                pasted over it. A deal knows which show it belongs to, what
                paperwork it still owes, which invoice it turns into, and how
                many tickets that client has left. Nothing generic gets that
                far, because nothing generic knows that a missing insurance
                certificate can stop a truck at the gate.
              </p>
            </div>
            <ul className="feature-list">
              <li>
                Every deal in one place, sorted by client and by show, with a
                colored bar for what&apos;s been pitched, what&apos;s in
                progress and what&apos;s done — so a hundred-odd live deals
                make sense at a glance
              </li>
              <li>
                Paperwork that chases itself. Leave something a week and it
                gets flagged; leave it two and it becomes somebody&apos;s
                urgent job, with their name on it. When the paperwork finally
                arrives, the reminder disappears on its own
              </li>
              <li>
                Tasks you type the way you&apos;d say them out loud — “Call
                Sarah tomorrow, Scott, urgent” — and it works out the date, who
                it&apos;s for, and how urgent it is
              </li>
              <li>Invoices, with anything late showing up before a client has to ask</li>
              <li>
                What each event is actually earning — what was pitched, what
                is expected, what has been paid — next to last year
              </li>
              <li>Guest lists, and how many tickets each sponsor has left</li>
              <li>A team chat, so questions about a deal stay with the deal</li>
              <li>Connects to your email, so a deal carries its own history</li>
              <li>Change something and everyone else sees it straight away</li>
              <li>Sits on your phone like any other app, and works with no signal</li>
            </ul>
            <div className="numbers">
              <div className="stat">
                <b>13</b>
                <span>sections, from deals to guestlists to Drive backups</span>
              </div>
              <div className="stat">
                <b>149</b>
                <span>deals tracked through the pipeline to date</span>
              </div>
              <div className="stat">
                <b>1</b>
                <span>person designing, building and using it</span>
              </div>
            </div>
            <p className="tech-note">
              Skip this bit unless you have a developer who&apos;ll ask: it
              runs on Cloudflare and Supabase, with no framework and no
              dependencies to keep patched, and it&apos;s tested
              automatically before anything ships.
            </p>

            <div className="ledger">
              <div className="ledger-col">
                <h3 className="ledger-head">Before</h3>
                <ul>
                  <li>Deals tracked across spreadsheets and inboxes</li>
                  <li>Paperwork status living in somebody’s head</li>
                  <li>Overdue invoices found by accident</li>
                  <li>Generic tools that fit about 75% of the job</li>
                </ul>
              </div>
              <div className="ledger-col after">
                <h3 className="ledger-head">After</h3>
                <ul>
                  <li>One pipeline, every deal, every show</li>
                  <li>Stale paperwork flags itself and assigns the chase</li>
                  <li>Overdue invoices surface before anyone asks</li>
                  <li>Built to the actual process, not around a product</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <dl className="vitals">
              <div>
                <dt>Role</dt>
                <dd>Design &amp; build, solo</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>In production daily</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>Cloudflare Workers · Supabase · PWA</dd>
              </div>
              <div>
                <dt>Access</dt>
                <dd>Internal — walkthrough on request</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="case-shots">
          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/wags-dashboard.webp"
                alt="The WagsWorks OS dashboard: headline numbers, guestlist, overdue actions, and revenue by event"
                width={1600}
                height={614}
              />
            </div>
            <figcaption>
              <b>Monday morning, one screen.</b> What the year is worth, what
              is overdue and whose name is on it, and which events are earning.
              The red items escalated themselves.
            </figcaption>
          </figure>

          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/wags-deals.webp"
                alt="The deal pipeline: a card per client with counts, values and a red/amber/green stage bar"
                width={1600}
                height={860}
              />
            </div>
            <figcaption>
              <b>Every client, every deal, one glance.</b> A card per property
              with its own stage bar — red needs attention, amber is moving,
              green is done. Roughly 150 deals live in here.
            </figcaption>
          </figure>

          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/wags-todo.webp"
                alt="The to-do list, with tasks created automatically from deals and overdue dates in red"
                width={1600}
                height={442}
              />
            </div>
            <figcaption>
              <b>Type it the way you’d say it.</b> “Call Sarah tomorrow @scott
              urgent” becomes a task with a due date, an owner and a priority.
              The rest arrive on their own when a deal needs paperwork or an
              invoice.
            </figcaption>
          </figure>

          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/wags-relationships.webp"
                alt="Relationship management: days since last email per client, with per-client nudge thresholds"
                width={1600}
                height={873}
              />
            </div>
            <figcaption>
              <b>The one no product sells you.</b> It reads how long each
              client has actually been quiet — from real email history — and
              nudges when they cross a threshold you set per client. Some
              relationships need a month; some need three.
            </figcaption>
          </figure>

          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/wags-ticketing.webp"
                alt="Ticketing: guest list spots, ticket banks per sponsor, and confirmation emails"
                width={1600}
                height={720}
              />
            </div>
            <figcaption>
              <b>Tickets, which are their own small hell.</b> Who asked, for
              which show, out of whose allocation, and how many that sponsor
              has left — with the confirmation email one button away.
            </figcaption>
          </figure>

          <p className="demo-note">
            Real screens from the running platform. Money is blurred, and so
            are the names of individual guests — the client and festival names
            are the roster, and they stay.
          </p>
        </div>
      </article>

      {/* ------------------------------------------- 02 Boulder Waldorf */}
      <article className="case" id="boulder-waldorf">
        <div className="case-head">
          <span className="case-no" aria-hidden="true">02</span>
          <div>
            <p className="kicker" style={{ marginBottom: 4 }}>
              Full site + admissions platform · 2026
            </p>
            <h2>
              Boulder Waldorf — a school’s web presence, and the software
              behind its front office.
            </h2>
          </div>
        </div>
        <div className="case-grid">
          <div>
            <div className="prose">
              <p>
                Boulder Waldorf Kindergarten &amp; Preschool needed more than a
                new website. Admissions, enrollment paperwork, and family
                records lived in separate tools that didn’t talk. The
                rebuild put the public site and the office software in one
                system the staff run themselves.
              </p>
            </div>
            <ul className="feature-list">
              <li>
                The whole public site — programs, admissions, summer camp,
                FAQs, and a search box that actually finds things
              </li>
              <li>
                Parents apply online and can stop halfway and come back, which
                is how people with small children actually fill in forms
              </li>
              <li>
                Enrollment paperwork signed in the browser, with somewhere to
                upload the documents that have to be scanned
              </li>
              <li>
                Private forms for a child&apos;s doctor or therapist, opened
                by a link only they receive, and never visible to the family
              </li>
              <li>
                One page per family, from first enquiry to enrolled — where
                they are, what&apos;s missing, and reminders that send
                themselves
              </li>
              <li>Newsletters and automatic emails the office writes itself</li>
              <li>
                Staff change the website by clicking on the words and typing.
                No monthly subscription, and nobody to phone
              </li>
            </ul>
            <div className="numbers">
              <div className="stat">
                <b>67</b>
                <span>pages, public and admin</span>
              </div>
              <div className="stat">
                <b>134</b>
                <span>page checks run automatically before anything goes live</span>
              </div>
              <div className="stat">
                <b>140</b>
                <span>application questions the office can reword itself</span>
              </div>
            </div>
            <p className="tech-note">
              Skip this bit unless you have a developer who&apos;ll ask: it
              runs on Next.js and Supabase, hosted on Vercel. Before any
              change goes live, every one of the 67 pages is opened
              automatically in a real browser at desktop and phone size and
              checked for things that look broken.
            </p>
          </div>
          <div>
            <dl className="vitals">
              <div>
                <dt>Role</dt>
                <dd>Design, build &amp; launch, solo</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  Launching 2026 —{" "}
                  <a
                    href="https://boulder-waldorf-kindergarten.vercel.app/"
                    target="_blank"
                    rel="noopener"
                  >
                    see the preview
                  </a>
                </dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>Next.js · Supabase · Vercel</dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>Boulder Waldorf Kindergarten &amp; Preschool</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="case-shots">
          <div className="shot-pair">
            <figure className="figure">
              <div className="browser-frame">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <img
                  src="/img/bwk-home.webp"
                  alt="The Boulder Waldorf homepage"
                  width={1600}
                  height={1000}
                />
              </div>
            </figure>
            <figure className="figure">
              <div className="phone-frame">
                <img
                  src="/img/bwk-mobile.webp"
                  alt="The Boulder Waldorf site on a phone"
                  width={390}
                  height={844}
                />
              </div>
            </figure>
          </div>
          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/bwk-programs.webp"
                alt="Programs page of the Boulder Waldorf site"
                width={1600}
                height={1000}
              />
            </div>
            <figcaption>
              The public side — programs, admissions, summer camp, and a
              site-wide search, all editable by the office.
            </figcaption>
          </figure>
        </div>

        <div className="admin-showcase">
          <p className="kicker">What changed</p>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 6 }}>
            From forms, spreadsheets and sticky notes to one system.
          </h3>
          <div className="ledger">
            <div className="ledger-col">
              <h3 className="ledger-head">Before</h3>
              <ul>
                <li>Inquiries in one inbox, applications in another</li>
                <li>Google Forms and spreadsheets that didn’t talk</li>
                <li>Paperwork printed, signed, scanned, emailed back</li>
                <li>Someone remembering to chase each missing form</li>
                <li>No single place to see where a family stood</li>
              </ul>
            </div>
            <div className="ledger-col after">
              <h3 className="ledger-head">After</h3>
              <ul>
                <li>Apply online, save halfway, come back later</li>
                <li>Contracts and forms signed in the browser</li>
                <li>Every family on one page, inquiry to enrollment</li>
                <li>Confirmation and reminder emails send themselves</li>
                <li>Staff edit the site and the email wording themselves</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="admin-showcase">
          <p className="kicker">Thirty seconds inside the admin</p>
          <figure className="figure video-figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <video
                src="/video/bwk-admin.mp4"
                poster="/video/bwk-admin-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                width={1280}
                height={800}
                aria-label="A walkthrough of the Boulder Waldorf admin: a family profile with its admissions milestones and paperwork checklist, an application in review, and the editable email templates."
              />
            </div>
            <figcaption>
              A family arrives, their paperwork is tracked, their application
              is reviewed, and the emails that go out are edited in plain
              English — all by the office, with nobody phoning a developer.
              Recorded against an invented family that was deleted straight
              after.
            </figcaption>
          </figure>
        </div>

        <div className="admin-showcase">
          <p className="kicker">Behind the login — what the office sees</p>
          <div className="shot-stack">
            <figure className="figure">
              <div className="browser-frame">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <img
                  src="/img/bwk-admin-family.webp"
                  alt="A family profile in the admin: details, children, and paperwork status"
                  width={1600}
                  height={1000}
                />
              </div>
              <figcaption>
                <b>One family, one page.</b> Their inquiry, their child, where
                they are in admissions, and every form with its own status —
                each with an &ldquo;email them this&rdquo; button so chasing
                paperwork takes one click instead of a rummage through an
                inbox.
              </figcaption>
            </figure>
            <figure className="figure">
              <div className="browser-frame">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <img
                  src="/img/bwk-admin-application.webp"
                  alt="An application in review, with a suggested family match"
                  width={1600}
                  height={1000}
                />
              </div>
              <figcaption>
                <b>It notices things.</b> Families inquire from one address and
                apply from another, so the application page finds the likely
                match itself and asks before linking them — the sort of detail
                you only build if you have watched someone do this job by hand.
              </figcaption>
            </figure>
            <figure className="figure">
              <div className="browser-frame">
                <div className="bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <img
                  src="/img/bwk-admin-emails.webp"
                  alt="The email template editor, with fill-in names like child_name"
                  width={1600}
                  height={1000}
                />
              </div>
              <figcaption>
                <b>The emails send themselves — and the school owns the
                words.</b>{" "}
                Every automatic message is editable in plain language, with
                fill-in names for the child and parent. No developer, no
                support ticket, no waiting on me.
              </figcaption>
            </figure>
          </div>
          <p className="demo-note">
            Screenshots use an invented family created for this page and
            deleted immediately after. No real record appears anywhere on this
            site.
          </p>
        </div>
      </article>

      {/* ------------------------------------- 03 Sommeliers Academy Sweden */}
      <article className="case" id="sommeliers-academy">
        <div className="case-head">
          <span className="case-no" aria-hidden="true">03</span>
          <div>
            <p className="kicker" style={{ marginBottom: 4 }}>
              Website &amp; growth strategy · 2026
            </p>
            <h2>
              Sommeliers Academy Sweden — where the wine lane and the build
              lane meet.
            </h2>
          </div>
        </div>
        <div className="case-grid">
          <div>
            <div className="prose">
              <p>
                Sommeliers Academy Sweden trains sommeliers to ASI-aligned
                standards. I built the website and the growth strategy behind
                it — bilingual, course-forward, and built to turn curiosity
                into enrollments.
              </p>
              <p>
                This one is personal: I hold an ASI Level 1 certification
                myself, so the brief needed no translating. When the client
                says “blind tasting,” I know exactly what the room looks like.
              </p>
            </div>
            <p className="tech-note">
              A reminder that the lanes aren’t separate businesses —
              knowing the industry is why the website works.
            </p>
          </div>
          <div>
            <dl className="vitals">
              <div>
                <dt>Role</dt>
                <dd>Website &amp; growth strategy</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  Live —{" "}
                  <a
                    href="https://sommeliersacademysweden.com"
                    target="_blank"
                    rel="noopener"
                  >
                    sommeliersacademysweden.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>English · Swedish</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="case-shots">
          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/somm-academy.webp"
                alt="Sommeliers Academy Sweden homepage"
                width={1600}
                height={1000}
              />
            </div>
          </figure>
        </div>
      </article>

      {/* --------------------------------------- 04 WagsWorks site rebuild */}
      <article className="case" id="wagsworks-site">
        <div className="case-head">
          <span className="case-no" aria-hidden="true">04</span>
          <div>
            <p className="kicker" style={{ marginBottom: 4 }}>
              Brand &amp; site rebuild
            </p>
            <h2>
              WagsWorks — rebuilding the shop window for the shop I work in.
            </h2>
          </div>
        </div>
        <div className="case-grid">
          <div>
            <div className="prose">
              <p>
                WagsWorks sells live-music sponsorship. Its site was an aging
                Squarespace template that undersold the work, so I rebuilt it:
                a hand-built site with an actual point of view — huge condensed
                type, cream paper, one red accent, and a Glengarry joke where
                the tagline goes.
              </p>
              <p>
                Structured the way a sponsor actually decides: who we
                represent, the show calendar, brand partners, the team, and a
                deck one click away. Confidence without a stock photo in
                sight.
              </p>
            </div>
            <p className="tech-note">
              I do the sponsorship work at WagsWorks too — decks, packages,
              contracts, and partner delivery for festivals and concert series
              across the US. Selling the thing and designing how it’s sold
              turn out to be the same skill.
            </p>
          </div>
          <div>
            <dl className="vitals">
              <div>
                <dt>Role</dt>
                <dd>Design &amp; build, solo</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>
                  <a
                    href="https://austinabelkis.github.io/WagsWorks/"
                    target="_blank"
                    rel="noopener"
                  >
                    Preview the rebuild →
                  </a>
                </dd>
              </div>
              <div>
                <dt>Replaces</dt>
                <dd>An aging Squarespace template</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="case-shots">
          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/wagsworks-built.webp"
                alt="The rebuilt WagsWorks site: 'Live music sponsorship done right.'"
                width={1600}
                height={1000}
              />
            </div>
          </figure>
        </div>
      </article>

      {/* ----------------------------------------------- brand work */}
      <section id="brands">
        <p className="kicker">The other decade</p>
        <h2 className="display">
          Brands I’ve worked on, and what that actually meant.
        </h2>
        <p className="prose" style={{ marginTop: 18 }}>
          Before the software, this was the job — and for a lot of it, still
          is. Field teams, activations, campaigns, and the decks that sold
          them.
        </p>

        <div className="brand-grid">
          <div className="brand-block">
            <h3>Subaru &amp; Chaco Footwear</h3>
            <p className="brand-role">
              Field manager, national activations · The Field Scout
            </p>
            <p>
              Led field teams on the road: onsite logistics, inventory,
              client communication, and the reporting that turns a
              weekend of conversations into something the brand can act on.
            </p>
          </div>
          <div className="brand-block brand-photos">
            <figure className="figure">
              <img
                src="/img/chaco-activation.webp"
                alt="The ReChaco Roving Repairs bus set up at an activation, with the repair station and crew"
                width={1400}
                height={1049}
              />
            </figure>
            <figure className="figure">
              <img
                src="/img/chaco-crew.webp"
                alt="Crew on the roof of the Chaco rig, South Congress, Austin"
                width={1000}
                height={1334}
              />
            </figure>
            <figcaption className="figure">
              ReChaco Roving Repairs on the road — a converted bus that fixed
              people’s sandals on the spot. The kind of activation where the
              logistics are the whole product.
            </figcaption>
          </div>
          <div className="brand-block">
            <h3>Jack Daniel’s, Red Bull &amp; Campari</h3>
            <p className="brand-role">
              Brand manager &amp; producer · DoStuff Media
            </p>
            <p>
              Campaigns and events where the brand needed to show up in a bar
              or a venue and not feel like an ad. Programming, talent, run of
              show, partner communication — and often the load-in too.
            </p>
          </div>
          <div className="brand-block">
            <h3>Pickathon, Edgefield &amp; Marymoor</h3>
            <p className="brand-role">Sponsorship · WagsWorks</p>
            <p>
              Festival and venue sponsorship for properties across the
              Northwest — packaging what a venue has to offer, pitching it,
              getting it papered, and delivering what was promised once the
              gates open. Partners have included Kaiser Permanente, Toyota,
              Bulleit, Poler and Brew Dr.
            </p>
          </div>
          <div className="brand-block">
            <h3>Nike, Daimler &amp; RGA</h3>
            <p className="brand-role">Corporate events · 503 Media</p>
            <p>
              Off-sites, award ceremonies, and internal events for companies
              where the details are the entire point and nothing is allowed to
              wobble.
            </p>
          </div>
        </div>

        <div className="deck-showcase">
          <figure className="figure">
            <div className="browser-frame">
              <div className="bar">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <img
                src="/img/deck-wagsworks.webp"
                alt="Cover of the WagsWorks sponsorship offerings deck"
                width={1600}
                height={900}
              />
            </div>
            <figcaption>
              <b>The decks are mine too.</b> Sponsorship offerings, one-sheets,
              and pitch collateral — 30-odd pages that have to survive being
              forwarded to somebody’s boss. Same for restaurant menus,
              which is where I learned that design is mostly deciding what to
              leave out.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ----------------------------------------------- career wall */}
      <section id="career">
        <p className="kicker">Before &amp; alongside — the Portland years</p>
        <h2 className="display">A decade of doors opening on time.</h2>
        <div className="menu-list">
          <div className="menu-row">
            <div className="menu-line">
              <h3>
                <a href="https://www.wagsworks.com/" target="_blank" rel="noopener">
                  WagsWorks
                </a>
              </h3>
              <span className="leader"></span>
              <span className="when">2022 — present</span>
            </div>
            <p>
              Marketing producer &amp; operations — sponsorship sales,
              activation planning, and partner delivery for festivals and live
              events across the US.
            </p>
          </div>
          <div className="menu-row">
            <div className="menu-line">
              <h3>
                <a
                  href="https://www.thefieldscout.com/"
                  target="_blank"
                  rel="noopener"
                >
                  The Field Scout
                </a>
              </h3>
              <span className="leader"></span>
              <span className="when">2020 — present</span>
            </div>
            <p>
              Field manager for national brand activations, including Subaru
              and Chaco Footwear programs — leading the crew, running the
              logistics, reporting back, getting it done.
            </p>
          </div>
          <div className="menu-row">
            <div className="menu-line">
              <h3>
                <a href="https://www.musicportland.org/" target="_blank" rel="noopener">
                  MusicPortland
                </a>
              </h3>
              <span className="leader"></span>
              <span className="when">2018 — 2019</span>
            </div>
            <p>
              Marketing &amp; operations for Portland’s music industry
              association — livestreams, industry meetings, community events.
            </p>
          </div>
          <div className="menu-row">
            <div className="menu-line">
              <h3>
                <a
                  href="https://dostuffmedia.com/"
                  target="_blank"
                  rel="noopener"
                >
                  DoStuff Media
                </a>{" "}
                / 503 Media &amp; Events
              </h3>
              <span className="leader"></span>
              <span className="when">2015 — 2018</span>
            </div>
            <p>
              Brand manager &amp; producer. Campaigns and events for Jack
              Daniel’s, Red Bull, Campari Group, Abercrombie &amp; Fitch,
              McMenamins, Brew Dr., RISE Brewing, and Poler — plus corporate
              work for Nike, Daimler, and RGA.
            </p>
          </div>
          <div className="menu-row">
            <div className="menu-line">
              <h3>
                <a href="https://www.tedxportland.com/" target="_blank" rel="noopener">
                  TEDxPortland
                </a>
              </h3>
              <span className="leader"></span>
              <span className="when">2014 onward</span>
            </div>
            <p>
              Production volunteer, year-round — the passion project, alongside
              a 100-person crew.
            </p>
          </div>
          <div className="menu-row">
            <div className="menu-line">
              <h3>Kitchens, floors &amp; wine lists</h3>
              <span className="leader"></span>
              <span className="when">ongoing</span>
            </div>
            <p>
              Tavolo in Gothenburg, The Wine Cask in Santa Barbara, Pok Pok in
              Portland, Basil Flats in Longmont — cooking, wine service, and
              front-of-house. Where the standards come from, and where the ASI
              certification got its practice.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
