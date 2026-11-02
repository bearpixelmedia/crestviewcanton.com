import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Glimpses of life and history at Crestview Baptist Church in Canton, NC.",
};

const photos = [
  {
    src: "/images/social/campus-entrance.jpg",
    alt: "Crestview Baptist Church entrance and sign",
    caption: "Church life, campus entrance (YouTube)",
  },
  {
    src: "/images/social/fb-serve-5.jpg",
    alt: "Men’s fellowship gathering at Crestview",
    caption: "Church life, fellowship (Facebook)",
  },
  {
    src: "/images/social/fb-serve-2.jpg",
    alt: "Breakfast fellowship at Crestview",
    caption: "Church life, shared meals (Facebook)",
  },
  {
    src: "/images/social/fb-serve-1.jpg",
    alt: "Crestview members in the community",
    caption: "Outreach & neighbors (Facebook)",
  },
  {
    src: "/images/social/fb-serve-3.jpg",
    alt: "Serving together from Crestview Facebook",
    caption: "Serve day moments (Facebook)",
  },
  {
    src: "/images/social/fb-serve-4.jpg",
    alt: "Crestview volunteers at work",
    caption: "Hands and feet (Facebook)",
  },
  {
    src: "/images/gallery/worship.jpg",
    alt: "Sunday worship at Crestview",
    caption: "Church life, Sunday worship",
  },
  {
    src: "/images/gallery/march-1962.jpg",
    alt: "Crestview history, March 1962",
    caption: "Our history, March 1962",
  },
  {
    src: "/images/gallery/first-building.jpg",
    alt: "Crestview’s first building",
    caption: "Our history, first building",
  },
  {
    src: "/images/gallery/groundbreaking-1963.jpg",
    alt: "Groundbreaking, September 1963",
    caption: "Our history, Sept 1963 groundbreaking",
  },
  {
    src: "/images/gallery/sanctuary-1964.jpg",
    alt: "First sanctuary under construction, 1964",
    caption: "Our history, sanctuary construction, 1964",
  },
  {
    src: "/images/gallery/youth-1965.jpg",
    alt: "Crestview youth, 1965",
    caption: "Kids & students, youth, 1965",
  },
  {
    src: "/images/gallery/vbs-1967.jpg",
    alt: "VBS at Crestview, 1967",
    caption: "Kids & students, VBS, 1967",
  },
  {
    src: "/images/gallery/first-pastor.jpg",
    alt: "Crestview’s first pastor",
    caption: "Our history, first pastor",
  },
  {
    src: "/images/ministries/senior-adults.jpg",
    alt: "Joyful Hearts senior adults",
    caption: "Events & celebrations, Joyful Hearts",
  },
] as const;

export default function PhotoGalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Photo Gallery"
        title="Glimpses of life at Crestview."
        lead="Explore moments from worship, ministries, and God’s faithfulness through the years, plus recent photos from Facebook and YouTube."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.src} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-fog">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-ink/60">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-sm text-ink/70">
            Have a great Crestview moment? Email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-canopy">
              {site.email}
            </a>{" "}
            or tag us on{" "}
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-canopy"
            >
              Facebook
            </a>{" "}
            and{" "}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-canopy"
            >
              Instagram
            </a>
            .
          </p>

          <Link
            href="/plan-your-visit"
            className="mt-8 inline-flex rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
          >
            Visit in person
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
