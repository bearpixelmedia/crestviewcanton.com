import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sermons & Media",
  description:
    "Watch and listen to Sunday sermons and messages from Crestview Baptist Church.",
};

export default function SermonsMediaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sermons & Media"
        title="Miss us on Sunday? Give us a listen here."
        lead="This page features Sunday morning sermons and messages from Crestview. Need encouragement on the road? Share last week’s sermon with a friend."
        image={photos.worship.src}
        imageAlt={photos.worship.alt}
      />
      <PhotoBand
        src={photos.pastor.src}
        alt={photos.pastor.alt}
      />


      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-pine">Watch Live</h2>
              <p className="mt-4 text-ink/75 leading-relaxed">
                You can watch live on Sunday mornings on Crestview Baptist
                Church’s Facebook page. Recent series and messages are also
                posted on YouTube.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm bg-pine px-4 py-2.5 text-sm font-semibold text-fog hover:bg-canopy"
                >
                  Facebook Page
                </a>
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm border border-pine/25 px-4 py-2.5 text-sm font-semibold text-pine hover:bg-fog"
                >
                  YouTube Channel
                </a>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-pine">
                Sunday’s Sermon
              </h2>
              <p className="mt-4 text-ink/75 leading-relaxed">
                Follow along with Dr. Daniel Page. Check our media channels for
                the latest teaching and archived messages.
              </p>
              <p className="mt-4 text-sm text-ink/60">
                Audio options are linked from our media channels, or ask the
                office for help finding a message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-display text-3xl text-pine">We Welcome You</h2>
          <p className="mt-4 text-ink/75">
            We’re saving you a seat, join us Sunday at 10:45 AM, or catch the
            message online.
          </p>
          <Link
            href="/plan-your-visit"
            className="mt-8 inline-flex rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
