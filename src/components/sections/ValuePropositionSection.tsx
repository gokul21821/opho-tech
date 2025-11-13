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

  const activeFeature = features.find((f) => f.id === activeStep) || features[0];

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-[#FEEFDF] px-6 py-16 md:px-[110px] md:py-16">
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

        {/* Top-right illustration */}
        <div className="pointer-events-none absolute right-6 top-8 hidden lg:block">
          <div className="relative size-[110px]">
            <Image
              src="/images/valuesection/messagebox.svg"
              alt=""
              width={110}
              height={110}
              className="size-full"
            />
            <div className="absolute left-[14.61%] top-[8.66%] h-[82.41%] w-[79.28%]">
              <Image
                src="/images/valuesection/robot.png"
                alt="Global connectivity"
                width={85}
                height={85}
                className="size-full object-contain"
              />
            </div>
            <div className="absolute bottom-[13.99%] left-[13.56%] h-[74.18%] w-[72.3%]">
              <Image
                src="/images/valuesection/vector.svg"
                alt=""
                width={82}
                height={82}
                className="size-full"
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-4 top-6 lg:hidden">
          <div className="relative size-[64px]">
            <Image
              src="/images/valuesection/messagebox.svg"
              alt=""
              width={64}
              height={64}
              className="size-full"
            />
            <div className="absolute left-[14.61%] top-[8.66%] h-[82.41%] w-[79.28%]">
              <Image
                src="/images/valuesection/robot.png"
                alt="Global connectivity"
                width={48}
                height={48}
                className="size-full object-contain"
              />
            </div>
            <div className="absolute bottom-[13.99%] left-[13.56%] h-[74.18%] w-[72.3%]">
              <Image
                src="/images/valuesection/vector.svg"
                alt=""
                width={46}
                height={46}
                className="size-full"
              />
            </div>
          </div>
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
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex flex-col gap-8 lg:flex-1 lg:flex-row">
              {/* Stepper */}
              <div className="relative flex w-full flex-col gap-8 lg:w-auto">
                <div className="absolute -left-8 top-0 h-full w-[2px] bg-gradient-to-b from-[#E45412] to-[#FEECD6]" />
                {features.map((feature, index) => (
                  <div key={feature.id} className="relative">
                    {/* Circle - positioned outside button */}
                    <div
                      className={`absolute -left-[34px] top-1/2 -translate-y-1/2 flex size-5 items-center justify-center rounded-full border-[3px] border-white transition-all ${
                        activeStep === feature.id ? 'bg-[#E45412]' : index === 0 ? 'bg-[#E45412] opacity-40' : 'bg-[#FEECD6]'
                      }`}
                    />
                    {/* Button */}
                    <button
                      onClick={() => setActiveStep(feature.id)}
                      className={`relative flex w-full items-center justify-between rounded-lg px-5 py-4 text-left transition-all ${
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
                          className="size-10"
                        />
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Content Card */}
              <div className="flex flex-1 items-center rounded-2xl bg-white p-8">
                <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-col justify-between gap-8">
                    <p className="w-full max-w-[520px] font-poppins text-base leading-normal text-[#4F4F4F]">
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
                    <Image
                      src="/images/valuesection/world.svg"
                      alt="Global connectivity"
                      width={400}
                      height={400}
                      className="h-auto w-full max-w-[400px] lg:max-w-[500px]"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

