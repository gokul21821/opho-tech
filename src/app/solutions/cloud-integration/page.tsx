import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";

export default function CloudIntegrationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/" },
          { label: "Cloud Integration" },
        ]}
        title="Cloud Integration & Architecture"
        subtitle="Building the Digital Backbone"
        contentAlignment="center"
      />

      <main className="bg-white text-gray-800">
    
          {/* Overview Section */}
          <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
              <Image
                src="/images/cloud-integrations/cloud.png"
                alt="Cloud integration illustration"
                width={520}
                height={360}
                className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
                priority
              />
              <div>
                <p className="text-sm text-gray-600 mb-6">
                  <strong>For the Business Leaders:</strong> Cloud is not just an IT cost center; it is the platform for
                  innovation, agility, and scale. Cloud Integration & Architecture services ensure technology strategy directly
                  supports business goals, minimizes risk, and maximizes competitive speed.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>For the Chief Cloud Architect and Integration Expert:</strong> We focus on modern, scalable, and secure
                  system design—breaking down data silos and enabling real-time analytics across your enterprise.
                </p>
              </div>
            </div>
          </section>
    
          {/* How It Works */}
          <section className="py-20 px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">How Cloud Integration & Architecture Works</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              The Strategic Imperative: Agility and Resilience. In today’s market, speed and flexibility are paramount. Our
              approach ensures your cloud environment is not only cost-effective but an active enabler of business
              transformation.
            </p>
    
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{
                title: 'Siloed Data Across Various Systems And Platforms',
                solution: 'Unified Data Fabric/Mesh architecture.',
                outcome: 'Single source of truth for reliable decision-making and AI.',
                icon: '/images/cloud-integrations/paper.svg'
              }, {
                title: 'Slow Scaling To Meet Peak Demand Or New Markets',
                solution: 'Hyper-Scalable Cloud Infrastructure (AWS, Azure, GCP and local partners).',
                outcome: 'Agility to enter new markets or handle massive growth instantly.',
                icon: '/images/cloud-integrations/sparkle.svg'
              }, {
                title: 'High Maintenance Costs And Security Complexity',
                solution: 'Managed Services & Infrastructure-as-Code (IaC).',
                outcome: 'Reduced operational overhead and enhanced compliance/security posture.',
                icon: '/images/data-monetize/money.svg'
              }].map((item, i) => (
                <div key={i} className="p-6 bg-white shadow-md rounded-xl border border-gray-200 text-left">
                  <div className="mb-4 h-7 w-7">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={28}
                      height={28}
                      className="h-7 w-7"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 mb-1"><strong>Strategic Cloud Solution</strong>: {item.solution}</p>
                  <p className="text-sm text-gray-700"><strong>Business Outcome</strong>: {item.outcome}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* Business Challenges */}
          <section className="py-16 px-6 bg-orange-50">
            <h3 className="text-2xl font-semibold text-center mb-6">From Complex Challenge to Clear Opportunity</h3>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Our core expertise is translating complex business challenges into clear technology opportunities. We don’t
              implement technology for its own sake; we align it with your revenue targets and operational requirements.
            </p>
    
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[{
                challenge: 'Product Development Cycle Is Too Slow.',
                solution: 'Design a cloud-native DevOps pipeline and integrate development tools to cut time-to-market significantly.'
              }, {
                challenge: 'Cannot Get A 360-Degree View Of The Customer.',
                solution: 'Implement a secure, real-time API integration strategy to connect CRM, ERP, and marketing platforms.'
              }].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-orange-600 font-semibold mb-1">Business Challenge</p>
                  <h4 className="font-medium mb-3">{item.challenge}</h4>
                  <p className="text-sm text-gray-700"><strong>Solution:</strong> {item.solution}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* Leadership Focus */}
          <section className="py-20 px-6 text-center">
            <h3 className="text-2xl font-semibold mb-10">Leadership Focus: Stability, Security, and Speed</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{
                title: 'Optimal Architecture Design',
                desc: 'We focus on cost-optimization and governance from the start, ensuring your cloud expenditure (FinOps) is efficient and aligned with business value. We select the right services (IaaS, PaaS, or SaaS) for your needs. '
              }, {
                title: 'Seamless Integration Expertise',
                desc: 'We specialize in modernizing legacy systems, migrating applications, and establishing robust data pipelines that ensure data flows securely and reliably across your entire ecosystem. '
              }, {
                title: 'Security By Design',
                desc: 'We implement enterprise-grade security controls, identity and access management (IAM), and compliance frameworks to protect your assets in the cloud environment. '
              }].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* Benefits */}
          <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50 text-center">
            <h2 className="text-3xl font-semibold mb-12">Cloud Architecture - Benefits</h2>
            <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Unified Data Environment For Reliable Analytics",
                  icon: "/images/icons/shield.svg"
                },
                {
                  title: "Scalable And Compliant Architecture",
                  icon: "/images/icons/settings-phone.svg"
                },
                {
                  title: "Reduced Operational Costs And Maintenance",
                  icon: "/images/icons/settings-money.svg"
                },
                {
                  title: "Governance And FinOps Efficiency",
                  icon: "/images/icons/monitor.svg"
                },
                {
                  title: "Faster Market Entry And Innovation Cycles",
                  icon: "/images/icons/monitor-rocket.svg"
                }
              ].map((benefit, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-[#FFE3D3] grid place-items-center">
                    <Image src={benefit.icon} alt={`${benefit.title} icon`} width={22} height={22} className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{benefit.title}</p>
                </div>
              ))}
            </div>
          </section>
    
          {/* Final Section */}
          <section className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Cloud Integration & Architecture</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enable and translate complex business challenges into clear technology opportunities, enabling stability,
                security, and speed.
              </p>
            </div>
              <Image
                src="/images/cloud-integrations/blue-cloud.png"
                alt="Cloud architecture illustration"
                width={520}
                height={360}
                className="h-auto w-[320px] sm:w-[380px] md:w-[460px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
              />
          </section>
    
          {/* Get Started */}
          <section className="py-20 px-6 text-center">
            <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
            <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with our team for a quick Cloud Readiness Review and uncover the fastest, most cost-efficient path to
              modernization.
            </p>
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Schedule a Call →
            </button>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
    