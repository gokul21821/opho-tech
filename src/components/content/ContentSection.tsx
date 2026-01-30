import Link from "next/link";
import { ContentCard } from "./ContentCard";
import { ContentItem, ContentType } from "@/lib/types";

interface ContentSectionProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  contentType: ContentType;
  emptyMessage?: string;
  hasBackground?: boolean;
}

export function ContentSection({
  title,
  subtitle,
  items,
  contentType,
  emptyMessage = "Not available, stay tuned",
  hasBackground = true,
}: ContentSectionProps) {
  const displayItems = items.slice(0, 3);

  return (
    <section className={`${hasBackground ? "bg-white" : ""}  py-16`}>
      <div className="mx-auto max-w-6xl px-3 xl:px-0">
        <div className="mb-10 text-center">
          <h2 className="font-poppins text-4xl font-medium leading-[48px] text-[#111111]">
            {title}
          </h2>
          <p className="mt-4 font-poppins text-base leading-normal text-[#454545]">
            {subtitle}
          </p>
        </div>

        {displayItems.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-poppins text-lg text-[#454545]">
              {emptyMessage}
            </p>
          </div>
        ) : (
          <>
            {/* FLEX layout */}
            <div className="flex flex-wrap items-stretch justify-center gap-6">
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[250px] lg:w-[320px]"
                >
                  <ContentCard
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    edition={item.edition}
                    category={item.category}
                    contentType={contentType}
                  />
                </div>
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
