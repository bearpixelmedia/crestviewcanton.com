import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership & Next Steps",
  description:
    "Visit, grow, belong, and serve at Crestview Baptist Church. Take your next step toward membership and life together in Christ.",
};

const steps = [
  {
    title: "Start by visiting",
    body: (
      <>
        Join us Sunday for Life Groups at 9:30 AM and Morning Worship at 10:45
        AM. When you arrive, stop by the welcome center. Our greeters can help
        you find a seat, classrooms for kids, and anything else you need to feel
        at home.
      </>
    ),
    href: "/plan-your-visit",
    cta: "Plan Your Visit",
  },
  {
    title: "Grow with us",
    body: (
      <>
        Plug into a Life Group to study Scripture and build friendships. Join
        SFU groups on Sunday evenings for spiritual formation across ages. Kids
        and students have age-appropriate ministry so the whole family can grow
        together.
      </>
    ),
    href: "/adult-ministry",
    cta: "Adult Ministry",
  },
  {
    title: "Belong & serve",
    body: (
      <>
        Explore ministries and volunteer opportunities as you find your place
        to serve. Membership at Crestview is a meaningful commitment to this
        church family as we REACH-EQUIP-SEND together. We offer an Exploratory
        New Members class about every six weeks, taught by the Pastor. Contact
        the church office to connect with Pastor Dan and{" "}
        <Link
          href="/contact#new-members"
          className="font-semibold text-canopy underline-offset-2 hover:underline"
        >
          sign up for the next New Members class
        </Link>
        .
        <span className="mt-3 block text-ink/60">
          Note: class signup currently goes through Contact Us (or a phone call
          to the office). A dedicated Formspree or Church Center registration
          can be wired when the church provides a preferred form or event link.
        </span>
      </>
    ),
    href: "/serve",
    cta: "Serve / Volunteer",
  },
  {
    title: "Affirmation of membership",
    body: (
      <>
        After completing the New Members class, the church affirms new members
        in a worship service. We walk together under a membership covenant that
        reflects our shared commitment to Christ, one another, and the mission
        of Crestview.
      </>
    ),
    href: "/contact",
    cta: "Contact Us",
  },
] as const;

export default function MembershipPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Membership & Next Steps"
        title="Discover your place here."
        lead="Whether you are visiting for the first time, returning after time away, or ready to commit as a member, we want to walk with you from welcome to belonging."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 sm:grid-cols-2">
            {steps.map((s) => (
              <article key={s.title} className="border-t border-pine/15 pt-6">
                <h2 className="font-display text-2xl text-pine">{s.title}</h2>
                <div className="mt-3 text-sm leading-relaxed text-ink/75">
                  {s.body}
                </div>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
                >
                  {s.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Ready for your next step?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            Review{" "}
            <Link
              href="/our-beliefs"
              className="font-semibold text-canopy underline-offset-2 hover:underline"
            >
              Our Beliefs
            </Link>{" "}
            and the{" "}
            <a
              href={site.bfmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-canopy underline-offset-2 hover:underline"
            >
              Baptist Faith and Message 2000
            </a>
            . See also{" "}
            <Link
              href="/baptism"
              className="font-semibold text-canopy underline-offset-2 hover:underline"
            >
              Baptism
            </Link>{" "}
            if that is part of your journey.
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink/80">
            Call{" "}
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold text-canopy"
            >
              {site.phone}
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-semibold text-canopy underline-offset-2 hover:underline"
            >
              Contact Us
            </Link>
            . We&apos;re saving you a seat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/our-beliefs"
              className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog"
            >
              Our Beliefs
            </Link>
            <Link
              href="/baptism"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Baptism
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
