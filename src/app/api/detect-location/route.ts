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

export async function GET(request: Request) {
  try {
    // 1) Prefer provider headers when available (instant, no API call)
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

    // 2) IPinfo Lite fallback using /me endpoint (works on ANY platform)
    const token = process.env.IPINFO_API_TOKEN;
    if (!token) {
      const body: DetectLocationResponse = {
        success: false,
        countryCode: null,
        source: "none",
      };
      return NextResponse.json(body, { status: 200 });
    }

    // ✅ Use /me endpoint - IPinfo detects the request's source IP automatically
    const url = `https://api.ipinfo.io/lite/me?token=${encodeURIComponent(token)}`;

    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
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