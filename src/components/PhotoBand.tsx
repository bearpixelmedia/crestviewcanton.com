import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
  className?: string;
};

/** Full-bleed photo strip for interior pages. */
export function PhotoBand({
  src,
  alt,
  caption,
  position = "center",
  className = "",
}: Props) {
  return (
    <figure className={`relative overflow-hidden bg-forest ${className}`}>
      <div className="relative aspect-[21/9] min-h-[180px] w-full sm:min-h-[220px] lg:min-h-[280px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
      </div>
      {caption ? (
        <figcaption className="sr-only">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
