import { ChurchCenterNote } from "@/components/ChurchCenterNote";
import { ContactForm } from "@/components/ContactForm";
import { GiveOnlineCta } from "@/components/GiveOnlineCta";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Serve / Volunteer",
  description:
    "Serve with Crestview Baptist Church, worship, kids, students, greeting, and more.",
  path: "/serve",
});

const opportunities = [
  "Crestview Worship",
  "Children’s Ministry / VBS / TeamKid / God’s Kidz",
  "Student Ministry",
  "Life Group teaching & hospitality",
  "Revolve Women Missions & Service",
  "Senior Adult Ministry",
  "Greeting / Welcome Center",
  "Men’s Ministry (God’s Mighty Warriors)",
] as const;

export default function ServePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Serve / Volunteer"
        title="Ministry is love with work gloves on."
        lead="There are more ways than finances to help grow ministry, your time and gifts matter. We appreciate your willingness to serve."
      />

      <section className="relative overflow-hidden bg-fog">
        <div aria-hidden className="absolute inset-0 ridge opacity-60" />
        <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Hands and feet
          </p>
          <h2 className="mt-3 font-display text-3xl text-pine sm:text-4xl">
            Serving neighbors in Jesus’ name
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink/75 sm:text-base">
            From fellowship breakfasts to Serve NC projects with God’s Mighty
            Warriors, Crestview puts love into action. Find a team below and
            tell us how you’d like to help.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Where you can serve
          </h2>
          <ul className="mt-8 space-y-4">
            {opportunities.map((area) => (
              <li
                key={area}
                className="border-b border-pine/10 pb-4 text-sm font-semibold text-pine"
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-pine/15 bg-fog px-6 py-6 sm:px-8">
            <p className="text-sm leading-relaxed text-ink/80">
              Ready to jump in? Every serving team is listed in{" "}
              <a
                href={site.churchCenter.groups}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-canopy underline-offset-2 hover:underline"
              >
                Church Center groups
              </a>
              , where you can join a team and see what is coming up.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Not sure where you fit, or would rather talk it through? Call the
              office at{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="font-semibold text-canopy"
              >
                {site.phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-canopy"
              >
                {site.email}
              </a>
              .
            </p>
            <ChurchCenterNote className="mt-3" />
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-pine">
                Crestview Worship
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Crestview Worship exists to lead worshippers into authentic
                worship through music, prayer, and technology. We’re always
                looking for people with a passion for serving through music and
                media production. Rehearsals, auditions, and serving roles are
                shared in{" "}
                <a
                  href={site.churchCenter.groups}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-canopy underline-offset-2 hover:underline"
                >
                  Church Center groups
                </a>
                .
              </p>
              <h3 className="mt-8 font-display text-2xl text-pine">
                Kids &amp; students
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                Passionate about the next generation? Angie and Jarred would love
                to talk about volunteering with Crestview Kids or Student
                Ministry.
              </p>
              <h3 className="mt-8 font-display text-2xl text-pine">
                How to get started
              </h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-ink/75">
                <li>Pray about where God is leading you to serve.</li>
                <li>
                  Find your team in Church Center, or contact the church office.
                </li>
                <li>We’ll help with next steps and any training needed.</li>
              </ol>

              <a
                href={site.giveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog transition-colors hover:bg-canopy"
              >
                Give Online
              </a>
            </div>
            <div>
              <h3 className="font-display text-2xl text-pine">
                Tell us you’re interested
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Drop a note and we’ll follow up with next steps.
              </p>
              <ContactForm
                intent="contact"
                submitLabel="Send serve interest"
                className="mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      <GiveOnlineCta
        tone="fog"
        lead="Time and gifts both matter. If you are ready to give financially, start here."
      />
    </PageShell>
  );
}
