import { ContentSection } from "@/components/content/ContentSection";
import { fetchContentList } from "@/lib/api";

export async function CaseStudiesSection() {
  const caseStudies = await fetchContentList("case-studies", {
    cache: "no-store", // always fetch fresh data on landing page
  });

  return (
    <ContentSection
      title="Our Case Studies"
      subtitle="Explore sector-specific solutions shaped by research, technology enablement, and proven strategies."
      items={caseStudies}
      contentType="case-studies"
      emptyMessage="Case studies not available, stay tuned"
    />
  );
}