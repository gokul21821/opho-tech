"use client";

import { motion, useAnimate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { JOURNEY_STOPS } from "./JourneyStops";

const CURVE_PATH_DATA =
  "M5.00098 69.4014C5.00098 69.4014 285.83 -75.7236 608.001 69.4014C930.172 214.526 1211 69.4014 1211 69.4014";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<'md' | 'lg' | 'xl' | '2xl'>('2xl');

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) setBreakpoint('2xl');
      else if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else setBreakpoint('2xl');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};

export function JourneyAnimationDesktop() {
  const [scope, animate] = useAnimate();
  const progress = useMotionValue(0);
  const breakpoint = useBreakpoint();

  const pathRef = useRef<SVGPathElement | null>(null);
  const planeRef = useRef<SVGGElement | null>(null);
  const totalLengthRef = useRef<number>(0);

  const PLANE_WIDTH = 80;
  const PLANE_HEIGHT = 80;
  // small rotation offset to match the plane artwork orientation if needed
  const PLANE_ROTATION_OFFSET_DEG = -12;

  const getResponsiveProgress = (stop: typeof JOURNEY_STOPS[0]) =>
    stop.progress[breakpoint];

  // sequence logic (same as your previous)
  useEffect(() => {
    const sequence = async () => {
      progress.set(0);

      for (const stop of JOURNEY_STOPS) {
        await animate(progress, getResponsiveProgress(stop), {
          duration: 1,
          ease: "easeInOut"
        });

        const contentSelector = `#${stop.id}`;
        const connectorSelector = `#${stop.id}-connector`;

        await Promise.all([
          animate(contentSelector, { opacity: 1, y: 0 }, { duration: 0.5 }),
          animate(connectorSelector, { opacity: 1, y: 0 }, { duration: 0.5 })
        ]);

        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    };

    sequence();
  }, [animate, progress, breakpoint]);

  // update total length whenever svg/path is available or window resizes
  useEffect(() => {
    const updateTotal = () => {
      if (pathRef.current) {
        totalLengthRef.current = pathRef.current.getTotalLength();
        // place plane at current progress so it immediately matches after a resize
        const val = progress.get();
        if (pathRef.current && planeRef.current) {
          const len = totalLengthRef.current * val;
          const p = pathRef.current.getPointAtLength(len);
          planeRef.current.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(0)`);
        }
      }
    };

    updateTotal();
    window.addEventListener('resize', updateTotal);
    return () => window.removeEventListener('resize', updateTotal);
  }, [progress]);

  // subscribe to progress changes and move the plane exactly on the SVG path
  useEffect(() => {
    const unsub = progress.onChange((rawVal) => {
      const val = Number(rawVal); // expected between 0..1
      if (!pathRef.current || !planeRef.current) return;
      const total = totalLengthRef.current || pathRef.current.getTotalLength();
      totalLengthRef.current = total;

      const lengthAt = Math.max(0, Math.min(total, val * total));

      // current point
      const p = pathRef.current.getPointAtLength(lengthAt);

      // small look-ahead to estimate tangent for rotation
      const lookAheadPx = 1; // 1px ahead on the path
      const lengthAhead = Math.min(total, lengthAt + lookAheadPx);
      const pAhead = pathRef.current.getPointAtLength(lengthAhead);

      const dx = pAhead.x - p.x;
      const dy = pAhead.y - p.y;
      let angleRad = Math.atan2(dy, dx);
      let angleDeg = (angleRad * 180) / Math.PI;

      // apply artwork offset
      angleDeg += PLANE_ROTATION_OFFSET_DEG;

      // set the group's transform: translate to the point and rotate the group
      // we render the <image> centered around 0,0 (x=-w/2, y=-h/2) so translate to (p.x, p.y)
      planeRef.current.setAttribute(
        'transform',
        `translate(${p.x} ${p.y}) rotate(${angleDeg})`
      );
    });

    // initialize to current progress
    const init = progress.get();
    if (init !== undefined) progress.set(init);

    return () => unsub();
  }, [progress]);

  return (
    <div ref={scope} className="relative w-full aspect-[1216/600] hidden lg:block">
      {/* SVG Path + Plane (single coordinate system) */}
      <div className="absolute inset-0 top-20 flex justify-center pointer-events-none">
        <svg
          viewBox="0 0 1216 139"
          className="w-full max-w-[1216px] overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="20%" stopColor="#FB923C" />
              <stop offset="40%" stopColor="#FDBA74" />
              <stop offset="60%" stopColor="#FED7AA" />
              <stop offset="80%" stopColor="#F3F4F6" />
              <stop offset="100%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>

          {/* Curve path (single source) */}
          <path
            id="journey-path"
            ref={pathRef}
            d={CURVE_PATH_DATA}
            stroke="url(#pathGradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray="20 20"
            strokeLinecap="round"
          />

          {/* Plane group: we position the group origin at the exact sampled point,
              and place the image centered at 0,0 (so translate + rotate works nicely). */}
          <g
            ref={planeRef}
            // initial off-screen until the subscription moves it; pointer events none
            transform={`translate(-9999 -9999)`}
            style={{ pointerEvents: 'none' }}
          >
            {/* center the image on the group origin */}
            <image
              href="/images/journey/aeroplane.svg"
              width={PLANE_WIDTH}
              height={PLANE_HEIGHT}
              x={-PLANE_WIDTH / 2}
              y={-PLANE_HEIGHT / 2}
              // optional: preserveAspectRatio, etc.
            />
          </g>
        </svg>
      </div>

      {/* Connectors & Content (unchanged) */}
      <div className="absolute inset-0 w-full h-full max-w-[1216px] mx-auto">
        {JOURNEY_STOPS.map((stop) => (
          <div
            key={stop.id}
            className="absolute flex flex-row items-start w-[260px]"
            style={{
              left: stop.left,
              top: stop.top[breakpoint]
            }}
          >
            <motion.div
              id={`${stop.id}-connector`}
              initial={{ opacity: 0, y: stop.position === 'top' ? 20 : -20 }}
              className="relative flex-shrink-0"
            >
              <Image
                src={stop.icon}
                alt=""
                width={96}
                height={stop.position === 'bottom' ? 340 : 325}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              id={stop.id}
              initial={{ opacity: 0, y: 10 }}
              className={`text-left flex-1 ${stop.position === 'bottom' ? 'mt-20' : 'mt-16'}`}
            >
              <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                {stop.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {stop.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
