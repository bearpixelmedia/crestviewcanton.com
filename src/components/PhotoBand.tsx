import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  className?: string;
};

/** Full-bleed photo strip for mid-page use (not under PageHero). */
export function PhotoBand({
  src,
  alt,
  caption,
  position = "center",
  className = "",
}: Props) {
  return (
    <figure className={`relative w-full overflow-hidden bg-forest ${className}`}>
      <div className="relative h-[38vw] min-h-[220px] max-h-[420px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {caption ? (
        <figcaption className="sr-only">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
