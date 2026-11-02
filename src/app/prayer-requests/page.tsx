import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Requests",
  description:
    "Share a prayer request with Crestview Baptist Church — we would be honored to pray with you.",
};

export default function PrayerRequestsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Prayer Requests"
        title="We would be honored to pray with you and for you."
        lead="Crestview as the body of Christ believes that God hears and answers prayer. Share a request with our church family and leadership — confidentially if you prefer."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <blockquote className="border-l-2 border-gold pl-5 font-display text-xl text-canopy">
              “And my house shall be called a house of prayer for all nations.”
              <cite className="mt-2 block font-sans text-sm not-italic text-ink/60">
                Matthew 21:13
              </cite>
            </blockquote>

            <h2 className="mt-10 font-display text-2xl text-pine">
              Midweek Prayer Service
            </h2>
            <p className="mt-3 text-sm text-ink/75">
              Join us Wednesdays at 7:00 PM in the Agape Classroom for midweek
              prayer.
            </p>

            <h2 className="mt-8 font-display text-2xl text-pine">
              Men’s Prayer Time
            </h2>
            <p className="mt-3 text-sm text-ink/75">
              Saturdays at 9:00 AM — men gather to pray and fellowship.
            </p>

            <h2 className="mt-8 font-display text-2xl text-pine">
              You are not alone
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Don’t face life alone — face it together. If you need pastoral
              care, ask for Pastor Dan or the office when you call. We are here
              to serve our community.
            </p>
            <p className="mt-4 text-sm text-ink/65">
              Or call{" "}
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-canopy">
                {site.phone}
              </a>
              .
            </p>
            <Link
              href="/plan-your-visit"
              className="mt-6 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
            >
              Plan a visit this Sunday
            </Link>
          </div>

          <div>
            <h2 className="font-display text-2xl text-pine">
              Submit a prayer request
            </h2>
            <p className="mt-3 text-sm text-ink/70">
              Include “confidential” in your message if you prefer limited
              sharing with pastoral leadership only.
            </p>
            <ContactForm
              intent="prayer"
              submitLabel="Send prayer request"
              className="mt-6"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
