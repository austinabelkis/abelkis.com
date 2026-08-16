import Link from "next/link";
import Pairings from "./Pairings";

export default function Home() {
  return (
    <main>
      <div className="wrap">
        <section className="hero">
          <p className="kicker">Austin Abelkis · Gothenburg &amp; Portland</p>
          <h1 className="display hero-title">
            I produce
            <br />
            <span className="ink-swap">things that</span>
            <br />
            have to work.
          </h1>
          <p className="standfirst">
            I help small businesses and nonprofits with the things they
            can’t quite hire a whole agency for — websites, custom
            software, events, design. One person, quick turnarounds, no
            account managers.
          </p>
          <div className="hero-meta">
            <span>Producer</span>
            <span className="dot-sep">·</span>
            <span>Builder</span>
            <span className="dot-sep">·</span>
            <span>Sommelier</span>
          </div>
        </section>
      </div>

      <div className="wrap">
        <section className="first-section">
          <div className="section-head">
            <p className="kicker" style={{ marginBottom: 0 }}>
              Four things, one person
            </p>
            <p className="aside-note">
              Mostly for small businesses and nonprofits
            </p>
          </div>
          <div className="lane-grid">
            <div className="lane" style={{ "--dot": "var(--ink)" } as React.CSSProperties}>
              <span className="lane-no">i</span>
              <h3>Produce</h3>
              <p>
                Live events and sponsorships. Decks, deals, contracts,
                guestlists, activations — and the show itself.
              </p>
            </div>
            <div className="lane" style={{ "--dot": "var(--wine)" } as React.CSSProperties}>
              <span className="lane-no">ii</span>
              <h3>Design</h3>
              <p>
                Brand and print. Sponsorship decks, one-sheets, identity, and
                the way a thing looks when it lands on a desk.
              </p>
            </div>
            <div className="lane" style={{ "--dot": "var(--green)" } as React.CSSProperties}>
              <span className="lane-no">iii</span>
              <h3>Build</h3>
              <p>
                Websites and software, shipped and running without me. Sites,
                enrollment systems, internal tools that kill the spreadsheet.
              </p>
            </div>
            <div
              className="lane"
              style={{ "--dot": "var(--gold)" } as React.CSSProperties}
            >
              <span className="lane-no">iv</span>
              <h3>Serve</h3>
              <p>
                Food and wine, Santa Barbara to Gothenburg. ASI-certified
                sommelier — lists, programs, and staff training.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="section-head">
            <div>
              <p className="kicker" style={{ marginBottom: 0 }}>
                Selected work
              </p>
            </div>
            <Link className="aside-link" href="/work">
              All case studies →
            </Link>
          </div>
          <div className="work-grid">
            <Link className="work-card" href="/work#boulder-waldorf">
              <span className="thumb">
                <img
                  src="/img/bwk-home.webp"
                  alt="The Boulder Waldorf Kindergarten & Preschool website"
                  width={1600}
                  height={1000}
                />
              </span>
              <div className="work-copy">
                <div className="work-line">
                  <h3>Boulder Waldorf</h3>
                  <span className="leader"></span>
                  <span className="when">Site + software</span>
                </div>
                <p>
                  A whole school online: the public site families see, plus the
                  admissions and paperwork system the office runs itself.
                  Applications, e-signatures, reminders, the works.
                </p>
              </div>
            </Link>
            <Link className="work-card" href="/work#wagsworks-os">
              <span className="thumb">
                <img
                  src="/img/bwk-admin-family.webp"
                  alt="An admin family profile, shown with invented demo records"
                  width={1600}
                  height={1000}
                />
              </span>
              <div className="work-copy">
                <div className="work-line">
                  <h3>The software behind it</h3>
                  <span className="leader"></span>
                  <span className="when">Custom tools</span>
                </div>
                <p>
                  Every family in one place, every form tracked, every reminder
                  automatic. Built around how the school actually works instead
                  of making them work around it.
                </p>
              </div>
            </Link>
            <Link className="work-card" href="/work#sommeliers-academy">
              <span className="thumb">
                <img
                  src="/img/somm-academy.webp"
                  alt="The Sommeliers Academy Sweden website"
                  width={1600}
                  height={1000}
                />
              </span>
              <div className="work-copy">
                <div className="work-line">
                  <h3>Sommeliers Academy</h3>
                  <span className="leader"></span>
                  <span className="when">Site + strategy</span>
                </div>
                <p>
                  Website and growth strategy for the school training
                  Sweden’s next sommeliers. Bilingual, and built by
                  someone who has sat the exams.
                </p>
              </div>
            </Link>
            <Link className="work-card" href="/work#wagsworks-site">
              <span className="thumb">
                <img
                  src="/img/wagsworks-built.webp"
                  alt="The rebuilt WagsWorks site"
                  width={1600}
                  height={1000}
                />
              </span>
              <div className="work-copy">
                <div className="work-line">
                  <h3>WagsWorks</h3>
                  <span className="leader"></span>
                  <span className="when">Brand + rebuild</span>
                </div>
                <p>
                  Swapping a tired template for something with a point of view
                  — for the sponsorship agency I also produce for. Decks,
                  partners, festivals, the lot.
                </p>
              </div>
            </Link>
          </div>
        </section>

        <section>
          <div className="section-head">
            <div>
              <p className="kicker" style={{ marginBottom: 0 }}>
                Order by the glass
              </p>
            </div>
            <p className="aside-note">
              Pick a problem, get a wine and an honest answer.
            </p>
          </div>
          <Pairings />
        </section>
      </div>

      <div className="cta-band">
        <div className="wrap">
          <p className="kicker">Have something that needs making?</p>
          <a className="cta-mail" href="mailto:austin@abelkis.com">
            austin@abelkis.com
          </a>
          <p className="sub">
            Tell me what’s not working. I’ll tell you what I’d
            do and what it costs.
          </p>
        </div>
      </div>
    </main>
  );
}
