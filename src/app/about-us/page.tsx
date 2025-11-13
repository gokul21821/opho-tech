import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

// Import images
const communicationsImage = "/images/aboutus/communication.png";
const aiImpactImage = "/images/aboutus/ai-impact.png";


// Import icons
const intelligentIcon = "/images/icons/intelligent.svg";
const aiAgentIcon = "/images/icons/ai-agent.svg";
const handshakeIcon = "/images/icons/handshake.svg";
const cloudDbIcon = "/images/icons/cloud-db.svg";
const paperAnalysisIcon = "/images/icons/paper-analysis.svg";
const analysisIcon = "/images/icons/analysis.svg";
const peopleSearchIcon = "/images/icons/people-search.svg";
const securityIcon = "/images/icons/security.svg";
const rocketIcon = "/images/icons/rocket.svg";
const layeredSettingsIcon = "/images/icons/layered-settings.svg";
const monitorIcon = "/images/icons/monitor.svg";
const searchBulbIcon = "/images/icons/search-bulb.svg";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        title="Who We Are"
        subtitle="Opho Tech is a global, R&D-led company founded in 2019. We build SaaS and PaaS solutions that give leaders early, reliable visibility across the full technology lifecycle—strategy through continuous improvement— so decisions are faster, risk is lower, and growth is profitable. Our global team partners with enterprises, governments, and institutions across North America, Europe, and Asia."
        fullViewport={true}
        contentAlignment="center"
      />

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex flex-col">

        {/* Our Story Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                We began with a simple challenge: make decisions clearer, sooner,
                and safer to act on. Early projects proved a pattern—when teams see
                the right signals up front, momentum compounds and risk falls. That
                insight became our operating system.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                As we grew, we moved from bespoke builds to reusable accelerators,
                governance playbooks, and delivery patterns that turn experimentation
                into durable capability. We co-create with clients, strengthen what
                already works, and remove friction where it doesn&apos;t—so progress
                sticks long after launch.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={communicationsImage}
                alt="Our Story Visual"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
              Our Philosophy
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              See earlier. Decide smarter. Deliver results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image
                  src={intelligentIcon}
                  alt="Intelligent Decisions Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Intelligent Decisions
                </h3>
                <p className="text-gray-600">
                  Embed analytics and AI where work happens.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image
                  src={aiAgentIcon}
                  alt="Clarity Before Code Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Clarity Before Code
                </h3>
                <p className="text-gray-600">
                  Align early on the signals that matter.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image
                  src={handshakeIcon}
                  alt="Built for Change Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Built for Change
                </h3>
                <p className="text-gray-600">
                  Open, secure, cloud-native by default.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image
                  src={cloudDbIcon}
                  alt="Responsible By Design Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Responsible By Design
                </h3>
                <p className="text-gray-600">
                  Privacy, governance, and human oversight built in.
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <Image
                  src={paperAnalysisIcon}
                  alt="Outcomes Over Output Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Outcomes Over Output
                </h3>
                <p className="text-gray-600">
                  We measure impact—not features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-8 bg-blue-900 text-white relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-8">
                To equip leaders with platforms and practices that surface the
                right signals early, automate the routine, and scale securely from
                first hypothesis to production impact.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-4">
                <h3 className="text-2xl font-semibold">Our Vision</h3>
                <p className="text-lg">
                  A world where every organization operates on decision-grade
                  intelligence—timely, trusted, and actionable.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full opacity-20 w-64 h-64"></div>
                <Image
                  src="/placeholder.png"
                  alt="Mission Vision Graphic"
                  width={300}
                  height={300}
                  className="relative z-10 rounded-full shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Arrow graphic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <svg
              className="w-32 h-32 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={analysisIcon}
                  alt="Impact Over Activity Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Impact Over Output
                </h3>
                <p className="text-gray-600">We measure outcomes, not effort.</p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={peopleSearchIcon}
                  alt="Signal Before Build Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Signal Before Build
                </h3>
                <p className="text-gray-600">
                  Align on the few metrics that change decisions.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={securityIcon}
                  alt="Responsible by Default Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Responsible by Default
                </h3>
                <p className="text-gray-600">
                  Privacy, security, and governance are non-negotiable.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={cloudDbIcon}
                  alt="Build to Adapt Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Build to Adapt
                </h3>
                <p className="text-gray-600">
                  Open, interoperable, and cloud-native so value compounds.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={rocketIcon}
                  alt="Partnership Mindset"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Partnership Mindset
                </h3>
                <p className="text-gray-600">
                  Co-create, transfer capability, and make progress stick.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={layeredSettingsIcon}
                  alt="Evidence Wins Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Evidence Wins
                </h3>
                <p className="text-gray-600">
                  Hypothesize, test, learn, and industrialize.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={monitorIcon}
                  alt="Craft And Reliability Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Craft And Reliability
                </h3>
                <p className="text-gray-600">
                  Quality in design, resilience in production.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-lg border border-orange-200">
                <Image
                  src={searchBulbIcon}
                  alt="Progress with Pace Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-600">
                  Progress with Pace
                </h3>
                <p className="text-gray-600">
                  Ship small, improve continuously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Deliver Impact Section */}
        <section className="py-20 px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                How We Deliver Impact
              </h2>
              <ul className="text-lg text-gray-600 mb-6 space-y-3">
                <li>
                  <strong>Evidence first.</strong> Diagnose the problem, baseline
                  outcomes, and set measurable targets.
                </li>
                <li>
                  <strong>Thin-slice to proof.</strong> Ship working increments fast
                  to validate value, not just intent.
                </li>
                <li>
                  <strong>Industrialize.</strong> Harden for security, reliability,
                  and scale—with standards, not surprises.
                </li>
                <li>
                  <strong>Enable and transfer.</strong> Upskill teams, codify
                  practices, and make results repeatable.
                </li>
              </ul>
              <p className="text-lg text-gray-600">
                From a question to a method—that&apos;s our story: turning
                intelligence into an enduring advantage.
              </p>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <Image
                src={aiImpactImage}
                alt="AI Impact Visual"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Ophotech Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
              Why Choose Ophotech
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <p className="text-gray-600 mb-4">
                  Engineered for your operating model. We design around your
                  processes, KPIs, users, and risk profile—not generic templates.
                </p>
                <p className="text-gray-600">
                  Every build aligns data, controls, and experience to how your
                  organization actually runs.
                </p>
              </div>

              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Audit-Ready from Day One
                </h3>
                <p className="text-gray-600 mb-4">
                  Success isn&apos;t measured in outputs. It&apos;s in outcomes,
                  adoption, and sustained value.
                </p>
                <p className="text-gray-600">SO-locked feasibility, observability, and beyond.</p>
              </div>

              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Transferable Confidence
                </h3>
                <p className="text-gray-600 mb-4">
                  We build vendor-neutral. Stack-agnostic between in-house and
                  cloud.
                </p>
                <p className="text-gray-600">
                  Transferable to your teams, training, and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="py-20 px-8 bg-white backdrop-blur-sm text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-black font-bold mb-8">Ready to Solve</h2>
            <h2 className="text-3xl text-black font-bold mb-8">
              What&apos;s Next with Ophotech?
            </h2>

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
