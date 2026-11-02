import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Crestview Baptist Church in Canton, NC — office phone, email, and ministry contacts.",
};

const ministryContacts = [
  {
    label: "General / Office",
    detail: `${site.email} · ${site.phone}`,
  },
  {
    label: "Children’s Ministry",
    detail: "crestview4kidz@gmail.com",
  },
  {
    label: "Youth Ministry",
    detail: "crestviewyouth3258@gmail.com · 828-371-1235",
  },
  {
    label: "Crestview Worship",
    detail: "crestviewworship2@gmail.com",
  },
  {
    label: "Senior Adults",
    detail: site.pastorEmail,
  },
] as const;

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact Us"
        title="Got questions? We have answers."
        lead="We’d love to hear from you. Reach out anytime — or join us this Sunday."
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

            <h3 className="mt-12 font-display text-2xl text-pine">
              Ministry Contacts
            </h3>
            <ul className="mt-5 space-y-4">
              {ministryContacts.map((c) => (
                <li key={c.label} className="text-sm">
                  <p className="font-semibold text-canopy">{c.label}</p>
                  <p className="text-ink/75">{c.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-fog px-6 py-8 sm:px-8">
            <h2 className="font-display text-2xl text-pine">Send a Message</h2>
            <p className="mt-2 text-sm text-ink/70">
              We’ll respond as soon as we can.
            </p>
            <ContactForm intent="contact" className="mt-6" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
