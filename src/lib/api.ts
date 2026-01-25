import { ApiResponse, ContentItem, ContentType } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number; // seconds for ISR revalidation
};

const IS_DEV = process.env.NODE_ENV !== "production";

/**
 * Fetches a list of content items for the specified content type.
 * Caching strategy:
 * - Homepage sections: 5-10 min revalidate (moderate freshness for landing page)
 * - Individual pages: 30min-2hr revalidate (based on content update frequency)
 */
export async function fetchContentList(
  contentType: ContentType,
  opts: FetchOptions = {},
): Promise<ContentItem[]> {
  const { cache, revalidate = 60 } = opts;
  const effectiveCache: RequestCache | undefined =
    cache ?? (IS_DEV ? "no-store" : undefined);

  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {};
  if (effectiveCache) fetchOptions.cache = effectiveCache;
  if (effectiveCache !== "no-store") fetchOptions.next = { revalidate };

  try {
    const url = `${API_BASE_URL}/api/${contentType}`;
    const response = await fetch(
      url,
      fetchOptions,
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${contentType} list: ${response.status} ${response.statusText}`,
      );
    }

    const json: ApiResponse<ContentItem[]> = await response.json();
    if (!json || !Array.isArray(json.data)) {
      console.error(`[api] Unexpected ${contentType} list response shape`, {
        url,
        json,
      });
      return [];
    }

    // Return items directly - no description decoding needed (JSON-only)
    return json.data || [];
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
}

export async function fetchContentById(
  contentType: ContentType,
  id: string,
  opts: FetchOptions = {},
): Promise<ContentItem | null> {
  const { cache, revalidate = 60 } = opts;
  const effectiveCache: RequestCache | undefined =
    cache ?? (IS_DEV ? "no-store" : undefined);

  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {};
  if (effectiveCache) fetchOptions.cache = effectiveCache;
  if (effectiveCache !== "no-store") fetchOptions.next = { revalidate };

  try {
    const url = `${API_BASE_URL}/api/${contentType}/${id}`;
    const response = await fetch(
      url,
      fetchOptions,
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${contentType} item ${id}: ${response.status} ${response.statusText}`,
      );
    }

    const json: ApiResponse<ContentItem> = await response.json();
    if (!json || !json.data) {
      console.error(`[api] Unexpected ${contentType} detail response shape`, {
        url,
        id,
        json,
      });
      return null;
    }

    // Return item directly - no description decoding needed (JSON-only)
    return json.data || null;
  } catch (error) {
    console.error(`Error fetching ${contentType} item ${id}:`, error);
    return null;
  }
}

export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

/**
 * Formats a date as "Oct 10, 2025" (short month, 2-digit day, numeric year).
 */
export function formatFullDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

/**
 * Extracts the year portion from an ISO date string (e.g. "2025").
 */
export function formatYear(isoDate: string): string {
  return new Date(isoDate).getFullYear().toString();
}