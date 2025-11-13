import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function AISolutionsAndServices() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/placeholder-blue-bg.png')] bg-cover bg-center opacity-60 -z-10"></div>
        <Header />
      </div>

      <main className="flex flex-1 flex-col">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
          <div className="absolute inset-0 bg-[url('/placeholder-blue-bg.png')] bg-cover bg-center opacity-60"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">AI Solutions & Services</h1>
            <p className="text-base leading-relaxed">
              Intelligent Automation and Predictive Advantage
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
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
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">AI Solutions & Services</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            Strategic AI: Adding Value to Data Beyond Simple Automation. We implement AI solutions that are deeply
            embedded in your core workflows, transforming how decisions are made.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
              title: 'Intelligent Automation',
              impact: 'Automate complex, rule-based, and high-volume processes.',
              outcome: 'Reduced operational costs, faster processing times, and better allocation of human capital.'
            }, {
              title: 'Predictive Forecasting',
              impact: 'Use sophisticated models to anticipate market shifts, customer behavior, and demand patterns.',
              outcome: 'Reduced inventory risk, optimized pricing, and proactive maintenance.'
            }, {
              title: 'Personalized Engagement',
              impact: 'Deploy AI to tailor every interaction, from marketing to recommendations.',
              outcome: 'Increased loyalty, higher conversion rates, and growth in Customer Lifetime Value (CLV).'
            }].map((item, i) => (
              <div key={i} className="p-6 bg-white shadow-md rounded-xl border border-gray-200 text-left">
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
              desc: 'Defining a clear business goal such as reducing churn or improving sustainability.'
            }, {
              title: 'Model Development & Training',
              desc: 'Data scientists build and train models using high-quality, validated data.'
            }, {
              title: 'Deployment & Integration',
              desc: 'Architects ensure production-ready integration via APIs and MLOps pipelines.'
            }, {
              title: 'Monitoring & Governance',
              desc: 'Continuous monitoring to maintain model accuracy, compliance, and reliability.'
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
                We focus on MLOps frameworks that treat AI models like enterprise software, ensuring rapid development and
                reliable performance at scale.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-orange-600 font-semibold mb-2">Ethical AI & Trust</h3>
              <p className="text-sm text-gray-700">
                We embed principles of fairness, transparency, and data privacy into every AI solution, ensuring
                compliance and building long-term customer trust.
              </p>
            </div>
          </div>
        </section>

        {/* AI Enablement */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50 text-center">
          <h2 className="text-2xl font-semibold mb-10">AI Enablement - How You Lead</h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {["Enterprise-Ready AI With Measurable ROI", "Predictive Analytics And Process Automation", "Personalized Customer Engagement", "Ethical And Compliant AI Governance", "Continuous Monitoring And Model Optimization"].map((title, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="mx-auto mb-4 w-10 h-10 bg-gray-300 rounded-full"></div>
                <p className="text-sm font-medium text-gray-700">{title}</p>
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
          <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
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
