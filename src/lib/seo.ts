import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Default share image (campus exterior). One photo one place: hero + OG share OK. */
export const defaultOgImage = {
  url: "/images/social/campus-hero.jpg",
  width: 1920,
  height: 1122,
  alt: `${site.name} campus on Pisgah Drive, Canton, NC`,
} as const;

/** All public indexable routes (no /api). */
export const publicRoutes = [
  { path: "/", title: "Home", changeFrequency: "weekly" as const, priority: 1 },
  {
    path: "/plan-your-visit",
    title: "Plan Your Visit",
    changeFrequency: "monthly" as const,
    priority: 0.9,
  },
  {
    path: "/about",
    title: "About Crestview",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/our-staff",
    title: "Our Staff",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/our-beliefs",
    title: "Our Beliefs",
    changeFrequency: "yearly" as const,
    priority: 0.7,
  },
  {
    path: "/frequently-asked-questions",
    title: "FAQ",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/ministries",
    title: "Ministries",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/childrens-ministry",
    title: "Children’s Ministry",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/student-ministry",
    title: "Student Ministry",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/adult-ministry",
    title: "Adult Ministry",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/missions",
    title: "Missions & Outreach",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/serve",
    title: "Serve / Volunteer",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/events",
    title: "Events",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/prayer-requests",
    title: "Prayer Requests",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/membership",
    title: "Membership & Next Steps",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    path: "/baptism",
    title: "Baptism",
    changeFrequency: "yearly" as const,
    priority: 0.6,
  },
  {
    path: "/contact",
    title: "Contact Us",
    changeFrequency: "yearly" as const,
    priority: 0.8,
  },
  {
    path: "/sermons-media",
    title: "Sermons & Media",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  },
  {
    path: "/livestream",
    title: "Livestream",
    changeFrequency: "weekly" as const,
    priority: 0.7,
  },
  {
    path: "/news",
    title: "News & Announcements",
    changeFrequency: "weekly" as const,
    priority: 0.6,
  },
  {
    path: "/photo-gallery",
    title: "Photo Gallery",
    changeFrequency: "monthly" as const,
    priority: 0.5,
  },
  {
    path: "/resources",
    title: "Resources",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
  {
    path: "/give-online",
    title: "Give Online",
    changeFrequency: "yearly" as const,
    priority: 0.7,
  },
] as const;

export function absoluteUrl(path: string): string {
  if (path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title?: string;
  description: string;
  path: string;
  /** Full document title (home); skips the root template */
  absoluteTitle?: string;
};

/** Per-page title, description, canonical, Open Graph, and Twitter. */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle =
    absoluteTitle ?? (title ? `${title} | ${site.name}` : site.name);

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [defaultOgImage.url],
    },
  };
}

/** Church / LocalBusiness JSON-LD for the root layout. */
export function churchJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Church",
    "@id": `${site.url}/#church`,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl(defaultOgImage.url),
    logo: absoluteUrl("/brand/crestview-mark.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "US",
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.youtube,
      site.pastorWebsite.href,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}
