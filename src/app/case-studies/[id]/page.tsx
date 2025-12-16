import Image from "next/image";
import Link from "next/link";
import { fetchContentById, formatDate } from "@/lib/api";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RichTextRenderer } from "@/components/Common/RichTextRenderer";

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

  return (
    <>
      <Header />
      <main className="bg-white px-[8%] py-16 md:py-24 ">
        <article className="mx-auto max-w-[1200px] border-1 border-orange-400 p-10 rounded-2xl">
          <div className="mb-6">
            <Link
              href="/case-studies"
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
              <span>Back to Case Studies</span>
            </Link>
          </div>

          <header className="mb-8">
            <h1 className="mb-4 font-poppins text-4xl font-bold text-gray-900">
              {caseStudy.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <time className="font-poppins text-sm">
                Last updated {formatDate(caseStudy.date)}
              </time>
              <span>•</span>
              <span className="font-poppins text-sm">
                By {caseStudy.author.username}
              </span>
            </div>
          </header>

          {caseStudy.imageUrl ? (
          <div className="mb-8 overflow-hidden rounded-xl bg-white">
  <div className="relative w-full h-[400px]"> 
    <Image
      src={caseStudy.imageUrl}
      alt={`${caseStudy.title} image`}
      fill
      className="object-contain"
      sizes="100vw"
      priority
    />
  </div>
</div>

          ) : null}

          <RichTextRenderer content={caseStudy.description} />
        </article>
      </main>
      <Footer />
    </>
  );
}

