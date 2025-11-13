import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

export default function AISolutionsAndServices() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/" },
          { label: "AI Solutions & Services" },
        ]}
        title="AI Solutions & Services"
        subtitle="Intelligent Automation and Predictive Advantage"
        contentAlignment="center"
      />

      <main className="flex flex-1 flex-col">

        {/* Introduction Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
            <Image
              src="/images/ai_solutions/solution.png"
              alt="AI solution illustration"
              width={520}
              height={380}
              className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
              priority
            />
            <div>
              <p className="text-sm text-gray-700 mb-6">
                AI and Machine Learning are no longer futuristic concepts; they are the tools driving present-day
                <strong> competitive differentiation and operational scalability</strong>. We move beyond pilot programs to
                integrate AI that delivers measurable ROI on your existing data and cloud investments.
              </p>
              <p className="text-sm text-gray-700">
                <strong>For Businesses:</strong> We focus on developing robust, scalable, and ethical AI models that are deployed
                seamlessly into production, driving real-time decisions and business value.
              </p>
            </div>
          </div>
        </section>

        {/* AI Solutions & Services */}
        <section className="py-20 px-6">

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
              title: 'Intelligent Automation',
              icon: '/images/data-monetize/gear.svg',
              impact: 'Automate complex, rule-based, and high-volume processes (e.g., invoice processing, customer routing). ',
              outcome: 'Reduced operational costs, faster processing times, and reallocation of human capital to strategic tasks. '
            }, {
              title: 'Predictive Forecasting',
              icon: '/images/cloud-integrations/sparkle.svg',
              impact: 'Use sophisticated models to anticipate market shifts, customer behavior, and equipment failures. ',
              outcome: 'Reduced inventory risk, optimized pricing, and proactive maintenance (less downtime). .'
            }, {
              title: 'Personalized Engagement',
              icon: '/images/ai_solutions/lightning.svg',
              impact: 'Deploy AI to tailor every interaction, from marketing to product recommendations.',
              outcome: 'Increased customer loyalty, higher conversion rates, and growth in Customer Lifetime Value (CLV). '
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
                <p className="text-sm text-gray-700 mb-1"><strong>Strategic Business Impact:</strong> {item.impact}</p>
                <p className="text-sm text-gray-700"><strong>Tangible Outcome:</strong> {item.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Value Chain of AI Implementation */}
        <section className="py-20 px-6 bg-orange-50 text-center">
          <h2 className="text-2xl font-semibold mb-8">The Value Chain of AI Implementation</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Our expertise ensures that AI projects succeed by bridging the gap between data science theory and secure,
            scalable deployment.
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
            {[{
              title: 'Business Problem Translation',
              desc: 'Defining a clear business goal (e.g., reduce churn substantially). '
            }, {
              title: 'Model Development & Training',
              desc: 'Our data scientists build and train the most appropriate machine learning models (e.g., deep learning, NLP, computer vision) using your high-quality, validated data. '
            }, {
              title: 'Deployment & Integration',
              desc: 'Our architects and integration experts ensure the model is seamlessly deployed into your cloud architecture (via APIs, MLOps pipelines), enabling real-time decision-making. '
            }, {
              title: 'Monitoring & Governance',
              desc: 'Establish continuous monitoring to track model performance, ensure ethical compliance, and retrain models to prevent "drift" and maintain accuracy over time.'
            }].map((item, i) => (
              <div key={i} className="p-6 bg-white shadow-sm rounded-xl border border-gray-200">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Deployment */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8">AI Deployment</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Two critical factors for enterprise AI success.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-orange-600 font-semibold mb-2">Scalability & MLOps</h3>
              <p className="text-sm text-gray-700">
              We focus on an MLOps (Machine Learning Operations) framework, treating AI models like enterprise software. This ensures rapid development, automated deployment, and reliable performance at scale. 
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-orange-600 font-semibold mb-2">Ethical AI & Trust</h3>
              <p className="text-sm text-gray-700">
              We embed principles of fairness, transparency, and data privacy into every solution. This mitigates risk, ensures regulatory compliance, and builds customer trust. 
              </p>
            </div>
          </div>
        </section>

        {/* AI Enablement */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50 text-center">
          <h2 className="text-2xl font-semibold mb-10">AI Enablement - How You Lead</h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[{
              title: "Enterprise-Ready AI With Measurable ROI",
              icon: "/images/icons/monitor-rocket.svg"
            }, {
              title: "Predictive Analytics And Process Automation",
              icon: "/images/icons/search-bulb.svg"
            }, {
              title: "Personalized Customer Engagement",
              icon: "/images/icons/shield.svg"
            }, {
              title: "Ethical And Compliant AI Governance",
              icon: "/images/icons/settings-load.svg"
            }, {
              title: "Continuous Monitoring And Model Optimization",
              icon: "/images/icons/settings-phone.svg"
            }].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="mx-auto mb-4 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                  <Image src={item.icon} alt={`${item.title} icon`} width={22} height={22} className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Section */}
        <section className="py-20 px-6 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-3">AI Solutions & Services</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We bridge the gap between data science and production-ready AI that delivers tangible business impact.
            </p>
          </div>
          <div className="justify-self-center">
            <Image
              src="/images/ai_solutions/aisolution.png"
              alt="AI solutions illustration"
              width={520}
              height={380}
              className="h-auto w-[320px] sm:w-[380px] md:w-[420px] rounded-xl shadow-[0_10px_30px_-10px_rgba(15,44,88,0.3)]"
            />
          </div>
        </section>

        {/* Get Started */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Get Started</h2>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover three high-impact AI use cases designed for your industry and pinpoint your fastest path to ROI.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Deploy Intelligent Automation →
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
