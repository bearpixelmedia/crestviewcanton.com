import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Beliefs",
  description:
    "Who we are and what we believe at Crestview Baptist Church in Canton, NC.",
};

const beliefs = [
  {
    title: "The Bible & God",
    body: "We believe the Bible to be God’s inspired Word to man — authoritative and useful for daily life. It is perfect and free of any mistakes. We believe that there is one true God, who exists in three persons. He is the creator of all things and the redeemer of mankind. He exists as God the Father, God the Son in the person of Jesus Christ, and God the Spirit.",
  },
  {
    title: "Humanity & Salvation",
    body: "We believe God created man as male and female. Man fell into sin by his own will and is completely dependent on God for life and salvation. We believe that salvation is from the Lord and is offered freely to all mankind. It comes only through faith in Jesus Christ. Salvation includes repentance, faith, justification, sanctification, and glorification — all of God’s work and none of man’s.",
  },
  {
    title: "The Church",
    body: "We believe the church is the body of Christ, expressed as autonomous local congregations. We observe two ordinances: baptism (immersion of believers signifying union with Christ) and the Lord’s Supper (remembrance of Christ’s death and our accountability to obedience).",
  },
  {
    title: "Worship & Last Things",
    body: "We believe that the first day of the week is the Lord’s Day in which Christians worship both publicly and privately. God in His own time and way will bring the world to a right end. Jesus Christ will physically return to earth; the world will be judged, and all Christians will live forever with the Lord in Heaven.",
  },
] as const;

export default function OurBeliefsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Beliefs"
        title="Who We Are"
        lead="Welcome to our church! We are a Southern Baptist community in Canton, North Carolina, committed to helping everyone know Jesus Christ. Our mission is to guide you in growing your faith, connecting with fellow believers, and encouraging you to serve others."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">
            Our Core Beliefs and Principles
          </h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Crestview Baptist Church holds to the doctrinal confession of the
            Southern Baptist Convention — the Baptist Faith and Message, 2000
            (SBC materials updated August 2024). We center our faith on the love
            of Jesus Christ, believing in His grace and the truth of His
            teachings.
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-xl text-canopy">
            “For I know the plans I have for you, declares the Lord…”
            <cite className="mt-2 block font-sans text-sm not-italic text-ink/60">
              Jeremiah 29:11
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {beliefs.map((b) => (
              <article key={b.title} className="border-t border-pine/15 pt-6">
                <h3 className="font-display text-2xl text-pine">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-12 text-sm text-ink/70">
            Read the full{" "}
            <a
              href={site.bfmUrl}
              className="font-semibold text-canopy underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Baptist Faith and Message
            </a>{" "}
            on the SBC website, or download the{" "}
            <a
              href={site.bfmPdf}
              className="font-semibold text-canopy underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              PDF edition
            </a>{" "}
            Sharon shared from the office.
          </p>
        </div>
      </section>

      <section className="bg-canopy text-fog">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
          <h2 className="font-display text-3xl">
            Join Us in Worship and Community
          </h2>
          <p className="mt-4 text-mist/90">
            We invite you to discover your place with us. Here, you can deepen
            your understanding of Christ’s love, connect with others, and serve
            our community together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/plan-your-visit"
              className="rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-mist/40 px-5 py-3 text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
