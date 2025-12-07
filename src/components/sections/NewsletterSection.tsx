import { ContentSection } from "@/components/content/ContentSection";
import { fetchContentList } from "@/lib/api";

export async function NewsletterSection() {
  const newsletters = await fetchContentList("newsletters");

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

