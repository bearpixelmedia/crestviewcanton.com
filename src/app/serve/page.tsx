import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Serve / Volunteer",
  description:
    "Serve with Crestview Baptist Church, worship, kids, students, greeting, and more.",
  path: "/serve",
});

const opportunities = [
  {
    area: "Crestview Worship",
    contact: "Anita · crestviewworship2@gmail.com",
    href: "/worship-ministry",
  },
  {
    area: "Children’s Ministry / VBS / TeamKid / God’s Kidz",
    contact: "crestview4kidz@gmail.com",
    href: "mailto:crestview4kidz@gmail.com",
  },
  {
    area: "Student Ministry",
    contact: "Jarred Rathbone · crestviewyouth3258@gmail.com",
    href: "mailto:crestviewyouth3258@gmail.com",
  },
  {
    area: "Life Group teaching & hospitality",
    contact: "Josh Jamison · joshuabradyj@gmail.com",
    href: "mailto:joshuabradyj@gmail.com",
  },
  {
    area: "Revolve Women Missions & Service",
    contact: "Rhonda Beck · rhonda@1smartagency.com",
    href: "mailto:rhonda@1smartagency.com",
  },
  {
    area: "Senior Adult Ministry",
    contact: `Pastor Dan · ${site.pastorEmail}`,
    href: `mailto:${site.pastorEmail}`,
  },
  {
    area: "Greeting / Welcome Center",
    contact: `Sharon · ${site.email}`,
    href: `mailto:${site.email}`,
  },
  {
    area: "Men’s Ministry (God’s Mighty Warriors)",
    contact: "Steve Kelley · chief1301@charter.net",
    href: "mailto:chief1301@charter.net",
  },
] as const;

export default function ServePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Serve / Volunteer"
        title="Ministry is love with work gloves on."
        lead="There are more ways than finances to help grow ministry, your time and gifts matter. We appreciate your willingness to serve."
      />

      <section className="relative overflow-hidden bg-fog">
        <div aria-hidden className="absolute inset-0 ridge opacity-60" />
        <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Hands and feet
          </p>
          <h2 className="mt-3 font-display text-3xl text-pine sm:text-4xl">
            Serving neighbors in Jesus’ name
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/75 sm:text-base">
            From fellowship breakfasts to Serve NC projects with God’s Mighty
            Warriors, Crestview puts love into action. Find a team below and
            tell us how you’d like to help.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Where you can serve
          </h2>
          <ul className="mt-8 space-y-4">
            {opportunities.map((o) => (
              <li
                key={o.area}
                className="flex flex-col gap-1 border-b border-pine/10 pb-4 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-sm font-semibold text-pine">{o.area}</span>
                <a
                  href={o.href}
                  className="text-sm text-canopy hover:underline"
                >
                  {o.contact}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-pine">
                Crestview Worship
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Crestview Worship exists to lead worshippers into authentic
                worship through music, prayer, and technology. We’re always
                looking for people with a passion for serving through music and
                media production. Interested? Ask about the audition process at{" "}
                <a
                  href="mailto:crestviewworship2@gmail.com"
                  className="font-semibold text-canopy"
                >
                  crestviewworship2@gmail.com
                </a>
                .
              </p>
              <h3 className="mt-8 font-display text-2xl text-pine">
                Kids &amp; students
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Passionate about the next generation? Angie and Jarred would love
                to talk about volunteering with Crestview Kids or Student
                Ministry.
              </p>
              <h3 className="mt-8 font-display text-2xl text-pine">
                How to get started
              </h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-ink/75">
                <li>Pray about where God is leading you to serve.</li>
                <li>Contact the church office or the ministry leader above.</li>
                <li>We’ll help with next steps and any training needed.</li>
              </ol>
              <p className="mt-4 text-sm text-ink/65">
                Office: {site.phone} · {site.email}
              </p>
              <Link
                href="/give-online"
                className="mt-6 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
              >
                Also consider giving
              </Link>
            </div>
            <div>
              <h3 className="font-display text-2xl text-pine">
                Tell us you’re interested
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Drop a note and we’ll follow up with next steps.
              </p>
              <ContactForm
                intent="contact"
                submitLabel="Send serve interest"
                className="mt-6"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
