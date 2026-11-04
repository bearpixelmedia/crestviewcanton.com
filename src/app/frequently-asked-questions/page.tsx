import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { faqs } from "@/lib/faqs";
import { faqPageJsonLd, pageMeta } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Common questions about visiting Crestview Baptist Church in Canton, NC: Sunday times, kids ministry, what to wear, and how to get connected.",
  path: "/frequently-asked-questions",
});

export default function FaqPage() {
  return (
    <PageShell>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Common questions about visiting Crestview."
        lead="New here? These answers cover the basics. Still curious? We’d love to talk."
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
