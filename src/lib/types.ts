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

