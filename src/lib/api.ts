import { ApiResponse, ContentItem, ContentType } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// Decode common HTML entities so tiptap-generated markup renders correctly
const htmlEntityMap: Record<string, string> = {
  "&lt;": "<",
  "&gt;": ">",
  "&amp;": "&",
  "&quot;": '"',
  "&#39;": "'",
};

function decodeHtmlEntities(html: string | undefined | null) {
  if (!html) return html ?? "";
  return html.replace(
    /(&lt;|&gt;|&amp;|&quot;|&#39;)/g,
    (entity) => htmlEntityMap[entity] ?? entity,
  );
}

type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
};

export async function fetchContentList(
  contentType: ContentType,
  opts: FetchOptions = {},
): Promise<ContentItem[]> {
  const { cache, revalidate = 60 } = opts;
  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    cache,
  };

  if (cache !== "no-store") {
    fetchOptions.next = { revalidate };
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/${contentType}`,
      fetchOptions,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch content list");
    }

    const json: ApiResponse<ContentItem[]> = await response.json();
    const items = json.data || [];

    return items.map((item) => ({
      ...item,
      description: decodeHtmlEntities(item.description),
    }));
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
  const fetchOptions: RequestInit & { next?: { revalidate: number } } = {
    cache,
  };

  if (cache !== "no-store") {
    fetchOptions.next = { revalidate };
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/${contentType}/${id}`,
      fetchOptions,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch content item");
    }

    const json: ApiResponse<ContentItem> = await response.json();
    const item = json.data || null;

    return item
      ? {
          ...item,
          description: decodeHtmlEntities(item.description),
        }
      : null;
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