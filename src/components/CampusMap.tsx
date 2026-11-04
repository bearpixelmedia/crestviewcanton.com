import { site } from "@/lib/site";

const MAP_QUERY = encodeURIComponent(site.address.full);
/** Approximate church coordinates (Pisgah Drive, Canton NC) */
const LAT = 35.5242342;
const LON = -82.8372875;
const DELTA = 0.01;

/**
 * Branded OpenStreetMap embed for Crestview’s address.
 * Opens Google Maps directions on click for visitors.
 */
export function CampusMap({ className = "" }: { className?: string }) {
  const bbox = `${LON - DELTA}%2C${LAT - DELTA}%2C${LON + DELTA}%2C${LAT + DELTA}`;
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT}%2C${LON}`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

  return (
    <div
      className={`relative min-h-[240px] overflow-hidden bg-fog ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 bg-gradient-to-b from-forest/80 to-transparent px-4 py-3">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
          Find us
        </p>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto text-xs font-semibold text-fog underline-offset-2 hover:underline"
        >
          Directions
        </a>
      </div>
      <iframe
        title={`Map of ${site.name} at ${site.address.full}`}
        src={embedSrc}
        className="absolute inset-0 h-full w-full border-0 grayscale-[15%] contrast-[1.04] saturate-[0.9]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-forest/90 via-forest/35 to-transparent px-4 pb-4 pt-12">
        <p className="font-display text-lg text-fog">{site.address.street}</p>
        <p className="text-sm text-mist/85">
          {site.address.city}, {site.address.region} {site.address.postalCode}
        </p>
      </div>
    </div>
  );
}
