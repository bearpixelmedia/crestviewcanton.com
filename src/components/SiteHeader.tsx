"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { navGroups } from "@/lib/site";

type Props = {
  variant?: "hero" | "solid";
};

export function SiteHeader({ variant }: Props) {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const tone = variant ?? (onHome ? "hero" : "solid");
  const isHero = tone === "hero";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaPanelId = useId();
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerClass = isHero
    ? "text-[1.1rem] tracking-wide transition-colors hover:text-fog"
    : "text-[1.1rem] tracking-wide text-ink/65 transition-colors hover:text-pine";

  // Dawn CTA on every header variant for a consistent Give Online signal
  const ctaClass =
    "rounded-sm bg-dawn px-4 py-2.5 text-[1.1rem] font-semibold tracking-wide text-forest transition-colors hover:bg-dawn-deep hover:text-fog";

  function openMega() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setMegaOpen(true);
  }

  function scheduleCloseMega() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    function onPointer(e: MouseEvent) {
      if (!desktopNavRef.current?.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Match mobile drawer (bg-pine); keep logo/Close readable on that fill
  const menuPainted = mobileOpen;
  const logoTone = isHero || menuPainted ? "hero" : "solid";

  return (
    <header
      className={
        isHero
          ? `absolute inset-x-0 z-30 top-[var(--yt-live-banner,0px)] transition-colors duration-300 ease-out ${
              menuPainted ? "bg-pine" : "bg-transparent"
            }`
          : `sticky z-30 top-[var(--yt-live-banner,0px)] transition-colors duration-300 ease-out ${
              menuPainted
                ? "border-b border-white/10 bg-pine"
                : "border-b border-pine/8 bg-paper/90 backdrop-blur-md"
            }`
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <BrandLogo tone={logoTone} />

        <div
          ref={desktopNavRef}
          className="relative hidden items-center gap-1 lg:flex"
          onMouseEnter={openMega}
          onMouseLeave={scheduleCloseMega}
        >
          <nav
            className={`flex items-center gap-1 ${isHero ? "text-mist/90" : ""}`}
            aria-label="Primary"
          >
            {navGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`${triggerClass} rounded-sm px-2.5 py-2`}
                aria-expanded={megaOpen}
                aria-controls={megaPanelId}
                onFocus={openMega}
                onClick={() => setMegaOpen((v) => !v)}
              >
                {group.label}
              </button>
            ))}
          </nav>
          <Link href="/give-online" className={`${ctaClass} ml-3`}>
            Give Online
          </Link>

          {megaOpen ? (
            <div
              id={megaPanelId}
              role="region"
              aria-label="Site menu"
              className="absolute right-0 top-full z-40 mt-2 w-[min(56rem,calc(100vw-2.5rem))] rounded-sm border border-pine/10 bg-paper p-6 shadow-[0_18px_50px_-20px_rgba(7,21,16,0.45)]"
              onMouseEnter={openMega}
              onMouseLeave={scheduleCloseMega}
            >
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {navGroups.map((group) => (
                  <div key={group.id}>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-dawn-deep">
                      {group.label}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {group.links.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block text-[1.05rem] leading-snug text-pine/85 transition-colors hover:text-pine"
                            onClick={() => setMegaOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm transition-colors duration-300 lg:hidden ${
            isHero || menuPainted
              ? "border-mist/30 text-fog"
              : "border-pine/20 text-pine"
          }`}
        >
          {mobileOpen ? (
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
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="max-h-[min(78vh,40rem)] overflow-y-auto border-t border-white/10 bg-pine px-5 py-5 lg:hidden"
        >
          <nav className="flex flex-col text-fog" aria-label="Mobile">
            <Link
              href="/give-online"
              onClick={() => setMobileOpen(false)}
              className="mb-5 inline-flex w-fit rounded-sm bg-dawn px-4 py-2.5 text-base font-semibold text-forest"
            >
              Give Online
            </Link>
            {navGroups.map((group) => (
              <div key={group.id} className="mb-5 last:mb-0">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  {group.label}
                </p>
                <ul className="mt-2.5 flex flex-col gap-2">
                  {group.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-0.5 text-base tracking-wide text-fog"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
