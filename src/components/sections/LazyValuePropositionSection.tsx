"use client";

import dynamic from "next/dynamic";

const ValuePropositionSection = dynamic(
  () =>
    import("@/components/sections/ValuePropositionSection").then(
      (m) => m.ValuePropositionSection,
    ),
  {
    ssr: false,
    loading: () => <div className="py-20" aria-hidden />,
  },
);

export function LazyValuePropositionSection() {
  return <ValuePropositionSection />;
}

