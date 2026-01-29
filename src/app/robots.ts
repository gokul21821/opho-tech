import type { MetadataRoute } from "next";

const DEFAULT_BASE_URL = "https://ophotech.com";

function getBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (!fromEnv) return DEFAULT_BASE_URL;
  try {
    return new URL(fromEnv).origin;
  } catch {
    return DEFAULT_BASE_URL;
  }
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/_next/",
        "/staging",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
