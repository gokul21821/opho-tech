"use client";

import dynamic from "next/dynamic";

import type { CTASectionProps } from "@/components/sections/CTASection";

const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => m.CTASection),
  {
    ssr: false,
    loading: () => <div className="py-20" aria-hidden />,
  },
);

export function LazyCTASection(props: CTASectionProps) {
  return <CTASection {...props} />;
}

