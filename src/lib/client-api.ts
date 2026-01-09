import { AllContentData, ApiResponse, ContentItem } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/**
 * Fetch all content types in parallel for client-side search
 * This is used in the header search functionality
 */
export async function fetchAllContent(): Promise<AllContentData> {
  try {
    const [newslettersRes, blogsRes, caseStudiesRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/newsletters`),
      fetch(`${API_BASE_URL}/api/blogs`),
      fetch(`${API_BASE_URL}/api/case-studies`),
    ]);

    const [newslettersData, blogsData, caseStudiesData] = await Promise.all([
      newslettersRes.ok
        ? newslettersRes.json()
        : Promise.resolve({ data: [] }),
      blogsRes.ok ? blogsRes.json() : Promise.resolve({ data: [] }),
      caseStudiesRes.ok
        ? caseStudiesRes.json()
        : Promise.resolve({ data: [] }),
    ]);

    return {
      newsletters:
        (newslettersData as ApiResponse<ContentItem[]>).data || [],
      blogs: (blogsData as ApiResponse<ContentItem[]>).data || [],
      caseStudies:
        (caseStudiesData as ApiResponse<ContentItem[]>).data || [],
    };
  } catch (error) {
    console.error("Error fetching content for search:", error);
    return {
      newsletters: [],
      blogs: [],
      caseStudies: [],
    };
  }
}

/**
 * Search content by title (case-insensitive)
 * @param allContent - All content data
 * @param query - Search query string
 * @param maxResults - Maximum results per content type (default: 5)
 */
export function searchContentByTitle(
  allContent: AllContentData,
  query: string,
  maxResults: number = 5,
) {
  const searchTerm = query.toLowerCase().trim();

  // If no query, return 1 of each as default preview
  if (!searchTerm) {
    return {
      newsletters: allContent.newsletters.slice(0, 1),
      blogs: allContent.blogs.slice(0, 1),
      caseStudies: allContent.caseStudies.slice(0, 1),
      hasResults:
        allContent.newsletters.length > 0 ||
        allContent.blogs.length > 0 ||
        allContent.caseStudies.length > 0,
    };
  }

  // Filter by title match
  const newsletters = allContent.newsletters
    .filter((item) => item.title.toLowerCase().includes(searchTerm))
    .slice(0, maxResults);

  const blogs = allContent.blogs
    .filter((item) => item.title.toLowerCase().includes(searchTerm))
    .slice(0, maxResults);

  const caseStudies = allContent.caseStudies
    .filter((item) => item.title.toLowerCase().includes(searchTerm))
    .slice(0, maxResults);

  return {
    newsletters,
    blogs,
    caseStudies,
    hasResults:
      newsletters.length > 0 || blogs.length > 0 || caseStudies.length > 0,
  };
}
