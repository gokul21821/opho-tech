import Image from "next/image";
import Link from "next/link";

import { CTAArrowIcon } from "@/components/ui/Button";

export function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F5] to-[#FFFDFB] px-6 py-16 before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle,_rgba(243,113,33,0.12)_1.7px,transparent_1px)] before:bg-repeat before:opacity-80 before:[background-size:20px_20px] before:content-[''] md:px-24 md:py-24">
      <div className="relative z-[1] mx-auto max-w-7xl text-center">
        {/* Title + Subtitle */}
        <h2 className="font-poppins text-3xl font-semibold text-gray-900 md:text-[40px]">
          Our Case Studies
        </h2>
        <p className="mt-3 text-base text-gray-600 md:text-lg">
          Explore sector-specific solutions shaped by research, technology
          enablement, and proven strategies.
        </p>

        {/* Card */}
        <div className="mt-14 flex justify-center">
          <div className="group relative w-full max-w-sm rounded-3xl border border-orange-300 bg-transparent p-8 text-left shadow-sm transition-all duration-300 hover:shadow-md">
            {/* Icon */}
            <Image
              src="/images/casestudies/case.svg"
              alt="Case Study Icon"
              width={48}
              height={48}
              className="mb-5"
            />

            {/* Title */}
            <h3 className="font-poppins text-lg font-semibold text-gray-900 leading-snug mb-3">
              Bridging The Digital Gap In Manufacturing: How AI-Led RAR Cut IT
              Decision Time...
            </h3>

            {/* Category */}
            <div className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              IT & Allied Services
            </div>

            {/* Arrow Button */}
            <Link
              href="#"
              className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:translate-x-1"
            >
              <Image
                src="/images/servicessection/arrow.svg"
                alt="Arrow Icon"
                width={20}
                height={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45"
              />
            </Link>
          </div>
        </div>

        {/* See All */}
        <div className="mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-poppins text-base font-medium text-orange-500 transition-all duration-200 hover:text-orange-600"
          >
            See All
            <CTAArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
