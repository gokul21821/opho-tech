import React from "react";

type BackgroundDotsProps = {
  children?: React.ReactNode;
  className?: string;               // additional container classes
  dotSize?: number;                 // diameter in px (default: 3)
  spacing?: number;                 // grid spacing in px (default: 36)
  dotColor?: string;                // any CSS color (default: tailwind gray-700 hex)
  backgroundColor?: string;         // default #FEECD6
  style?: React.CSSProperties;
};

/**
 * BackgroundDots
 * - Full-width container with background color and a static SVG dot-grid on top.
 * - Use as a wrapper around section content, or place as background-only by not passing children.
 *
 * Example:
 *  <BackgroundDots className="py-20">
 *    ...your section content...
 *  </BackgroundDots>
 */
export default function BackgroundDots({
  children,
  className = "",
  dotSize = 3,
  spacing = 36,
  dotColor = "#374151", // tailwind gray-700
  backgroundColor = "#FEECD6",
  style,
}: BackgroundDotsProps) {
  // pattern units are in px; patternWidth/Height = spacing
  const patternSize = spacing;
  const radius = Math.max(0.5, dotSize / 2);

  // Inline SVG string would be used if you wanted background-image data URI.
  // Here we render the SVG as an absolutely positioned element to keep it fully accessible and styled.
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor, ...style }}
    >
      {/* SVG dots layer - pointer-events-none so it doesn't block interactions */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width={patternSize}
            height={patternSize}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={patternSize / 2} cy={patternSize / 2} r={radius} fill={dotColor} />
          </pattern>
        </defs>

        {/* A full-coverage rect using the pattern */}
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      {/* Content placed above the dots */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}


//use this component to add a background dots to the section
/**
import BackgroundDots from "@/components/ui/background";
export default function ExampleSection() {
  return (
    <BackgroundDots className="py-20 px-6" spacing={40} dotSize={3}>
      <div className="max-w-6xl mx-auto flex items-center gap-12">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
          <p className="mt-4 text-lg text-gray-700">...content...</p>
        </div>

        <div className="w-1/2">
        </div>
      </div>
    </BackgroundDots>
  );
}
**/