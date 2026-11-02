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
    <section
      className={`relative overflow-hidden text-fog ${
        image
          ? "min-h-[44vh] bg-pine sm:min-h-[50vh]"
          : "bg-gradient-to-br from-forest via-pine to-canopy"
      }`}
    >
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/88 to-forest/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-forest/45" />
        </div>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 ridge opacity-90" />
          <div
            aria-hidden
            className="absolute -right-20 top-0 h-[70%] w-[55%] rounded-full bg-gold/8 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-dawn/10 blur-3xl"
          />
        </>
      )}
      <div
        aria-hidden
        className="absolute inset-0 grain opacity-[0.1] mix-blend-overlay"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        {eyebrow ? (
          <p className="animate-soft-in text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="animate-rise mt-4 max-w-[18ch] font-display text-[clamp(2.35rem,5.2vw,3.9rem)] leading-[1.02] tracking-[-0.02em] text-fog">
          {title}
        </h1>
        <p className="animate-rise-delay-1 mt-6 max-w-xl text-[1.05rem] leading-relaxed text-mist/90 sm:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}
