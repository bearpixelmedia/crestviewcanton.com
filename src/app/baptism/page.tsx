import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baptism",
  description:
    "Baptism at Crestview Baptist Church, the believer’s obedient step of identifying with Jesus.",
};

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
            Contact the church office (
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-canopy">
              {site.phone}
            </a>
            ) or Pastor Dan (
            <a
              href={`mailto:${site.pastorEmail}`}
              className="font-semibold text-canopy"
            >
              {site.pastorEmail}
            </a>
            ) to share your story and schedule baptism.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/our-beliefs"
              className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog"
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
        </div>
      </section>
    </PageShell>
  );
}
