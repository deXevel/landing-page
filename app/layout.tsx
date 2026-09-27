import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dexevel.com"),
  title: "Asif Vudi — Build the software. Automate the work.",
  description:
    "Custom software and business process automation for business owners in the UK and Ireland. Tell me what is taking too much time — I will figure out what should be built.",
  applicationName: "Asif Vudi",
  authors: [{ name: "Asif Vudi" }],
  keywords: [
    "custom software development",
    "business process automation",
    "internal tools",
    "workflow automation",
    "AI implementation",
    "UK",
    "Ireland",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Asif Vudi",
    title: "Asif Vudi — Build the software. Automate the work.",
    description:
      "Custom software and business process automation for business owners in the UK and Ireland. Tell me what is taking too much time — I will figure out what should be built.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Asif Vudi — Build the software. Automate the work.",
    description:
      "Custom software and business process automation for business owners in the UK and Ireland.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asif Vudi",
  jobTitle: "Software engineer and founder",
  url: "https://www.dexevel.com",
  sameAs: [
    "https://www.linkedin.com/in/asif-vudi",
    "https://github.com/perceptronbd",
    "https://dexevel.co",
    "https://perceptron.site",
  ],
  knowsAbout: [
    "Custom software development",
    "Business process automation",
    "AI implementation",
    "Internal tools and dashboards",
    "API integrations",
    "ERP and CRM systems",
  ],
};

const CONTACT_URL = "https://www.dexevel.com/contact-us";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="wrap nav">
          <a className="wordmark" href="/">
            Asif Vudi
          </a>
          <a className="cta cta--primary cta--small" href={CONTACT_URL}>
            Start a conversation
            <span aria-hidden="true">→</span>
          </a>
        </header>
        {children}
        <footer className="wrap footer">
          <div className="footer__row">
            <a className="wordmark" href="/">
              Asif Vudi
            </a>
            <span className="footer__sep" aria-hidden="true">
              ·
            </span>
            <span>Build the software. Automate the work.</span>
            <span className="footer__sep" aria-hidden="true">
              ·
            </span>
            <nav className="footer__links" aria-label="Footer">
              <a href={CONTACT_URL}>Contact</a>
              <a href="https://www.linkedin.com/in/asif-vudi">LinkedIn</a>
              <a href="https://github.com/perceptronbd">GitHub</a>
              <a href="https://dexevel.co">Scanner</a>
              <a href="https://perceptron.site">Case studies</a>
            </nav>
            <span className="footer__sep" aria-hidden="true">
              ·
            </span>
            <span className="footer__credit">© 2026 Asif Vudi</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
