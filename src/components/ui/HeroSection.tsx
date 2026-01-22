"use client";

import Image from "next/image";
import { Breadcrumb } from "./Breadcrumb";
import { ReactNode } from "react";
import { VideoPlayer } from "./VideoPlayer";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeroSectionProps {
  // Breadcrumb configuration
  breadcrumb?: BreadcrumbItem[];

  // Content
  title: string;
  subtitle?: string;

  // Background configuration
  backgroundImage?: string;

  // Video configuration
  video?: string;
  videoPoster?: string;

  // Layout configuration
  contentAlignment?: "center" | "left";
  fullViewport?: boolean;

  // Custom content (for complex layouts)
  children?: ReactNode;
}

const HERO_BACKGROUND_WAVES = "/images/common-background.png";
const HERO_BG_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDcxYjJiIi8+PC9zdmc+";

export function HeroSection({
  breadcrumb,
  title,
  subtitle,
  backgroundImage,
  video,
  videoPoster = "/videos/thumbnail.webp", 
  contentAlignment = "center",
  fullViewport = false,
  children,
}: HeroSectionProps) {
  // If video is provided, use two-column layout
  const hasVideo = !!video;

  // Keep current min-heights for the video layout; reduce height when there's no video.
  const minHeightClass = fullViewport
    ? "min-h-screen"
    : hasVideo
      ? "min-h-[680px] lg:min-h-[720px]"
      : "min-h-[440px] lg:min-h-[500px]";

  // Section classes: add negative margin to pull behind header
  const sectionClasses = `relative -mt-20 overflow-hidden pt-20 text-white md:-mt-24 md:pt-24 ${
    minHeightClass
  } flex flex-col ${contentAlignment === "center" && !hasVideo ? "justify-center" : ""}`;

  return (
    <section className={sectionClasses}>
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={backgroundImage || HERO_BACKGROUND_WAVES}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL={HERO_BG_BLUR_DATA_URL}
          aria-hidden
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-[5%]">
        {hasVideo ? (
          <div className="flex flex-col pt-20 pb-2">
            {/* Breadcrumb */}
            {breadcrumb && <Breadcrumb items={breadcrumb} />}

            {/* Two Column Layout */}
            <div className="flex flex-1 flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Left: Text Content */}
              <div className="min-w-[280px] max-w-md space-y-8 sm:min-w-[350px] lg:min-w-[380px]">
                <h1 className="text-3xl text-orange-500 sm:text-5xl leading-[1.1] lg:text-5xl">
                  {title}
                </h1>

                {subtitle && (
                  <p className="text-base leading-relaxed text-blue-100 sm:text-lg lg:text-xl">
                    {subtitle}
                  </p>
                )}

                {children}
              </div>

              {/* Right: Video */}
              <div className="w-full flex-1">
                <div className="w-full lg:w-auto lg:ml-0">
                  <VideoPlayer
                    src={video}
                    poster={videoPoster}
                    muted={true}
                    showControls={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col pt-5 ${
              contentAlignment === "center" ? "items-center text-center" : ""
            }`}
          >
            {/* Breadcrumb for non-video layout */}
            {breadcrumb && (
              <div className={contentAlignment === "center" ? "w-full" : ""}>
                <Breadcrumb items={breadcrumb} />
              </div>
            )}

            {/* Content */}
            <div
              className={`flex flex-col space-y-6 mb-10 ${
                contentAlignment === "center"
                  ? "items-center text-center max-w-5xl"
                  : "max-w-5xl"
              }`}
            >
              <h1 className="text-4xl  text-orange-500 sm:text-5xl leading-[1.1] lg:text-5xl">
                {title}
              </h1>

              {subtitle && (
                <p className="text-base leading-relaxed text-blue-100 sm:text-lg">
                  {subtitle}
                </p>
              )}

              {children}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}