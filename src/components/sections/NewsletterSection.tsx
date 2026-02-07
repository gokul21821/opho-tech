import { ContentSection } from "@/components/content/ContentSection";
import { fetchContentList } from "@/lib/api";

export async function NewsletterSection() {
  const newsletters = await fetchContentList("newsletters", {
    revalidate: 300, // Cache for 5 minutes - newsletters update moderately frequently
  });

  return (
    <ContentSection
      title="Newsletter"
      subtitle="Weekly AI SaaS insights for Business Leaders"
      items={newsletters}
      contentType="newsletters"
      emptyMessage="Newsletters not available, stay tuned"
    />
  );
}