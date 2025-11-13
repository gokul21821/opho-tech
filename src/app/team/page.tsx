import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

// Import team member images
const bhavneetImage = "/images/aboutus/walia.png";
const shivenderImage = "/images/aboutus/sofat.png";
const rajveerImage = "/images/aboutus/Singh.png";
const vijayImage = "/images/aboutus/varadi.png";

export default function Team() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      {/* HERO SECTION */}
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

        {/* Team Grid */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {[{
              name: 'Mr. Bhavneet Walia',
              title: 'Founder',
              image: bhavneetImage,
            },{
              name: 'Mr. Shivender Sofat',
              title: 'Advisory Board Member',
              image: shivenderImage,
            },{
              name: 'Mr. Rajveer Singh',
              title: 'Advisory Board Member',
              image: rajveerImage,
            },{
              name: 'Dr. Vijay Varadi, PhD',
              title: 'Director',
              image: vijayImage,
            }].map((person, i) => (
              <div key={i} className="bg-white shadow-sm rounded-xl p-6">
                <Image
                  src={person.image}
                  alt={`${person.name} portrait`}
                  width={128}
                  height={128}
                  className="mx-auto mb-4 w-32 h-32 rounded-md object-cover"
                />
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-orange-600 text-sm font-medium">{person.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Individual Profiles */}
        <section className="space-y-20 py-20 px-6 max-w-6xl mx-auto">
          {/* Bhavneet Walia */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-1">Mr. Bhavneet Walia</h3>
              <p className="text-orange-600 font-medium mb-4">Founder</p>
              <p className="text-sm text-gray-600 leading-relaxed">
              Mr. Bhavneet Walia is the Founder & Chief Executive Officer of OphoTech with a distinguished track record in enterprise AI leadership and strategic innovation management. Based in Toronto with global partnerships across North America, Europe, and the APAC region, he is exceptionally skillful in aligning research initiatives with commercial productization while maintaining rigorous compliance and governance standards. His leadership extends beyond corporate boundaries through his role as Chair of the World Association of Supercomputing, where he drives global high-performance computing collaboration, and his position as Trustee with Little Big Things, focusing on social impact and community development programs. 
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={bhavneetImage}
                alt="Mr. Bhavneet Walia portrait"
                width={192}
                height={192}
                className="w-48 h-48 rounded-md object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Shivender Sofat */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-1">
              <Image
                src={shivenderImage}
                alt="Mr. Shivender Sofat portrait"
                width={192}
                height={192}
                className="w-48 h-48 rounded-md object-cover shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">Mr. Shivender Sofat</h3>
              <p className="text-orange-600 font-medium mb-4">Advisory Board Member</p>
              <p className="text-sm text-gray-600 leading-relaxed">
              Mr. Shivender Sofat is a distinguished cross-border finance and assurance leader who enables organizational growth through strong controls, transparency, and regulatory compliance. He holds the prestigious triple certification of Chartered Accountant (India), Certified Public Accountant (USA), and Certified Fraud Examiner, positioning him as a globally recognized expert in international finance and risk management. His professional affiliations include active membership in the AICPA, NYSSCPA, ACFE, and ICAI, where he contributes to anti-money laundering and combating the Financing of Terrorism initiatives, as well as IRS-related committees. 
              </p>
            </div>
          </div>

          {/* Rajveer Singh */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-1">Mr. Rajveer Singh</h3>
              <p className="text-orange-600 font-medium mb-4">Advisory Board Member</p>
              <p className="text-sm text-gray-600 leading-relaxed">
              Mr. Rajveer Singh brings exceptional public-sector leadership with extensive expertise in audit, policy design, infrastructure finance, and multilateral standards. As a member of the Indian Civil Service (1991 batch), he has served as Special Secretary to the Government of India. He has also held senior leadership positions with the Comptroller and Auditor General of India, Accountant General Audit Delhi, Northern Railway, and New Delhi Municipal Council. His academic foundation includes degrees in Agriculture, Agricultural Economics, and Law, providing him with a comprehensive understanding of policy frameworks across multiple sectors. 

At OphoTech, Mr. Rajveer anchors governance and public-sector assurance across technology-policy engagements. His role focuses on ensuring compliance with regulatory frameworks while maximizing impact through strategic policy alignment and multilateral engagement standards. 
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={rajveerImage}
                alt="Mr. Rajveer Singh portrait"
                width={192}
                height={192}
                className="w-48 h-48 rounded-md object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Vijay Varadi */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center md:order-1">
              <Image
                src={vijayImage}
                alt="Dr. Vijay Varadi portrait"
                width={192}
                height={192}
                className="w-48 h-48 rounded-md object-cover shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">Dr. Vijay Varadi, PhD</h3>
              <p className="text-orange-600 font-medium mb-4">Director</p>
              <p className="text-sm text-gray-600 leading-relaxed">
              Dr. Vijay brings a unique interdisciplinary expertise that combines advanced data science methodologies with rigorous economic principles to drive enterprise transformation. With a Ph.D. in Economics and post-doctoral fellowship credentials, complemented by executive certification in Leadership with AI from the Indian School of Business, Dr. Vijay has established himself as a leading practitioner in machine learning, econometric modeling, and decision science. He is also a professor at Golden Gate University, where he bridges theoretical knowledge with practical applications, while maintaining active engagement with leading economic research institutions across policy and program development initiatives. 
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-3">Ready to Solve</h2>
          <p className="text-xl font-medium mb-6">What&apos;s Next With OphoTech?</p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Let&apos;s Start →
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
