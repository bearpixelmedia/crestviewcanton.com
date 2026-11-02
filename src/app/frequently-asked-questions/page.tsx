import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import { photos } from "@/lib/photos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about visiting Crestview Baptist Church.",
};

const faqs = [
  {
    q: "When do you meet, and where are you located?",
    a: `Sundays: Life Groups 9:30 AM · Morning Worship 10:45 AM · SFU Groups 6:00 PM. Wednesdays: Prayer, God’s Kidz, and Youth at 7:00 PM. Address: ${site.address.full}. Phone: ${site.phone}.`,
  },
  {
    q: "What about my children?",
    a: "Nursery (Birth–2) is available Sunday mornings. Crestview Kids classes meet at 9:30 AM, and Children’s Church classes, Nursery, PreK – 1st Grade, and 2nd–3rd Grade, meet during Morning Worship. Check in at the welcome center, tell us about allergies or special needs.",
  },
  {
    q: "What should I wear? What do you believe?",
    a: "Come as you are. We hold to the Baptist Faith and Message, 2000, see Our Beliefs for a summary.",
  },
  {
    q: "How do I get connected?",
    a: `Start with a Sunday Life Group at 9:30 AM, explore ministries, or call ${site.phone}. For membership and next steps, visit Plan Your Visit or Contact Us.`,
  },
] as const;

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Common questions about visiting Crestview."
        lead="New here? These answers cover the basics. Still curious? We’d love to talk."
        image={photos.campus.src}
        imageAlt={photos.campus.alt}
      />
      <PhotoBand
        src={photos.fellowship.src}
        alt={photos.fellowship.alt}
      />


      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <div className="space-y-8">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group border-b border-pine/10 pb-6 open:pb-6"
              >
                <summary className="cursor-pointer list-none font-display text-2xl text-pine marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="mt-1 text-sm text-leaf group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-12 text-sm text-ink/70">
            More detail on{" "}
            <Link href="/our-beliefs" className="font-semibold text-canopy">
              Our Beliefs
            </Link>{" "}
            and{" "}
            <Link href="/plan-your-visit" className="font-semibold text-canopy">
              Plan Your Visit
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
