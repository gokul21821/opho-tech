import type { MetadataRoute } from "next";

import { fetchContentList } from "@/lib/api";
import { HIDE_RESOURCES } from "@/lib/featureFlags";

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

function shouldFetchDynamicPages() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!apiUrl) return false;
  try {
    const { hostname } = new URL(apiUrl);
    return hostname !== "localhost" && hostname !== "127.0.0.1";
  } catch {
    return false;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  // Static pages that should be indexable
  const staticRoutes = [
    "",
    "/company/about-us",
    "/company/careers",
    "/company/team",
    "/privacy-policy",
    "/terms-of-service",
    ...(HIDE_RESOURCES ? [] : ["/newsletters", "/blogs", "/case-studies"]),
    "/solutions/research-and-analysis",
    "/solutions/data-structuring-and-monetization",
    "/solutions/cloud-integration",
    "/solutions/ai-solutions-and-services",
    "/solutions/ai-agent-development",
    "/solutions/cyber-security-solutions",
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // Dynamic pages
  // Production-safe behavior:
  // - If NEXT_PUBLIC_API_URL isn't configured (or points at localhost), we skip
  //   dynamic entries so builds don't fail/noise when the API isn't running.
  if (HIDE_RESOURCES) {
    return staticPages;
  }
  if (!shouldFetchDynamicPages()) {
    return staticPages;
  }

  // Safe: fetchContentList already returns [] on errors.
  const [blogs, newsletters, caseStudies] = await Promise.all([
    fetchContentList("blogs", { revalidate: 60 * 60 }),
    fetchContentList("newsletters", { revalidate: 60 * 60 }),
    fetchContentList("case-studies", { revalidate: 60 * 60 }),
  ]);

  const blogPages: MetadataRoute.Sitemap = blogs.map((item) => ({
    url: `${baseUrl}/blogs/${item.id}`,
    lastModified: new Date(item.updatedAt ?? item.date ?? now),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const newsletterPages: MetadataRoute.Sitemap = newsletters.map((item) => ({
    url: `${baseUrl}/newsletters/${item.id}`,
    lastModified: new Date(item.updatedAt ?? item.date ?? now),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((item) => ({
    url: `${baseUrl}/case-studies/${item.id}`,
    lastModified: new Date(item.updatedAt ?? item.date ?? now),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...newsletterPages, ...caseStudyPages];
}
