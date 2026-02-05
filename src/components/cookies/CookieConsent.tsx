"use client";

import { useEffect, useState } from "react";

type StoredCookiePrefs = {
  analytics: boolean;
};

export default function CookieConsent() {
  const [show, setShow] = useState(() => {
    // Initialize show state based on whether preferences exist and are valid
    if (typeof window === "undefined") return false; // SSR safe

    const saved = localStorage.getItem("cookie_prefs");
    if (!saved) return true; // Show if no preferences saved

    try {
      const parsed: unknown = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object") return true;
      const maybe = parsed as { analytics?: unknown };
      return typeof maybe.analytics !== "boolean"; // Show if invalid shape
    } catch {
      return true; // Show if invalid JSON
    }
  });
  const [openedFromSettings, setOpenedFromSettings] = useState(false);

  useEffect(() => {
    const openSettings = () => {
      setOpenedFromSettings(true);
      setShow(true);
    };

    window.addEventListener("cookie_open_settings", openSettings);
    return () => window.removeEventListener("cookie_open_settings", openSettings);
  }, []);

  const getPreviousAnalyticsConsent = (): boolean | null => {
    try {
      const stored = localStorage.getItem("cookie_prefs");
      if (!stored) return null;
      const parsed: unknown = JSON.parse(stored);
      if (!parsed || typeof parsed !== "object") return null;
      const maybe = parsed as { analytics?: unknown };
      return typeof maybe.analytics === "boolean" ? maybe.analytics : null;
    } catch {
      return null;
    }
  };

  const savePreferences = (prefs: StoredCookiePrefs) => {
    const prevAnalytics = getPreviousAnalyticsConsent();

    localStorage.setItem("cookie_prefs", JSON.stringify(prefs));
    window.dispatchEvent(new Event("cookie_update"));
    setShow(false);
    setOpenedFromSettings(false);

    // If GTM/GA was already loaded earlier in the session, the simplest reliable
    // way to stop further SPA tracking is to reload after switching to reject.
    if (prevAnalytics === true && prefs.analytics === false) {
      window.location.reload();
    }
  };

  const accept = () => savePreferences({ analytics: true });
  const reject = () => savePreferences({ analytics: false });
  const close = () => {
    setShow(false);
    setOpenedFromSettings(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100000] border-t border-gray-200 bg-white shadow-lg" aria-label="Cookie consent">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 text-gray-900 md:flex-row md:items-center md:justify-between md:gap-6">
        <p className="text-sm leading-6 md:max-w-3xl">
          We use cookies to analyze traffic and improve your experience. Choose
          “Accept” to allow analytics cookies, or “Reject” to keep analytics off.
        </p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          {openedFromSettings && (
            <button
              onClick={close}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100"
            >
              Close
            </button>
          )}

          <button
            onClick={reject}
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100"
          >
            Reject
          </button>

          <button
            onClick={accept}
            className="rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
