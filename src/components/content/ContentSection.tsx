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
    <section className={`${hasBackground ? 'bg-white' : ''} px-[8%] py-16 md:py-16`}>
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 text-center md:mb-[40px]">
          <h2 className="font-poppins text-4xl font-medium leading-[48px] text-[#111111]">
            {title}
          </h2>
          <p className="mt-4 font-poppins text-base leading-normal text-[#454545]">
            {subtitle}
          </p>
        </div>

        {displayItems.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-poppins text-lg text-[#454545]">{emptyMessage}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayItems.map((item) => (
                <ContentCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  edition={item.edition}
                  category={item.category}
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

