import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Announcements",
  description:
    "Happenings and announcements from Crestview Baptist Church in Canton, NC.",
};

export default function NewsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="News & Announcements"
        title="Stay connected with Crestview."
        lead="Dated campaigns and one-off announcements change week to week. For the latest, check the Sunday bulletin, Facebook, and Church Center — then reach out to the office if you have something to share."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">This week</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                See our{" "}
                <Link href="/events" className="font-semibold text-canopy">
                  Events
                </Link>{" "}
                page for the weekly rhythm (Sunday, Wednesday, monthly groups,
                and Teachlife Radio).
              </p>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">On Facebook</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Ministry updates and live Sunday streams often appear first on
                our Facebook page.
              </p>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Crestview on Facebook
              </a>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">Miss a Sunday?</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Visit Sermons &amp; Media or YouTube for recent messages.
              </p>
              <Link
                href="/sermons-media"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Sermons &amp; Media
              </Link>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">
                Have an announcement?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Contact the church office to share ministry updates for the
                bulletin and website.
              </p>
              <p className="mt-3 text-sm text-ink/65">
                {site.phone} · {site.email}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Contact Us
              </Link>
            </article>
          </div>
          <p className="mt-12 text-xs text-ink/50">
            Featured dated announcements are intentionally omitted here until the
            office supplies current copy — we won’t invent campaigns or event
            dates.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
