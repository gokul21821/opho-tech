"use client";

// app/privacy-policy/page.tsx
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { ContactModal } from "@/components/forms/ContactModal";
import { PrimaryButton } from "@/components/ui/Button";

export default function PrivacyPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B1B2B]">
      {/* Hero background behind header */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[280px] md:h-[320px] bg-[radial-gradient(1200px_600px_at_50%_-200px,#0F2C58_40%,#071A38_70%,#071A38_100%)]" />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
          title="Privacy Policy"
          subtitle="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
          contentAlignment="center"
        >
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
            <Image
              src="/images/icons/calendar.svg"
              alt="Calendar"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Last Revised July 22, 2025</span>
          </div>
        </HeroSection>

        {/* Content body */}
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="space-y-10">
            {/* Intro paragraph */}
            <div>
              <p className="text-[16px] leading-normal text-[#454545]">
                Opho Tech ("Opho Tech", "we", or "us") values your privacy and is fully compliant with applicable privacy regulations including GDPR, CCPA, VCDPA, and other similar data protection laws. All data shared with Opho Tech through our API endpoints and online services is securely processed in accordance with ISO 27001 and SOC 2 Type II standards. For further details, please refer to our Data Processing Agreement.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Opho Tech Privacy Policy Overview */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Opho Tech Privacy Policy Overview
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                This Privacy Policy outlines the privacy measures and practices of Opho Tech Inc. (referred to as "Opho Tech", "we", or "us") in relation to our website (the "Website"), and any features, products, and online services ("services") provided by Opho Tech. We value the privacy of our visitors and users. This Policy explains the types of data and information we collect, and how we safeguard that data.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Our Services That Process Data */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Our Services That Process Data
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                Opho Tech's primary service is centered on fraud detection and prevention. We may use data relating to you to analyze transactions, registrations, clicks, and other user behaviors to determine if the intent is malicious or fraudulent. Our machine learning algorithms and data processing mechanisms are built with privacy and data protection in mind, helping prevent data leakage and protect your privacy rights.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Web Server Log Files */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Web Server Log Files
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                Like most websites, Opho Tech uses log files through our web server. The data collected may include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring and exit pages, and click data, to analyze trends, administer the website, track user movement, and gather demographic information. These data points are not personally identifiable on their own.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Scripts, Cookies, and Web Beacons */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Scripts, Cookies, and Web Beacons
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                Opho Tech may use cookies, pixel tags, embedded scripts, web beacons, and similar technologies to store visitor preferences, record user behavior and actions, and customize services based on the visitor's browser type or other information provided. Users with "Do Not Track" enabled will have their request respected with limited data tracking.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Information & Data Collection */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Information & Data Collection
              </h2>

              <div className="mt-5 space-y-3">
                <div>
                  <h3 className="text-[24px] font-medium leading-[26px] text-[#111111] capitalize">
                    Personal Information:
                  </h3>
                  <p className="mt-3 text-[16px] leading-normal text-[#454545]">
                    This is information that identifies you as an individual or relates to an identifiable individual, such as your name, unique identifier (such as account ID), email address, physical address, telephone number, credit card information, geolocation, and IP address. If you submit any Personal Information relating to others, you represent that you have the authority to do so and to allow us to use that information in accordance with this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-[24px] font-medium leading-[26px] text-[#111111] capitalize">
                    Non-Personal Information:
                  </h3>
                  <p className="mt-3 text-[16px] leading-normal text-[#454545]">
                    Any information that does not directly reveal your specific identity or does not relate to an identifiable individual. This may include pseudonymous identifiers, device information, non-precise geolocation, and information collected through cookies and tracking technologies.
                  </p>
                  <p className="mt-3 text-[16px] leading-normal text-[#454545]">
                    Important: Opho Tech does not collect more information than is necessary to provide accurate fraud detection and prevention services.
                  </p>
                </div>
              </div>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Data Sharing & Data Processing */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Data Sharing & Data Processing
              </h2>
              <div className="mt-5 space-y-3 text-[16px] leading-normal text-[#454545]">
                <p>
                  Clients using our services may provide Opho Tech with transactional information, which can include IP addresses, email addresses, billing details, phone numbers, and similar user data. This information is securely processed to detect behavioral intent and analyze the risk profile of transactions and users. The data is used to identify fraud patterns and improve your account's machine learning algorithms.
                </p>
                <p>
                  Data Protection Commitment: Opho Tech does not sell your personal data or the personal data of your end users. Any data shared with Opho Tech will be confidential, securely processed, and maintained in line with industry security standards.
                </p>
                <p>
                  Your account's contact details may be shared with CRMs and marketing platforms that meet our standards for adequate security techniques and data processing safeguards.
                </p>
                <p>
                  As required, Opho Tech may share necessary data with third parties for the purpose of investigating false-positive reports, unblocking or registering an IP address, or improving service accuracy. This may involve sharing certain data through feedback forms or related features.
                </p>
              </div>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Data Processing Agreement */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Data Processing Agreement
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                Please refer to our full Data Processing Agreement for further details on how Opho Tech handles personal data, in accordance with applicable privacy laws including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Data Security */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Data Security
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                Opho Tech takes reasonable and appropriate measures to protect all data collected from unauthorized access, breaches, loss, manipulation, falsification, destruction, or unauthorized disclosure.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Your Privacy Rights & Access to Information */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Your Privacy Rights & Access to Information
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                You have the right to request access to any personal information we may have collected about you. Opho Tech can provide a copy of your stored personal data upon request. To fulfill your request, we may ask you to verify your identity. Please contact us at{" "}
                <a
                  href="mailto:info@ophotech.com"
                  className="underline decoration-solid hover:text-[#333]"
                >
                  info@ophotech.com
                </a>{" "}
                to submit a personal information request.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Information Correction & Deletion */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Information Correction & Deletion
              </h2>
              <p className="mt-5 text-[16px] leading-normal text-[#454545]">
                If you believe the information we have about you is incorrect, please contact us so we can update it and keep your data accurate. You also have the right to request deletion of your information. In order to comply, we may require you to verify your identity. Please contact{" "}
                <a
                  href="mailto:info@ophotech.com"
                  className="underline decoration-solid hover:text-[#333]"
                >
                  info@ophotech.com
                </a>{" "}
                to request information deletion.
              </p>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* SMS Terms and Conditions */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                SMS Terms and Conditions
              </h2>
              <div className="mt-5 space-y-3 text-[16px] leading-normal text-[#454545]">
                <p>
                  Upon messaging opt-in, the end user agrees to receive messages from Opho Tech regarding account alerts, communications, marketing, and similar notifications. End users can opt-out by replying STOP or request more information by replying HELP. Message frequency varies. Message and data rates may apply. For assistance or questions about our SMS service, reply HELP to any message or contact our customer support team at{" "}
                  <a
                    href="tel:18885796686"
                    className="underline decoration-solid hover:text-[#333]"
                  >
                    +18885796686
                  </a>
                  .
                </p>
                <p>
                  Mobile Privacy: Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes unrelated to Opho Tech.
                </p>
              </div>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* CCPA Opt-Out */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                CCPA Opt-Out — "Do Not Sell Or Share My Personal Information"
              </h2>
              <div className="mt-5 space-y-3 text-[16px] leading-normal text-[#454545]">
                <p>
                  Privacy laws such as the California Consumer Privacy Act (CCPA) and the Virginia Consumer Data Privacy Act (VCDPA) afford residents of certain jurisdictions the right to opt out of the sale or sharing of personal information, including transfers to third parties for advertising or profiling purposes.
                </p>
                <p>
                  To comply with your "do not share" request, we may require you to verify your identity. Please contact{" "}
                  <a
                    href="mailto:info@ophotech.com"
                    className="underline decoration-solid hover:text-[#333]"
                  >
                    info@ophotech.com
                  </a>{" "}
                  to submit your request or use our support form.
                </p>
              </div>
            </div>

            {/* Separator line */}
            <div className="h-px w-full bg-[#B0B0B0]" />

            {/* Data Compliance Officer */}
            <div>
              <h2 className="text-[28px] font-medium leading-[38px] text-black">
                Data Compliance Officer
              </h2>
              <div className="mt-5 text-[16px] leading-normal text-[#454545]">
                <p>If you have questions related to privacy or would like to contact our Data Compliance Officer, please use the contact information below:</p>
                <p className="mt-3">ATTN: Data Compliance Officer</p>
                <p>Opho Tech Inc.</p>
                <p>2302 – 228 Queens Quay W Downtown, Toronto M5J2X1 Canada</p>
                <p className="mt-4 font-medium text-[#111111]">
                  Email:{" "}
                  <a
                    href="mailto:info@ophotech.com"
                    className="text-[#e45412] underline decoration-solid hover:text-[#d14a0f]"
                  >
                    info@ophotech.com
                  </a>
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="rounded-2xl  bg-white p-8 text-center">
              <h2 className="text-4xl font-medium text-[#0B1B2B]">
                Ready to Solve
                <br />
                What&apos;s Next With OphoTech?
              </h2>
              <PrimaryButton className="mt-6" onClick={() => setIsModalOpen(true)}>
                Get Started
              </PrimaryButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
