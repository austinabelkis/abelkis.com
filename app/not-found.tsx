import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap">
      <section className="hero">
        <p className="kicker">404</p>
        <h1 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
          Corked.
        </h1>
        <p className="standfirst">
          This page doesn&rsquo;t exist — or it did, and I moved it without
          telling anyone. Either way, everything worth finding is one click
          away.
        </p>
        <p style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link className="btn" href="/">
            Back to the start →
          </Link>
          <Link className="btn ghost" href="/work">
            See the work
          </Link>
        </p>
      </section>
    </main>
  );
}
