import { NextResponse } from "next/server";

type DetectLocationSuccess = {
  success: true;
  countryCode: string;
  source: "header" | "ipinfo";
};

type DetectLocationFailure = {
  success: false;
  countryCode: null;
  source: "none" | "ipinfo";
};

type DetectLocationResponse = DetectLocationSuccess | DetectLocationFailure;

function normalizeCountryCode(raw: string | null): string | null {
  if (!raw) return null;
  const code = raw.trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(code)) return null;
  return code;
}

function firstForwardedForIp(xForwardedFor: string | null): string | null {
  if (!xForwardedFor) return null;
  const first = xForwardedFor.split(",")[0]?.trim();
  if (!first) return null;
  // Strip optional port for IPv4 like "1.2.3.4:1234"
  return first.includes(":") && first.split(":").length === 2 && first.includes(".")
    ? first.split(":")[0]!.trim()
    : first;
}

export async function GET(request: Request) {
  try {
    // 1) Prefer provider headers when available (no external API).
    const headerCountry =
      normalizeCountryCode(request.headers.get("cf-ipcountry")) ??
      normalizeCountryCode(request.headers.get("x-vercel-ip-country")) ??
      normalizeCountryCode(request.headers.get("x-country-code"));

    if (headerCountry) {
      const body: DetectLocationResponse = {
        success: true,
        countryCode: headerCountry,
        source: "header",
      };
      return NextResponse.json(body, { status: 200 });
    }

    // 2) Optional IPinfo Lite fallback (server-side).
    const token = process.env.IPINFO_API_TOKEN;
    if (!token) {
      const body: DetectLocationResponse = {
        success: false,
        countryCode: null,
        source: "none",
      };
      return NextResponse.json(body, { status: 200 });
    }

    const clientIp =
      firstForwardedForIp(request.headers.get("x-forwarded-for")) ??
      request.headers.get("x-real-ip")?.trim() ??
      null;

    if (!clientIp) {
      const body: DetectLocationResponse = {
        success: false,
        countryCode: null,
        source: "none",
      };
      return NextResponse.json(body, { status: 200 });
    }

    const url = `https://api.ipinfo.io/lite/${encodeURIComponent(clientIp)}?token=${encodeURIComponent(
      token,
    )}`;

    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      // Avoid caching per-user location at the edge by default.
      cache: "no-store",
    });

    if (!res.ok) {
      const body: DetectLocationResponse = {
        success: false,
        countryCode: null,
        source: "ipinfo",
      };
      return NextResponse.json(body, { status: 200 });
    }

    const data = (await res.json()) as { country_code?: unknown };
    const ipinfoCountry = normalizeCountryCode(
      typeof data.country_code === "string" ? data.country_code : null,
    );

    if (!ipinfoCountry) {
      const body: DetectLocationResponse = {
        success: false,
        countryCode: null,
        source: "ipinfo",
      };
      return NextResponse.json(body, { status: 200 });
    }

    const body: DetectLocationResponse = {
      success: true,
      countryCode: ipinfoCountry,
      source: "ipinfo",
    };
    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    console.error("detect-location error:", error);
    const body: DetectLocationResponse = {
      success: false,
      countryCode: null,
      source: "none",
    };
    return NextResponse.json(body, { status: 200 });
  }
}

