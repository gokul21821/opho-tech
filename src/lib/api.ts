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

export async function fetchContentList(
  contentType: ContentType,
): Promise<ContentItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${contentType}`, {
      next: { revalidate: 60 }, // Revalidate every 60s for fresher content
    });

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
): Promise<ContentItem | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${contentType}/${id}`, {
      next: { revalidate: 60 }, // Revalidate every 60s for fresher content
    });

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
    day: "numeric",
  });
}

