import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Ministry & Small Groups",
  description:
    "Life Groups, SFU, Men’s Ministry, Revolve Women, and Joyful Hearts at Crestview Baptist Church.",
};

const lifeGroups = [
  {
    name: "Faith Ladies Class (Senior Ladies)",
    body: "Ladies of all ages; compassionate women who love God and each other.",
  },
  {
    name: "Joy Class (Co-ed, Age 45+)",
    body: "Married or single; Jesus first, others second, ourselves last (Matthew 22:37–39).",
  },
  {
    name: "Agape Class (Co-ed, Age 40+)",
    body: "Dig deep into God’s Word with creative discussion; social events and ongoing ministry.",
  },
  {
    name: "Young Adult Class (Co-ed, 20s–40s)",
    body: "Building young families into strong disciples and equipping parents to raise children in the nurture and admonition of the Lord.",
  },
  {
    name: "College & Career Class (Co-ed)",
    body: "For young single adults growing in faith and learning to be on mission for Christ.",
  },
  {
    name: "Pathways Young Adult Class (Co-ed)",
    body: "For young single adults, meets Wednesday at 7:00 PM.",
  },
] as const;

export default function AdultMinistryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Adult Ministry & Small Groups"
        title="Grow in God’s Word, together."
        lead="Life Groups meet Sundays at 9:30 AM. Spiritual Formation University (SFU) offers discipling opportunities Sunday evenings at 6:00 PM for all ages."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Life Groups, Sundays 9:30 AM
          </h2>
          <p className="mt-3 text-sm text-ink/70">
            Life Groups Director, Josh Jamison. Enter the welcome center and
            greeters can help you find a class.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {lifeGroups.map((g) => (
              <article key={g.name} className="border-t border-pine/15 pt-5">
                <h3 className="font-display text-xl text-pine">{g.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  {g.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Spiritual Formation University (SFU)
          </h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            SFU exists to equip believers to grow as disciples of Jesus Christ.
            All ages have discipling opportunities focused on teaching and
            applying God’s Word. Currently offered Sunday evenings at 6:00 PM
            (groups may change by season). Recent offerings have included
            children’s discipleship, youth discipleship from the Scriptures, an
            Ephesians study with Pastor Dan Page, and GriefShare support groups.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl text-pine">Men’s Ministry</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Men’s Prayer Time, Saturdays at 9:00 AM. We desire to encourage
              each other in brotherly love to grow in Christ, prayer followed by
              fellowship.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-pine">Revolve Women</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Under the direction of Rhonda Beck. Mission: revolving around
              Christ, to Reach, Equip, and Send. Revolve Women / WMU, first
              Monday of each month at 6:30 PM. Ladies Bible Study, check the
              current bulletin for day/time ({site.phone}).
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-pine">
              Senior Adults, Joyful Hearts
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Our seniors meet regularly, continue to work and serve, and enjoy
              fellowship together. Joyful Hearts Luncheon, first Tuesday of each
              month at 11:30 AM.
            </p>
            <p className="mt-3 text-sm text-ink/65">
              Contact: Pastor Dan ·{" "}
              <a
                href={`mailto:${site.pastorEmail}`}
                className="font-semibold text-canopy"
              >
                {site.pastorEmail}
              </a>
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-4 px-5 pb-16 sm:grid-cols-2 sm:px-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-fog">
            <Image
              src={photos.seniors.src}
              alt={photos.seniors.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-fog">
            <Image
              src={photos.seniors2.src}
              alt={photos.seniors2.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-pine text-fog">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">Find your group</h2>
          <p className="mt-3 max-w-xl text-mist/85">
            Visit the welcome center this Sunday at 9:30 AM, or call the office
            and we’ll help you connect.
          </p>
          <Link
            href="/plan-your-visit"
            className="mt-6 inline-flex rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
