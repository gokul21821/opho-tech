import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

type PlaceholderPageProps = {
  params: Promise<{
    "dynamic-placeholder": string;
  }>;
};

export default async function PlaceholderPage({
  params,
}: PlaceholderPageProps) {
  const { "dynamic-placeholder": placeholder } = await params;

  const slug = placeholder
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-orange-500">
          Coming Soon
        </span>
        <h1 className="mt-6 text-4xl font-semibold">{slug}</h1>
        <p className="mt-4 max-w-xl text-base text-gray-600">
          This page is currently under construction. We&apos;re working hard to
          bring you the full OphoTech experience here soon.
        </p>
        <Link
          className="mt-8 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
          href="/"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

