
"use client";

import { useEffect, useState } from "react";
import { JourneyAnimationDesktop } from "@/components/sections/journey/JourneyAnimationDesktop";
import { JourneyAnimationMobile } from "@/components/sections/journey/JourneyAnimationMobile";

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

  // Prevent hydration mismatch by only rendering after mount
  if (breakpoint === 'lg') {
    return <JourneyAnimationDesktop />;
  }

  return <JourneyAnimationMobile />;
}
