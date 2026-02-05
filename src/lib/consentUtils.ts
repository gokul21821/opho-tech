export type ConsentPreferences = {
  analytics: boolean;
};

/**
 * Get stored consent preferences from localStorage.
 * Returns null if no preferences saved yet or if data is invalid.
 *
 * Note: tolerant of older shapes (e.g. { analytics, marketing }).
 */
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === "undefined") return null; // SSR safe

  const stored = window.localStorage.getItem("cookie_prefs");
  if (!stored) return null;

  try {
    const parsed: unknown = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object") return null;

    const maybe = parsed as { analytics?: unknown };
    if (typeof maybe.analytics !== "boolean") return null;

    return { analytics: maybe.analytics };
  } catch {
    return null;
  }
}

/** Check if user has given analytics consent. Defaults to false. */
export function hasAnalyticsConsent(): boolean {
  return getConsentPreferences()?.analytics ?? false;
}

