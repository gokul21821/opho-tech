import { ContentSection } from "@/components/content/ContentSection";
import { fetchContentList } from "@/lib/api";

export async function NewsletterSection() {
  const newsletters = await fetchContentList("newsletters", {
    cache: "no-store", // always fetch fresh data on landing page
  });

  return (
    <ContentSection
      title="Ophotech Weekly Newsletter"
      subtitle="From Research to Reality — Insights That Power Smarter Decisions."
      items={newsletters}
      contentType="newsletters"
      emptyMessage="Newsletters not available, stay tuned"
    />
  );
}