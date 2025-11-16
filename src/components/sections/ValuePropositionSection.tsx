'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ContactModal } from '@/components/forms/ContactModal';

const features = [
  {
    id: 'connect',
    title: 'Connect',
    subtitle: 'Executive Strategy Call',
    description:
      'We work closely with your team to understand your purpose, structure, and growth trajectory. Through in-depth SWOT, gap, and performance analyses, we uncover opportunities and risks that shape the foundation for transformation.',
    icon: '/images/valuesection/connect.svg',
  },
  {
    id: 'create',
    title: 'Create',
    subtitle: 'AI Discovery Workshop',
    description:
      'Using AI-powered tools and agile methodologies, we rapidly prototype and develop your solution. Our iterative approach ensures quick turnaround without compromising quality.',
    icon: '/images/valuesection/create.svg',
  },
  {
    id: 'evolve',
    title: 'Evolve',
    subtitle: 'Build & Deploy',
    description:
      'Launch is just the beginning. We provide ongoing support, monitoring, and enhancements to ensure your solution scales and adapts to changing business needs.',
    icon: '/images/valuesection/evolve.svg',
  },
];

export function ValuePropositionSection() {
  const [activeStep, setActiveStep] = useState('connect');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const activeFeature = features.find((f) => f.id === activeStep) || features[0];

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-[#FEEFDF] px-12 py-16 md:px-[180px] md:py-16">
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

        <div className="mx-auto max-w-[1440px]">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="font-poppins text-[38px] font-medium leading-[48px] text-[#111111]">
              From Ideas to Impact, <span className="text-[#2A73B5]">MVP in 15 Days</span>
            </h2>
            <p className="mx-auto mt-5 w-full max-w-[860px] font-poppins text-lg leading-normal text-[#454545]">
              End-to-End Support: From Discovery to Deployment, Designed for Measurable Impact.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
            <div className="flex flex-col gap-8 lg:flex-[0_0_100%] lg:flex-row">
              {/* Stepper */}
              <div className="relative flex w-full flex-col gap-8 lg:h-full lg:w-auto">
                <div className="absolute -left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#E45412] to-[#FEECD6]" />
                {features.map((feature, index) => (
                  <div key={feature.id} className="relative">
                    {/* Circle - positioned outside button, centered on line */}
                    <div
                      className={`absolute -left-[42px] top-1/2 z-10 -translate-y-1/2 flex size-5 items-center justify-center rounded-full border-[3px] border-white transition-all ${
                        activeStep === feature.id ? 'bg-[#E45412]' : index === 0 ? 'bg-[#E45412] opacity-40' : 'bg-[#FEECD6]'
                      }`}
                    />
                    {/* Button */}
                    <button
                      onClick={() => setActiveStep(feature.id)}
                      className={`relative flex w-full items-center justify-between gap-3 rounded-lg px-5 py-4 text-left transition-all ${
                        activeStep === feature.id
                          ? 'bg-gradient-to-br from-[#F68E41] to-[#BD3E11]'
                          : 'bg-white hover:bg-[#FFF6ED]'
                      }`}
                    >
                      <div className="flex flex-col gap-1">
                        <div
                          className={`font-poppins text-sm font-medium leading-normal ${
                            activeStep === feature.id ? 'text-[#FFF6ED]' : 'text-[#6D6D6D]'
                          }`}
                        >
                          {feature.subtitle}
                        </div>
                        <div
                          className={`font-poppins text-lg font-semibold leading-normal ${
                            activeStep === feature.id ? 'text-white' : 'text-[#2A73B5]'
                          }`}
                        >
                          {feature.title}
                        </div>
                      </div>
                      <div className="flex size-10 items-center justify-center">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={40}
                          height={40}
                          className={`size-10 ${
                            activeStep === feature.id ? 'invert brightness-0' : ''
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Content Card */}
              <div className="flex flex-1 items-stretch rounded-2xl bg-white p-6 lg:h-full">
                <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex flex-col gap-4">
                    <p className="w-full max-w-[500px] font-poppins text-lg leading-normal text-[#4F4F4F]">
                      {activeFeature.description}
                    </p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group flex w-fit items-center gap-1.5 rounded-lg bg-[#FFF6ED] px-3 py-3 transition-all hover:bg-[#FFE8D1]"
                    >
                      <span className="font-poppins text-base leading-none text-[#E45412]">
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
                  <div className="flex items-center justify-center lg:flex-1 lg:justify-end">
                    {!imageLoaded && (
                      <div className="h-[250px] w-[250px] animate-pulse rounded-lg bg-gray-200 lg:h-[300px] lg:w-[300px]" />
                    )}
                    <Image
                      src="/images/valuesection/world.svg"
                      alt="Global connectivity"
                      width={250}
                      height={250}
                      className={`h-auto w-full max-w-[250px] lg:max-w-[300px] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
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
           className="w-full max-w-5xl"
           aria-hidden
         />
       </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}


