"use client";

import Image from "next/image";
import { Breadcrumb } from "./Breadcrumb";
import { ReactNode } from "react";

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

  // Layout configuration
  contentAlignment?: "center" | "left";
  fullViewport?: boolean;

  // Custom content (for complex layouts)
  children?: ReactNode;
}

const HERO_BACKGROUND_WAVES = "/images/hero/hero-background-waves.png";

export function HeroSection({
  breadcrumb,
  title,
  subtitle,
  backgroundImage,
  contentAlignment = "center",
  fullViewport = false,
  children,
}: HeroSectionProps) {
  // Section classes: add negative margin to pull behind header, ensure proper height
  const sectionClasses = `relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24 ${
    fullViewport ? "min-h-screen" : "min-h-[680px] lg:min-h-[720px]"
  } flex flex-col ${contentAlignment === "center" ? "justify-center" : ""}`;

  // Container classes: adjust padding to account for header overlap, increase max-width for better text fit
  const containerClasses = `relative mx-auto flex flex-col ${
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

      {/* Content */}
      <div className={containerClasses}>
        {breadcrumb && <Breadcrumb items={breadcrumb} />}

        <div className={`flex flex-col ${contentAlignment === "center" ? "items-center text-center" : ""} space-y-6 max-w-5xl ${contentAlignment === "left" ? "w-full" : ""}`}>
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
      </div>
    </section>
  );
}

