import { connection } from "next/server";
import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type LivePayload = {
  live: boolean;
  videoId: string | null;
  title: string | null;
  url: string | null;
  source: "youtube-data-api" | "youtube-html" | "none";
};

const CHANNEL_ID = site.social.youtubeChannelId;

async function checkWithDataApi(apiKey: string): Promise<LivePayload | null> {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("channelId", CHANNEL_ID);
  url.searchParams.set("eventType", "live");
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", "1");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url, { next: { revalidate: 0 } });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    items?: Array<{
      id?: { videoId?: string };
      snippet?: { title?: string };
    }>;
  };

  const item = data.items?.[0];
  const videoId = item?.id?.videoId ?? null;
  if (!videoId) {
    return {
      live: false,
      videoId: null,
      title: null,
      url: null,
      source: "youtube-data-api",
    };
  }

  return {
    live: true,
    videoId,
    title: item?.snippet?.title ?? "Live on YouTube",
    url: `https://www.youtube.com/watch?v=${videoId}`,
    source: "youtube-data-api",
  };
}

/** Best-effort when no API key: scrape /live page for live markers. */
async function checkWithHtml(): Promise<LivePayload> {
  const livePage = `https://www.youtube.com/channel/${CHANNEL_ID}/live`;
  const res = await fetch(livePage, {
    redirect: "follow",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; CrestviewLiveCheck/1.0; +https://crestviewcanton.com)",
      Accept: "text/html",
    },
    next: { revalidate: 0 },
  });

  const finalUrl = res.url;
  const html = await res.text();

  const watchMatch = finalUrl.match(/[?&]v=([\w-]{11})/);
  const isLiveNow =
    /"isLiveNow"\s*:\s*true/.test(html) ||
    /itemprop="isLiveBroadcast"\s+content="True"/i.test(html) ||
    /BADGE_STYLE_TYPE_LIVE_NOW/.test(html);

  const videoIdFromHtml =
    html.match(/"videoDetails"\s*:\s*\{[^}]*"videoId"\s*:\s*"([\w-]{11})"/)?.[1] ??
    html.match(/"watchEndpoint"\s*:\s*\{"videoId"\s*:\s*"([\w-]{11})"/)?.[1] ??
    null;

  const videoId = watchMatch?.[1] ?? (isLiveNow ? videoIdFromHtml : null);

  // Only treat a /watch redirect as live when live markers exist, or when
  // the final URL is a watch page AND isLiveNow is true.
  if (videoId && (isLiveNow || /\/watch\?/.test(finalUrl) && isLiveNow)) {
    const title =
      html.match(/"title"\s*:\s*\{"runs"\s*:\s*\[\s*\{"text"\s*:\s*"([^"]+)"/)?.[1] ??
      html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i)?.[1] ??
      "Live on YouTube";

    return {
      live: true,
      videoId,
      title,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      source: "youtube-html",
    };
  }

  if (isLiveNow && videoIdFromHtml) {
    return {
      live: true,
      videoId: videoIdFromHtml,
      title: "Live on YouTube",
      url: `https://www.youtube.com/watch?v=${videoIdFromHtml}`,
      source: "youtube-html",
    };
  }

  return {
    live: false,
    videoId: null,
    title: null,
    url: null,
    source: "youtube-html",
  };
}

export async function GET() {
  await connection();
  try {
    const apiKey = process.env.YOUTUBE_API_KEY ?? process.env.YOUTUBE_DATA_API_KEY;
    if (apiKey) {
      const fromApi = await checkWithDataApi(apiKey);
      if (fromApi) {
        return NextResponse.json(fromApi, {
          headers: { "Cache-Control": "no-store" },
        });
      }
    }

    const fromHtml = await checkWithHtml();
    return NextResponse.json(fromHtml, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      {
        live: false,
        videoId: null,
        title: null,
        url: null,
        source: "none",
      } satisfies LivePayload,
      { headers: { "Cache-Control": "no-store" } },
    );
  }
}
