import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Browsers send different shapes and sometimes different content-types.
    // We keep this endpoint permissive and log whatever we can parse.
    const payload = await req.json();

    // Keep logging lightweight (can be replaced with Sentry/Datadog later).
    console.log("CSP report:", JSON.stringify(payload));
  } catch (err) {
    // Ignore malformed payloads; still return 204 so the browser doesn't retry.
    console.warn("CSP report parse failed:", err);
  }

  return new NextResponse(null, { status: 204 });
}

