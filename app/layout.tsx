import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import Nav from "./Nav";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abelkis.com"),
  title: {
    default: "Austin Abelkis — producer, builder, sommelier",
    template: "%s — Austin Abelkis",
  },
  description:
    "A boutique studio of one. Events and sponsorships, websites and software, food and wine — Portland roots, Gothenburg address, working anywhere.",
  openGraph: {
    title: "Austin Abelkis — producer, builder, sommelier",
    description:
      "A boutique studio of one. Events and sponsorships, websites and software, food and wine.",
    url: "https://abelkis.com",
    siteName: "Austin Abelkis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <header className="site-header">
          <div className="wrap header-row">
            <Link href="/" className="wordmark">
              Austin&nbsp;Abelkis
            </Link>
            <Nav />
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="wrap footer-grid">
            <p className="footer-mono">A·A</p>
            <div>
              <p>
                <a href="mailto:austin@abelkis.com">austin@abelkis.com</a>
                {" · "}
                <a
                  href="https://linkedin.com/in/austinabelkis"
                  rel="noopener"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
              <p className="footer-quiet">
                Portland&nbsp;⇄&nbsp;Gothenburg · Designed &amp; built by me.
                Obviously.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
