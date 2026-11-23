import type { Metadata, Viewport } from "next";
import "./tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aipalab.in"),
  title: "aipalab · AI Incubated Project Appraisal Lab",
  description:
    "Investment appraisals prepared the way VC, PE and family-office analysts work: market research, financial model, scenario analysis and a committee-ready pack. Your committee decides.",
  openGraph: {
    title: "aipalab · AI Incubated Project Appraisal Lab",
    description:
      "Deck to committee pack, with the research, model and scenarios shown in full. Decision support for investment committees.",
    url: "https://aipalab.in",
    siteName: "aipalab",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2328",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
