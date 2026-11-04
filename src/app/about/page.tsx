import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { staff, site } from "@/lib/site";
import { photos } from "@/lib/photos";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Crestview",
  description:
    "Who we are, our mission, and our history at Crestview Baptist Church in Canton, NC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Crestview"
        title="Get to know us before you visit."
        lead="Welcome! We’re glad you’re here. If you are looking for a church home or simply exploring faith, we would love for you to learn more about us, who we are, what we believe, and how you can connect with our church family."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl text-pine">Who We Are</h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
                Don’t face life alone, face it together.
              </p>
              <p className="mt-5 text-ink/80 leading-relaxed">
                We are a church family committed to following Jesus Christ and
                sharing His love with others. Because Christ has shown us grace,
                we seek to extend that same grace to everyone we meet.
              </p>
              <p className="mt-4 text-ink/80 leading-relaxed">
                Our passion is to help the people of Haywood County and beyond
                know Christ personally and grow in a life that honors Him.
              </p>
            </div>
            <div className="relative aspect-[4/3] h-full min-h-[280px] overflow-hidden bg-fog sm:min-h-[340px]">
              <Image
                src={photos.history.src}
                alt={photos.history.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">Our Mission &amp; Vision</h2>
          <p className="mt-4 max-w-3xl text-ink/80 leading-relaxed">
            Jesus has called His followers to make disciples. That calling
            defines our mission as a church. We exist to reach others with the
            Good News of Jesus Christ, equip them to grow in the Word as
            multiplying disciples, and send them back into the community and the
            world as mature disciple-makers for Jesus Christ.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Reach",
                body: "We share the Gospel and extend Christ’s love to people in our community and around the world.",
              },
              {
                title: "Equip",
                body: "We help believers grow in God’s Word so they become spiritually strong, faithful, and multiplying disciples of Jesus.",
              },
              {
                title: "Send",
                body: "We encourage and send disciples into their homes, workplaces, neighborhoods, and all the way to the nations.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-pine/20 pt-5">
                <h3 className="font-display text-2xl text-pine">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-pine">Our History</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Crestview began as a mission of the Haywood Baptist Association. The
            first service was held April 1, 1962. On September 25, 1965,
            Crestview Mission organized as Crestview Baptist Church with 87
            charter members. God has faithfully provided through every season , 
            from our first building, to the sanctuary, educational wing, and
            Youth Ministry Center.
          </p>
          <p className="mt-6 text-ink/80 leading-relaxed">
            We hold to the Baptist Faith and Message, 2000 (SBC materials updated
            August 2024).{" "}
            <Link href="/our-beliefs" className="font-semibold text-canopy">
              Explore Our Beliefs
            </Link>
            . See historic photos in our{" "}
            <Link href="/photo-gallery" className="font-semibold text-canopy">
              Photo Gallery
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-pine text-fog">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl">Our Leadership</h2>
          <p className="mt-3 max-w-2xl text-mist/85">
            Meet the team serving Crestview, a dedicated group of Christ
            followers excited to connect with you.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staff.slice(0, 5).map((person) => (
              <li key={person.slug} className="text-sm text-mist/90">
                <span className="font-semibold text-gold-soft">{person.name}</span>
                <br />
                {person.role}
                {"website" in person && person.website ? (
                  <>
                    <br />
                    <a
                      href={person.website.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-soft/90 underline-offset-2 hover:text-fog hover:underline"
                    >
                      {person.website.label}
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/our-staff"
              className="inline-flex rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest"
            >
              Meet Our Staff
            </Link>
            <a
              href={site.pastorWebsite.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gold-soft underline-offset-2 hover:text-fog hover:underline"
            >
              {site.pastorWebsite.label}
            </a>
          </div>
          <p className="mt-10 text-sm text-mist/70">
            Join us this Sunday, Life Groups at 9:30 AM and Morning Worship at
            10:45 AM. {site.address.full} · {site.phone}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
