import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Austin Abelkis — marketing producer, operations manager, and builder of production software. Full CV with PDF download.",
};

function Entry({
  title,
  where,
  when,
  bullets,
}: {
  title: string;
  where: string;
  when: string;
  bullets: string[];
}) {
  return (
    <div className="cv-entry">
      <div className="menu-line">
        <h3>{title}</h3>
        <span className="leader"></span>
        <span className="when">{when}</span>
      </div>
      <p className="where">{where}</p>
      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CV() {
  return (
    <main className="wrap">
      <section className="hero" style={{ paddingBottom: "clamp(28px, 4vw, 44px)" }}>
        <div className="cv-head">
          <div>
            <p className="kicker">Curriculum vitae</p>
            <h1 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
              The long version.
            </h1>
          </div>
          <a className="btn" href="/Austin-Abelkis-CV.pdf" download>
            Download PDF ↓
          </a>
        </div>
      </section>

      <div className="cv-section">
        <h2 className="kicker">Experience</h2>
        <Entry
          title="WagsWorks"
          where="Marketing Producer / Operations Manager · Remote / Portland, USA"
          when="Jan 2022 — present"
          bullets={[
            "Support sponsorship sales, activation planning, and partner delivery for festivals, concert series, and live events across the US.",
            "Build sponsorship decks, package deliverables, and manage contracts, invoices, COIs, W9s, and partner approvals.",
            "Coordinate between event owners, sponsors, agencies, and internal teams across timelines, assets, and reporting.",
            "Designed and built WagsWorks OS — the internal platform the team runs daily: deal pipeline, paperwork tracking, invoicing, guestlists, revenue reporting, and team chat.",
          ]}
        />
        <Entry
          title="The Field Scout"
          where="Field Manager / Experiential Marketing Lead · USA"
          when="Jan 2020 — present"
          bullets={[
            "Lead field teams for national brand activations, including Subaru and Chaco Footwear programs.",
            "Run onsite logistics, inventory, reporting, and client communication in fast-moving environments.",
            "Translate consumer feedback and event results into practical post-event insights.",
          ]}
        />
        <Entry
          title="MusicPortland"
          where="Marketing & Operations Manager · Portland, USA"
          when="Oct 2018 — Dec 2019"
          bullets={[
            "Produced livestreams, industry meetings, and community events for Portland's music industry association.",
            "Managed social media, website, newsletters, databases, invoicing, and stakeholder communication.",
            "Supported the Executive Director with client relations, grant administration, and operational planning.",
          ]}
        />
        <Entry
          title="DoStuff Media / 503 Media & Events"
          where="Brand Manager / Producer · Portland, USA"
          when="Jun 2015 — Sep 2018"
          bullets={[
            "Managed content, promotions, and digital campaigns for local events, venues, and brand partners — including Jack Daniel's, Red Bull, Campari Group, Abercrombie & Fitch, McMenamins, Brew Dr., RISE Brewing, and Poler.",
            "Produced events from large-scale (Portland Derby, Polo Noir, WINGS speaker series) to corporate off-sites and activations for Nike, Daimler, and RGA.",
            "Led interns and content managers while maintaining client communication and campaign delivery.",
          ]}
        />
      </div>

      <div className="cv-section">
        <h2 className="kicker">Independent build work</h2>
        <Entry
          title="Boulder Waldorf Kindergarten & Preschool"
          where="Design, build & launch — full site + admissions & paperwork platform"
          when="2026"
          bullets={[
            "Public website plus the school's admissions pipeline, online enrollment paperwork with e-signatures, family profiles, automated reminders, and click-to-edit content the staff manage themselves.",
            "Next.js + Supabase on Vercel; automated browser QA across all 67 pages at two viewports.",
          ]}
        />
        <Entry
          title="Sommeliers Academy Sweden"
          where="Website & growth strategy"
          when="2026"
          bullets={[
            "Bilingual site and growth strategy for Sweden's ASI-aligned sommelier school.",
          ]}
        />
        <Entry
          title="WagsWorks OS"
          where="Design & build — internal sponsorship platform"
          when="2025 — present"
          bullets={[
            "Dependency-free PWA on Cloudflare Workers + Supabase: deals, paperwork auto-escalation, invoicing, guestlists, revenue YoY, realtime chat, Gmail integration.",
          ]}
        />
      </div>

      <div className="cv-section">
        <h2 className="kicker">Earlier &amp; elsewhere</h2>
        <Entry
          title="TEDxPortland"
          where="Production volunteer"
          when="2014 onward"
          bullets={[
            "Year-round event production with a 100-person volunteer crew; partner and marketing communication.",
          ]}
        />
        <Entry
          title="Fine dining & wine service"
          where="Tavolo, Gothenburg · The Wine Cask, Santa Barbara · Pok Pok, Portland · Basil Flats, Longmont"
          when="ongoing"
          bullets={[
            "Wine service, serving, cooking, and front-of-house management across four kitchens and dining rooms in two countries.",
            "The hospitality standard everything since is held to — and the practical half of the sommelier certification.",
          ]}
        />
      </div>

      <div className="cv-section">
        <h2 className="kicker">Education &amp; certification</h2>
        <Entry
          title="Portland State University"
          where="B.A. Business Administration — Advertising Management · Portland, Oregon"
          when="2013 — 2017"
          bullets={["Thesis: Brand Building for Small Business."]}
        />
        <Entry
          title="ASI Sommelier Certification"
          where="Association de la Sommellerie Internationale"
          when="Level 1"
          bullets={[
            "Backed by years working fine dining and wine service.",
          ]}
        />
      </div>

      <div className="cv-section" style={{ paddingBottom: 56 }}>
        <h2 className="kicker">Tools &amp; languages</h2>
        <div className="tag-row">
          {[
            "Google Analytics",
            "Meta / Google Ads",
            "Mailchimp",
            "HubSpot",
            "Salesforce",
            "Asana",
            "Airtable",
            "Google Workspace",
            "QuickBooks",
            "Canva",
            "Adobe Creative Suite",
            "Squarespace",
            "Next.js",
            "Supabase",
            "Cloudflare",
            "Claude",
          ].map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="tag-row" style={{ marginTop: 10 }}>
          {[
            "English (native)",
            "Swedish (conversational)",
            "Spanish (intermediate)",
            "German (basic)",
          ].map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
