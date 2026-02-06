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
import { HIDE_RESOURCES } from "@/lib/featureFlags";

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
  if (HIDE_RESOURCES) {
    return {
      title: "Not Found",
      robots: { index: false, follow: false },
    };
  }

  const { id } = await params;
  const newsletter = await fetchContentById("newsletters", id);

  if (!newsletter) {
    return {
      title: "Newsletter Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const newsletterUrl = `${baseUrl}/newsletters/${id}`;

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

  const absoluteImageUrl = getAbsoluteImageUrl(newsletter.imageUrl);

  return {
    title: newsletter.title,
    description: getSeoDescription(newsletter.content),
    openGraph: {
      title: newsletter.title,
      description: getSeoDescription(newsletter.content),
      url: newsletterUrl,
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
      title: newsletter.title,
      description: getSeoDescription(newsletter.content),
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default async function NewsletterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (HIDE_RESOURCES) notFound();

  const { id } = await params;
  const newsletter = await fetchContentById("newsletters", id);

  if (!newsletter) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const newsletterUrl = `${baseUrl}/newsletters/${id}`;

  return (
    <>
      <Header />
      <ContentDetailHeroSection
        title={newsletter.title}
        subtitle={newsletter.subtitle}
        date={newsletter.date}
        author={newsletter.author.username}
        edition={newsletter.edition}
        contentType="newsletters"
      />
      <main className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-3 xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Main Content - 70% */}
            <article className="flex-1 lg:w-[70%]">
              <ContentRenderer content={newsletter.content} />
            </article>

            {/* Sidebar - 30% */}
            <aside className="lg:w-[30%]">
              <SocialShareCard
                title={newsletter.title}
                url={newsletterUrl}
                contentType="newsletters"
              />
              <RecentContentCard contentType="newsletters" currentId={id} />
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
          className="w-full max-w-6xl"
          aria-hidden
        />
      </div>
      <CTASection variant="ready" />
      <Footer />
    </>
  );
}

