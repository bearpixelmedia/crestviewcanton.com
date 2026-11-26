import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Baptism",
  description:
    "Baptism at Crestview Baptist Church, the believer’s obedient step of identifying with Jesus.",
  path: "/baptism",
});

export default function BaptismPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Baptism"
        title="Begin your public journey of faith."
        lead="Baptism is one of two ordinances Jesus gave His church. At Crestview, baptism is the immersion of believers in water, signifying union with Christ and with His church."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            What baptism means
          </h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Baptism does not save us, salvation is by grace through faith in
            Jesus Christ alone. Baptism is the believer’s obedient step of
            identifying with Jesus’ death, burial, and resurrection, and joining
            the fellowship of the church.
          </p>

          <h3 className="mt-10 font-display text-2xl text-pine">
            The Lord’s Supper
          </h3>
          <p className="mt-3 text-ink/80 leading-relaxed">
            Alongside baptism, we observe the Lord’s Supper, remembering Jesus’
            death and our accountability to walk in obedience to Him.
          </p>

          <h3 className="mt-10 font-display text-2xl text-pine">
            Who should be baptized?
          </h3>
          <p className="mt-3 text-ink/80 leading-relaxed">
            Those who have repented of sin and trusted Jesus Christ as Lord and
            Savior. If you’ve never taken that step, or were baptized before
            coming to faith, we’d love to talk with you.
          </p>

          <h3 className="mt-10 font-display text-2xl text-pine">
            Ready to take this next step?
          </h3>
          <p className="mt-3 text-ink/80 leading-relaxed">
            Upcoming baptism dates are posted in Church Center registrations,
            where you can sign up and tell us a little of your story.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.churchCenter.registrations}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog transition-colors hover:bg-canopy"
            >
              Sign up on Church Center
            </a>
            <Link
              href="/our-beliefs"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Our Beliefs
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Contact Us
            </Link>
            <Link
              href="/plan-your-visit"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Join Us Sunday
            </Link>
          </div>

          <p className="mt-5 text-sm text-ink/55">
            Questions first? Call the office at{" "}
            <a href={`tel:${site.phoneTel}`} className="hover:text-pine">
              {site.phone}
            </a>{" "}
            or email Pastor Dan at{" "}
            <a
              href={`mailto:${site.pastorEmail}`}
              className="hover:text-pine"
            >
              {site.pastorEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
