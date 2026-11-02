import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Ministry",
  description:
    "Crestview Youth, 6th–12th grade worship, evangelism, missions, and fellowship in Canton, NC.",
};

export default function StudentMinistryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Crestview Youth"
        title="Hey guys, welcome!"
        lead="We’re glad you’re here. We hope this ministry is a place you can plug in and help us REACH the whole world with the gospel of Jesus Christ. We love worship, evangelism, missions, and having a great time as a group!"
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
              6th grade through 12th grade
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.85rem,3.5vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-pine">
              Fellowship &amp; Fun, Weekly Gatherings
            </h2>
            <ul className="mt-8 max-w-xl space-y-3 text-sm text-ink/80">
              <li className="border-b border-pine/10 pb-3">
                <strong className="text-canopy">Wednesday evenings</strong>,
                7:00–8:00 PM in the Youth Center (doors open at 6:30)
              </li>
              <li className="border-b border-pine/10 pb-3">
                <strong className="text-canopy">Sunday mornings</strong>, 9:30 AM
              </li>
              <li>
                <strong className="text-canopy">Sunday evenings</strong>,
                6:00–7:30 PM in the Youth Center
              </li>
            </ul>
            <p className="mt-8 max-w-2xl text-ink/75 leading-relaxed">
              It is our mission that each student at Crestview builds a strong
              foundation of faith based on biblical truth, becoming disciples for
              Christ and making an impact for the kingdom of God.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-fog">
            <Image
              src={photos.youthHeritage.src}
              alt={photos.youthHeritage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.5rem)] leading-[1.08] text-pine">
            Meet Jarred Rathbone
          </h2>
          <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
            Youth Pastor
          </p>
          <p className="mt-5 max-w-2xl text-ink/75 leading-relaxed">
            Jarred is married to Amanda; they have two sons, Jackson and Levi.
            Contact anytime with questions, prayer requests, or concerns. See
            his photo on our{" "}
            <Link href="/our-staff" className="font-semibold text-canopy underline-offset-2 hover:underline">
              staff page
            </Link>
            .
          </p>
          <p className="mt-4 text-sm text-ink/70">
            <a href="tel:+18283711235" className="font-semibold text-canopy">
              828-371-1235
            </a>{" "}
            ·{" "}
            <a
              href="mailto:crestviewyouth3258@gmail.com"
              className="font-semibold text-canopy"
            >
              crestviewyouth3258@gmail.com
            </a>
          </p>

          <h3 className="mt-14 font-display text-2xl text-pine">Youth apparel</h3>
          <p className="mt-3 max-w-xl text-sm text-ink/70">
            Youth t-shirts, suggested donation $15. Sweatshirts, suggested
            donation $25. See Jarred if you’d like one.
          </p>

          <blockquote className="mt-12 max-w-2xl border-l-2 border-gold pl-5 text-sm italic text-ink/65">
            “…not forsaking the assembling of ourselves together, as is the
            manner of some, but exhorting one another…”, Hebrews 10:25
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-sm bg-pine px-6 py-3.5 text-sm font-semibold text-fog hover:bg-canopy"
            >
              Reach out
            </Link>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-pine/25 px-6 py-3.5 text-sm font-semibold text-pine hover:bg-paper"
            >
              Connect on Facebook
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
