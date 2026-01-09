import Link from "next/link";
import { fetchContentList, formatDate } from "@/lib/api";
import { ContentType } from "@/lib/types";
import BackgroundDots from "./background";

interface RecentContentCardProps {
  contentType: ContentType;
  currentId: string;
}

const contentTypeLabels = {
  blogs: "Blogs",
  newsletters: "Newsletters",
  "case-studies": "Case Studies",
};

export async function RecentContentCard({
  contentType,
  currentId,
}: RecentContentCardProps) {
  // Fetch all items
  const allItems = await fetchContentList(contentType);

  // Filter out current item and take first 3
  const recentItems = allItems
    .filter((item) => item.id !== currentId)
    .slice(0, 3);

  // If no recent items, don't render
  if (recentItems.length === 0) {
    return null;
  }

  const contentLabel = contentTypeLabels[contentType];

  return (
    <div className="sticky top-[230px]">
      <BackgroundDots
        className="rounded-2xl"
        spacing={36}
        dotSize={2.5}
        backgroundColor=""
        dotColor="#D9D9D9"
        style={{
          background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
        }}
      >
        <div className="p-6">
          <h3 className="mb-4 font-poppins text-lg font-semibold text-gray-900">
            Recent {contentLabel}
          </h3>

          <div className="flex flex-col gap-3">
            {recentItems.map((item) => (
              <Link
                key={item.id}
                href={`/${contentType}/${item.id}`}
                className="group block rounded-lg border border-orange-300 bg-white p-4 transition-all hover:shadow-md hover:border-orange-500"
              >
                <h4 className="mb-2 line-clamp-2 font-poppins text-sm font-medium text-gray-900 group-hover:text-orange-500">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600">
                  {formatDate(item.date)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </BackgroundDots>
    </div>
  );
}

