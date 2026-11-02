"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type LiveState = {
  live: boolean;
  videoId: string | null;
  title: string | null;
  url: string | null;
};

const POLL_MS = 60_000;
const BANNER_VAR = "--yt-live-banner";

export function YoutubeLiveBanner() {
  const [live, setLive] = useState<LiveState | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch("/api/youtube-live", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as LiveState;
        if (!cancelled) setLive(data);
      } catch {
        // Stay quiet if the check fails; banner simply stays hidden.
      }
    }

    check();
    const id = window.setInterval(check, POLL_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (live?.live) {
      root.style.setProperty(BANNER_VAR, "2.75rem");
    } else {
      root.style.removeProperty(BANNER_VAR);
    }
    return () => {
      root.style.removeProperty(BANNER_VAR);
    };
  }, [live?.live]);

  if (!live?.live || !live.url) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-50 border-b border-dawn/30 bg-dawn text-forest"
    >
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <p className="flex min-w-0 items-center gap-2 text-sm font-semibold">
          <span
            aria-hidden
            className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-canopy"
          />
          <span className="truncate">
            We&apos;re live on YouTube
            {live.title ? (
              <span className="hidden font-normal text-forest/75 sm:inline">
                {" "}
                · {live.title}
              </span>
            ) : null}
          </span>
        </p>
        <a
          href={live.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 rounded-sm bg-pine px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-fog hover:bg-canopy"
        >
          Watch now
        </a>
      </div>
      <span className="sr-only">
        {site.name} is streaming live on YouTube.
      </span>
    </div>
  );
}
