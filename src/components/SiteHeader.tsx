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
    ? "transition-colors hover:text-fog"
    : "text-ink/70 transition-colors hover:text-pine";

  return (
    <header
      className={
        isHero
          ? "absolute inset-x-0 z-30 top-[var(--yt-live-banner,0px)]"
          : "sticky z-30 border-b border-pine/10 bg-paper/95 backdrop-blur-md top-[var(--yt-live-banner,0px)]"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <BrandLogo tone={isHero ? "hero" : "solid"} />

        <nav
          className={`hidden items-center gap-6 text-sm lg:flex ${
            isHero ? "text-mist/90" : ""
          }`}
        >
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/plan-your-visit"
            className={
              isHero
                ? "rounded-sm bg-dawn px-3.5 py-2 font-semibold text-forest transition-colors hover:bg-dawn-deep hover:text-fog"
                : "rounded-sm bg-pine px-3.5 py-2 font-semibold text-fog transition-colors hover:bg-canopy"
            }
          >
            Plan Your Visit
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center rounded-sm border px-3 py-2 text-sm lg:hidden ${
            isHero
              ? "border-mist/30 text-fog"
              : "border-pine/20 text-pine"
          }`}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-pine px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3 text-fog">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/plan-your-visit"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-sm bg-dawn px-3.5 py-2 text-sm font-semibold text-forest"
            >
              Plan Your Visit
            </Link>
            {secondaryNav
              .filter((item) => item.href !== "/plan-your-visit")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-sm text-mist"
                >
                  {item.label}
                </Link>
              ))}
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-gold-soft">
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
