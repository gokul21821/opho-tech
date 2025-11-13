import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
          <div className="absolute inset-0 bg-[url('/placeholder-blue-bg.png')] bg-cover bg-center opacity-60"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Join Us in Shaping the Future of AI & Cloud
            </h1>
            <p className="text-base leading-relaxed">
              We are more than a technology company — we are a research and development hub where brilliant minds come
              together to build the next generation of SaaS and PaaS solutions. If you’re passionate about AI, data
              science, and cloud innovation, this is where you belong.
            </p>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-orange-50">
          <h2 className="text-3xl font-semibold mb-4">Join our Team</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover exciting and fulfilling opportunities at Ophotech, where challenges are met with collaboration and
            growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm">
              <span className="text-sm text-orange-600 font-semibold">Mid Level</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Cloud Architect</h3>
              <p className="text-sm text-gray-600 mb-6">
                As a Cloud Architect, you will design, implement, and evolve secure, scalable cloud architectures that
                power...
              </p>
              <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                Apply Now →
              </button>
            </div>

            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm">
              <span className="text-sm text-orange-600 font-semibold">Senior Level</span>
              <h3 className="text-xl font-bold mt-2 mb-3">Data Engineer</h3>
              <p className="text-sm text-gray-600 mb-6">
                Can build predictive models, AI tools, and automation systems.
              </p>
              <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                Apply Now →
              </button>
            </div>
          </div>
        </section>

        {/* Work With Us */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Work with Us</h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {["Innovation First", "Cutting-Edge Tools", "Collaborative Culture", "Global Impact", "Continuous Learning"].map(
              (title, i) => (
                <div key={i} className="p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition">
                  <div className="mx-auto mb-4 w-10 h-10 bg-gray-300 rounded-full"></div>
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">
                    {title === "Innovation First" && "Every project starts with research, giving you space to explore and create."}
                    {title === "Cutting-Edge Tools" && "Work with AI/ML, cloud-native platforms, and next-gen software stacks."}
                    {title === "Collaborative Culture" && "We believe in Connect – Create – Evolve not just for clients, but also for our teams."}
                    {title === "Global Impact" && "Serve clients across North America, Europe, and Asia while shaping industries worldwide."}
                    {title === "Continuous Learning" && "Training, certifications, and mentorship programs to help you grow."}
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Life at Ophotech */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50 text-center">
          <h2 className="text-3xl font-semibold mb-6">Life at OphoTech</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            At OphoTech, we believe people do their best work when they’re inspired, challenged, and supported. Our culture
            is built around <strong>curiosity, innovation, and collaboration</strong> — with opportunities to grow every step of the way.
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {["Hybrid & Flexible Work Options", "R&D-Focused Projects With Global Clients", "Regular Hackathons & Innovation Sprints", "Inclusive, Diverse, And Growth-Oriented Culture", "Recognition And Rewards For Excellence"].map((title, i) => (
              <div key={i} className="p-8 bg-white rounded-xl shadow-md">
                <div className="mx-auto mb-4 w-10 h-10 bg-gray-300 rounded-full"></div>
                <h3 className="font-semibold mb-3">{title}</h3>
                <p className="text-sm text-gray-600">
                  {title === "Hybrid & Flexible Work Options" &&
                    "We offer hybrid work models and flexible schedules to balance work and life."}
                  {title === "R&D-Focused Projects With Global Clients" &&
                    "Engage in cutting-edge research and development projects that have a global impact."}
                  {title === "Regular Hackathons & Innovation Sprints" &&
                    "Our hackathons and innovation sprints give teams the chance to experiment and innovate."}
                  {title === "Inclusive, Diverse, And Growth-Oriented Culture" &&
                    "We embrace inclusivity, mentoring, and personal development for all team members."}
                  {title === "Recognition And Rewards For Excellence" &&
                    "From performance-based rewards to peer recognition, success is best when shared."}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-3">Ready to Solve</h2>
          <p className="text-xl font-medium mb-6">What's Next With OphoTech?</p>
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Let's Start →
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
