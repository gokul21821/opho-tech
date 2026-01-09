export interface ContentItem {
  id: string;
  title: string;
  description: string; // HTML content
  date: string; // ISO date string
  createdAt: string;
  updatedAt: string;
  imagePath?: string | null;
  imageUrl?: string | null;
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