import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  /** Optional short lead under the heading */
  lead?: string;
  /** Visual tone for the band */
  tone?: "fog" | "paper" | "canopy";
};

/**
 * End-of-section Give Online band. Primary action deep-links to Vanco;
 * secondary link keeps /give-online as the Ways to Give info page.
 */
export function GiveOnlineCta({
  lead = "Your partnership helps Crestview Reach, Equip, and Send.",
  tone = "fog",
}: Props) {
  const shell =
    tone === "canopy"
      ? "bg-canopy text-fog"
      : tone === "paper"
        ? "bg-paper text-ink"
        : "bg-fog text-ink";

  const titleClass =
    tone === "canopy" ? "text-fog" : "text-pine";
  const leadClass =
    tone === "canopy" ? "text-mist/90" : "text-ink/70";
  const primaryClass =
    tone === "canopy"
      ? "rounded-sm bg-dawn px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-dawn-deep hover:text-fog"
      : "rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog transition-colors hover:bg-canopy";
  const secondaryClass =
    tone === "canopy"
      ? "rounded-sm border border-mist/40 px-5 py-3 text-sm font-semibold text-fog transition-colors hover:bg-white/5"
      : "rounded-sm border border-pine/25 px-5 py-3 text-sm font-semibold text-pine transition-colors hover:bg-paper";

  return (
    <section className={shell}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-16">
        <div className="max-w-xl">
          <h2 className={`font-display text-2xl sm:text-3xl ${titleClass}`}>
            Give Online
          </h2>
          <p className={`mt-2 text-sm leading-relaxed sm:text-base ${leadClass}`}>
            {lead}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.giveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryClass}
          >
            Give Online
          </a>
          <Link href="/give-online" className={secondaryClass}>
            Ways to Give
          </Link>
        </div>
      </div>
    </section>
  );
}
