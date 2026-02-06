import Link from "next/link";
import Image from "next/image";
import { ContentCard } from "@/components/content/ContentCard";
import { fetchContentList } from "@/lib/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import BackgroundDots from "@/components/ui/background";
import { CTASection } from "@/components/sections/CTASection";
import { getContentPreview } from "@/lib/content-utils";

export default async function CaseStudiesPage() {
  const caseStudies = await fetchContentList("case-studies", {
    revalidate: 7200, // Cache for 2 hours - case studies update quarterly
  });

  return (
    <>
      <Header />
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
        title="Case Studies"
        contentAlignment="center"
      />
      <BackgroundDots
        className="py-14"
        spacing={25}
        dotSize={3}
        backgroundColor="#FFF6EB"
        dotColor="#D9D9D9"
        style={{
          background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
        }}
      >
        <main className="px-[8%]">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-orange-500 transition-colors hover:text-orange-600"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="size-4"
                >
                  <path
                    d="M13 8H3M3 8L7 12M3 8L7 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>

            {caseStudies.length === 0 ? (
              <div className="py-12 text-center">
                <p className="font-poppins text-lg text-gray-600">
                  Case studies not available, stay tuned
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((item) => (
                  <ContentCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    showSubtitle
                    date={item.date}
                    category={item.category}
                    contentType="case-studies"
                  />
                ))}
              </div>
            )}
          </div>
        </main>
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
      <CTASection variant="ready" />
      <Footer />
    </>
  );
}

