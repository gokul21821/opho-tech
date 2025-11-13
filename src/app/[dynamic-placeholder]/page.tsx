import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";

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
      <HeroSection
        title={slug}
        subtitle="This page is currently under construction. We're working hard to bring you the full OphoTech experience here soon."
        contentAlignment="center"
        fullViewport={false}
      >
        <div className="flex flex-col items-center space-y-6">
          <span className="text-sm font-medium uppercase tracking-widest text-orange-500">
            Coming Soon
          </span>
          <Link
            className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </HeroSection>
      <Footer />
    </div>
  );
}

