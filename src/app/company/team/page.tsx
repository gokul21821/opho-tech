"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";
import BackgroundDots from "@/components/ui/background";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";
import { Fragment, useState } from "react";

const bhavneetImage = "/images/aboutus/walia.png";
const shivenderImage = "/images/aboutus/sofat.png";
const rajveerImage = "/images/aboutus/Singh.png";
const vijayImage = "/images/aboutus/varadi.png";
const dividerLine = "/images/raar/lineraar.svg";

const teamMembers = [
  { name: "Mr. Bhavneet Walia", title: "Founder", image: bhavneetImage },
  { name: "Mr. Shivender Sofat", title: "Advisory Board Member", image: shivenderImage },
  { name: "Mr. Rajveer Singh", title: "Advisory Board Member", image: rajveerImage },
  { name: "Dr. Vijay Varadi, PhD", title: "Director", image: vijayImage },
];

const leaderProfiles = [
  {
    name: "Mr. Bhavneet Walia",
    title: "Founder",
    description: [
      "Mr. Bhavneet Walia is the Founder & Chief Executive Officer of OphoTech with a distinguished track record in enterprise AI leadership and strategic innovation management. Based in Toronto with global partnerships across North America, Europe, and the APAC region, he is exceptionally skillful in aligning research initiatives with commercial productization while maintaining rigorous compliance and governance standards. His leadership extends beyond corporate boundaries through his role as Chair of the World Association of Supercomputing, where he drives global high-performance computing collaboration, and his position as Trustee with Little Big Things, focusing on social impact and community development programs. ",
    ],
    image: bhavneetImage,
    reverse: false,
    theme: "white",
  },
  {
    name: "Mr. Shivender Sofat",
    title: "Advisory Board Member",
    description: [
      "Mr. Shivender Sofat is a distinguished cross-border finance and assurance leader who enables organizational growth through strong controls, transparency, and regulatory compliance. He holds the prestigious triple certification of Chartered Accountant (India), Certified Public Accountant (USA), and Certified Fraud Examiner, positioning him as a globally recognized expert in international finance and risk management. His professional affiliations include active membership in the AICPA, NYSSCPA, ACFE, and ICAI, where he contributes to anti-money laundering and combating the Financing of Terrorism initiatives, as well as IRS-related committees. ",
    ],
    image: shivenderImage,
    reverse: true,
    theme: "peach",
  },
  {
    name: "Mr. Rajveer Singh",
    title: "Advisory Board Member",
    description: [
      "Mr. Rajveer Singh brings exceptional public-sector leadership with extensive expertise in audit, policy design, infrastructure finance, and multilateral standards. As a member of the Indian Civil Service (1991 batch), he has served as Special Secretary to the Government of India. He has also held senior leadership positions with the Comptroller and Auditor General of India, Accountant General Audit Delhi, Northern Railway, and New Delhi Municipal Council. His academic foundation includes degrees in Agriculture, Agricultural Economics, and Law, providing him with a comprehensive understanding of policy frameworks across multiple sectors. ",
      "At OphoTech, Mr. Rajveer anchors governance and public-sector assurance across technology-policy engagements. His role focuses on ensuring compliance with regulatory frameworks while maximizing impact through strategic policy alignment and multilateral engagement standards. ",
    ],
    image: rajveerImage,
    reverse: false,
    theme: "white",
  },
  {
    name: "Dr. Vijay Varadi, PhD",
    title: "Director",
    description: [
      "Dr. Vijay brings a unique interdisciplinary expertise that combines advanced data science methodologies with rigorous economic principles to drive enterprise transformation. With a Ph.D. in Economics and post-doctoral fellowship credentials, complemented by executive certification in Leadership with AI from the Indian School of Business, Dr. Vijay has established himself as a leading practitioner in machine learning, econometric modeling, and decision science. He is also a professor at Golden Gate University, where he bridges theoretical knowledge with practical applications, while maintaining active engagement with leading economic research institutions across policy and program development initiatives. ",
    ],
    image: vijayImage,
    reverse: true,
    theme: "peach",
  },
];

const baseDotsProps = {
  className: "py-16 px-6 md:px-[110px]",
  spacing: 36,
  dotSize: 2.5,
  dotColor: "#D9D9D9",
};

const gradientBackground = {
  ...baseDotsProps,
  style: {
    background: "rgba(254, 236, 214, 0.33)",
  },
};

const whiteBackground = {
  ...baseDotsProps,
  style: {
    backgroundColor: "#ffffff",
  },
};

export default function Team() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Team" },
        ]}
        title="Leadership Team"
        subtitle="Leading with empathy, transparency, and a relentless focus on outcomes that drive real growth."
        contentAlignment="center"
      />

      <main className="bg-white text-gray-800">
      <BackgroundDots {...gradientBackground}>
  <section className="mx-auto flex max-w-[1220px] flex-col gap-10">
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">

      {teamMembers.map((member, index) => (
        <Fragment key={member.name}>
          <div className="flex w-full flex-1 flex-col items-center">
            
            {/* --- ORANGE CARD WITH ONLY IMAGE --- */}
            <div className="w-full max-w-[220px] rounded-2xl border border-[#FCD5AC] bg-[#FFF6ED] p-4 shadow-[0px_12px_30px_rgba(228,84,18,0.08)]">
              <div className="relative mx-auto size-[170px]">
                <Image
                  src={member.image}
                  alt={`${member.name} portrait`}
                  fill
                  sizes="300px"
                  className="rounded-xl object-contain" 
                  /* object-contain → ensures image fits fully, no cropping */
                />
              </div>
            </div>

            {/* --- NAME & TITLE OUTSIDE CARD --- */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900 text-center">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-orange-500 text-center">
              {member.title}
            </p>
          </div>

          {/* --- DIVIDER LINE (HEIGHT INCREASED) --- */}
          {index < teamMembers.length - 1 && (
            <div className="hidden items-center justify-center lg:flex">
              <Image
                src={dividerLine}
                alt="Divider"
                width={2}
                height={420}        // ⬆ increased height
                className="h-[250px] w-15px"
              />
            </div>
          )}
        </Fragment>
      ))}

    </div>
  </section>
</BackgroundDots>


        {leaderProfiles.map((profile) => {
          const backgroundProps = profile.theme === "peach" ? gradientBackground : whiteBackground;

          return (
            <BackgroundDots key={profile.name} {...backgroundProps}>
              <section
                className={`mx-auto flex w-full max-w-[1400px] flex-col gap-6 lg:items-center ${
                  profile.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className={`flex-1 space-y-3 ${profile.reverse ? 'lg:pr-0' : 'lg:pl-12'}`}>
                  <h3 className="text-[28px] font-semibold text-gray-900">{profile.name}</h3>
                  <p className="text-2xl font-medium text-orange-500">{profile.title}</p>
                  <div className="space-y-4 text-base leading-relaxed text-gray-600">
                    {profile.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div
                  className={`flex flex-1 flex-col items-center gap-6 lg:flex-row ${
                    profile.reverse ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div className={`hidden lg:block ${profile.reverse ? "lg:order-2" : "lg:order-1"}`}>
                    <Image src={dividerLine} alt="Divider" width={2} height={348} className="h-[400px] w-15px" />
                  </div>
                  <div
                    className={`rounded-2xl border border-[#FCD5AC] bg-[#FFF6ED] p-4 shadow-[0px_12px_30px_rgba(228,84,18,0.08)] ${
                      profile.reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative h-[300px] w-[260px]">
                      <Image
                        src={profile.image}
                        alt={`${profile.name} portrait`}
                        fill
                        sizes="260px"
                        className="rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </BackgroundDots>
          );
        })}

        <div className="px-6 pb-16">
          <div className="flex justify-center">
            <Image
              src="/images/horizontalline.svg"
              alt=""
              width={1200}
              height={3}
              className="w-full max-w-5xl"
              aria-hidden
            />
          </div>
        </div>

          <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <h2 className="text-4xl font-semibold text-gray-900">
              Ready to Solve
              <br />
              What&apos;s Next With OphoTech?
            </h2>
            <PrimaryButton
              className="mb-10"
              onClick={() => setIsModalOpen(true)}
            >
              Let’s Start
            </PrimaryButton>
          </section>
  

      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
