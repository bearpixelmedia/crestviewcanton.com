"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Props = {
  /** Used in Formspree _subject and mailto subject */
  intent?: "contact" | "visit" | "newsletter" | "prayer";
  fields?: ("name" | "email" | "phone" | "message")[];
  submitLabel?: string;
  className?: string;
};

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm({
  intent = "contact",
  fields = ["name", "email", "phone", "message"],
  submitLabel = "Send Message",
  className = "",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");

    const subject =
      intent === "newsletter"
        ? `Crestview mailing list, ${email}`
        : intent === "visit"
          ? `Plan a visit, ${name || email}`
          : intent === "prayer"
            ? `Prayer request, ${name || email}`
            : `Website contact, ${name || email}`;

    setStatus("sending");
    setErrorMsg("");

    // Preferred: Formspree (set NEXT_PUBLIC_FORMSPREE_ID)
    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
            intent,
            _subject: subject,
          }),
        });
        if (!res.ok) {
          throw new Error("Formspree rejected the submission.");
        }
        setStatus("sent");
        form.reset();
        return;
      } catch (err) {
        setStatus("error");
        setErrorMsg(
          err instanceof Error
            ? err.message
            : "Could not send. Try email or phone instead.",
        );
        return;
      }
    }

    // Fallback that works with no secrets: open a prefilled mailto
    const body = [
      intent !== "newsletter" ? `Name: ${name}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      message ? `\n${message}` : null,
      `\n,  Sent from crestviewcanton.com (${intent})`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className={`py-6 ${className}`}>
        <p className="font-display text-2xl text-pine">Thank you!</p>
        <p className="mt-2 text-sm text-ink/70">
          {FORMSPREE_ID
            ? "Your message is on its way to the church office."
            : `Your email app should open with a message to ${site.email}. If it didn’t, call ${site.phone} or email us directly.`}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-canopy underline-offset-2 hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {!FORMSPREE_ID ? (
        <p className="rounded-sm border border-gold/30 bg-fog px-3 py-2 text-xs text-ink/65">
          Form delivery uses your email app until{" "}
          <code className="text-canopy">NEXT_PUBLIC_FORMSPREE_ID</code> is set
          (see README).
        </p>
      ) : null}

      {fields.includes("name") ? (
        <div>
          <label
            htmlFor={`cf-name-${intent}`}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-canopy"
          >
            Name
          </label>
          <input
            id={`cf-name-${intent}`}
            name="name"
            required={intent !== "newsletter"}
            autoComplete="name"
            className="w-full rounded-sm border border-pine/15 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-leaf/40"
          />
        </div>
      ) : null}

      {fields.includes("email") ? (
        <div>
          <label
            htmlFor={`cf-email-${intent}`}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-canopy"
          >
            Email
          </label>
          <input
            id={`cf-email-${intent}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-sm border border-pine/15 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-leaf/40"
          />
        </div>
      ) : null}

      {fields.includes("phone") ? (
        <div>
          <label
            htmlFor={`cf-phone-${intent}`}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-canopy"
          >
            Phone
          </label>
          <input
            id={`cf-phone-${intent}`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-sm border border-pine/15 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-leaf/40"
          />
        </div>
      ) : null}

      {fields.includes("message") ? (
        <div>
          <label
            htmlFor={`cf-message-${intent}`}
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-canopy"
          >
            {intent === "newsletter"
              ? "Notes (optional)"
              : intent === "prayer"
                ? "Prayer request"
                : "How can we help?"}
          </label>
          <textarea
            id={`cf-message-${intent}`}
            name="message"
            rows={intent === "newsletter" ? 2 : 5}
            required={intent === "contact" || intent === "prayer"}
            className="w-full rounded-sm border border-pine/15 bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-leaf/40"
          />
        </div>
      ) : null}

      {status === "error" ? (
        <p className="text-sm text-dawn-deep">{errorMsg}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm bg-pine px-5 py-3 text-sm font-semibold text-fog hover:bg-canopy disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
