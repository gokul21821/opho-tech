'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  buildContactModalOpenUrl,
  markContactModalOpenedFromUi,
} from '@/lib/contact-modal';

const features = [
  {
    id: 'connect',
    title: 'Connect',
    subtitle: 'Executive Strategy Call',
    description:
      'Our experts align leadership vision with enterprise realities, diagnosing structural gaps and growth constraints to establish a precise, data-driven foundation for scalable AI-powered transformation.',
    icon: '/images/valuesection/connect.svg',
  },
  {
    id: 'create',
    title: 'Create',
    subtitle: 'AI Discovery Workshop',
    description:
      'Our intelligent workshops uncover profitability gaps, operational risks, and innovation opportunities, generating actionable roadmaps that accelerate organizational readiness and maximize competitive advantage.',
    icon: '/images/valuesection/create.svg',
  },
  {
    id: 'evolve',
    title: 'Evolve',
    subtitle: 'Build & Deploy',
    description:
      'We deploy enterprise-grade SaaS, AI agents, and secure platforms that scale efficiently, strengthen profitability, and transition organizations into resilient, future-ready, AI-enabled enterprises. ',
    icon: '/images/valuesection/evolve.svg',
  },
];

export function ValuePropositionSection() {
  const [activeStep, setActiveStep] = useState('connect');
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const activeFeature = features.find((f) => f.id === activeStep) || features[0];

  const handleOpenContact = () => {
    const searchParams = new URLSearchParams(
      typeof window === 'undefined' ? '' : window.location.search,
    );
    markContactModalOpenedFromUi();
    router.push(buildContactModalOpenUrl(pathname, searchParams));
  };

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-[#FEEFDF] py-12 px-4 sm:py-14 sm:px-6 md:py-16 md:px-[8%]">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white from-[38.524%] to-[#FEECD6] to-[171.52%]" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle,rgb(63, 64, 67) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-8 sm:mb-9 md:mb-10 text-center">
          <h2 className="font-poppins text-4xl font-medium leading-tight text-[#111111] px-2">
            How We Work<br />
            <span className="text-black text-4xl">From Idea To Impact</span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 w-full max-w-[860px] font-poppins text-base leading-normal text-[#454545] px-2">
            End-to-End Support: From Discovery to Deployment, Designed for Measurable Impact.
          </p>
        </div>
{/* Main Content */}
<div className="flex flex-col gap-8 sm:gap-9 md:gap-10 lg:flex-row lg:items-stretch lg:gap-6 ml-10">
  <div className="flex w-full flex-col gap-6 sm:gap-7 md:gap-8 lg:flex-row lg:gap-10">

    {/* Stepper */}
    <div className="relative flex w-full flex-col gap-6 sm:gap-7 md:gap-8 lg:w-[300px] lg:shrink-0">
      <div className="absolute -left-6 sm:-left-7 md:-left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#E45412] to-[#FEECD6]" />

      {features.map((feature, index) => (
        <div key={feature.id} className="relative">
          {/* Circle */}
          <div
            className={`absolute -left-[30px] sm:-left-[34px] md:-left-[42px] top-1/2 z-10 -translate-y-1/2 flex size-4 sm:size-[18px] md:size-5 items-center justify-center rounded-full border-2 sm:border-[2.5px] md:border-[3px] border-white transition-all ${
              activeStep === feature.id
                ? 'bg-[#E45412]'
                : index === 0
                ? 'bg-[#E45412] opacity-40'
                : 'bg-[#FEECD6]'
            }`}
          />

          {/* Button */}
          <button
            onClick={() => setActiveStep(feature.id)}
            className={`relative flex w-full items-center justify-between gap-2 sm:gap-3 rounded-lg px-4 md:px-5 py-3 md:py-4 text-left transition-all ${
              activeStep === feature.id
                ? 'bg-gradient-to-br from-[#F68E41] to-[#BD3E11]'
                : 'bg-white hover:bg-[#FFF6ED]'
            }`}
          >
            <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
              <div
                className={`font-poppins text-xs sm:text-sm font-medium ${
                  activeStep === feature.id ? 'text-[#FFF6ED]' : 'text-[#6D6D6D]'
                }`}
              >
                {feature.subtitle}
              </div>
              <div
                className={`font-poppins text-base sm:text-lg font-semibold ${
                  activeStep === feature.id ? 'text-white' : 'text-[#2A73B5]'
                }`}
              >
                {feature.title}
              </div>
            </div>

            <div className="flex size-8 sm:size-9 md:size-10 items-center justify-center shrink-0">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className={`w-full h-full ${
                  activeStep === feature.id ? 'invert brightness-0' : ''
                }`}
              />
            </div>
          </button>
        </div>
      ))}
    </div>

    {/* Content Card */}
    <div className="flex w-full max-w-[800px] items-stretch rounded-2xl bg-white p-4 sm:p-5 md:p-6 overflow-hidden">
      <div className="flex w-full flex-col gap-6 sm:gap-7 md:gap-8 min-[1152px]:flex-row min-[1152px]:items-start min-[1152px]:gap-10">

        {/* Text Side */}
        <div className="flex flex-col gap-4 w-full md:min-w-[300px] lg:min-w-[350px]">
          <p className="font-poppins text-base sm:text-lg leading-normal text-[#4F4F4F] break-words">
            {activeFeature.description}
          </p>

          <button
            onClick={handleOpenContact}
            className="group flex w-fit items-center gap-1.5 rounded-lg bg-[#FFF6ED] px-3 md:px-4 py-2.5 md:py-3 transition-all hover:bg-[#FFE8D1]"
          >
            <span className="font-poppins text-sm sm:text-base leading-none text-[#E45412]">
              Let&apos;s Connect
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 8H11M11 8L8 5M11 8L8 11"
                stroke="#E45412"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Image Side */}
        <div className="flex items-center justify-center w-full sm:w-auto min-[1152px]:flex-1 min-[1152px]:justify-end md:min-w-[260px]">
          {!imageLoaded && (
            <div className="h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] md:h-[260px] md:w-[260px] animate-pulse rounded-lg bg-gray-200" />
          )}

          <Image
            src="/images/valuesection/world.svg"
            alt="Global connectivity"
            width={340}
            height={340}
            className={`h-auto w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[340px] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2YzZjRmNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

      </div>
    </div>

  </div>
</div>
</div>
      </section>
      <div className=" flex justify-center">
         <Image
           src="/images/horizontalline.svg"
           alt=""
           width={1200}
           height={3}
           className="w-full max-w-6xl"
           aria-hidden
         />
       </div>
    </>
  );
}


