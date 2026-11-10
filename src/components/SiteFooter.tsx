import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { navGroups, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-mist">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain opacity-[0.12] mix-blend-overlay"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.15fr_repeat(4,1fr)] sm:px-8">
        <div>
          <BrandLogo tone="hero" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist/75">
            {site.tagline}. Join us Sundays for worship, Life Groups, and
            fellowship.
          </p>
          <ul className="mt-5 space-y-1.5 text-sm text-mist/80">
            <li>
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
              <a
                href={site.pastorWebsite.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fog"
              >
                {site.pastorWebsite.label}
              </a>
            </li>
          </ul>
        </div>

        {navGroups.map((group) => (
          <div key={group.id}>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
              {group.label}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-mist/80">
              {group.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-fog">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
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
            {" · Site v0.1.1"}
          </p>
        </div>
      </div>
    </footer>
  );
}
