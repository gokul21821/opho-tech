import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <HeroSection
        title="Page Not Found"
        subtitle="The page you're looking for doesn't exist or has been moved."
        contentAlignment="center"
        fullViewport={false}
      >
        <div className="flex flex-col items-center space-y-6">
          <span className="text-sm font-medium uppercase tracking-widest text-orange-700">
            404 Error
          </span>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-800"
              href="/"
            >
              Back to Home
            </Link>
            <Link
              className="inline-flex items-center rounded-full border-2 border-orange-700 px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
              href="/company/about-us"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </HeroSection>
      <Footer />
    </div>
  );
}
