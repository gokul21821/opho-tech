"use client";

import { useState } from "react";
import { CookiePreferences } from "@/lib/types";

export default function CookieConsent() {
  const [show, setShow] = useState(() => {
    // Initialize show state based on whether preferences exist
    if (typeof window === 'undefined') return false; // SSR safe
    const saved = localStorage.getItem("cookie_prefs");
    return !saved; // Show if no preferences saved
  });
  const [showCustomize, setShowCustomize] = useState(false);

  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie_prefs", JSON.stringify(prefs));
    window.dispatchEvent(new Event("cookie_update"));
    setShow(false);
  };

  const acceptAll = () => {
    savePreferences({ analytics: true, marketing: true });
  };

  const rejectAll = () => {
    savePreferences({ analytics: false, marketing: false });
  };

  const saveCustom = () => {
    savePreferences({ analytics, marketing });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100000] border-t border-gray-200 bg-white shadow-lg" aria-label="Cookie consent">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 text-gray-900 md:flex-row md:items-center md:justify-between md:gap-6">
        {!showCustomize && (
          <>
            <p className="text-sm leading-6 md:max-w-3xl">
              We use cookies to improve your browsing experience and analyze traffic. By clicking Accept All, you agree to the use of cookies.
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              {/* <button
                onClick={() => setShowCustomize(true)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Customize
              </button> */}

              <button
                onClick={rejectAll}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100"
              >
                Reject All
              </button>

              <button
                onClick={acceptAll}
                className="rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-800"
              >
                Accept All
              </button>
            </div>
          </>
        )}

        {showCustomize && (
          <>
            <h3 className="text-base font-semibold">Customize Cookies</h3>

            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span>Analytics Cookies</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
              </label>

              <label className="flex items-center justify-between">
                <span>Marketing Cookies</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
              </label>
            </div>

            <div className="mt-6 flex gap-3 justify-end">
              <button
                onClick={() => setShowCustomize(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                Back
              </button>

              <button
                onClick={saveCustom}
                className="rounded-lg bg-orange-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-800"
              >
                Save Preferences
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
