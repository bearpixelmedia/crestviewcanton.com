import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children’s Ministry",
  description:
    "Crestview Kids, planting seeds for Jesus at Crestview Baptist Church in Canton, NC.",
};

const sundayKids = [
  { label: "Nursery (Birth–age 2)", time: "9:30–10:30 AM" },
  { label: "Crestview Kids Life Groups (Age 2–Grade 5)", time: "9:30–10:30 AM" },
  { label: "Nursery (Birth–age 3)", time: "10:45 AM" },
  { label: "Children’s Church (age 4–3rd grade)", time: "10:45 AM" },
  {
    label: "TeamKID / Children’s Choir / Bible Drill (Pre-K–Grade 5)",
    time: "6:00–7:30 PM (Aug–May)",
  },
] as const;

export default function ChildrensMinistryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Crestview Kids"
        title="Planting seeds for Jesus."
        lead="Thanks for visiting our Crestview Kids page! We love the little ones and we’re all in for helping children and families grow and learn about Jesus."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl text-pine">
              Crestview Children’s Ministry
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/80">
              <li>Teaching kids about Jesus, His love, and His free gift of salvation.</li>
              <li>Educating kids on how to use the Bible, God’s Holy Word.</li>
              <li>Helping kids understand that God has a plan for their lives.</li>
              <li>Encouraging kids to worship and praise God in all things.</li>
              <li>
                Training kids in personal growth so they may mature as young
                Christians.
              </li>
              <li>
                Equipping kids with a Biblical foundation to face the trials and
                temptations of daily life.
              </li>
            </ul>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 text-sm italic text-ink/70">
              “And the seed that fell on good soil represents those who hear and
              accept God’s word…”, Mark 4:20 NLT
            </blockquote>
          </div>
          <div className="relative min-h-[280px] overflow-hidden">
            <Image
              src="/images/gallery/vbs-1967.jpg"
              alt="Crestview children’s ministry heritage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-pine">Sundays</h2>
            <ul className="mt-5 space-y-3">
              {sundayKids.map((row) => (
                <li
                  key={row.label}
                  className="flex flex-col gap-1 border-b border-pine/10 pb-3 text-sm sm:flex-row sm:justify-between"
                >
                  <span className="text-ink/80">{row.label}</span>
                  <span className="shrink-0 font-semibold text-canopy">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-pine">Wednesdays &amp; more</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li className="border-b border-pine/10 pb-3">
                <span className="font-semibold text-canopy">God’s Kidz</span>{" "}
                (Pre-K–Grade 5), 7:00–8:00 PM
              </li>
              <li>
                <span className="font-semibold text-canopy">
                  Vacation Bible School
                </span>{" "}
               , one week during July (Age 2–Grade 12)
              </li>
            </ul>
            <h3 className="mt-10 font-display text-xl text-pine">
              Your first visit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Check in at our welcome center and digital check-in station for
              kids Birth–5th grade. Our connections team will help you find the
              right classrooms. Please notify our team of any allergies or
              special needs. Children’s Church classes include Nursery, PreK–1st
              Grade, and 2nd–3rd Grade during Morning Worship.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Meet Angie Watkins
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
            Children’s Ministry Director
          </p>
          <p className="mt-4 max-w-3xl text-ink/80 leading-relaxed">
            Angie volunteered in our children’s ministry and directed Vacation
            Bible School for more than 20 years before becoming our Children’s
            Ministry Director in August 2021. She leads a passionate team
            focused on sharing Christ’s love with children and their families.
          </p>
          <p className="mt-6 text-sm text-ink/70">
            Questions?{" "}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-canopy">
              {site.phone}
            </a>{" "}
            ·{" "}
            <a
              href="mailto:crestview4kidz@gmail.com"
              className="font-semibold text-canopy"
            >
              crestview4kidz@gmail.com
            </a>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/plan-your-visit"
              className="rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
            >
              Plan Your Visit
            </Link>
            <a
              href={site.social.facebookKids}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Kids on Facebook
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
