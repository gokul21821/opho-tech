import { ContentSection } from "@/components/content/ContentSection";
import { fetchContentList } from "@/lib/api";
import BackgroundDots from "@/components/ui/background";
import Image from "next/image";

export async function CaseStudiesSection() {
  const caseStudies = await fetchContentList("case-studies", {
    revalidate: 600, // Cache for 10 minutes - case studies update less frequently
  });

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
          items={caseStudies}
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
          className="w-full max-w-6xl"
          aria-hidden
        />
      </div>
    </>
  );
}