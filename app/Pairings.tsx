"use client";

import { useState } from "react";

type Need = {
  need: string;
  work: string;
  shape: string;
  wine: string;
  note: string;
};

const NEEDS: Need[] = [
  {
    need: "We need a website that doesn’t embarrass us",
    work: "A site that loads fast, reads properly on a phone, and that you can change yourself afterwards without calling anyone or paying a monthly fee.",
    shape: "Usually 3–6 weeks · a fixed price, agreed before I start",
    wine: "Chablis",
    note: "no oak, no makeup, nowhere to hide — all structure",
  },
  {
    need: "Our spreadsheet has become a monster",
    work: "Software built around the way you already work: the jobs, the paperwork, the invoices, the reminders. One place instead of six, and it nags itself instead of nagging you.",
    shape: "Usually 6–12 weeks · built to fit how you actually run things",
    wine: "Barolo",
    note: "difficult early, worth it once someone gives it the time",
  },
  {
    need: "People don’t know we exist",
    work: "The look of the thing — logo, colors, decks, one-sheets, menus — and the words that go with it. Everything that has to survive being forwarded to somebody’s boss.",
    shape: "Usually 2–5 weeks · priced per piece",
    wine: "Orange wine",
    note: "walks into a room and gets asked about",
  },
  {
    need: "We’re throwing a thing",
    work: "Running the event: the schedule, the vendors, the sponsors, the budget, and somebody calm holding it together on the day.",
    shape: "Priced per event · sponsorship work can be on commission",
    wine: "Grower Champagne",
    note: "same occasion as the big houses, made by whoever farmed it",
  },
  {
    need: "Our wine list needs help",
    work: "Building the list, pricing it, writing pairings, and training your staff so they can talk about it confidently instead of reciting a script.",
    shape: "One visit, or ongoing · ASI-certified sommelier",
    wine: "Fino Sherry",
    note: "what sommeliers pour each other, and almost nobody lists",
  },
  {
    need: "Honestly, we’re not sure yet",
    work: "A conversation, free, where I tell you honestly what I think you need — including when that’s nothing, or somebody other than me.",
    shape: "30 minutes · no sales pitch, no deck",
    wine: "Whatever’s open",
    note: "most good projects start as a vague feeling that something isn’t working",
  },
];

export default function Needs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="pairing-list">
      {NEEDS.map((p, i) => {
        const isOpen = open === i;
        return (
          <li key={p.need} className={isOpen ? "pairing open" : "pairing"}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`need-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="pairing-need">{p.need}</span>
              <span className="leader" aria-hidden="true"></span>
              <span className="pairing-cue" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div id={`need-${i}`} className="pairing-body" hidden={!isOpen}>
              <p className="pairing-work">{p.work}</p>
              <p className="pairing-shape">{p.shape}</p>
              <a
                className="btn"
                href={`mailto:austin@abelkis.com?subject=${encodeURIComponent(
                  p.need
                )}`}
              >
                Talk to me about this →
              </a>
              <p className="pairing-wine-note">
                <span>If it helps:</span> this one’s a <b>{p.wine}</b> — {p.note}.
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
