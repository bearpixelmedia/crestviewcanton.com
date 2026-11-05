import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Worship Ministry",
  description:
    "Crestview Worship leads music, prayer, and production at Crestview Baptist Church in Canton, NC. Join the team or contact Anita Diaz.",
  path: "/worship-ministry",
});

const waysToServe = [
  "Vocalists and worship team singers",
  "Instrumentalists (band and keys)",
  "Audio, lighting, and livestream production",
  "Slide and lyric presentation",
] as const;

export default function WorshipMinistryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Crestview Worship"
        title="Lead people into authentic worship."
        lead="Crestview Worship exists to lead worshippers into authentic worship through music, prayer, and technology, pointing hearts to Jesus every Sunday."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl text-pine">
              Music, prayer, and production
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink/75 sm:text-base">
              From Sunday Morning Worship to special gatherings, our team
              prepares songs, prayer, and technical support so the church can
              respond to God together. Whether you sing, play, or serve behind
              the board, there is a place to use your gifts.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink/80">
              {waysToServe.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-fog">
            <Image
              src={photos.pathwayWorship.src}
              alt={photos.pathwayWorship.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover ${photos.pathwayWorship.objectClass ?? ""}`}
            />
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
            Leadership
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.85rem,3.5vw,2.5rem)] leading-[1.08] tracking-[-0.02em] text-pine">
            Anita Diaz, Music Director / Worship Leader
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/75">
            Anita leads Crestview Worship and welcomes musicians and production
            volunteers who want to serve. Interested in auditions or joining the
            team? Reach out by email.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:crestviewworship2@gmail.com"
              className="rounded-sm bg-pine px-6 py-3.5 text-sm font-semibold text-fog transition-colors hover:bg-canopy"
            >
              Email Crestview Worship
            </a>
            <Link
              href="/our-staff"
              className="rounded-sm border border-pine/25 px-6 py-3.5 text-sm font-semibold text-pine transition-colors hover:bg-paper"
            >
              Meet our staff
            </Link>
            <Link
              href="/livestream"
              className="rounded-sm border border-pine/25 px-6 py-3.5 text-sm font-semibold text-pine transition-colors hover:bg-paper"
            >
              Watch livestream
            </Link>
          </div>
          <p className="mt-6 text-sm text-ink/55">
            {site.phone} · crestviewworship2@gmail.com
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Join us this Sunday
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            Morning Worship begins at 10:45 AM. Life Groups meet at 9:30 AM. We
            would love to see you in the room.
          </p>
          <Link
            href="/plan-your-visit"
            className="mt-8 inline-flex text-sm font-semibold text-canopy underline-offset-4 hover:underline"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
