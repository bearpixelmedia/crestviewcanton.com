import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Missions & Outreach",
  description:
    "Local compassion and global partners, Reach, Equip, Send at Crestview Baptist Church.",
  path: "/missions",
});

const partners = [
  "Mike and Kathy Shipman, International Mission Board",
  "Lyandon and Kim Warren, Vermont",
  "Matt and Caroline Gandy, Cardiff, Wales",
  "Renee Peoples, Slovenija",
  "Anthony and April Shelton, Africa",
] as const;

export default function MissionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Missions & Outreach"
        title="Here and to the nations."
        lead="We share the Gospel and extend Christ’s love to people in our community and around the world. Crestview partners in prayer, giving, and service so others can know Jesus."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden bg-fog">
            <Image
              src={photos.mission.src}
              alt={photos.mission.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-ink/70">
            Outreach Coordinators, Jason &amp; Holly Haley ·{" "}
            <a
              href="mailto:hoddiewells86@gmail.com"
              className="font-semibold text-canopy"
            >
              hoddiewells86@gmail.com
            </a>
          </p>

          <h2 className="mt-10 font-display text-3xl text-pine">
            Living Our Vision
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
            Reach · Equip · Send
          </p>
          <p className="mt-4 max-w-3xl text-ink/80 leading-relaxed">
            We encourage and send disciples into their homes, workplaces,
            neighborhoods, and all the way to the nations to make other disciples
           , becoming multiplying disciples in obedience to Jesus’ command
            (Matthew 28:19).
          </p>

          <h3 className="mt-12 font-display text-2xl text-pine">
            Serving Haywood County
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
            From senior adult ministry and family outreach to community care,
            Crestview looks for practical ways to love our neighbors. Contact the
            church office to learn about current local needs and volunteer
            opportunities.
          </p>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Pray for our missionaries
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            {partners.map((p) => (
              <li key={p} className="border-b border-pine/10 pb-2">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink/55">
            Ask the office for current partner updates and prayer needs.
          </p>

          <h3 className="mt-12 font-display text-2xl text-pine">
            Mission offerings
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
            Crestview participates in Southern Baptist mission offerings that
            support church planting and kingdom ministry across North America and
            to the nations, including the Lottie Moon Christmas Offering
            (international / IMB) and the Annie Armstrong Easter Offering (North
            American / NAMB). 100% of designated gifts support those missionaries.
          </p>
          <p className="mt-6 text-sm text-ink/75">
            Women on mission: Revolve Women emphasizes missions and service , 
            beginning in personal lives and extending through church, community,
            nation, and world.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={site.giveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog"
            >
              Give Online
            </a>
            <Link
              href="/serve"
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Serve / Volunteer
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine"
            >
              Email the office
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
