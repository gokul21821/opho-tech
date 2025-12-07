import Link from "next/link";
import { ContentCard } from "./ContentCard";
import { ContentItem, ContentType } from "@/lib/types";

interface ContentSectionProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  contentType: ContentType;
  emptyMessage?: string;
}

export function ContentSection({
  title,
  subtitle,
  items,
  contentType,
  emptyMessage = "Not available, stay tuned",
}: ContentSectionProps) {
  const displayItems = items.slice(0, 3);

  return (
    <section className="bg-white px-[8%] py-16 md:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 text-center md:mb-[40px]">
          <h2 className="font-poppins text-3xl font-medium leading-[48px] text-gray-900 md:text-[38px]">
            {title}
          </h2>
          <p className="mt-4 font-poppins text-base leading-normal text-gray-700 md:text-lg">
            {subtitle}
          </p>
        </div>

        {displayItems.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-poppins text-lg text-gray-600">{emptyMessage}</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center gap-6 sm:flex-row sm:gap-4 md:gap-6 lg:gap-[10px]">
              {displayItems.map((item) => (
                <ContentCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  contentType={contentType}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href={`/${contentType}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-25 px-3 py-3 font-poppins text-base font-normal leading-normal text-orange-500 transition-colors hover:bg-orange-50"
              >
                <span>See All</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="size-4"
                >
                  <path
                    d="M3 13L13 3M13 3H3M13 3V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

