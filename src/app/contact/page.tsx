import { ContactForm } from "@/components/ContactForm";
import { GiveOnlineCta } from "@/components/GiveOnlineCta";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Contact Crestview Baptist Church at 3258 Pisgah Drive, Canton, NC 28716. Call (828) 648-1110 or email the church office.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Got questions? We have answers."
        lead="We’d love to hear from you. Reach out anytime, or join us this Sunday."
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-pine">Church Office</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-canopy">Address</dt>
                <dd className="mt-1 text-ink/75">{site.address.full}</dd>
              </div>
              <div>
                <dt className="font-semibold text-canopy">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="text-ink/75 hover:text-pine"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-canopy">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink/75 hover:text-pine"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-canopy">Pastor</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.pastorEmail}`}
                    className="text-ink/75 hover:text-pine"
                  >
                    {site.pastorEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-canopy">Office Hours</dt>
                <dd className="mt-1 text-ink/75">{site.officeHours}</dd>
              </div>
            </dl>

            <div className="mt-12 border border-pine/15 bg-fog px-6 py-6">
              <p className="text-sm leading-relaxed text-ink/80">
                Signing up for something? Joining a group or signing up for a
                class happens in{" "}
                <a
                  href={site.churchCenter.groups}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-canopy underline-offset-2 hover:underline"
                >
                  Church Center groups
                </a>{" "}
                and{" "}
                <a
                  href={site.churchCenter.registrations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-canopy underline-offset-2 hover:underline"
                >
                  Church Center registrations
                </a>
                , not through this page.
              </p>
            </div>

            <h3 className="mt-10 font-display text-2xl text-pine">
              Questions about a ministry?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              For questions rather than signups — children’s, students,
              worship, senior adults, or anything else — start with the church
              office and we’ll connect you with the right leader. Call{" "}
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
          </div>

          <div className="bg-fog px-6 py-8 sm:px-8">
            <div id="new-members" className="scroll-mt-28">
              <h2 className="font-display text-2xl text-pine">Send a Message</h2>
              <p className="mt-2 text-sm text-ink/70">
                We&apos;ll respond as soon as we can. Signing up for the
                Exploratory New Members class?{" "}
                <a
                  href={site.churchCenter.registrations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-canopy underline-offset-2 hover:underline"
                >
                  Register on Church Center
                </a>
                {" "}
                — or mention it in your message and we&apos;ll connect you with
                Pastor Dan.
              </p>
            </div>
            <ContactForm intent="contact" className="mt-6" />
          </div>
        </div>
      </section>

      <GiveOnlineCta
        tone="fog"
        lead="Prefer to give online? Use our secure giving page anytime."
      />
    </PageShell>
  );
}
