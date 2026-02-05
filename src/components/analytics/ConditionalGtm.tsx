"use client";

import { useEffect, useState } from "react";
import { hasAnalyticsConsent } from "@/lib/consentUtils";
import { GtmScripts } from "./GtmScripts";

export default function ConditionalGtm({
  gtmId,
  nonce,
}: {
  gtmId: string;
  nonce?: string;
}) {
  const [shouldLoadGtm, setShouldLoadGtm] = useState(false);

  useEffect(() => {
    const sync = () => setShouldLoadGtm(hasAnalyticsConsent());

    // Initial check
    sync();

    // Re-check when user changes consent
    window.addEventListener("cookie_update", sync);
    return () => window.removeEventListener("cookie_update", sync);
  }, []);

  if (!shouldLoadGtm) return null;

  return <GtmScripts gtmId={gtmId} nonce={nonce} />;
}

