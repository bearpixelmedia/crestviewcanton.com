"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type LiveStatus = {
  live: boolean;
  videoId?: string;
  title?: string;
};

export function LiveStreamBanner() {
  const [status, setStatus] = useState<LiveStatus | null>(null);

  useEffect(() => {
    let active = true;
    const check = async () => {
      try {
        const response = await fetch("/api/live-status", { cache: "no-store" });
        if (!response.ok) return; // Keep the previous state on temporary API errors.
        const next = (await response.json()) as LiveStatus;
        if (active) setStatus(next);
      } catch {
        // A transient network problem should not remove a playing livestream.
      }
    };
    void check();
    const interval = window.setInterval(() => void check(), 60_000);
    const onVisible = () => {
      if (document.visibilityState === "visible") void check();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      active = false;
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (!status?.live || !status.videoId) return null;

  return (
    <section aria-label="Live worship broadcast" className="relative z-10 bg-pine py-8 text-fog sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-sm bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-white" />
              Live Now
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Worship with us live</h2>
            <p className="mt-2 text-sm text-mist/90">{status.title || "Crestview Baptist Church"}</p>
          </div>
          <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gold-soft underline underline-offset-4 hover:text-white">
            Watch on YouTube
          </a>
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-sm bg-black shadow-xl">
          <iframe
            key={status.videoId}
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${status.videoId}?autoplay=0&rel=0`}
            title="Crestview Baptist Church live worship"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
