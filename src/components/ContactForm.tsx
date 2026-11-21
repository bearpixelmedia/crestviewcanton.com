"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Props = {
  /** Used in Formspree _subject */
  intent?: "contact" | "visit" | "newsletter" | "prayer";
  fields?: ("name" | "email" | "phone" | "message")[];
  submitLabel?: string;
  className?: string;
};

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim();

/** Sharon / church office inbox (same address on staff + contact). */
const OFFICE_EMAIL = site.email;

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

    const formName =
      intent === "newsletter"
        ? "Newsletter"
        : intent === "visit"
          ? "Plan a visit"
          : intent === "prayer"
            ? "Prayer request"
            : "Contact";
    const subject = `[Crestview] ${formName}`;

    setStatus("sending");
    setErrorMsg("");

    if (!FORMSPREE_ID) {
      setStatus("error");
      setErrorMsg(
        `Form delivery is not connected yet. Set NEXT_PUBLIC_FORMSPREE_ID on Vercel (notification email: ${OFFICE_EMAIL}). Or call ${site.phone}.`,
      );
      return;
    }

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
          _replyto: email,
          _subject: subject,
        }),
      });
      if (!res.ok) {
        throw new Error("Formspree rejected the submission.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : `Could not send. Email ${OFFICE_EMAIL} or call ${site.phone}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <div className={`py-6 ${className}`}>
        <p className="font-display text-2xl text-pine">Thank you!</p>
        <p className="mt-2 text-sm text-ink/70">
          Your message is on its way to the church office.
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
