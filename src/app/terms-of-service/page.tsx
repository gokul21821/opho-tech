"use client";

// app/terms-of-service/page.tsx
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import { CTASection } from "@/components/sections/CTASection";

export default function TermsOfService() {
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
            { label: "Terms of Service" },
          ]}
          title="Terms of Service"
          subtitle="Please read these terms of service carefully before using our website and services."
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
            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                1. User&apos;s Acknowledgment and Acceptance of Terms
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p>
                  OphoTech Inc. (collectively referred to as "OphoTech", "We", "Us", or "Our") provides the ophotech.com website and various related services (collectively, the "Site" or "Services") to you, the "User," "Client," or "Customer," subject to your compliance with all the terms, conditions, and notices contained or referenced herein (the "Terms of Use," "Terms and Conditions," "Agreement," or "Terms"), as well as any other written agreement between us and you. When using particular services or materials on this Site, users shall be subject to any posted rules applicable to such services or materials, which may contain additional terms and conditions. All such rules are hereby incorporated by reference.
                </p>
                <p className="font-medium text-[#111111]">
                  BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS OF USE. IF YOU DO NOT AGREE, PLEASE EXIT THE SITE. YOUR REMEDY FOR DISSATISFACTION IS TO STOP USING THE SITE AND/OR THE RELATED PRODUCTS OR SERVICES. YOUR AGREEMENT TO THESE TERMS BECOMES EFFECTIVE IMMEDIATELY UPON YOUR FIRST USE OF THIS SITE.
                </p>
                <div>
                  <p className="mb-0">
                    These Terms are effective as of July 22, 2025. OphoTech reserves the right to amend these Terms at any time without prior notice. You acknowledge and agree that it is your responsibility to review this Site and these Terms of Use regularly to stay informed of modifications. Your continued use of the Site constitutes acknowledgment and acceptance of any changes.
                  </p>
                  <p>
                    References to "Affiliates" include our owners, subsidiaries, affiliated companies, officers, directors, suppliers, partners, sponsors, advertisers, and all parties involved in creating or delivering this Site and its contents.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                2. Description of Services
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  OphoTech offers various data services and documentation through the Site, including, but not limited to, Fraud Detection, Bot Detection, Data Validation, IP Intelligence, Email Validation, Phone Validation, User and Payment Screening, Device Fingerprinting, and other related services ("OphoTech Services").
                </p>
                <p className="mb-0">
                  You are responsible for providing, at your own expense, all equipment and Internet access necessary to use OphoTech Services, and any fees associated with such access.
                </p>
                <p>
                  OphoTech grants you a non-exclusive, non-transferable, non-sublicensable license to access and use OphoTech Services. You agree to use the Services in compliance with all applicable laws, regulations, and these Terms. OphoTech reserves the right to modify or discontinue any part of the Site or its features at any time, with or without notice. Any new features or services added will also be subject to these Terms of Use.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                3. Registration Data and Privacy
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  To access certain services, you must (a) create an account and password via our online registration, and (b) keep your registration data accurate and updated. By registering, you confirm all information provided is accurate, current, and complete.
                </p>
                <p>
                  Upon registration, your account contact information may be transferred to a secure CRM system. You may be contacted by support or marketing teams by automated or manual means. To opt out, please submit a support request or written notice.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">4. Use of Logo</h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  Client authorizes OphoTech to use its name, logo, and/or trademark in OphoTech marketing materials (e.g., website, non-public brochures) in accordance with brand guidelines or accepted standards of decency.
                </p>
                <p>
                  Client may revoke this right with seven (7) business days&apos; written notice.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                5. Data Processing Agreement
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  OphoTech processes Client Data in accordance with its Data Processing Agreement ("DPA"), which is incorporated by reference. The DPA outlines the parties&apos; roles and legal bases for processing personal data under applicable privacy laws, including the GDPR and the CCPA.
                </p>
                <p>
                  OphoTech implements and maintains appropriate safeguards to protect Client Data. Clients are responsible for ensuring that any data sharing with OphoTech complies with applicable data protection laws.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                6. Conduct on Site
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  Your use of the Site and Services must comply with all laws and regulations; you are solely responsible for your communications and conduct. You may not attempt to breach security, gain unauthorized access, or interfere with another&apos;s use of the Site. Violations may result in criminal or civil liability.
                </p>
                <p className="mb-0">
                  OphoTech is not a consumer reporting agency under the Fair Credit Reporting Act (FCRA), and our data does not constitute "consumer reports." You agree not to use OphoTech Services for purposes governed by the FCRA.
                </p>
                <p>
                  We may terminate your account at our sole discretion for violations. We will cooperate with law enforcement as required. If your account is terminated, a pro-rated refund will be issued for any paid services.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                7. Third Party Sites and Information
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                OphoTech Services may contain links or references to third-party websites or resources ("Third-Party Content"). Such content is provided for convenience only and does not constitute endorsement or affiliation. OphoTech does not control and is not responsible for the availability, accuracy, or legality of Third-Party Content. All dealings are solely between you and the third party.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                8. Intellectual Property Information
              </h2>
              <p className="mt-3 text-[18px] font-medium text-[#3A4A5F]">
                Copyright © 2011 – 2026 OphoTech Inc. All Rights Reserved.
              </p>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  "OphoTech Content" includes all information, data, reports, analytics, software, API responses, documentation, graphics, audio, video, designs, and other materials provided through OphoTech Services.
                </p>
                <p className="mb-0">
                  All Content and intellectual property rights are the exclusive property of OphoTech and/or its licensors and are protected by applicable laws. Use of the Services does not grant you any rights beyond those expressly granted here.
                </p>
                <p>
                  OphoTech trademarks, service marks, and logos ("OphoTech Marks") are property of OphoTech or its affiliates. This Agreement grants you no right to use any OphoTech Marks or third-party trademarks.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                9. Disclaimer of Warranties
              </h2>
              <p className="mt-3 text-[15px] font-medium text-[#111111]">
                ALL SERVICES AND MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. OphoTech MAKES NO WARRANTY THAT SERVICES WILL MEET YOUR REQUIREMENTS OR THAT THEY WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. YOU USE THE SITE AT YOUR OWN RISK.
              </p>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  OphoTech is not responsible for errors, omissions, or outdated materials, nor for damages resulting from your use or downloading of materials.
                </p>
                <p>
                  Some jurisdictions do not allow exclusion of certain warranties; some limitations may not apply.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                10. Limitation of Liability
              </h2>
              <p className="mt-3 text-[15px] font-medium text-[#111111]">
                IN NO EVENT SHALL OphoTech OR ITS AFFILIATES BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER IN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SITE OR SERVICES.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                If any limitation of liability is unenforceable, OphoTech&apos;s sole obligation for damages shall be limited to the amount actually paid by Client to OphoTech in the 12 months preceding the subject claim.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                11. Non-Disparagement
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Both parties agree not to disparage the other or their officers, directors, employees, shareholders, or agents, except as required by legal process.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">12. Indemnification</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                You agree to defend, indemnify, and hold harmless OphoTech, its affiliates, officers, employees, agents, licensors, and suppliers from all liabilities, claims, and expenses (including legal fees) arising from your misuse of the Site or Services.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 13 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                13. Security and Password
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  You are responsible for keeping your password and account information secure and for all actions taken under your account. OphoTech personnel will never ask for your password. You may enable Two-Factor Authentication (2FA) for additional security.
                </p>
                <p className="mb-0">
                  Accounts may not be shared or transferred. Violation may result in immediate termination.
                </p>
                <p>
                  OphoTech employs robust security measures to protect client data and complies with all applicable privacy regulations.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 14 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                14. Participation in Promotions
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Any interaction with third-party advertisers is solely between you and the advertiser. OphoTech assumes no responsibility for any aspect of such interactions.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 15 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                15. Termination of Use
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  OphoTech may suspend or terminate your access to all or part of the Site or Services, with or without notice, for any reason, including breach of these Terms. Upon termination, your right to use the Site ceases immediately, and OphoTech may delete your account and associated data. OphoTech is not liable for damages arising from such actions.
                </p>
                <p>
                  If OphoTech terminates your account, you will receive a pro-rated refund for unused paid services. You may terminate this Agreement at any time with 30 days&apos; written notice, but all outstanding fees will become immediately due and no refunds will be issued for unused services.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 16 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">16. API & Data Usage</h2>
              <p className="mt-3 text-[24px] font-medium text-[#111111]">
                You may not:
              </p>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[#3A4A5F] list-disc list-inside">
                <li>Reverse engineer or attempt to extract source code from any API or related software, except as expressly permitted by law.</li>
                <li>Interfere with, abuse, or disrupt the APIs or networks.</li>
                <li>Sublicense an API or create a competing API without written approval.</li>
                <li>Use the APIs to replicate or compete with OphoTech core products without written approval.</li>
                <li>Use APIs for hazardous activities (e.g., life support, air traffic control).</li>
              </ul>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 17 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                17. Free Account Limitations
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Users may not create multiple accounts to receive additional free credits. Abuse may result in suspension or termination. For legitimate business needs, contact OphoTech support for authorization.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 18 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                18. Premium Plans & Queries
              </h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  Each API request deducts a query credit from your account, except where otherwise stated. Query usage is tracked and billed as per your subscription or prepaid plan.
                </p>
                <p>
                  All purchases are final and non-refundable, except where required by law. You are responsible for monitoring your usage and maintaining an active account balance.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 19 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                19. Affiliate Program & Referrals
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                OphoTech offers an affiliate program to active users. Referrals must remain in good standing and are defined within your dashboard. Earnings are paid on a NET-60 schedule, and OphoTech reserves the right to withhold commissions at its discretion.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 20 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">20. Client Data</h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  Client may transmit transactional, behavioral, or user data ("Client Data") to OphoTech for fraud detection, risk analysis, and threat intelligence services. OphoTech may use anonymized or aggregated Client Data to improve global scoring, without disclosing PII or client-specific business data.
                </p>
                <p>
                  All Client Data is protected with industry-standard safeguards and processed in accordance with privacy regulations and the Data Processing Agreement.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 21 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">21. Governing Law</h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                <p className="mb-0">
                  This Site is operated from Ontario, Canada. By accessing the Site, both parties agree that the laws of the Province of Ontario, without regard to its conflict of law principles, shall govern all matters relating to the use of the Site and Services.
                </p>
                <p>
                  Both parties consent to the exclusive jurisdiction and venue of courts in Ontario for any disputes arising under this Agreement.
                </p>
              </div>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 22 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                22. Entire Agreement
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                These Terms represent the complete agreement between the parties, superseding all prior discussions or agreements. Any modifications must be in writing and signed by both parties.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 23 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                23. Class Action Waiver
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Both OphoTech and Client waive the right to a trial by jury and agree that all disputes must be brought individually, not as part of any class action or representative proceeding.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 24 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">24. Severability</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                If any provision of this Agreement is held invalid or unenforceable, the remainder of this Agreement will continue in full force and effect.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 25 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">25. Survival</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                The following Sections survive termination: 8 (Intellectual Property), 9 (Disclaimer of Warranties), 10 (Limitation of Liability), 11 (Non-Disparagement), 12 (Indemnification), 15 (Termination of Use), 16 (API & Data Usage), 20 (Client Data), 21 (Governing Law), 22 (Entire Agreement), 23 (Class Action Waiver), 28 (Reseller Governance), and 30 (Miscellaneous).
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 26 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                26. Failure to Enforce
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                OphoTech&apos;s failure to enforce any provision of these Terms shall not constitute a waiver of that provision or the right to enforce it in the future.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 27 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">27. Anti-Bribery</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Neither party will, directly or indirectly, offer or accept bribes, secret commissions, or illegal gratuities. Any breach is grounds for termination and potential legal action. The breaching party is liable for resulting losses.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 28 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">
                28. Reseller Governance
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                If Services are purchased through an authorized reseller, these Terms govern usage and access, while payment terms are governed by the agreement with the reseller. OphoTech is not liable for financial arrangements between Client and Reseller.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 29 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">29. Signature</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#3A4A5F]">
                Your electronic acceptance or use of OphoTech Services constitutes your binding agreement to these Terms.
              </p>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Section 30 */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">30. Miscellaneous</h2>
              <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[#3A4A5F] list-disc list-inside">
                <li><span className="font-medium">Prevailing Party Fees:</span> The prevailing party in any legal action will be entitled to reasonable legal fees and costs.</li>
                <li><span className="font-medium">Limitation on Claims:</span> All claims must be brought within one (1) year or they are waived and barred.</li>
                <li><span className="font-medium">Assignment:</span> Client may not assign this Agreement without OphoTech&apos;s prior written consent; OphoTech may assign freely.</li>
                <li><span className="font-medium">Force Majeure:</span> OphoTech is not liable for failures caused by events beyond its reasonable control.</li>
                <li><span className="font-medium">No Waiver:</span> No failure or delay by OphoTech in exercising any right shall constitute a waiver.</li>
              </ul>
            </div>
            <div className="border-t border-[#B0B0B0]" />

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-[#0B1B2B]">Contact Information</h2>
              <div className="mt-3 text-[15px] text-[#3A4A5F]">
                <p className="mb-0">OphoTech Inc.</p>
                <p className="mb-0">2302 – 228 Queens Quay W Downtown, Toronto M5J2X1 Canada</p>
                <p className="mb-0">&nbsp;</p>
                <p className="font-medium text-[#111111]">
                  Email:{" "}
                  <a
                    href="mailto:info@ophotech.com"
                    className="text-[#E45412] hover:underline"
                  >
                    info@ophotech.com
                  </a>
                </p>
              </div>
            </div>
              {/* Horizontal Line */}
              <div className="flex justify-center w-full">
                <Image
                  src="/images/horizontalline.svg"
                  alt=""
                  width={1200}
                  height={3}
                  className="w-full max-w-5xl"
                  aria-hidden
                />
              </div>
            {/* CTA section */}
            <CTASection
              variant="ready"
              readyClassName="rounded-2xl bg-white p-8"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
