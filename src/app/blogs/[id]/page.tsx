import Image from "next/image";
import { fetchContentById } from "@/lib/api";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RichTextRenderer } from "@/components/Common/RichTextRenderer";
import { ContentDetailHeroSection } from "@/components/ui/ContentDetailHeroSection";
import { SocialShareCard } from "@/components/ui/SocialShareCard";
import { RecentContentCard } from "@/components/ui/RecentContentCard";
import { PageCTASection } from "@/components/ui/PageCTASection";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await fetchContentById("blogs", id);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const blogUrl = `${baseUrl}/blogs/${id}`;

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

  const absoluteImageUrl = getAbsoluteImageUrl(blog.imageUrl);

  return {
    title: blog.title,
    description: blog.description?.substring(0, 160),
    openGraph: {
      title: blog.title,
      description: blog.description?.substring(0, 160),
      url: blogUrl,
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
      title: blog.title,
      description: blog.description?.substring(0, 160),
      images: absoluteImageUrl ? [absoluteImageUrl] : [],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await fetchContentById("blogs", id);

  if (!blog) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const blogUrl = `${baseUrl}/blogs/${id}`;

  return (
    <>
      <Header />
      <ContentDetailHeroSection
        title={blog.title}
        date={blog.date}
        author={blog.author.username}
        contentType="blogs"
      />
      <main className="bg-white px-[8%] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Main Content - 70% */}
            <article className="flex-1 lg:w-[70%]">
              {blog.imageUrl ? (
                <div className="mb-8 overflow-hidden rounded-xl bg-white">
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={blog.imageUrl}
                      alt={`${blog.title} image`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      priority
                    />
                  </div>
                </div>
              ) : null}

              <RichTextRenderer content={blog.description} />
            </article>

            {/* Sidebar - 30% */}
            <aside className="lg:w-[30%]">
              <SocialShareCard
                title={blog.title}
                url={blogUrl}
                contentType="blogs"
              />
              <RecentContentCard contentType="blogs" currentId={id} />
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
      <PageCTASection />
      <Footer />
    </>
  );
}

