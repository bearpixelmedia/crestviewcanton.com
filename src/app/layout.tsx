import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { churchJsonLd, defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Canton, NC`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: "h7fQ3mnkmd6Jbv8PPAgbjY49FavuxBy8ZyAAWpbaoJo",
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
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [defaultOgImage.url],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  category: "religion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        <JsonLd data={churchJsonLd()} />
        {children}
        <GoogleAnalytics gaId={site.googleAnalyticsId} />
      </body>
    </html>
  );
}
