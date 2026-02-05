# Option A: Production Cookie Consent + GTM (GA4) Implementation Plan
## Google Analytics via GTM only (no Meta Pixel, no marketing cookies UI)

## Overview
- Don't load GTM unconditionally
- Load GTM only after checking localStorage consent
- Provide "Cookie settings" entry point in the footer so users can change their choice later
- Keep consent logic SSR-safe and centralized
- Remove AnalyticsLoader (not needed)
- GA4 loads via GTM tags (configured inside your GTM container)

---

## Consent Model (Simplified)

We only need **one** consent decision:

- **Analytics**: Allow Google Analytics (via GTM) yes/no

Persisted in localStorage:

- Key: `cookie_prefs`
- Value: `{ "analytics": true | false }`

Notes:
- If `cookie_prefs` is missing, treat as **no consent** and show the banner.
- We do **not** use checkboxes/toggles in the UI (Accept/Reject only).

---

## STEP 1: Create a Consent Utility Function

### Why this step?
- Need a reusable way to check if user consented to analytics
- Can be called from layout.tsx and ConditionalGtm
- Centralizes consent logic in one place
- Safe for Server-Side Rendering (SSR)

### File: `src/lib/consentUtils.ts`

```typescript
/**
 * Get stored consent preferences from localStorage
 * Returns null if no preferences saved yet
 */
export function getConsentPreferences() {
  if (typeof window === "undefined") return null; // SSR safe
  
  const stored = localStorage.getItem("cookie_prefs");
  if (!stored) return null;
  
  try {
    return JSON.parse(stored) as { analytics: boolean };
  } catch {
    return null;
  }
}

/**
 * Check if user has given analytics consent
 */
export function hasAnalyticsConsent(): boolean {
  const prefs = getConsentPreferences();
  return prefs?.analytics ?? false; // Default to false (no consent)
}
```

**Why this code?**
- `getConsentPreferences()` reads localStorage safely
- `if (typeof window === "undefined")` prevents errors during server rendering
- Returns `null` if nothing stored (user hasn't made a choice)
- Returns false by default (safer to not track than to track without consent)

---

## STEP 2: Update CookieConsent Component (Banner + Settings Mode)

### Why this step?
- Current banner stores prefs, but needs to become production-ready for analytics gating:
  - Store only `{ analytics: boolean }`
  - Support opening from footer ("Cookie settings")
  - Optional: push a dataLayer event after saving (useful once GTM is loaded)

### File: `src/components/cookies/CookieConsent.tsx`

**Update the `savePreferences` function:**
```typescript
const savePreferences = (prefs: { analytics: boolean }) => {
  // Save to localStorage
  localStorage.setItem("cookie_prefs", JSON.stringify(prefs));
  
  // Dispatch event for any listeners
  window.dispatchEvent(new Event("cookie_update"));
  
  // Optional: push consent status to GTM dataLayer (when GTM is present)
  // Tip: initialize dataLayer yourself so this works even before GTM loads:
  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({ ... })
  
  setShow(false);
};
```

**Why this code?**
- `window.dispatchEvent(new Event("cookie_update"))` notifies other components of consent change
- If you later adopt GTM Consent Mode, the dataLayer push can be extended to update consent

---

### Add "Cookie settings" open behavior

To support a footer entry point, CookieConsent should listen for an event such as:

- `cookie_open_settings`

Behavior when received:
- `show = true`
- display the same message + Accept/Reject buttons (no checkboxes)
- optionally render as a centered modal instead of bottom banner (implementation choice)

---

## STEP 3: Create a Conditional GTM Loader Component

### Why this step?
- GTM should not load if user rejected analytics
- Currently GtmScripts loads unconditionally in layout
- We need a wrapper that checks consent first
- Only loads GTM if user has already made a choice AND accepted

### File: `src/components/analytics/ConditionalGtm.tsx`

```typescript
"use client";

import { useEffect, useState } from "react";
import { GtmScripts } from "./GtmScripts";
import { hasAnalyticsConsent } from "@/lib/consentUtils";

/**
 * Conditionally render GTM only if user consented to analytics
 * 
 * How it works:
 * 1. On mount, check localStorage for consent preference
 * 2. If user accepted analytics, render GtmScripts
 * 3. If user rejected or hasn't chosen, don't render anything
 * 4. Listen for cookie_update event to re-check consent
 */
export default function ConditionalGtm({ gtmId, nonce }: { gtmId: string; nonce?: string }) {
  const [shouldLoadGTM, setShouldLoadGTM] = useState(false);

  useEffect(() => {
    // Check initial consent status
    if (hasAnalyticsConsent()) {
      setShouldLoadGTM(true);
    }

    // Re-check when user changes consent
    const handleCookieUpdate = () => {
      if (hasAnalyticsConsent()) {
        setShouldLoadGTM(true);
      } else {
        setShouldLoadGTM(false);
      }
    };

    window.addEventListener("cookie_update", handleCookieUpdate);
    return () => window.removeEventListener("cookie_update", handleCookieUpdate);
  }, []);

  // Only render GTM if user consented
  if (!shouldLoadGTM) {
    return null;
  }

  return <GtmScripts gtmId={gtmId} nonce={nonce} />;
}
```

**Why this code?**
- `useState(false)` means GTM doesn't load until we verify consent
- `hasAnalyticsConsent()` checks localStorage (from Step 1)
- Initial `useEffect` runs on mount to check consent status
- Listens to "cookie_update" event (fired by CookieConsent when user clicks accept/reject)
- Returns `null` if no consent (nothing renders, GTM doesn't load)
- Only renders `<GtmScripts>` if user accepted

**Security benefit:**
- If user rejects → GTM never loads → GA4 never fires
- If user accepts → GTM loads → GA4 fires
- Zero tracking happens without explicit consent

---

## STEP 4: Update layout.tsx to Use ConditionalGtm

### Why this step?
- Currently GtmScripts loads unconditionally — this is the main bug
- Replace it with ConditionalGtm that checks consent first
- GA4 is configured inside GTM (you handle it in Google Tag Manager UI)

### File: `src/app/layout.tsx`

**Replace this:**
```typescript
{/* GTM — loads only in production */}
{process.env.NODE_ENV === "production" && (
  <GtmScripts gtmId="GTM-KQRTLRFZ" nonce={nonce} />
)}
```

**With this:**
```typescript
{/* Conditional GTM — only loads if user accepted analytics consent */}
{process.env.NODE_ENV === "production" && (
  <ConditionalGtm gtmId="GTM-KQRTLRFZ" nonce={nonce} />
)}
```

**Add this import at the top of layout.tsx:**
```typescript
import ConditionalGtm from "@/components/analytics/ConditionalGtm";
```

**Remove or comment out this import:**
```typescript
// import { GtmScripts } from "@/components/analytics/GtmScripts"; // No longer needed
```

**Why these changes?**
- `ConditionalGtm` replaces `GtmScripts` — now GTM only loads if user consented
- GA4 is managed inside your GTM container (in Google Tag Manager UI), not in code
- Much simpler — no separate AnalyticsLoader needed

---

## STEP 5: Add "Cookie settings" to the Footer

### Why this step?
- Compliance/UX: users must be able to change consent later without clearing browser data
- Product: makes the choice discoverable and reversible

### File: `src/components/layout/Footer.tsx`

Add a "Cookie settings" button/link (often near Privacy Policy / Terms).

On click:
- Dispatch `window.dispatchEvent(new Event("cookie_open_settings"))`

CookieConsent listens for this event and opens.

---

## STEP 6: Define what happens when a user changes their choice

### If user opens settings and clicks **Reject**
Minimum expected behavior:
- Update localStorage: `{ analytics: false }`
- Dispatch `cookie_update`
- Ensure **future** tracking is blocked:
  - With Conditional GTM: GTM will not load on next page load.
  - If GTM is already loaded (user previously accepted), **best-practice** is to also update GTM/GA consent (Consent Mode) and/or trigger a full page reload to stop SPA route tracking.

Practical choice (simple, reliable):
- If switching from accepted → rejected, do a `window.location.reload()` after saving, so the app comes back up with GTM not loaded.

### If user clicks **Accept**
- Update localStorage: `{ analytics: true }`
- Dispatch `cookie_update`
- ConditionalGtm will mount GTM immediately in the same session.

---

## STEP 7: SPA Pageview Tracking (GTM-side note)

Because this is a Next.js SPA, GTM/GA4 should be configured to track route changes:
- In GTM, use a **History Change** trigger (or GA4 "page_view" on history events) so internal navigations are tracked.
- Otherwise you may only see the initial pageview.

---

## Testing Checklist

After implementing all steps, test this flow:

### Test 1: User Rejects Cookies
1. Clear localStorage and cookies
2. Visit the landing page
3. Banner appears
4. Click "Reject All"
5. **Check DevTools Network tab:**
   - NO request to `google-analytics.com/g/collect`
   - NO GTM scripts loaded
6. **Check DevTools Console:**
   - Look for any JS errors
   - localStorage should have `cookie_prefs: {"analytics":false}`

### Test 2: User Accepts Cookies
1. Clear localStorage and cookies
2. Visit the landing page
3. Banner appears
4. Click "Accept All"
5. **Check DevTools Network tab:**
   - SHOULD see request to `google-analytics.com/g/collect` (GA4 firing)
   - Should see `gtag.js` loaded
6. **Check DevTools Application tab:**
   - localStorage should have `cookie_prefs: {"analytics":true}`

### Test 3: Returning Visitor (Already Accepted)
1. Visit the landing page (with existing localStorage)
2. **Banner should NOT appear** (because cookie_prefs exists)
3. **Check DevTools Network tab:**
   - Should automatically see GA4 requests
   - GTM should load without waiting

### Test 4: User Changes Mind
1. Accept cookies first.
2. Use footer "Cookie settings" → click Reject.
3. Expected:
   - Consent stored as `{"analytics":false}`
   - On reload (automatic or manual), GTM should not load and GA4 should not fire.

---

## What Changed vs. Original Setup

| Aspect | Before | After |
|--------|--------|-------|
| GTM Loading | Always loads | Only if analytics consent given |
| GA4 Loading | Fires regardless of consent | Respects cookie_prefs (GTM-managed) |
| Consent Enforcement | Stored but ignored | Actively blocks GTM until consent |
| First Page View | Always tracked | Not tracked if no consent |
| Complexity | Multiple loaders | Single ConditionalGtm wrapper |
| Change choice later | Not supported | Supported via footer "Cookie settings" |

---

## Summary of Files to Create/Modify

1. **Create:** `src/lib/consentUtils.ts` (new utility)
2. **Create:** `src/components/analytics/ConditionalGtm.tsx` (new wrapper)
3. **Modify:** `src/components/cookies/CookieConsent.tsx` (accept/reject-only + footer-open support)
4. **Modify:** `src/app/layout.tsx` (use ConditionalGtm, remove unconditional GtmScripts)
5. **Modify:** `src/components/layout/Footer.tsx` (add "Cookie settings" button/link)

**That's it!** No need for AnalyticsLoader. GA4 is managed entirely through GTM.