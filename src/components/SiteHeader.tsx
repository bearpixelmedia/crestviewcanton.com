"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { moreNav, primaryNav, secondaryNav } from "@/lib/site";

type Props = {
  variant?: "hero" | "solid";
};

export function SiteHeader({ variant }: Props) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const tone = variant ?? (onHome ? "hero" : "solid");
  const isHero = tone === "hero";
  const [open, setOpen] = useState(false);

  const linkClass = isHero
    ? "text-[0.8125rem] tracking-wide transition-colors hover:text-fog"
    : "text-[0.8125rem] tracking-wide text-ink/65 transition-colors hover:text-pine";

  const ctaClass = isHero
    ? "rounded-sm bg-dawn px-4 py-2.5 text-[0.8125rem] font-semibold tracking-wide text-forest transition-colors hover:bg-dawn-deep hover:text-fog"
    : "rounded-sm bg-pine px-4 py-2.5 text-[0.8125rem] font-semibold tracking-wide text-fog transition-colors hover:bg-canopy";

  return (
    <header
      className={
        isHero
          ? "absolute inset-x-0 z-30 top-[var(--yt-live-banner,0px)]"
          : "sticky z-30 border-b border-pine/8 bg-paper/90 backdrop-blur-md top-[var(--yt-live-banner,0px)]"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <BrandLogo tone={isHero ? "hero" : "solid"} />

        <nav
          className={`hidden items-center gap-7 lg:flex ${
            isHero ? "text-mist/90" : ""
          }`}
        >
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <Link href="/give-online" className={ctaClass}>
            Give Online
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm lg:hidden ${
            isHero
              ? "border-mist/30 text-fog"
              : "border-pine/20 text-pine"
          }`}
        >
          {open ? (
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-pine px-5 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-3.5 text-fog">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-base tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/give-online"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-sm bg-dawn px-4 py-2.5 text-sm font-semibold text-forest"
            >
              Give Online
            </Link>
            {secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-mist"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
              More
            </p>
            {moreNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-mist/90"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
