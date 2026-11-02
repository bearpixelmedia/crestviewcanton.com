import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  lead: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = "",
  imagePosition = "center",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-pine text-fog">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-forest/50" />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 ridge opacity-80" />
          <div
            aria-hidden
            className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
          />
        </>
      )}
      <div
        aria-hidden
        className="absolute inset-0 grain opacity-[0.1] mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
        {eyebrow ? (
          <p className="animate-soft-in text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-rise mt-3 max-w-3xl font-display text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.05] tracking-tight text-fog">
          {title}
        </h1>
        <p className="animate-rise-delay-1 mt-5 max-w-2xl text-base leading-relaxed text-mist/90 sm:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}
