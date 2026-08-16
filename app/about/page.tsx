import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Portland kitchens to Gothenburg wine cellars, with a decade of live events in between — and the software habit that ties it together.",
};

export default function About() {
  return (
    <main className="wrap">
      <section className="hero" style={{ paddingBottom: "clamp(32px, 5vw, 56px)" }}>
        <p className="kicker">About</p>
        <h1 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
          Master of none.
        </h1>
        <p className="standfirst">
          The rest of that saying is the part people forget — and the part I
          built a career on.
        </p>
      </section>

      <section style={{ paddingTop: 0, borderTop: "none" }}>
        <p className="epigraph">
          “Jack of all trades, master of none —{" "}
          <em>though oftentimes better than a master of one.</em>”
        </p>

        <div className="prose" style={{ marginTop: 30 }}>
          <p>
            A festival sponsorship, a Friday night on the floor, a brand
            campaign, a school’s enrollment system. Same job, different
            clothes. Somebody has to hold the whole picture, sweat the details
            nobody will ever notice, and have it all look effortless by the
            time anyone shows up.
          </p>
          <p>
            I did that for other people’s brands and events for ten years. Now
            I build the websites and software too — which used to mean hiring a
            dev team, and doesn’t anymore. So you’re not paying someone to
            learn your business first. I’ve worked the floor and chased the
            invoices, and I move fast: most projects are weeks, not quarters.
          </p>
        </div>

        <div className="prose" style={{ marginTop: "2em" }}>
          <p>
            I started in kitchens and dining rooms — Pok Pok in Portland, The
            Wine Cask in Santa Barbara, Basil Flats in Longmont, and Tavolo
            here in Gothenburg. Cooking, serving, running front-of-house.
            Hospitality teaches you the whole job: nobody cares whose station
            the problem is on, the guest just needs it fixed, quietly, now.
          </p>
          <p>
            Then a decade of live events and media. At DoStuff Media and 503
            Media &amp; Events I managed brands and produced campaigns for Jack
            Daniel’s, Red Bull, Campari, and McMenamins; at MusicPortland
            I ran marketing and operations for the city’s music industry
            association; at TEDxPortland I volunteered on production year after
            year. Since 2022 I’ve produced sponsorships and operations at
            WagsWorks — festivals and concert series across the US, from the
            pitch deck to the guestlist.
          </p>
          <p>
            Somewhere in there, the tools became the interesting problem.
            Every small operation I worked in ran on spreadsheets held
            together with hope. So I started building the software myself:
            first WagsWorks’ internal platform, then a school’s
            entire web presence and admissions system, then a wine
            school’s site. Shipped, in production, run by their owners —
            built with the same standard a good dining room runs on.
          </p>
          <p>
            These days I live in Gothenburg, where the wine chapter got
            formal: an ASI Level 1 sommelier certification on top of years of
            fine-dining service — including a stretch at The Wine Cask in
            Santa Barbara, which is the kind of list that teaches you fast.
            The lanes look unrelated on paper. They’re not. It’s all
            the same job — take care of people, sweat the details they never
            see, make it feel effortless.
          </p>
        </div>

        <dl className="facts">
          <div>
            <dt>Based</dt>
            <dd>Gothenburg, Sweden — Portland, Oregon roots. US hours are no problem.</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>English (native) · Swedish (conversational) · Spanish (intermediate) · German (basic)</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>
              B.A. Business Administration — Advertising Management, Portland
              State University. Thesis: <i>Brand Building for Small Business</i>.
            </dd>
          </div>
          <div>
            <dt>Certification</dt>
            <dd>ASI Sommelier Certification, Level 1</dd>
          </div>
        </dl>
      </section>

      <section>
        <p className="kicker">Off the clock</p>
        <div className="prose">
          <p>
            Cooking for far longer than the recipe says, live music whenever
            there is any, and an ongoing and rigorous survey of Gothenburg
            wine bars — strictly for professional development.
          </p>
        </div>
      </section>
    </main>
  );
}
