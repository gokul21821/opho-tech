
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { JourneyAnimationMobile } from "@/components/sections/journey/JourneyAnimationMobile";

const JourneyAnimationDesktop = dynamic(
  () =>
    import("@/components/sections/journey/JourneyAnimationDesktop").then(
      (m) => m.JourneyAnimationDesktop,
    ),
  { ssr: false, loading: () => null },
);

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'sm' | 'lg'>('lg');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      setBreakpoint(width >= 1024 ? 'lg' : 'sm');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

export function JourneyAnimation() {
  const breakpoint = useBreakpoint();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Avoid SSR/hydration mismatches and heavy desktop render on mobile.
  if (!hasMounted) {
    return <div className="h-[520px] w-full" aria-hidden />;
  }

  if (breakpoint === 'lg') {
    return <JourneyAnimationDesktop />;
  }

  return <JourneyAnimationMobile />;
}