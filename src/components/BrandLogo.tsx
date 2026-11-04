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
      className="group flex items-center gap-3 sm:gap-3.5"
      aria-label={`${site.name} home`}
    >
      <span
        className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12 ${
          isHero ? "ring-1 ring-white/20" : "ring-1 ring-pine/12 shadow-sm"
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
      <span className="min-w-0 leading-none">
        <span
          className={`block font-display text-[1.35rem] font-semibold tracking-[-0.01em] sm:text-[1.55rem] ${
            isHero ? "text-fog" : "text-pine"
          }`}
        >
          Crestview
        </span>
        <span
          className={`mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.68rem] sm:tracking-[0.24em] ${
            isHero ? "text-mist/85" : "text-canopy/75"
          }`}
        >
          Baptist Church
        </span>
      </span>
    </Link>
  );
}
