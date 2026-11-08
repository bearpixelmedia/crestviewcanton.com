import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type YouTubeSearchResponse = {
  items?: Array<{ id?: { videoId?: string }; snippet?: { title?: string } }>;
};

export async function GET() {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    return NextResponse.json({ live: false, configured: false }, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  const params = new URLSearchParams({
    part: "snippet",
    channelId: site.social.youtubeChannelId,
    eventType: "live",
    type: "video",
    maxResults: "1",
    key,
  });

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params}`,
      { next: { revalidate: 60 } },
    );
    if (!response.ok) {
      console.error("YouTube livestream lookup failed:", response.status);
      return NextResponse.json({ live: false, unavailable: true }, {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      });
    }

    const data = (await response.json()) as YouTubeSearchResponse;
    const videoId = data.items?.[0]?.id?.videoId;
    if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return NextResponse.json({ live: false }, {
        headers: { "Cache-Control": "public, max-age=30" },
      });
    }

    return NextResponse.json({
      live: true,
      videoId,
      title: data.items?.[0]?.snippet?.title || "Crestview Live Worship",
    }, { headers: { "Cache-Control": "public, max-age=30" } });
  } catch (error) {
    console.error("Could not check YouTube livestream:", error);
    return NextResponse.json({ live: false, unavailable: true }, {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }
}
