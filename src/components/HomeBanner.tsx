"use client";

import Link from "next/link";
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

/** Always-on home strip: REACH | EQUIP | SEND. Adds Watch now when YouTube is live. */
export function HomeBanner() {
  const [live, setLive] = useState<LiveState | null>(null);
  const isLive = Boolean(live?.live && live.url);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch("/api/youtube-live", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as LiveState;
        if (!cancelled) setLive(data);
      } catch {
        // Banner still shows mission text if the live check fails.
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
    root.style.setProperty(BANNER_VAR, "2.75rem");
    return () => {
      root.style.removeProperty(BANNER_VAR);
    };
  }, []);

  return (
    <div
      role={isLive ? "status" : undefined}
      aria-live={isLive ? "polite" : undefined}
      className="fixed inset-x-0 top-0 z-50 border-b border-dawn/30 bg-dawn text-forest"
    >
      <div className="mx-auto flex h-11 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <p className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-[0.14em]">
          {isLive ? (
            <span
              aria-hidden
              className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-canopy"
            />
          ) : null}
          <span className="truncate">REACH | EQUIP | SEND</span>
          {isLive ? (
            <span className="hidden font-normal tracking-normal text-forest/75 sm:inline">
              · Live on YouTube
              {live?.title ? ` · ${live.title}` : ""}
            </span>
          ) : null}
        </p>
        {isLive && live?.url ? (
          <a
            href={live.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 rounded-sm bg-pine px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-fog hover:bg-canopy"
          >
            Watch now
          </a>
        ) : (
          <>
            <Link
              href="/give-online"
              className="inline-flex shrink-0 rounded-sm bg-pine px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-fog hover:bg-canopy sm:hidden"
            >
              Give Online
            </Link>
            <a
              href="/about"
              className="hidden shrink-0 text-xs font-semibold uppercase tracking-wide text-forest/80 underline-offset-2 hover:text-forest hover:underline sm:inline"
            >
              Our mission
            </a>
          </>
        )}
      </div>
      {isLive ? (
        <span className="sr-only">
          {site.name}: REACH, EQUIP, SEND. Streaming live on YouTube.
        </span>
      ) : null}
    </div>
  );
}
