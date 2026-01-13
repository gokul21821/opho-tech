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

export function HeroSection({
  breadcrumb,
  title,
  subtitle,
  backgroundImage,
  video,
  videoPoster = "/videos/thumbnail.png",
  contentAlignment = "center",
  fullViewport = false,
  children,
}: HeroSectionProps) {
  // If video is provided, use two-column layout
  const hasVideo = !!video;

  // Section classes: add negative margin to pull behind header, ensure proper height
  const sectionClasses = `relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24 ${
    fullViewport ? "min-h-screen" : "min-h-[680px] lg:min-h-[720px]"
  } flex flex-col ${contentAlignment === "center" && !hasVideo ? "justify-center" : ""}`;

  // Container classes: adjust padding to account for header overlap
  const containerClasses = hasVideo
    ? `relative mx-auto flex min-h-[680px] max-w-[1120px] flex-col gap-16 pb-24 pt-36 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:min-h-[720px] z-10`
    : `relative mx-auto flex flex-col ${
        contentAlignment === "center" ? "items-center justify-center text-center" : ""
      } px-6 pb-24 pt-36 md:px-8 max-w-7xl w-full z-10`;

  return (
    <section className={sectionClasses}>
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={backgroundImage || HERO_BACKGROUND_WAVES}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Fixed Centered Breadcrumbs */}
      {breadcrumb && (
        <div className="absolute left-1/2 top-40 -translate-x-1/2 z-20 flex justify-center w-full px-6">
          <Breadcrumb items={breadcrumb} />
        </div>
      )}

      {/* Content */}
      <div className={containerClasses}>
        {hasVideo ? (
          <>
            {/* Left: Text Content */}
            <div className="max-w-xl space-y-8 px-6">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-orange-500 sm:text-5xl">
                  {title}
                </h1>

                {subtitle && (
                  <p className="text-base leading-relaxed text-blue-100 sm:text-lg max-w-lg">
                    {subtitle}
                  </p>
                )}

                {children}
              </div>
            </div>

            {/* Right: Video */}
            <div className="relative max-w-7xl flex-1 px-6">
              <div className="w-full max-w-2xl mx-auto">
                <VideoPlayer
                  src={video}
                  poster={videoPoster}
                  muted={true}
                  showControls={true}
                  className="scale-100 sm:scale-100 md:scale-110 lg:scale-110 xl:scale-140"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={`flex flex-col ${contentAlignment === "center" ? "items-center text-center" : ""} space-y-6 max-w-7xl ${contentAlignment === "left" ? "w-full" : ""}`}>
              <h1 className={`text-4xl font-bold text-orange-500 sm:text-5xl ${contentAlignment === "center" ? "text-center" : ""}`}>
                {title}
              </h1>

              {subtitle && (
                <p className={`text-base leading-relaxed text-blue-100 sm:text-lg ${contentAlignment === "center" ? "text-center max-w-3xl" : "max-w-4xl"}`}>
                  {subtitle}
                </p>
              )}

              {children}
            </div>
          </>
        )}
      </div>
    </section>
  );
}