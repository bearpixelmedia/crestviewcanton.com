import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { staff } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Staff",
  description:
    "Meet the leadership team at Crestview Baptist Church, including Senior Pastor Dr. Daniel Page.",
};

export default function OurStaffPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Leadership Team"
        title="Meet our team of Christ followers."
        lead="We are blessed to have an amazing leadership team. Our staff is a dedicated group of Christ followers who are excited to connect with you!"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="space-y-16">
            {staff.map((person, index) => {
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
                    <h2 className="mt-2 font-display text-3xl text-pine">
                      {person.name}
                    </h2>
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
    </PageShell>
  );
}
