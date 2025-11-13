import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/placeholder.png')" }}>
      {/* Header with background extending */}
      <Header />
      
      <main className="relative z-10">
        {/* Who We Are Hero Section */}
        <section className="bg-blue-900 text-white py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Ophotech is a global AI-led company founded in 2018. We build Pods solutions that enable faster, informed decisions and growth for businesses, governments, and enterprises across North America, Europe, and Asia.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                We began with a simple, yet bold, mission: to create solutions with real impact. Early projects
              </p>
              <p className="text-lg text-gray-600 mb-4">
                As momentum grew and bold ideas took flight, we moved from a small team to a global force. Today, we partner with enterprises, governments, and innovators to deliver measurable progress that sticks long after launch.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src="/placeholder.png" alt="Our Story Visual" width={400} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image src="/icons.svg" alt="Informed Decisions Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Informed Decisions</h3>
                <p className="text-gray-600">Embed intelligence and align your organization with evidence-based responses.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image src="/icons.svg" alt="Build on Evidence Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Build on Evidence</h3>
                <p className="text-gray-600">Align your code with practices that surface real system risks before they build.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image src="/icons.svg" alt="Open for Change Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Open for Change</h3>
                <p className="text-gray-600">Build for change by design. Privacy, security, and governance by default.</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image src="/icons.svg" alt="Outcomes Over Output Icon" width={64} height={64} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Outcomes Over Output</h3>
                <p className="text-gray-600">Measure not just output, but outcomes. Not effort, but impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission and Vision Section */}
        <section className="py-20 px-8 bg-blue-900 text-white relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-8">
                To empower teams with systems and practices that surface real insights, and scale from hypothesis to production impact.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="text-lg">A world where every organization operates with trusted, timely, and transparent intelligence.</p>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 w-64 h-64 flex items-center justify-center mx-auto"></div>
                <Image src="/placeholder.png" alt="Mission Vision Graphic" width={300} height={300} className="relative z-10 rounded-full shadow-lg" />
              </div>
            </div>
          </div>
          {/* Arrow graphic */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <svg className="w-32 h-32 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image src="/icons.svg" alt="Impact Over Output Icon" width={64} height={64} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Impact Over Output</h3>
                <p className="text-gray-600">Partnerships, mentorship, and capacity to drive progress and innovation across industries.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image src="/icons.svg" alt="Sign Before Build Icon" width={64} height={64} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Sign Before Build</h3>
                <p className="text-gray-600">Evidence we can deliver. Wine and dine? No. Craft and evidence in production.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image src="/icons.svg" alt="Responsible by Default Icon" width={64} height={64} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Responsible by Default</h3>
                <p className="text-gray-600">Quality and reliability in design. Progress with confidence.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image src="/icons.svg" alt="Build to Adapt Icon" width={64} height={64} className="mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Build to Adapt</h3>
                <p className="text-gray-600">Open to values and compounds. Evolve with pace.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver Impact Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">How We Deliver Impact</h2>
              <p className="text-lg text-gray-600 mb-4">
                We focus on outcomes, and just metrics that matter – not vanity. We build with transparency, securely, reliably, and cost-effectively.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                From engineering your operating model to turning intelligence into enduring advantages.
              </p>
              <p className="text-lg text-gray-600">
                We question everything to ensure our solutions turn into methods that&apos;ve our turning point.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image src="/placeholder.png" alt="AI Cube Visual" width={400} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Why Choose Ophotech Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose Ophotech</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Engineered for Your Business</h3>
                <p className="text-gray-600 mb-4">Every build aligns. We design your processes, KPIs, and risk profiles – generic templates run surveys? Not here.</p>
                <p className="text-gray-600">North, south, east, west – telemetry goes in. Proof-of-concept to hyperscale.</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Audit-Ready from Day One</h3>
                <p className="text-gray-600 mb-4">Success isn&apos;t measured in outputs. It&apos;s in outcomes, adoption, and sustained value.</p>
                <p className="text-gray-600">SO-locked feasibility, observability, and beyond.</p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Transferable Confidence</h3>
                <p className="text-gray-600 mb-4">We build vendor-neutral. Stack-agnostic between in-house and cloud.</p>
                <p className="text-gray-600">Transferable to your teams, training, and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-20 px-8 bg-blue-900 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What&apos;s Next with Ophotech?</h2>
            <p className="text-xl mb-12">Ready to solve your toughest challenges with an organization that&apos;s built to deliver?</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300">
              Let&apos;s Start
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;