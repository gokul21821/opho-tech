"use client";

import type { ReactNode } from "react";
import Image from "next/image";

export type SolutionsIntroTechStackLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  wrapperClassName?: string;
  imageClassName?: string;
};

export type SolutionsIntroSectionProps = {
  /**
   * Layout overrides. Defaults match the Cyber Security reference section.
   */
  sectionClassName?: string;
  gridClassName?: string;
  leftWrapperClassName?: string;
  dividerWrapperClassName?: string;
  rightWrapperClassName?: string;

  /**
   * Left illustration image.
   */
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  imagePriority?: boolean;

  /**
   * Center divider image.
   */
  dividerSrc?: string;
  dividerAlt?: string;
  dividerWidth?: number;
  dividerHeight?: number;
  dividerClassName?: string;

  /**
   * Right copy + tech stack.
   */
  copy: ReactNode;
  techStackTitle?: string;
  techStack?: SolutionsIntroTechStackLogo[];
};

export function SolutionsIntroSection({
  sectionClassName = "mx-auto max-w-6xl py-20 px-3 xl:px-0",
  gridClassName = "grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-15",
  leftWrapperClassName = "flex justify-center md:justify-start",
  dividerWrapperClassName = "flex justify-center",
  rightWrapperClassName = "text-[15.5px] text-[#3A4A5F] max-w-full flex flex-col justify-center",
  imageSrc,
  imageAlt,
  imageWidth = 600,
  imageHeight = 380,
  imageClassName = "h-auto md:w-[600px] rounded-xl",
  imagePriority = true,
  dividerSrc = "/images/raar/lineraar.svg",
  dividerAlt = "",
  dividerWidth = 2,
  dividerHeight = 320,
  dividerClassName = "w-auto h-auto",
  copy,
  techStackTitle = "Our Tech Stack",
  techStack = [],
}: SolutionsIntroSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className={gridClassName}>
        {/* LEFT — Illustration */}
        <div className={leftWrapperClassName}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={imageClassName}
            priority={imagePriority}
          />
        </div>

        {/* CENTER — Divider (vertical on md+, horizontal on mobile) */}
        <div className={dividerWrapperClassName}>
          {/* Mobile: horizontal divider (rotate the vertical asset) */}
          <div className="flex w-full justify-center md:hidden">
            {/* 
              Important: transforms (rotate) don't change layout size.
              We absolutely position the rotated divider inside a small container
              to avoid large vertical gaps on mobile.
            */}
            <div className="relative h-6 w-full max-w-md">
              <Image
                src={dividerSrc}
                alt={dividerAlt}
                width={dividerWidth}
                height={dividerHeight}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 ${dividerClassName}`}
                aria-hidden
              />
            </div>
          </div>

          {/* Desktop+: vertical divider */}
          <div className="hidden md:block">
            <Image
              src={dividerSrc}
              alt={dividerAlt}
              width={dividerWidth}
              height={dividerHeight}
              className={dividerClassName}
              aria-hidden
            />
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className={rightWrapperClassName}>
          {copy}

          {techStack.length ? (
            <div className="mt-8">
              <h2 className="text-xl font-medium text-[#0B1B2B]">
                {techStackTitle}
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((logo) => (
                  <div
                    key={`${logo.src}-${logo.alt}`}
                    className={
                      logo.wrapperClassName ??
                      "w-12 h-8 md:w-18 md:h-7 flex items-center justify-center"
                    }
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width ?? 48}
                      height={logo.height ?? 48}
                      className={
                        logo.imageClassName ?? "w-full h-full object-contain"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
