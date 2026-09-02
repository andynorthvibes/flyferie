import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flyferie.no"),
  applicationName: "Flyferie.no",
  title: "Flyferie.no – Finn din neste reise",
  description: "Oppdag weekendturer, skjulte perler, blåturer og inspirerende reisemål i Europa.",
  openGraph: {
    type: "website",
    siteName: "Flyferie.no",
    locale: "nb_NO",
    alternateLocale: "en_GB",
    title: "Flyferie.no – Finn din neste reise",
    description: "Oppdag weekendturer, skjulte perler, blåturer og inspirerende reisemål i Europa.",
    url: "https://flyferie.no/no",
    images: [{
      url: "/hero-flyferie.png",
      width: 1672,
      height: 941,
      alt: "Flyferie.no – reiseinspirasjon og håndplukkede reisemål",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyferie.no – Finn din neste reise",
    description: "Oppdag weekendturer, skjulte perler, blåturer og inspirerende reisemål i Europa.",
    images: ["/hero-flyferie.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon-v9.png",
    shortcut: "/favicon-v9.png",
    apple: "/apple-touch-icon-v9.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://flyferie.no/#organization",
        name: "Flyferie.no",
        url: "https://flyferie.no",
        logo: {
          "@type": "ImageObject",
          url: "https://flyferie.no/flyferie-logo-v9.png",
          width: 2078,
          height: 757,
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://flyferie.no/#website",
        name: "Flyferie.no",
        url: "https://flyferie.no",
        publisher: { "@id": "https://flyferie.no/#organization" },
        inLanguage: ["nb-NO", "en"],
      },
    ],
  };

  return (
    <html lang="no">
      <head>
        <meta
          name="impact-site-verification"
          {...{ value: "3cef219b-36a2-4d44-9166-a84f9fb1b413" }}
        />
      </head>
      <body className={`${dmSans.variable} ${fraunces.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
