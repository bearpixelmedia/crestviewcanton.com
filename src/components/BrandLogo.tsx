import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  tone?: "hero" | "solid";
};

export function BrandLogo({ tone = "solid" }: Props) {
  const isHero = tone === "hero";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.name} home`}
    >
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-12 sm:w-12 ${
          isHero ? "ring-1 ring-white/25" : "ring-1 ring-pine/15"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/crestview-mark.svg"
          alt=""
          width={48}
          height={48}
          className="h-full w-full"
          aria-hidden
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg tracking-tight sm:text-xl ${
            isHero ? "text-fog" : "text-pine"
          }`}
        >
          {site.shortName}
        </span>
        <span
          className={`block text-[0.65rem] font-medium uppercase tracking-[0.18em] ${
            isHero ? "text-mist/80" : "text-canopy/70"
          }`}
        >
          Baptist Church
        </span>
      </span>
    </Link>
  );
}
