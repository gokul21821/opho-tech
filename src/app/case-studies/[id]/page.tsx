import Image from "next/image";
import { fetchContentById } from "@/lib/api";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContentRenderer } from "@/components/Common/ContentRenderer";
import { ContentDetailHeroSection } from "@/components/ui/ContentDetailHeroSection";
import { SocialShareCard } from "@/components/ui/SocialShareCard";
import { RecentContentCard } from "@/components/ui/RecentContentCard";
import { CTASection } from "@/components/sections/CTASection";
import { Metadata } from "next";
import type { TiptapDoc } from "@/lib/types";

function getSeoDescription(content: TiptapDoc | null | undefined, maxLength = 160) {
  if (!content) return undefined;

  let text = "";
  const stack: any[] = [content];
  while (stack.length > 0 && text.length < maxLength) {
    const node = stack.pop();
    if (!node) continue;
    if (node.type === "text" && typeof node.text === "string") {
      text += node.text;
    }
    if (Array.isArray(node.content)) {
      for (let i = node.content.length - 1; i >= 0; i--) stack.push(node.content[i]);
    }
  }
  return text.replace(/\s+/g, " ").trim().substring(0, maxLength);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = await fetchContentById("case-studies", id);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const caseStudyUrl = `${baseUrl}/case-studies/${id}`;

  // Ensure image URL is absolute for Open Graph
  const getAbsoluteImageUrl = (imageUrl: string | null | undefined): string | null => {
    if (!imageUrl) return null;
    // If already absolute, return as is
    if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      return imageUrl;
    }
    // If relative, prepend base URL
    return `${baseUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
  };

  const absoluteImageUrl = getAbsoluteImageUrl(caseStudy.imageUrl);

  return {
    title: caseStudy.title,
    description: getSeoDescription(caseStudy.content),
    openGraph: {
      title: caseStudy.title,
      description: getSeoDescription(caseStudy.content),
      url: caseStudyUrl,
      type: "article",
      images: absoluteImageUrl
        ? [
            {
              url: absoluteImageUrl,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: getSeoDescription(caseStudy.content),
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const caseStudy = await fetchContentById("case-studies", id);

  if (!caseStudy) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const caseStudyUrl = `${baseUrl}/case-studies/${id}`;

  return (
    <>
      <Header />
      <ContentDetailHeroSection
        title={caseStudy.title}
        date={caseStudy.date}
        author={caseStudy.author.username}
        contentType="case-studies"
      />
      <main className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Main Content - 70% */}
            <article className="flex-1 lg:w-[70%]">
              <ContentRenderer content={caseStudy.content} />
            </article>

            {/* Sidebar - 30% */}
            <aside className="lg:w-[30%]">
              <SocialShareCard
                title={caseStudy.title}
                url={caseStudyUrl}
                contentType="case-studies"
              />
              <RecentContentCard contentType="case-studies" currentId={id} />
            </aside>
          </div>
        </div>
      </main>
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
      <CTASection variant="ready" />
      <Footer />
    </>
  );
}

