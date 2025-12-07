import Link from "next/link";
import { ContentCard } from "@/components/content/ContentCard";
import { fetchContentList } from "@/lib/api";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default async function BlogsPage() {
  const blogs = await fetchContentList("blogs");

  return (
    <>
      <Header />
      <main className="bg-white px-[8%] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] border-1 border-orange-400 p-10 rounded-2xl">
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

          <h1 className="mb-10 text-center font-poppins text-4xl font-semibold text-gray-900">
            All Blogs
          </h1>

          {blogs.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-poppins text-lg text-gray-600">
                Blogs not available, stay tuned
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((item) => (
                <ContentCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  contentType="blogs"
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

