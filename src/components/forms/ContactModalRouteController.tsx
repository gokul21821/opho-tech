"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ContactModal } from "@/components/forms/ContactModal";
import {
  buildContactModalClosedUrl,
  clearContactModalOpenedFromUi,
  consumeContactModalOpenedFromUi,
  isContactModalOpen,
} from "@/lib/contact-modal";

export function ContactModalRouteController() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const didSeedHistoryRef = useRef(false);

  const open = isContactModalOpen(searchParams);

  const closeUrl = useMemo(() => {
    return buildContactModalClosedUrl(pathname, searchParams);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!open) return;
    if (didSeedHistoryRef.current) return;
    if (typeof window === "undefined") return;

    // Deep-link behavior:
    // If a user lands directly on `?form=...` from outside the site, they still
    // expect the browser Back button to close the modal (not exit the site).
    //
    // We seed history as:
    //   [base-url-without-form] -> [current-url-with-form]
    //
    // For in-app opens (CTA click) we already used `router.push()` so we should
    // not modify history.
    const openedFromUi = Boolean(globalThis.__ophotechContactModalOpenedFromUi);
    if (openedFromUi) return;

    let isExternalReferrer = true;
    try {
      if (document.referrer) {
        isExternalReferrer =
          new URL(document.referrer).origin !== window.location.origin;
      }
    } catch {
      isExternalReferrer = true;
    }

    if (!isExternalReferrer) return;

    const modalUrl =
      window.location.pathname + window.location.search + window.location.hash;
    window.history.replaceState(window.history.state, "", closeUrl);
    window.history.pushState(window.history.state, "", modalUrl);
    didSeedHistoryRef.current = true;
  }, [open, closeUrl]);

  useEffect(() => {
    // If the user closed via back button, the query param disappears without
    // hitting our onClose handler — ensure we reset the flag.
    if (!open) {
      clearContactModalOpenedFromUi();
    }
  }, [open]);

  const handleClose = () => {
    // If opened via CTA click we used router.push() which created a history entry,
    // so closing should feel like "undo" (router.back()).
    // For deep-links, back could leave the site, so we replace to the base URL.
    if (consumeContactModalOpenedFromUi()) {
      router.back();
      return;
    }

    router.replace(closeUrl);
  };

  return <ContactModal isOpen={open} onClose={handleClose} />;
}

