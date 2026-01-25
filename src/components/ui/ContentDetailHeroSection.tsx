"use client";

import Image from "next/image";
import { Breadcrumb } from "./Breadcrumb";
import { formatFullDate, formatYear } from "@/lib/api";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ContentDetailHeroSectionProps {
  title: string;
  date: string; // ISO date string
  author: string; // author name
  contentType: "blogs" | "newsletters" | "case-studies";
  edition?: string | null;
}

const HERO_BACKGROUND_WAVES = "/images/common-background.png";

const contentTypeLabels = {
  blogs: "Blogs",
  newsletters: "Newsletters",
  "case-studies": "Case Studies",
};

export function ContentDetailHeroSection({
  title,
  date,
  author,
  contentType,
  edition,
}: ContentDetailHeroSectionProps) {
  const contentTypeLabel = contentTypeLabels[contentType];
  const formattedDate = formatFullDate(date);
  const year = formatYear(date);

  const normalizedEdition = edition?.trim();
  const newsletterSubtitle = normalizedEdition ? `${normalizedEdition}, ${year}` : formattedDate;

  const breadcrumb: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Resources" },
    { label: contentTypeLabel, href: `/${contentType}` },
    { label: title },
  ];

  // Section classes: add negative margin to pull behind header, ensure proper height
  const sectionClasses =
    "relative -mt-20 overflow-hidden pb-0 pt-20 text-white md:-mt-24 md:pt-24 min-h-[680px] lg:min-h-[720px] flex flex-col justify-center";

  // Container classes: adjust padding to account for header overlap
  const containerClasses =
    "relative mx-auto flex flex-col items-center justify-center text-center px-6 pb-24 pt-36 md:px-8 max-w-7xl w-full z-10";

  return (
    <section className={sectionClasses}>
      {/* Background Image Layer */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={HERO_BACKGROUND_WAVES}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Fixed Centered Breadcrumbs */}
      <div className="absolute left-1/2 top-40 -translate-x-1/2 z-20 flex justify-center w-full px-6">
        <Breadcrumb items={breadcrumb} />
      </div>

      {/* Content */}
      <div className={containerClasses}>
        <div className="flex flex-col items-center text-center space-y-6 max-w-5xl">
          <h1 className="text-4xl font-medium text-orange-400 sm:text-5xl">
            {title}
          </h1>

          {/* Subtitle with date/edition and author */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg text-blue-100">
            {/* Date/Edition with calendar icon */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/calendar.svg"
                alt="Calendar icon"
                width={13}
                height={14}
                className="w-3.5 h-4"
                aria-hidden
              />
              {contentType === "newsletters" && normalizedEdition ? (
                <span>{newsletterSubtitle}</span>
              ) : (
                <time dateTime={date}>{newsletterSubtitle}</time>
              )}
            </div>

            {/* Author with person icon */}
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/person.svg"
                alt="Person icon"
                width={13}
                height={14}
                className="w-3.5 h-4"
                aria-hidden
              />
              <span>By {author}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

