import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "What to expect on Sunday at Crestview Baptist Church in Canton, NC.",
};

export default function PlanYourVisitPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Plan Your Visit"
        title="We’re saving you a seat."
        lead="Welcome! If you are looking for a church home or simply exploring faith, we would love for you to visit Crestview Baptist Church. Take a few moments to learn what to expect — then join us this Sunday."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-pine">
                What to Expect on Sunday
              </h2>
              <p className="mt-4 text-ink/75 leading-relaxed">
                When you arrive, check in at our welcome center. Staff and
                greeters can help you find the right classrooms and seating.
                Please let our team know about any allergies or special needs
                for children. Come as you are — our focus is loving God and
                loving people.
              </p>

              <h3 className="mt-10 font-display text-2xl text-pine">
                Visiting With Kids?
              </h3>
              <p className="mt-3 text-ink/75 leading-relaxed">
                We love the little ones — and we&apos;re all in for helping
                children and families grow in Jesus. Nursery (Birth–2) is
                available during Life Groups and Morning Worship. Children&apos;s
                Church classes — Nursery, PreK – 1st Grade, and 2nd–3rd Grade —
                meet during Morning Worship.
              </p>
            </div>

            <div className="bg-fog px-6 py-8 sm:px-8">
              <h2 className="font-display text-2xl text-pine">Sunday Schedule</h2>
              <ul className="mt-5 space-y-3">
                {site.schedule.sunday.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-pine/10 pb-3 text-sm"
                  >
                    <span className="text-ink/80">{row.label}</span>
                    <span className="shrink-0 font-semibold text-canopy">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-display text-xl text-pine">
                Wednesday Evenings
              </h3>
              <ul className="mt-4 space-y-3">
                {site.schedule.wednesday.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-pine/10 pb-3 text-sm"
                  >
                    <span className="text-ink/80">{row.label}</span>
                    <span className="shrink-0 font-semibold text-canopy">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-pine/10 pt-10">
            <h2 className="font-display text-3xl text-pine">Find Us</h2>
            <p className="mt-3 text-ink/75">
              {site.address.full}
              <br />
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-canopy">
                {site.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-canopy">
                {site.email}
              </a>
            </p>
            <p className="mt-8 text-ink/80">
              Join us this Sunday — Morning Worship begins at 10:45 AM. Life
              Groups meet at 9:30 AM. There&apos;s a place here for you.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
