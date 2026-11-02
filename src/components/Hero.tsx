import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest text-fog pt-[var(--yt-live-banner,0px)]">
      <div className="absolute inset-0">
        <Image
          src="/images/social/campus-entrance.jpg"
          alt="Crestview Baptist Church entrance and sign on Pisgah Drive in Canton, NC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] animate-hero-ken"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/78 to-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-forest/45" />
        <div
          aria-hidden
          className="absolute inset-0 grain opacity-[0.14] mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <p className="animate-rise font-display text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-fog">
          {site.name}
        </p>
        <h1 className="animate-rise-delay-1 mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-mist sm:text-3xl">
          Welcome to Our Church Family. Join Us in Faith!
        </h1>
        <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
          We’re so glad you’re here. Together we grow in our relationship with
          Jesus and serve others with love, whether you’re new to faith or have
          been on this journey for years.
        </p>
        <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/plan-your-visit"
            className="inline-flex items-center justify-center rounded-sm bg-dawn px-5 py-3 text-sm font-semibold tracking-wide text-forest transition-transform hover:translate-y-[-1px] hover:bg-dawn-deep hover:text-fog"
          >
            Get Involved
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-sm border border-mist/35 px-5 py-3 text-sm font-medium text-fog transition-colors hover:border-mist/60 hover:bg-white/5"
          >
            Learn More
          </Link>
        </div>
        <p className="animate-fade-in mt-8 text-sm text-mist/70">
          Sundays · Life Groups 9:30 AM · Worship 10:45 AM · {site.address.city},{" "}
          {site.address.region}
        </p>
      </div>
    </section>
  );
}
