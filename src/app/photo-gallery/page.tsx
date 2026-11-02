import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { galleryOnly } from "@/lib/photos";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Glimpses of Crestview Baptist Church history in Canton, NC.",
};

export default function PhotoGalleryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Photo Gallery"
        title="Glimpses of life at Crestview."
        lead="Historical moments from God’s faithfulness through the years. Recent fellowship photos live on our home page and social channels."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryOnly.map((p) => (
              <figure key={p.src} className="group">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-fog">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-3 text-xs tracking-wide text-ink/55">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink/70">
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
            className="mt-10 inline-flex rounded-sm bg-dawn px-6 py-3.5 text-sm font-semibold text-forest transition-transform hover:translate-y-[-1px] hover:bg-dawn-deep hover:text-fog"
          >
            Visit in person
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
