import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { LiveStreamBanner } from "@/components/LiveStreamBanner";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Livestream",
  description:
    "Watch Crestview Baptist Church live on YouTube when broadcasting, or join on Facebook.",
  path: "/livestream",
});

export default function LivestreamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Livestream"
        title="Join us online when you can’t be in the room."
        lead="Join our Sunday morning worship online. When Crestview broadcasts live on YouTube, the video appears below automatically."
      />

      <LiveStreamBanner />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-pine">
                Watch live on Facebook
              </h2>
              <p className="mt-4 text-ink/80 leading-relaxed">
                Go to the Crestview Baptist Facebook page on Sunday mornings for
                the live stream of Morning Worship (10:45 AM).
              </p>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog hover:bg-canopy"
              >
                Open Facebook
              </a>
            </div>
            <div>
              <h2 className="font-display text-3xl text-pine">YouTube channel</h2>
              <p className="mt-4 text-ink/80 leading-relaxed">
                Prefer on-demand? Visit the Crestview Baptist YouTube channel for
                recent services and messages.
              </p>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
              >
                Open YouTube
              </a>
            </div>
          </div>

          <h3 className="mt-16 font-display text-2xl text-pine">
            What you’ll experience
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
            Gospel-centered preaching from God’s Word with Dr. Daniel Page, and
            worship led by Crestview Worship.
          </p>

          <h3 className="mt-10 font-display text-2xl text-pine">
            We’d still love to meet you
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
            Online is a blessing, in-person fellowship is even better. Join us
            at {site.address.full}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/sermons-media"
              className="rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
            >
              Sermons &amp; Media
            </Link>
            <Link
              href="/plan-your-visit"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Plan Your Visit
            </Link>
          </div>
          <p className="mt-8 text-sm text-ink/65">
            Need help finding the stream? Call{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-canopy">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
