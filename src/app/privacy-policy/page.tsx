// app/privacy-policy/page.tsx
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";

export default function PrivacyPolicy() {
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
            <div className="text-[15px] leading-relaxed text-[#3A4A5F]">
              <p>
                At Opho Tech, we are committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your personal information, including name, GDPR, CCPA, and other global data protection laws. All data shared with Opho Tech through our API endpoints and client services, built with ISO 27001 and SOC 2 Type II standards, for further information on data processing, kindly refer to our Data Processing Agreement in accordance with ISO 27001 and SOC 2 Type II standards.
              </p>
            </div>

            {/* Opho Tech Privacy Policy Overview */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Opho Tech Privacy Policy Overview
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                This Privacy Policy explains what data is processed, how it&apos;s processed, and for what purposes ("Delivered to us, "Opho Tech", "we", or "us"). It applies to our website (the "Website"), any API(s) provided by us ("APIs"), our software-as-a-service ("SaaS") offering (the "Service"), and our clients. We outline the purpose of our visitors and users. This Policy explains the types of data and information we collect, and how we safeguard that data.
              </p>
            </div>

            {/* Our Services That Process Data */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Our Services That Process Data
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Opho Tech&apos;s primary service is centered on fraud detection and prevention. We may also assist relating to you to analyze transactions, registrations, clicks, and other user behaviors to determine if the event is fraudulent or fraudulent. Our security scanning algorithms detect several forms of financial transactions or fraud attempts before they impact the business. Our anti-fraud technology uses Machine Learning algorithms to analyze and predict fraudulent movement and gather demographic information. These data points are not personally identifiable on their own.
              </p>
            </div>

            {/* Web Server Log Files */}
            <div>
              <h3 className="text-xl font-semibold text-[#0B1B2B]">Web Server Log Files</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                We collect server logs are files stored through our web server. The data collected may include Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring and exit pages, which could be used to detect frauds, clicks, or other information to analyze trends, administer the site, track user browsing patterns to detect anomalies, track Web bot, robot, spider or crawler movement, and gather demographic information. These data points are not personally identifiable on their own.
              </p>
            </div>

            {/* Scripts, Cookies, and Web Beacons */}
            <div>
              <h3 className="text-xl font-semibold text-[#0B1B2B]">
                Scripts, Cookies, and Web Beacons
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Opho Tech may use cookies, pixel tags, embedded scripts, web beacons, and similar technologies to store visitor preferences, record user behavior and actions, and customize your experience with our offerings. We also use cookies to determine if the event is fraudulent or if other information provided does not match with other "trusted" and likely fraudulent activity that is encountered.
              </p>
            </div>

            {/* Information & Data Collection */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Information & Data Collection
              </h2>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#0F2C58]">
                    • Personal Information:
                  </h4>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#3A4A5F]">
                    This is information that identifies you as an individual or relates to an identifiable individual, such as your name, unique identifier (such as an account ID), email address, phone number, billing address, government identification (such as your Social Security Number or passport number), location, IP address, email address, or any other information related to an identifiable individual.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold text-[#0F2C58]">
                    • Non-Personal Information:
                  </h4>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#3A4A5F]">
                    This information does not identify you as a person or entity. A specific identity or direct method to an identifiable individual. This may include pseudonymized identifiers, device information, browser type, operating system, user geolocation, and information collected through cookies and tracking technologies. Importantly, Opho Tech does not use Personal Information to train its models or for any third party AI systems or machine learning services other than as necessary to deliver our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing & Data Processing */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Data Sharing & Data Processing
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Clients using our services may provide Opho Tech with transactional information, which can include IP addresses, email addresses, billing details, phone numbers, and other user interaction events. Opho Tech only uses this data to deliver the Service and perform fraud detection. Our AI and Machine Learning models analyze these indicators and transaction patterns within the scope of our client&apos;s contractual agreement. Opho Tech does not sell or license personal data-based Data Protection Commitments. Opho Tech does not sell your personal data or personal data of your end users. Any data shared with Opho Tech will not be sold or disclosed under any circumstances other than required by law. For examples of how we secure personal data: please see our DPA for industry security standards and data integrity procedures to ensure data security and compliance.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                All data is protected and encrypted both in transit and at rest. Access to personal data is on a strict need-to-know basis in accordance with the principle of least privilege. In addition, Opho Tech may share deidentified data with third parties for the purpose of researching how machine learning modeling reporting, or registering an AI address, or improving service security. This may involve sharing certain data through feedback forms or related features.
              </p>
            </div>

            {/* Data Processing Agreement */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Data Processing Agreement
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Please refer to our full Data Processing Agreement for further details on how Opho Tech handles personal data in accordance with applicable privacy laws (including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)).
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">Data Security</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Opho Tech takes reasonable and appropriate measures to protect all data collected from unauthorized access, breaches, loss, manipulation, falsification, destruction, or unauthorized disclosure.
              </p>
            </div>

            {/* Your Privacy Rights & Access to Information */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Your Privacy Rights & Access to Information
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Depending on your location, local laws may provide you with the option to access or your personal information we may have collected about you. Opho Tech can provide a copy of your stored personal data upon request. However, please note that California Consumer Privacy Act (CCPA) or General Data Protection Regulation (GDPR) requests may only be fulfilled once we verify and validate to submit all personal data erasure requests.
              </p>
            </div>

            {/* Information Correction & Deletion */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Information Correction & Deletion
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                If you believe any personal information Opho Tech stores about you is not current or outdated, or if you would like to delete correct us or opt-out, update it, or keep your data accurate. You also have the right to withdraw your consent at any time. If you wish to request updates or delete inaccurate information, please contact info@ophotech.com to request information deletion.
              </p>
            </div>

            {/* SMS Terms and Conditions */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                SMS Terms and Conditions
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Upon messaging opt-in, the end user agrees to receive messages from Opho Tech regarding account alerts, communications, marketing and similar notifications. End users may receive transactional notifications or request more information through SMS or push to help facilitate their inquiry. All SMS data rates and charges apply. Users may opt-out at any time by texting "STOP" or adjusting settings in their user profile for our customer support. Mobile Privacy - Mobile Information we will be shared with third parties or affiliates for marketing or promotional purposes unrelated to Opho Tech.
              </p>
            </div>

            {/* CCPA Opt-Out */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                CCPA Opt-Out — "Do Not Sell Or Share My Personal Information"
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Opho Tech is subject to the California Consumer Privacy Act (CCPA) and the Virginia Consumer Data Privacy Act (VCDPA) which affords residents of certain jurisdictions the right to opt out of the sale or sharing of personal information, including transfers to third parties for advertising or profiling purposes. To comply with your right, we may require you to verify your identity by contacting support.dataprivacy.com to submit your Do Not Sell request.
              </p>
            </div>

            {/* Data Compliance Officer */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Data Compliance Officer
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                If you have questions related to privacy or would like to contact our Data Compliance Officer, please use the contact information below:
              </p>
              <div className="mt-4 text-[15px] text-[#3A4A5F]">
                <p className="font-medium">Attn: Data Protection Officer</p>
                <p>OphoTech Canada Service</p>
                <p>2345 - 235 Queens Quay W Downtown, Toronto M5J0A3 Canada</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:info@ophotech.com"
                    className="text-[#FF6A3D] hover:underline"
                  >
                    info@ophotech.com
                  </a>
                </p>
              </div>
            </div>

            {/* CTA section */}
            <div className="rounded-2xl border border-[#F2E8E1] bg-[#FAFBFC] p-8 text-center">
              <h2 className="text-2xl font-semibold text-[#0B1B2B]">
                Ready to Solve
                <br />
                What&apos;s Next With OphoTech?
              </h2>
              <button
                className="mt-6 rounded-full bg-[#FF6A3D] px-6 py-3 text-white text-sm font-medium shadow-[0_8px_20px_-6px_rgba(255,106,61,0.6)] hover:brightness-110 transition"
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Bottom wave band for footer continuity */}
        <div className="relative overflow-hidden">
          <div className="h-10 w-full bg-[conic-gradient(from_190deg_at_10%_120%,#FBE0D6,transparent_30%)]" />
          <div className="h-28 w-full bg-[radial-gradient(1200px_500px_at_50%_100px,#0F2C58_30%,#071A38_75%)]" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
