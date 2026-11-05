import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";
import { facilityStaff, ministryStaff } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Our Staff",
  description:
    "Meet the ministry and facility staff at Crestview Baptist Church in Canton, NC, including Senior Pastor Dr. Daniel Page.",
  path: "/our-staff",
});

type StaffPerson = (typeof ministryStaff)[number] | (typeof facilityStaff)[number];

function StaffSection({
  id,
  eyebrow,
  title,
  lead,
  people,
  tone = "paper",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  people: readonly StaffPerson[];
  tone?: "paper" | "fog";
}) {
  return (
    <section
      id={id}
      className={tone === "fog" ? "bg-fog" : "bg-paper"}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.85rem,3.5vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-pine">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
          {lead}
        </p>

        <div className="mt-12 space-y-16">
          {people.map((person, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={person.slug}
                className={`grid items-center gap-8 border-t border-pine/10 pt-12 md:grid-cols-2 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-fog sm:aspect-[5/6]">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
                    {person.role}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-pine">
                    {person.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">
                    {person.bio}
                  </p>
                  {"contact" in person && person.contact ? (
                    <p className="mt-4 text-sm font-medium text-canopy">
                      {person.contact}
                    </p>
                  ) : null}
                  {"website" in person && person.website ? (
                    <p className="mt-2 text-sm">
                      <a
                        href={person.website.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-dawn-deep underline-offset-2 hover:text-canopy hover:underline"
                      >
                        {person.website.label}
                      </a>
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function OurStaffPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Leadership Team"
        title="Meet our team of Christ followers."
        lead="We are blessed to have an amazing leadership team. Our staff is a dedicated group of Christ followers who are excited to connect with you!"
      />

      <StaffSection
        id="ministry-staff"
        eyebrow="Ministry Staff"
        title="Pastors, directors, and office leadership."
        lead="These servants lead worship, teaching, kids and students, and day-to-day church life."
        people={ministryStaff}
        tone="paper"
      />

      <StaffSection
        id="facility-staff"
        eyebrow="Facility Staff"
        title="Caring for our campus and grounds."
        lead="These teammates keep Crestview’s buildings and outdoor spaces welcoming for worship and ministry."
        people={facilityStaff}
        tone="fog"
      />
    </PageShell>
  );
}
