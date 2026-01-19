import type { ReadonlyURLSearchParams } from "next/navigation";

export const CONTACT_MODAL_QUERY_KEY = "form";
export const CONTACT_MODAL_DEFAULT_VALUE = "signup";

export type SearchParamsLike = { toString(): string };

declare global {
  // Used to decide whether closing should `back()` or `replace()`.
  // - true: opened from an in-app CTA click (we pushed a history entry)
  // - false/undefined: opened via deep-link or unknown history state
  var __ophotechContactModalOpenedFromUi: boolean | undefined;
}

export function isContactModalOpen(
  searchParams: ReadonlyURLSearchParams,
): boolean {
  return Boolean(searchParams.get(CONTACT_MODAL_QUERY_KEY));
}

export function buildContactModalOpenUrl(
  pathname: string,
  searchParams: SearchParamsLike,
  value: string = CONTACT_MODAL_DEFAULT_VALUE,
): string {
  const params = new URLSearchParams(searchParams.toString());
  params.set(CONTACT_MODAL_QUERY_KEY, value);
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

export function buildContactModalClosedUrl(
  pathname: string,
  searchParams: SearchParamsLike,
): string {
  const params = new URLSearchParams(searchParams.toString());
  params.delete(CONTACT_MODAL_QUERY_KEY);
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

export function markContactModalOpenedFromUi(): void {
  if (typeof window === "undefined") return;
  globalThis.__ophotechContactModalOpenedFromUi = true;
}

export function clearContactModalOpenedFromUi(): void {
  if (typeof window === "undefined") return;
  globalThis.__ophotechContactModalOpenedFromUi = false;
}

export function consumeContactModalOpenedFromUi(): boolean {
  if (typeof window === "undefined") return false;
  const openedFromUi = Boolean(globalThis.__ophotechContactModalOpenedFromUi);
  globalThis.__ophotechContactModalOpenedFromUi = false;
  return openedFromUi;
}

