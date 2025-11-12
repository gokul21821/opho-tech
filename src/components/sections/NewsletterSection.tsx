import Link from 'next/link';
import { ServiceIcon } from '@/components/icons/ServiceIcon';

const newsletters = [
  { id: 1, edition: 'Edition 003, 2025', title: 'OphoTech Weekly:\nAI x Industry' },
  { id: 2, edition: 'Edition 002, 2025', title: 'OphoTech Weekly:\nAI x Industry' },
  { id: 3, edition: 'Edition 001, 2025', title: 'OphoTech Weekly:\nAI x Industry' },
];

export function NewsletterSection() {
  return (
    <section className="bg-white px-6 py-16 md:px-24 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-3xl font-medium leading-[48px] text-gray-900 md:text-[38px]">
            Industry wise Newsletter
          </h2>
          <p className="mt-4 font-poppins text-base text-gray-700 md:text-lg">
            Stay ahead with insights tailored to your industry
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsletters.map((newsletter) => (
            <Link
              key={newsletter.id}
              href="/placeholder"
              className="group flex flex-col gap-4 rounded-2xl border border-orange-100 bg-white p-5 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex size-11 items-center justify-center overflow-hidden rounded-lg">
                <ServiceIcon name="cloud-integration" className="size-11" />
              </div>
              <h3 className="min-h-[3.5rem] whitespace-pre-line font-poppins text-lg font-medium capitalize leading-normal text-gray-900">
                {newsletter.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="rounded-lg bg-gray-25 px-2.5 py-1.5">
                  <span className="font-poppins text-sm text-gray-900">
                    {newsletter.edition}
                  </span>
                </div>
                <div className="flex size-[42px] items-center justify-center rounded-lg bg-white shadow-[0px_4px_32px_-3px_rgba(0,0,0,0.12)] transition-transform group-hover:scale-110">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-6"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/placeholder"
            className="inline-flex items-center gap-2 font-poppins text-base font-medium text-orange-500 transition-colors hover:text-orange-600"
          >
            See All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
    </section>
  );
}

