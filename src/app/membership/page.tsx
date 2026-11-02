import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership & Next Steps",
  description:
    "Discover your place at Crestview Baptist Church — visit, grow, belong, and serve.",
};

const steps = [
  {
    title: "Start by visiting",
    body: "Join us Sunday for Life Groups (9:30 AM) and Morning Worship (10:45 AM). Check in at the welcome center — greeters can help you get settled.",
    href: "/plan-your-visit",
    cta: "Plan Your Visit",
  },
  {
    title: "Grow with us",
    body: "Plug into a Life Group, SFU on Sunday evenings, and age-appropriate ministries for kids and students.",
    href: "/adult-ministry",
    cta: "Adult Ministry",
  },
  {
    title: "Belong & serve",
    body: "Explore ministries and volunteer opportunities. Membership is a meaningful way to commit to this church family as we Reach, Equip, and Send together.",
    href: "/serve",
    cta: "Serve / Volunteer",
  },
  {
    title: "Talk with a pastor",
    body: "Interested in membership, baptism, or transferring from another church? Contact the office to set up a conversation with Pastor Dan.",
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
        lead="If you are new to Crestview, returning after time away, or ready to take a next step in faith and belonging, we’d love to walk with you."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            {steps.map((s) => (
              <article key={s.title} className="border-t border-pine/15 pt-6">
                <h2 className="font-display text-2xl text-pine">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {s.body}
                </p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
                >
                  {s.cta}
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-14 max-w-2xl text-sm text-ink/75">
            Review{" "}
            <Link href="/our-beliefs" className="font-semibold text-canopy">
              Our Beliefs
            </Link>{" "}
            and the Baptist Faith and Message, 2000, as you consider next steps.
            Also see{" "}
            <Link href="/baptism" className="font-semibold text-canopy">
              Baptism
            </Link>
            .
          </p>

          <p className="mt-8 text-sm text-ink/70">
            Call{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-canopy">
              {site.phone}
            </a>{" "}
            or use Contact Us — we’re saving you a seat.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
