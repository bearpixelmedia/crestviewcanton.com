import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Events Calendar",
  description:
    "Sunday schedule, midweek groups, and church events at Crestview Baptist Church in Canton, NC.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Events Calendar"
        title="Come see what God is doing."
        lead="Here’s a snapshot of regular gatherings at Crestview. For dated special events, check the church bulletin, Happenings updates, and announcements."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-pine">Sunday</h2>
            <ul className="mt-5 space-y-3">
              {site.schedule.sunday.map((row) => (
                <li
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-pine/10 pb-3 text-sm"
                >
                  <span className="text-ink/80">{row.label}</span>
                  <span className="shrink-0 font-semibold text-canopy">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-xl text-pine">Wednesdays</h3>
            <ul className="mt-4 space-y-3">
              {site.schedule.wednesday.map((row) => (
                <li
                  key={row.label}
                  className="flex items-baseline justify-between gap-4 border-b border-pine/10 pb-3 text-sm"
                >
                  <span className="text-ink/80">{row.label}</span>
                  <span className="shrink-0 font-semibold text-canopy">
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink/55">
              Midweek Prayer meets in the Agape Classroom.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-pine">
              Monthly &amp; ongoing
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li className="border-b border-pine/10 pb-3">
                Joyful Hearts (Senior Adults) Luncheon, first Tuesday @ 11:30 AM
              </li>
              <li className="border-b border-pine/10 pb-3">
                Revolve Women, first Monday @ 6:00 PM
              </li>
              <li className="border-b border-pine/10 pb-3">
                Women’s Bible Study, see current bulletin / office
              </li>
              <li>
                Men’s Prayer, Saturdays 9:00 AM
              </li>
            </ul>

            <h3 className="mt-10 font-display text-xl text-pine">
              Teachlife Radio
            </h3>
            <p className="mt-3 text-sm text-ink/75">
              Every Friday at 10:00 AM, hear Teachlife Radio with Sr. Pastor Dan
              Page on WPTL 101.7 FM / 920 AM.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
