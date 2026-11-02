import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { HomeBanner } from "@/components/HomeBanner";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Welcome to Our Church Family`,
  },
  description: site.description,
};

const pathways = [
  {
    title: "Worship Services",
    body: "Join us for uplifting worship services every Sunday. Experience the love of Christ as we come together in faith and fellowship.",
    href: "/plan-your-visit",
    cta: "Plan Your Visit",
  },
  {
    title: "Life Groups & SFU",
    body: "Deepen your understanding of the Word in Life Groups and Spiritual Formation University. Everyone is welcome.",
    href: "/adult-ministry",
    cta: "Adult Ministry",
  },
  {
    title: "Events",
    body: "See our weekly rhythm, monthly groups, and Teachlife Radio, then join us for what’s happening this week.",
    href: "/events",
    cta: "See Events",
  },
  {
    title: "Serve / Volunteer",
    body: "Give your time to help others in our church and community. Volunteering is a beautiful way to serve while growing in faith.",
    href: "/serve",
    cta: "Get Started",
  },
  {
    title: "Student Ministry",
    body: "Connect with other young people through Crestview Youth, worship, evangelism, missions, and fellowship.",
    href: "/student-ministry",
    cta: "Join Us",
  },
  {
    title: "Prayer",
    body: "Come together in prayer to support one another and seek God’s guidance. Share a request anytime.",
    href: "/prayer-requests",
    cta: "Prayer Requests",
  },
] as const;

const lifePhotos = [
  {
    src: photos.breakfast.src,
    alt: photos.breakfast.alt,
    caption: "Shared meals, shared life",
  },
  {
    src: photos.buffet.src,
    alt: photos.buffet.alt,
    caption: "Gathered around the table",
  },
  {
    src: photos.kitchen.src,
    alt: photos.kitchen.alt,
    caption: "Serving with glad hearts",
  },
] as const;

export default function HomePage() {
  return (
    <PageShell hero>
      <HomeBanner />
      <Hero />

      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden className="absolute inset-0 ridge" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:grid-cols-2 sm:px-8 lg:gap-20 lg:items-center">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-leaf">
              Find Your Community
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-pine">
              Our Mission and Values
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/80">
              At Crestview Baptist Church, we are devoted to helping you walk
              with Jesus and grow in your faith. Our community values grace,
              truth, and discipleship, creating a place where everyone is
              welcomed and encouraged to explore their spiritual journey.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/80">
              We aim to foster strong connections, not only with God but among
              each other. Our mission is to serve others, reflecting the love of
              Christ in every action we take. Whether you’re seeking guidance,
              community, or simply a place to belong, you’ll find it here with
              us.
            </p>
            <Link
              href="/our-beliefs"
              className="mt-8 inline-flex text-sm font-semibold text-canopy underline-offset-4 hover:underline"
            >
              Explore Our Beliefs
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-fog sm:aspect-auto sm:h-full sm:min-h-[400px]">
            <Image
              src={photos.fellowship.src}
              alt={photos.fellowship.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine/35 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] tracking-[-0.02em] text-pine">
              Ways to grow with us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              From gathered worship to serving neighbors, there’s a place for you
              at Crestview.
            </p>
          </div>
          <div className="mt-14 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((item) => (
              <div key={item.title} className="border-t border-pine/12 pt-7">
                <h3 className="font-display text-[1.65rem] leading-snug text-pine">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex text-sm font-semibold text-dawn-deep transition-colors hover:text-canopy"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-canopy text-fog">
        <div
          aria-hidden
          className="absolute inset-0 grain opacity-[0.12] mix-blend-overlay"
        />
        <div className="relative mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] leading-[1.08] tracking-[-0.02em]">
            Join Us This Sunday for Worship
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist/90">
            Experience inspiring worship and uplifting fellowship with us.
            Whether you’re seeking answers or a community, we’re here to welcome
            you into a place of hope and encouragement.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/plan-your-visit"
              className="inline-flex rounded-sm bg-dawn px-6 py-3.5 text-sm font-semibold text-forest transition-transform hover:translate-y-[-1px] hover:bg-dawn-deep hover:text-fog"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/about"
              className="inline-flex rounded-sm border border-mist/40 px-6 py-3.5 text-sm font-medium text-fog transition-colors hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pine text-fog">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
            Life at Crestview
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,2.75rem)] leading-[1.08] tracking-[-0.02em]">
            Real moments from our church family
          </h2>
          <p className="mt-4 max-w-xl text-mist/80">
            Photos from our Facebook community: fellowship around the table and
            serving neighbors together.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {lifePhotos.map((p) => (
              <figure key={p.src} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-forest/40 sm:aspect-[3/4]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-mist/75">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-soft hover:text-fog"
            >
              Follow on Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-soft hover:text-fog"
            >
              Instagram
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-soft hover:text-fog"
            >
              YouTube
            </a>
            <Link
              href="/photo-gallery"
              className="font-semibold text-mist/80 hover:text-fog"
            >
              Full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl text-pine sm:text-4xl">
              Stay Updated with Our Community
            </h2>
            <p className="mt-4 max-w-lg text-ink/75">
              Join our mailing list to receive updates, news, and encouraging
              messages from our church family. We’re excited to walk this
              journey of faith together with you!
            </p>
            <ContactForm
              intent="newsletter"
              fields={["email", "message"]}
              submitLabel="Join Us"
              className="mt-8 max-w-md"
            />
            <p className="mt-3 text-xs text-ink/50">
              By clicking Join Us, you’re choosing to stay connected with our
              community.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl text-pine">Get in Touch</h2>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-canopy">Our Address</dt>
                <dd className="mt-1 text-ink/75">{site.address.full}</dd>
              </div>
              <div>
                <dt className="font-semibold text-canopy">Phone Number</dt>
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
                <dt className="font-semibold text-canopy">Email Us</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink/75 hover:text-pine"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-8 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
