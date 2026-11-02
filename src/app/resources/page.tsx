import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Discipleship tools, RightNow Media, SFU, sermons, and Teachlife Radio from Crestview Baptist Church.",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Tools to help you grow in Christ."
        lead="Explore discipleship opportunities, media, and ways to stay connected to Crestview’s teaching ministry."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">RightNow Media</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Streaming Bible teaching for the whole family is available free
                through your church. RightNow Media has thousands of video Bible
                studies, kids&apos; shows, and discipleship resources for every
                age. Contact the church office for access to our RightNow Media
                library.
              </p>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">
                Spiritual Formation University
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                SFU equips believers to grow as disciples of Jesus Christ. Groups
                meet Sunday evenings at 6:00 PM with teaching focused on applying
                God&apos;s Word.
              </p>
              <Link
                href="/adult-ministry"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Adult Ministry &amp; Small Groups
              </Link>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">Sermons &amp; Media</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Watch or listen to Sunday messages on{" "}
                <a
                  href={site.social.facebook}
                  className="font-semibold text-canopy underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>{" "}
                and{" "}
                <a
                  href={site.social.youtube}
                  className="font-semibold text-canopy underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
                .
              </p>
              <Link
                href="/sermons-media"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Go to Sermons &amp; Media
              </Link>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">Crestview Kids</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Follow children&apos;s ministry updates on Facebook.
              </p>
              <a
                href={site.social.facebookKids}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Crestview Kids on Facebook
              </a>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">Teachlife Radio</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Fridays at 10:00 AM with Pastor Dan Page, WPTL 101.7 FM / 920 AM.
              </p>
            </article>
            <article className="border-t border-pine/15 pt-6">
              <h2 className="font-display text-2xl text-pine">Livestream</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Join Morning Worship online when you can&apos;t be in the room.
              </p>
              <Link
                href="/livestream"
                className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Watch online
              </Link>
            </article>
          </div>

          <div className="mt-14 border-t border-pine/10 pt-10">
            <h2 className="font-display text-2xl text-pine">
              Need Something Specific?
            </h2>
            <p className="mt-3 text-ink/75">
              Call the church office, we&apos;re happy to help you find class
              materials, links, or next steps.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog hover:bg-canopy"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
