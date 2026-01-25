export type TiptapDoc = Record<string, any>; // TipTap JSON document structure (kept loose during migration)

export interface ContentItem {
  id: string;
  title: string;
  /**
   * Content body field (TipTap JSON).
   * Backend returns `content: { type: "doc", content: [...] }`.
   * Required - JSON-only, no HTML fallback.
   */
  content: TiptapDoc;
  date: string; // ISO date string
  createdAt: string;
  updatedAt: string;
  imageUrl?: string | null; // Derived from first image in content
  /**
   * Optional field (newsletters only).
   */
  edition?: string | null;
  /**
   * Optional field (case studies only).
   */
  category?: string | null;
  author: {
    id: string;
    username: string;
    email: string;
  };
}

export type ContentType = "newsletters" | "case-studies" | "blogs";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
}

export interface SearchResult extends ContentItem {
  contentType: ContentType;
}

export interface AllContentData {
  newsletters: ContentItem[];
  blogs: ContentItem[];
  caseStudies: ContentItem[];
}

export interface SearchResults {
  newsletters: ContentItem[];
  blogs: ContentItem[];
  caseStudies: ContentItem[];
  hasResults: boolean;
}

export interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}