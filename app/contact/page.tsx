import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch — sites, software, sponsorships, or something that doesn't fit a category yet.",
};

export default function Contact() {
  return (
    <main className="wrap">
      <section className="hero" style={{ paddingBottom: "clamp(32px, 5vw, 56px)" }}>
        <p className="kicker">Contact</p>
        <h1 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
          Say hello.
        </h1>
        <p className="standfirst">
          One inbox, answered by the person who does the work.
        </p>
        <p style={{ marginTop: 30 }}>
          <a className="contact-mail" href="mailto:austin@abelkis.com">
            austin@abelkis.com
          </a>
        </p>
        <p style={{ marginTop: 14 }}>
          <a href="https://linkedin.com/in/austinabelkis" target="_blank" rel="noopener">
            linkedin.com/in/austinabelkis
          </a>
        </p>
      </section>

      <section style={{ borderTop: "none", paddingTop: 0 }}>
        <div className="hook">
          <p className="kicker">Found me through the Waldorf site?</p>
          <p>
            Boulder Waldorf Kindergarten &amp; Preschool&apos;s new site — and
            the admissions and paperwork software behind it — is my work. If
            your school or small business wants something at that level, I
            build it for a fraction of agency cost: no account managers, no
            retainer, and you talk directly to the person making it. Most
            projects run in weeks rather than quarters.
          </p>
        </div>

        <div className="prose" style={{ marginTop: 44 }}>
          <p className="kicker">Good fits right now</p>
          <ul className="feature-list">
            <li>Websites for schools, restaurants, venues, and small businesses</li>
            <li>Internal tools that replace spreadsheet chaos</li>
            <li>Sponsorship strategy and event production</li>
            <li>Wine programs, lists, and staff training</li>
          </ul>
          <p className="muted" style={{ marginTop: 22, fontSize: "0.92rem" }}>
            Based in Gothenburg (CET), Portland roots — US hours are genuinely
            fine. English or Swedish.
          </p>
        </div>
      </section>
    </main>
  );
}
