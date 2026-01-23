import { ContentSection } from "@/components/content/ContentSection";
import { fetchContentList } from "@/lib/api";
import BackgroundDots from "@/components/ui/background";
import Image from "next/image";

export async function CaseStudiesSection() {
  const caseStudies = await fetchContentList("case-studies", {
    revalidate: 600, // Cache for 10 minutes - case studies update less frequently
  });

  // Add the static case study to the beginning of the list
  const staticCaseStudy = {
    id: "manufacturing-ai-transformation",
    title: "Bridging the Digital Gap in Manufacturing: How AI-Led RAR Cut IT Decision Time by 60%",
    description: "Discover how OphoTech's AI-driven Business Research and Analysis (RAR) framework helped a manufacturing company streamline technology decisions and achieve 60% faster IT decision-making.",
    date: "2025-11-06",
    createdAt: "2025-11-06T00:00:00Z",
    updatedAt: "2025-11-06T00:00:00Z",
    imageUrl: "/images/case/framework.png",
    author: {
      id: "admin",
      username: "admin",
      email: "admin@ophotech.com"
    }
  };

  const allCaseStudies = [staticCaseStudy, ...caseStudies];

  return (
    <>
      <BackgroundDots
        className="py-2"
        spacing={36}
        dotSize={2.5}
        backgroundColor=""
        dotColor="#D9D9D9"
        style={{
          background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
        }}
      >
        <ContentSection
          title="Our Case Studies"
          subtitle="Explore sector-specific solutions shaped by research, technology enablement, and proven strategies."
          items={allCaseStudies}
          contentType="case-studies"
          emptyMessage="Case studies not available, stay tuned"
          hasBackground={false}
        />
      </BackgroundDots>
      <div className="flex justify-center">
        <Image
          src="/images/horizontalline.svg"
          alt=""
          width={1200}
          height={3}
          className="w-full max-w-5xl"
          aria-hidden
        />
      </div>
    </>
  );
}