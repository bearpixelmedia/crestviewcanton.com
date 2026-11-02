import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { ministryLinks, site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Find a ministry at Crestview Baptist Church, kids, students, adults, worship, and outreach.",
};

export default function MinistriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Ministries"
        title="Find a ministry that’s a perfect fit for you."
        lead="Ministry is our hands-on demonstration of Christ’s love to one another and to the community we serve. We offer many opportunities to get involved, and we’d love for you to join us."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <blockquote className="border-l-2 border-gold pl-5 font-display text-xl text-canopy">
            “…love one another; as I have loved you… By this all will know that
            you are My disciples, if you have love for one another.”
            <cite className="mt-2 block font-sans text-sm not-italic text-ink/60">
              John 13:34–35
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Featured: Life Groups
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
            Sunday School · 9:30 AM
          </p>
          <p className="mt-4 max-w-2xl text-ink/80 leading-relaxed">
            Whatever your age, we have a class for you. Enter the main doors into
            the welcome center and greeters can help you find a class. Life
            Groups Director, Josh Jamison.
          </p>
          <Link
            href="/adult-ministry"
            className="mt-6 inline-flex text-sm font-semibold text-canopy underline-offset-2 hover:underline"
          >
            See Adult Ministry &amp; Small Groups
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2">
            {ministryLinks.map((item) => (
              <article key={item.href} className="border-t border-pine/15 pt-6">
                <h3 className="font-display text-2xl text-pine">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
                >
                  Explore
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-pine/10 pt-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl text-pine">
                Men · Women · Senior Adults
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-ink/80">
                <li>
                  <strong className="text-canopy">Men’s Ministry</strong>{" "}
                  (God’s Mighty Warriors), Developing men to grow in Christ and
                  serve others sacrificially. Men’s Prayer Time Saturdays in the
                  sanctuary at 9:00 AM.
                </li>
                <li>
                  <strong className="text-canopy">Revolve Women</strong>{" "}
                  (formerly WMU), Monthly gathering and women’s Bible study:
                  Reach, Equip, and Send.
                </li>
                <li>
                  <strong className="text-canopy">Senior Adults</strong> (Joyful
                  Hearts), Regular fellowship and luncheons.
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink/65">
                {site.phone} · {site.email}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-pine">
                Worship &amp; Family
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">
                Crestview Worship exists to lead worshippers into authentic
                worship through music, prayer, and technology. Interested in
                serving through music or production? Contact Anita about
                auditions:{" "}
                <a
                  href="mailto:crestviewworship2@gmail.com"
                  className="font-semibold text-canopy"
                >
                  crestviewworship2@gmail.com
                </a>
                .
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                Family Ministry includes God’s Kidz, Children’s Choir, and
                seasonal activities.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-3">
            <Link
              href="/serve"
              className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog hover:bg-canopy"
            >
              Serve / Volunteer
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine hover:bg-fog"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
