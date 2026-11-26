import Link from "next/link";

type Props = {
  className?: string;
  tone?: "light" | "dark";
};

/** One consistent pointer to the Church Center explainer from any page that mentions it. */
export function ChurchCenterNote({ className, tone = "light" }: Props) {
  const textClass = tone === "dark" ? "text-mist/75" : "text-ink/60";
  const linkClass =
    tone === "dark"
      ? "font-semibold text-gold-soft underline-offset-2 hover:underline"
      : "font-semibold text-canopy underline-offset-2 hover:underline";

  return (
    <p className={`text-sm leading-relaxed ${textClass} ${className ?? ""}`}>
      New to Church Center?{" "}
      <Link href="/church-center" className={linkClass}>
        What it is and how to sign in
      </Link>
      .
    </p>
  );
}
