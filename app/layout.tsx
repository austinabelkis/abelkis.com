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
    "Websites, custom software, events and design for small businesses and nonprofits. One person, quick turnarounds, no account managers.",
  openGraph: {
    title: "Austin Abelkis — websites, software, events, design",
    description:
      "For small businesses and nonprofits. One person, quick turnarounds, no account managers.",
    url: "https://abelkis.com",
    siteName: "Austin Abelkis",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Austin Abelkis — websites, software, events, design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Abelkis — websites, software, events, design",
    description:
      "For small businesses and nonprofits. One person, quick turnarounds, no account managers.",
    images: ["/og.jpg"],
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
