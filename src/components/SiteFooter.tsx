import Image from "next/image";
import Link from "next/link";
import { moreNav, primaryNav, secondaryNav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-mist">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain opacity-[0.12] mix-blend-overlay"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] sm:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/15">
              <Image
                src="/brand/logo.jpg"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block font-display text-xl text-fog">
                {site.name}
              </span>
              <span className="block text-xs tracking-wide text-mist/70">
                Canton, North Carolina
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist/75">
            {site.tagline}. Join us Sundays for worship, Life Groups, and
            fellowship.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fog">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            Visit &amp; connect
          </p>
          <ul className="mt-3 space-y-2 text-sm text-mist/80">
            {secondaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-fog">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href={`tel:${site.phoneTel}`} className="hover:text-fog">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-fog">
                {site.email}
              </a>
            </li>
            <li>{site.address.full}</li>
            <li className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fog"
              >
                Facebook
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fog"
              >
                Instagram
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fog"
              >
                YouTube
              </a>
              <a
                href={site.social.facebookKids}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fog"
              >
                Kids on Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            More
          </p>
          <ul className="mt-3 columns-1 gap-x-6 space-y-2 text-sm text-mist/80 sm:columns-2 lg:columns-1">
            {moreNav.map((item) => (
              <li key={item.href} className="break-inside-avoid">
                <Link href={item.href} className="hover:text-fog">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {site.name}</p>
          <p>
            Built by{" "}
            <a
              href="https://bearpixelmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist/70 underline-offset-2 hover:text-fog hover:underline"
            >
              Bear Pixel Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
