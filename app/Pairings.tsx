"use client";

import { useState } from "react";

type Pairing = {
  need: string;
  wine: string;
  region: string;
  because: string;
  work: string;
  shape: string;
};

const PAIRINGS: Pairing[] = [
  {
    need: "We need a website that doesn't embarrass us",
    wine: "Chablis",
    region: "Burgundy, France",
    because:
      "No oak, no makeup, nowhere to hide. Everything good about it is structure — which is also the only honest way to build a website.",
    work: "A site that loads fast, reads well on a phone, and that you can edit yourself without calling anyone.",
    shape: "Usually 3–6 weeks · fixed price, agreed up front",
  },
  {
    need: "Our spreadsheet has become a monster",
    wine: "Barolo",
    region: "Piedmont, Italy",
    because:
      "Difficult early, extraordinary once someone gives it the time it needs. Nobody regrets the wait.",
    work: "Custom internal software: the pipeline, the paperwork, the invoices, the reminders — one system that nags itself instead of you.",
    shape: "Usually 6–12 weeks · built around how you already work",
  },
  {
    need: "People don't know we exist",
    wine: "Orange wine",
    region: "Friuli or Georgia",
    because:
      "It walks into the room and gets asked about. That is the entire job of a brand.",
    work: "Identity, decks, one-sheets, and the collateral that has to survive being forwarded to someone's boss.",
    shape: "Usually 2–5 weeks · scoped per piece",
  },
  {
    need: "We're throwing a thing",
    wine: "Grower Champagne",
    region: "Côte des Bar, France",
    because:
      "Same occasion as the big houses, made by the person who farmed it. Costs less and tastes like someone cared.",
    work: "Event production and sponsorship: run of show, vendors, partners, budget, and someone calm holding it on the day.",
    shape: "Scoped per event · sponsorship work can be commission-based",
  },
  {
    need: "Our wine list needs help",
    wine: "Fino Sherry",
    region: "Jerez, Spain",
    because:
      "The bottle every sommelier pours for other sommeliers, and almost nobody puts on a list. Fixing that is the fun part.",
    work: "List design, pricing, pairing menus, and staff training that makes servers confident instead of scripted.",
    shape: "One visit, or ongoing · ASI-certified",
  },
  {
    need: "Honestly, we're not sure yet",
    wine: "Whatever's open",
    region: "Gothenburg, Sweden",
    because:
      "Most good projects start as a vague feeling that something isn't working. That's a fine place to begin.",
    work: "A conversation, free, where I tell you honestly whether I'm the right person — including when I'm not.",
    shape: "30 minutes · no deck, no pitch",
  },
];

export default function Pairings() {
  // First one open, so the device explains itself without a click.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pairings">
      <ul className="pairing-list">
        {PAIRINGS.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.need} className={isOpen ? "pairing open" : "pairing"}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`pairing-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="pairing-need">{p.need}</span>
                <span className="leader" aria-hidden="true"></span>
                <span className="pairing-cue">{isOpen ? "−" : "+"}</span>
              </button>
              <div
                id={`pairing-${i}`}
                className="pairing-body"
                hidden={!isOpen}
              >
                <div className="pairing-wine">
                  <p className="kicker" style={{ marginBottom: 6 }}>
                    Pairs with
                  </p>
                  <p className="wine-name">{p.wine}</p>
                  <p className="wine-region">{p.region}</p>
                </div>
                <div className="pairing-notes">
                  <p className="tasting-note">{p.because}</p>
                  <p className="pairing-work">
                    <b>What that means in practice:</b> {p.work}
                  </p>
                  <p className="pairing-shape">{p.shape}</p>
                  <a
                    className="btn"
                    href={`mailto:austin@abelkis.com?subject=${encodeURIComponent(
                      p.need
                    )}`}
                  >
                    Order this one →
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
