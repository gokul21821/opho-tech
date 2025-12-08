import Image from "next/image";
import Link from "next/link";
import { fetchContentById, formatDate } from "@/lib/api";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default async function NewsletterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const newsletter = await fetchContentById("newsletters", id);

  if (!newsletter) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-white px-[8%] py-16 md:py-24 ">
        <article className="mx-auto max-w-[1200px] border-1 border-orange-400 p-10 rounded-2xl">
          <div className="mb-6">
            <Link
              href="/newsletters"
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
              <span>Back to Newsletters</span>
            </Link>
          </div>

          <header className="mb-8">
            <h1 className="mb-4 font-poppins text-4xl font-bold text-gray-900">
              {newsletter.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <time className="font-poppins text-sm">
              Last updated {formatDate(newsletter.date)}
              </time>
              <span>•</span>
              <span className="font-poppins text-sm">
                By {newsletter.author.username}
              </span>
            </div>
          </header>

          {newsletter.imageUrl ? (
            <div className="mb-8 overflow-hidden rounded-xl bg-white">
  <div className="relative w-full h-[400px]"> 
    <Image
      src={newsletter.imageUrl}
      alt={`${newsletter.title} image`}
      fill
      className="object-contain"
      sizes="100vw"
      priority
    />
  </div>
</div>


          ) : null}

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: newsletter.description }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}

