
"use client";

import { JOURNEY_STOPS } from "./JourneyStops";
import Image from "next/image";

export function JourneyAnimationMobile() {
  return (
    <div className="w-full px-4 py-8 lg:hidden">
      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Vertical Line - SVG with gradient matching desktop */}
        <svg
  className="absolute -left-5 top-0 w-2 z-10 pointer-events-none"
  style={{ height: `${JOURNEY_STOPS.length * 280}px` }}
  viewBox="0 5 40"
>
  <defs>
    <linearGradient
      id="verticalPathGradientMobile"
      x1="0%"
      y1="0%"
      x2="0%"
      y2="100%"
    >
      <stop offset="0%" stopColor="#F97316" />
      <stop offset="20%" stopColor="#FB923C" />
      <stop offset="40%" stopColor="#FDBA74" />
      <stop offset="60%" stopColor="#FED7AA" />
      <stop offset="80%" stopColor="#F3F4F6" />
      <stop offset="100%" stopColor="#E5E7EB" />
    </linearGradient>

    <pattern
      id="dashPattern"
      width="1"
      height="30"
      patternUnits="userSpaceOnUse"
    >
      <rect width="1" height="15" fill="white" />
    </pattern>

    <mask id="dashMask">
      <rect width="100%" height="100%" fill="url(#dashPattern)" />
    </mask>
  </defs>


  <rect
    x="3"
    y="0"
    width="4"
    height="100%"
    fill="url(#verticalPathGradientMobile)"
    mask="url(#dashMask)"
    rx="2"
  />
</svg>




        {/* Timeline Items */}
        <div className="space-y-0 relative">
          {JOURNEY_STOPS.map((stop, index) => (
            <div key={stop.id} className="relative">
              {/* Connector and Content Row */}
              <div className="flex items-start gap-4 pl-20 py-8">
                {/* Connector SVG */}
                <div className="relative flex-shrink-0 -ml-16">
                  <Image
                    src={stop.icon}
                    alt=""
                    width={64}
                    height={stop.position === "bottom" ? 240 : 220}
                    className={`object-contain ${index % 2 === 1 ? 'rotate-180' : ''}`}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-15 mr-10">
                  <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">
                    {stop.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stop.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
