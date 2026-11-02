import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  tone?: "hero" | "solid";
};

export function BrandLogo({ tone = "solid" }: Props) {
  const isHero = tone === "hero";

  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-white/20 sm:h-12 sm:w-12">
        <Image
          src="/brand/logo.jpg"
          alt=""
          fill
          sizes="48px"
          className="object-cover"
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
