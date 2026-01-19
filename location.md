## Feature Plan (Aligned to This Codebase)

### Goal
When a user opens the **Contact Modal**, auto-fill:
- **Phone country/dialing selector** (inside `react-international-phone`)
- **Country dropdown** (the “Country” `CustomSelect` in the form)

The form should still work normally if detection fails, and it should **not overwrite** user-entered values.

---

## Current Architecture (Important Constraints)

### Modal open/close is route-driven (not local state)
- CTAs open the modal by pushing a query param: `?form=...` using:
  - `buildContactModalOpenUrl()` and `markContactModalOpenedFromUi()` in `src/lib/contact-modal.ts`
- The modal is rendered globally in:
  - `src/app/layout.tsx` via `ContactModalRouteController`
- Open/close is determined by the presence of the query param:
  - `CONTACT_MODAL_QUERY_KEY = "form"`

### The “Country” dropdown stores **labels**, not codes
- `src/components/ui/CustomSelect.tsx` calls `onChange(option.label)`.
- Therefore `formData.country` is currently expected to be `"Canada"`, `"India"`, `"US"`, etc — **not** `"CA"`, `"IN"`.

### Phone input is encapsulated
- Phone input is `src/components/forms/PhoneInputWrapper.tsx`
- It currently hardcodes `defaultCountry="us"` and does not accept a prop to change that when auto-detecting.

### Countries list is limited to 5 entries
- `src/lib/constants.ts` exports `COUNTRIES`:
  - `{ value: 'CA', label: 'Canada' }`
  - `{ value: 'US', label: 'US' }`
  - `{ value: 'UK', label: 'UK' }`  ← note: uses `UK` rather than `GB`
  - `{ value: 'IN', label: 'India' }`
  - `{ value: 'ES', label: 'Spain' }`

Implication: if we detect a country outside these, we can still set the **phone** country, but we should **not** set the Country dropdown unless it maps into this list.

---

## Implementation Plan (Correct for App Router + Current Components)

### Step 1 — Add environment variable (optional, only if using IPinfo fallback)
File: `.env.local`

Add:
- `IPINFO_API_TOKEN=your_token_here`

Notes:
- Do **not** prefix with `bash`.
- Do **not** use `NEXT_PUBLIC_` (token must stay server-side).
- Ensure `.env.local` is gitignored.

---

### Step 2 — Create a location detection API route (App Router)
Create:
- `src/app/api/detect-location/route.ts`

Behavior:
- Responds to `GET /api/detect-location`
- Returns JSON like:
  - `{ success: true, countryCode: "US", source: "header" }`
  - or `{ success: true, countryCode: "IN", source: "ipinfo" }`
  - or `{ success: false, countryCode: null }`

Detection strategy (recommended in this repo):
1) **First try provider headers** (no external API):
   - Cloudflare: `cf-ipcountry`
   - Vercel: `x-vercel-ip-country`
   - Generic proxies sometimes use: `x-country-code` (optional)
2) If no header present, optionally fall back to IPinfo server-side using `IPINFO_API_TOKEN`.
   - Extract client IP from headers (order of preference):
     - `x-forwarded-for` (first IP in the comma-separated list)
     - `x-real-ip`
   - Call IPinfo **Lite API** (matches your curl):
     - `GET https://api.ipinfo.io/lite/{ip}?token=${process.env.IPINFO_API_TOKEN}`
   - Parse the JSON response and use `country_code` (e.g. `"US"`).
   - If client IP cannot be determined (common in local dev), skip the fallback and rely on manual entry.

Important App Router detail:
- Implement as `export async function GET(request: Request) { ... }`
- Read headers via `request.headers.get("...")`

Normalization detail (because your constants use `UK` not `GB`):
- If the detector returns `GB`, normalize to `UK` **only for the dropdown mapping**.
- Keep the original code for phone if the library expects ISO2 (it generally expects `gb`).

---

### Step 3 — Make the phone input auto-configurable
Update:
- `src/components/forms/PhoneInputWrapper.tsx`

Change the component API so `ContactModal` can pass a detected country:
- Add an optional prop like `defaultCountry?: string` (or `country?: string`, depending on library behavior you want).
- Use that prop instead of hardcoding `defaultCountry="us"`.

Goal:
- When the modal opens and a country is detected, the phone input shows the correct flag/dialing code.
- If detection fails, it remains `us`.

---

### Step 4 — Add auto-fill logic in the existing modal (the real form)
Update:
- `src/components/forms/ContactModal.tsx`

Add state for:
- `isDetectingLocation` (optional; for disabling UI or showing “Detecting…”)
- `detectedPhoneCountry` (e.g. `"us"`, `"in"`, `"gb"`)

Trigger:
- Use `useEffect(() => { if (isOpen) ... }, [isOpen])` (this already exists in the file for resetting submit state).

Core rules:
- Only attempt auto-fill **when opening** the modal.
- Only set dropdown/phone defaults if the user hasn’t already filled them:
  - If `formData.country` is empty, allow auto-fill of dropdown.
  - If `formData.phone` is empty (or you don’t want to override), allow auto-fill of phone default country.

Mapping logic for the dropdown (must match current `CustomSelect` behavior):
- Fetch `/api/detect-location`
- If you get `countryCode`:
  - Find matching country in `COUNTRIES` by comparing to `.value` (after normalization for `GB→UK` for dropdown only).
  - If match exists, set:
    - `formData.country = matched.label`  ✅ (because `CustomSelect` stores labels)
  - If not match, leave dropdown empty.

Phone country logic:
- If you get ISO2 code, pass it lowercased into `PhoneInputWrapper`:
  - e.g. `US → "us"`, `IN → "in"`, `GB → "gb"`
- This should be independent from the limited `COUNTRIES` list (phone can support many).

---

### Step 5 — UX / behavior constraints
- **Do not override** user input:
  - If the user changes Country or Phone, do not re-run detection while the modal stays open.
- **Graceful fallback**:
  - If `/api/detect-location` fails, form remains usable with defaults:
    - Phone defaults to US (current behavior).
    - Country dropdown remains empty.

Optional (nice-to-have):
- Disable just the phone/country controls while detecting, or show subtle text like “Detecting location…” (but avoid blocking the entire form if detection is slow).

---

## Testing Plan (Specific to This Codebase)

### Local dev (no provider headers)
- Expect: header-based detection likely returns nothing.
- If IPinfo fallback is enabled and `IPINFO_API_TOKEN` set:
  - Expect the API to return a country code and auto-fill.
- If fallback is not enabled:
  - Expect: no auto-fill, form works normally.

### Production-like headers
- Simulate or test on hosting provider:
  - Cloudflare: `cf-ipcountry`
  - Vercel: `x-vercel-ip-country`

### Expected outcomes
- **Supported country (IN/US/CA/ES/UK)**:
  - Country dropdown auto-selects the matching label (e.g. `IN → "India"`).
  - Phone input flag/dial code matches detected ISO2 (e.g. `in`).
- **Unsupported country (e.g. DE)**:
  - Country dropdown stays empty (since not in `COUNTRIES`).
  - Phone input still picks `de` (if we pass it through).
- **API failure**:
  - No crash; user can fill manually.

---

## Notes / Known Mismatches From the Old Plan (Fixed Here)
- This repo uses **App Router** → use `src/app/api/.../route.ts`, not `pages/api/...`.
- Modal open is via **URL query param** (`?form=...`), not a local `isOpen` toggle in a CTA component.
- The Country dropdown uses a **custom select that stores labels**, so auto-fill must set labels, not ISO codes.
- Phone auto-fill requires updating `PhoneInputWrapper` to accept a configurable default country.

---

## Ready to Implement?
Yes. This plan is now consistent with the current codebase structure and component behavior, and it’s ready to implement when you provide the next instructions.

