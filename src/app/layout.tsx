import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { siteData } from "@/data/siteData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteData.seo.defaultTitle,
    template: `%s | ${siteData.seo.siteName}`,
  },
  description: siteData.seo.defaultDescription,
  keywords: siteData.seo.defaultKeywords,
  authors: [{ name: siteData.business.name }],
  creator: siteData.business.name,
  publisher: siteData.business.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(siteData.seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteData.seo.siteUrl,
    siteName: siteData.seo.siteName,
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteData.business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.defaultTitle,
    description: siteData.seo.defaultDescription,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a5276" />
        <meta name="geo.region" content="GB-ESS" />
        <meta name="geo.placename" content="Seven Kings, Essex" />
        <meta name="geo.position" content="51.5635;0.0968" />
        <meta name="ICBM" content="51.5635, 0.0968" />
      </head>
      <body className="font-sans antialiased">
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
