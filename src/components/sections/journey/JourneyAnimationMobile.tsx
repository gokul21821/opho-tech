
"use client";

import { JOURNEY_STOPS } from "./JourneyStops";
import Image from "next/image";

export function JourneyAnimationMobile() {
  return (
    <div className="w-full px-4 py-8 lg:hidden">
      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div 
          className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-300 to-white -translate-x-1/2"
        />

        {/* Timeline Items */}
        <div className="space-y-0 relative">
          {JOURNEY_STOPS.map((stop, index) => (
            <div key={stop.id} className="relative">
              {/* Connector and Content Row */}
              <div className="flex items-start gap-4 ">
                {/* Connector SVG */}
                <div className="relative flex-shrink-0 rounded-full bg-white p-2">
                  <Image
                    src={stop.iconMobile}
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 mb-10">
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