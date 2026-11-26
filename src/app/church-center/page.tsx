import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Church Center",
  description:
    "Church Center is where Crestview keeps its calendar, groups, and class signups. What it is, how to sign in, and what you will find there.",
  path: "/church-center",
});

const places = [
  {
    title: "Calendar",
    body: "Dated gatherings with times and locations: special services, camps and retreats, fellowships, and one-off events. It is the same calendar the Crestview app uses.",
    href: site.churchCenter.calendar,
    cta: "Open the calendar",
  },
  {
    title: "Groups",
    body: "Life Groups, kids and student ministry teams, worship and production, outreach, and serving teams, each with a way to ask about joining.",
    href: site.churchCenter.groups,
    cta: "Browse groups",
  },
  {
    title: "Registrations",
    body: "Anything you sign up for: the Exploratory New Members class, baptism dates, Vacation Bible School, camps, and seasonal studies.",
    href: site.churchCenter.registrations,
    cta: "See registrations",
  },
] as const;

const signInSteps = [
  "Open Church Center at crestviewbaptistchurch.churchcenter.com in any browser, or install the Church Center app and choose Crestview Baptist Church in Canton.",
  "Choose Sign in and enter your email address. If the office already has that address on file, your groups and signups will be waiting.",
  "Church Center emails you a sign-in code. Enter the code and you are in, with no password to remember.",
] as const;

export default function ChurchCenterPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Church Center"
        title="One place for the calendar, groups, and signups."
        lead="Church Center is the tool Crestview uses to keep events, groups, and class registrations current. Here is what it is, how to sign in, and where to find what you need."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            What is Church Center?
          </h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Church Center is the church’s free web and mobile tool for the
            details that change week to week. Instead of a printed list or a
            call to the office, you can check a date, find a group, or sign up
            for a class yourself, whenever it suits you. The office keeps it
            updated, so it is the best place to look before you come.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            You do not need it to visit on Sunday, and it is not how we receive
            gifts. Giving stays on our separate secure{" "}
            <Link
              href="/give-online"
              className="font-semibold text-canopy underline-offset-2 hover:underline"
            >
              giving page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            What you’ll find there
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {places.map((place) => (
              <article key={place.title} className="border-t border-pine/15 pt-6">
                <h3 className="font-display text-2xl text-pine">
                  {place.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {place.body}
                </p>
                <a
                  href={place.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-dawn-deep transition-colors hover:text-canopy"
                >
                  {place.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">How to sign in</h2>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/80">
            {signInSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-ink/60">
            Stuck on a sign-in code, or not sure which email we have? Call the
            office at{" "}
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold text-canopy"
            >
              {site.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-canopy"
            >
              {site.email}
            </a>
            .
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.churchCenter.root}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog transition-colors hover:bg-canopy"
            >
              Open Church Center
            </a>
            <Link
              href="/plan-your-visit"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine transition-colors hover:bg-fog"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine transition-colors hover:bg-fog"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
