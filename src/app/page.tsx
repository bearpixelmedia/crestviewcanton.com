import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
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
    cta: "Learn More",
  },
  {
    title: "Bible Studies",
    body: "Deepen your understanding of the Word in our Bible study groups. Everyone is welcome, whether you’re new to the faith or looking to grow.",
    href: "/resources",
    cta: "Get Involved",
  },
  {
    title: "Community Events",
    body: "Participate in our community events designed for fun and fellowship. Together, we can make a positive impact in our neighborhood.",
    href: "/plan-your-visit",
    cta: "See Events",
  },
  {
    title: "Volunteer Opportunities",
    body: "Give your time to help others in our church and community. Volunteering is a beautiful way to serve while growing in faith.",
    href: "/give-online",
    cta: "Get Started",
  },
  {
    title: "Youth Ministry",
    body: "Connect with other young people through our youth ministry programs. Enjoy learning and growing together in Christ.",
    href: "/about",
    cta: "Join Us",
  },
  {
    title: "Prayer Groups",
    body: "Come together in prayer to support one another and seek God’s guidance. Everyone is invited to share their prayer requests.",
    href: "/contact",
    cta: "Join a Group",
  },
] as const;

const testimonials = [
  {
    quote:
      "I came here looking for a fresh start and found a loving community instead. Each Sunday feels like a reunion, and I am grateful for the friendships I’ve formed here.",
    name: "Sarah Lopez",
    role: "New Attendee, Encourager",
  },
  {
    quote:
      "This church taught me the importance of serving others. I’ve been blessed by their generosity and feel called to give back in any way I can.",
    name: "David Brown",
    role: "Bible Study Leader",
  },
  {
    quote:
      "Being part of this church has truly changed my life. The warmth and love here make it feel like home. I’ve grown so much in my faith through our community.",
    name: "Emily Johnson",
    role: "Church Member, Volunteer",
  },
] as const;

export default function HomePage() {
  return (
    <PageShell hero>
      <Hero />

      <section className="relative overflow-hidden bg-paper">
        <div aria-hidden className="absolute inset-0 ridge" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:grid-cols-2 sm:px-8 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              Find Your Community
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-pine sm:text-4xl">
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
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
            <Image
              src="/images/mission.jpg"
              alt="Church community gathered together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine/40 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl text-pine sm:text-4xl">
              Ways to grow with us
            </h2>
            <p className="mt-3 text-ink/75">
              From gathered worship to serving neighbors—there’s a place for you
              at Crestview.
            </p>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((item) => (
              <div key={item.title} className="border-t border-pine/15 pt-6">
                <h3 className="font-display text-2xl text-pine">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-sm font-semibold text-dawn-deep hover:text-canopy"
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
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl">
            Join Us This Sunday for Worship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist/90">
            Experience inspiring worship and uplifting fellowship with us.
            Whether you’re seeking answers or a community, we’re here to welcome
            you into a place of hope and encouragement.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/plan-your-visit"
              className="inline-flex rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest hover:bg-dawn-deep hover:text-fog"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/about"
              className="inline-flex rounded-sm border border-mist/40 px-5 py-3 text-sm font-medium text-fog hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-pine text-fog">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            What Our Members Are Saying
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
            Hear from those who found a home in our community!
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-l border-gold/40 pl-5">
                <p className="text-base leading-relaxed text-mist/95">
                  “{t.quote}”
                </p>
                <footer className="mt-5">
                  <cite className="not-italic font-semibold text-gold-soft">
                    {t.name}
                  </cite>
                  <p className="text-sm text-mist/70">{t.role}</p>
                </footer>
              </blockquote>
            ))}
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
