import Link from 'next/link';
import Image from 'next/image';
import { ServiceIcon } from '@/components/icons/ServiceIcon';

const newsletters = [
  { id: 1, edition: 'Edition 003, 2025', title: 'OphoTech Weekly:\nAI x Industry' },
  { id: 2, edition: 'Edition 002, 2025', title: 'OphoTech Weekly:\nAI x Industry' },
  { id: 3, edition: 'Edition 001, 2025', title: 'OphoTech Weekly:\nAI x Industry' },
];

const industries = [
  { id: 1, name: 'Manufacturing & Retail', href: '/placeholder', active: false },
  { id: 2, name: 'BFSI', href: '/placeholder', active: false },
  { id: 3, name: 'IT & Allied Services', href: '/it-allied-services', active: true },
  { id: 4, name: 'Fashion', href: '/placeholder', active: false },
  { id: 5, name: 'Healthcare', href: '/placeholder', active: false },
  { id: 6, name: 'Government Agencies', href: '/placeholder', active: false },
];

export function NewsletterSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-[110px] md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center md:mb-[40px]">
          <h2 className="font-poppins text-3xl font-medium leading-[48px] text-gray-900 md:text-[38px]">
            Industry wise Newsletter
          </h2>
          <p className="mt-4 font-poppins text-base leading-normal text-gray-700 md:text-lg">
            From Research to Reality — Insights That Power Smarter Decisions.
          </p>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Sidebar - Industries */}
          <div className="flex w-full flex-col gap-8 lg:w-[207px]">
            <div className="flex flex-col gap-8">
              <h3 className="font-poppins text-2xl font-medium leading-[38px] text-gray-900 md:text-[28px]">
                Industries
              </h3>
              <nav className="flex flex-col gap-1.5">
                {industries.map((industry) => (
                  <Link
                    key={industry.id}
                    href={industry.href}
                    className={`flex items-center justify-start gap-2 rounded-lg px-0 py-1.5 transition-colors ${
                      industry.active
                        ? 'text-orange-500'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="whitespace-nowrap font-poppins text-base leading-normal">
                      {industry.name}
                    </span>
                    {industry.active && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="size-4"
                      >
                        <path
                          d="M3 13L13 3M13 3H3M13 3V13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Vertical Line Separator */}
          <div className="hidden flex-shrink-0 lg:block">
            <Image
              src="/images/newsletter/line.svg"
              alt=""
              width={2}
              height={300}
              className="h-auto w-0.5"
              aria-hidden="true"
            />
          </div>

          {/* Newsletter Cards */}
          <div className="flex w-full flex-col gap-6 lg:w-auto lg:gap-6">
            {/* Cards Row */}
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-[29px]">
              {newsletters.map((newsletter) => (
                <Link
                  key={newsletter.id}
                  href="/placeholder"
                  className="group relative flex w-full flex-col gap-4 overflow-visible rounded-2xl border border-orange-100 bg-white hover:bg-orange-25 p-5 transition-shadow duration-300 hover:shadow-lg sm:w-[296px]"
                >
                  <div className="flex size-11 items-center justify-center overflow-hidden">
                    <ServiceIcon name="cloud-integration" className="size-11" />
                  </div>
                  <h3 className="min-h-[3.5rem] whitespace-pre-line font-poppins text-lg font-medium capitalize leading-normal text-gray-900">
                    {newsletter.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-gray-25 px-2.5 py-1.5">
                      <span className="whitespace-nowrap font-poppins text-sm leading-normal text-gray-900">
                        {newsletter.edition}
                      </span>
                    </div>
                  </div>

                  {/* arrow button */}
                  <button
                    aria-hidden="true"
                    className="
                      absolute bottom-8 right-8 z-[4]
                      translate-x-1/2 translate-y-1/2
                      flex h-[48px] w-[48px] items-center justify-center
                      rounded-full bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]
                      transition-transform duration-300
                    "
                  >
                    <Image
                      alt=""
                      src="/images/servicessection/arrow.svg"
                      width={15}
                      height={15}
                      className="
                        transition-transform duration-300
                        group-hover:rotate-45
                      "
                    />
                  </button>
                </Link>
              ))}
            </div>

            {/* See All Button */}
            <div className="flex justify-center">
              <Link
                href="/placeholder"
                className="inline-flex items-center gap-1.5 rounded-lg bg-orange-25 px-3 py-3 font-poppins text-base font-normal leading-normal text-orange-500 transition-colors hover:bg-orange-50"
              >
                <span>See All</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="size-4"
                >
                  <path
                    d="M3 13L13 3M13 3H3M13 3V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

