/**
 * Feature flags (safe for both server and client imports).
 *
 * IMPORTANT:
 * - Any flag used in client components must be prefixed with NEXT_PUBLIC_.
 * - Values are statically inlined into client bundles at build time.
 */
function parseBooleanFlag(value: string | undefined): boolean {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "on";
}

/**
 * Temporarily hides "Resources" content types:
 * - /blogs, /newsletters, /case-studies and their /[id] routes (404)
 * - related navigation, homepage sections, search results, sitemap entries
 */
export const HIDE_RESOURCES = parseBooleanFlag(
  process.env.NEXT_PUBLIC_HIDE_RESOURCES,
);

