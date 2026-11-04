import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest text-fog">
      <div className="absolute inset-0">
        <Image
          src={photos.campus.src}
          alt={photos.campus.alt}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-[center_38%] animate-hero-ken"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/55 to-forest/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/25 to-forest/40" />
        <div
          aria-hidden
          className="absolute inset-0 grain opacity-[0.08] mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-[calc(var(--yt-live-banner,2.75rem)+5.75rem)] sm:px-8 sm:pb-28">
        <p className="animate-rise font-display text-[clamp(2.85rem,9vw,5.75rem)] leading-[0.95] tracking-[-0.035em] text-fog">
          {site.name}
        </p>
        <h1 className="animate-rise-delay-1 mt-7 max-w-2xl font-display text-[1.55rem] font-medium leading-snug tracking-[-0.01em] text-mist sm:text-[1.85rem]">
          Welcome to Our Church Family. Join Us in Faith!
        </h1>
        <p className="animate-rise-delay-2 mt-5 max-w-lg text-base leading-relaxed text-mist/85 sm:text-lg">
          We’re so glad you’re here. Together we grow in our relationship with
          Jesus and serve others with love, whether you’re new to faith or have
          been on this journey for years.
        </p>
        <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/plan-your-visit"
            className="inline-flex items-center justify-center rounded-sm bg-dawn px-6 py-3.5 text-sm font-semibold tracking-wide text-forest transition-transform hover:translate-y-[-1px] hover:bg-dawn-deep hover:text-fog"
          >
            Plan Your Visit
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-sm border border-mist/35 px-6 py-3.5 text-sm font-medium text-fog transition-colors hover:border-mist/60 hover:bg-white/5"
          >
            Learn More
          </Link>
        </div>
        <p className="animate-fade-in mt-10 text-sm tracking-wide text-mist/65">
          Sundays · Life Groups 9:30 AM · Worship 10:45 AM · {site.address.city},{" "}
          {site.address.region}
        </p>
      </div>
    </section>
  );
}
