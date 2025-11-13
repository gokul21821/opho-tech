import {Footer} from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/ui/HeroSection";
import Image from "next/image";

export default function Careers() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      {/* HERO SECTION */}
      <HeroSection
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
        title="Join Us in Shaping the Future of AI & Cloud"
        subtitle="We are more than a technology company — we are a research and development hub where brilliant minds come together to build the next generation of SaaS and PaaS solutions. If you’re passionate about AI, data science, and cloud innovation, this is where you belong."
        contentAlignment="center"
      />

          <main className="relative z-10 flex flex-col">

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
            {[{
              title: "Innovation First",
              icon: "/images/icons/intelligent.svg",
              description: "Every project starts with research, giving you space to explore and create."
            }, {
              title: "Cutting-Edge Tools",
              icon: "/images/icons/ai-agent.svg",
              description: "Work with AI/ML, cloud-native platforms, and next-gen software stacks."
            }, {
              title: "Collaborative Culture",
              icon: "/images/icons/handshake.svg",
              description: "We believe in Connect – Create – Evolve not just for clients, but also for our teams."
            }, {
              title: "Global Impact",
              icon: "/images/icons/cloud-db.svg",
              description: "Serve clients across North America, Europe, and Asia while shaping industries worldwide."
            }, {
              title: "Continuous Learning",
              icon: "/images/icons/paper-analysis.svg",
              description: "Training, certifications, and mentorship programs to help you grow."
            }].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition">
                <div className="mx-auto mb-4 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                  <Image src={item.icon} alt={`${item.title} icon`} width={22} height={22} className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
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
            {[{
              title: "Hybrid & Flexible Work Options",
              icon: "/images/icons/smart-work.svg",
              description: "We understand that innovation doesn't just happen at a desk. That's why we offer hybrid work models and flexible schedules that empower you to balance work and life. Whether you prefer collaborating in our offices or contributing remotely, we make sure you stay connected and supported."
            }, {
              title: "R&D-Focused Projects With Global Clients",
              icon: "/images/icons/globe.svg",
              description: "Here, you won't just work on routine tasks. You'll engage in cutting-edge research and development projects that have a real-world impact across North America, Europe, and Asia. From AI-driven platforms to scalable cloud architectures, every project challenges you to push boundaries."
            }, {
              title: "Regular Hackathons & Innovation Sprints",
              icon: "/images/icons/monitor-bulb.svg",
              description: "We thrive on creativity. Our hackathons and innovation sprints give teams the chance to experiment, prototype, and showcase new ideas. Many of our most impactful solutions started as hackathon concepts that evolved into client-ready innovations."
            }, {
              title: "Inclusive, Diverse, And Growth-Oriented Culture",
              icon: "/images/icons/growth.svg",
              description: "We know the best ideas come from diverse perspectives. Our culture embraces inclusivity and collaboration, ensuring every voice is heard. We invest in mentorship, training, and personal development so that every team member grows along with the company."
            }, {
              title: "Recognition And Rewards For Excellence",
              icon: "/images/icons/badge.svg",
              description: "Your hard work deserves to be celebrated. From performance-based rewards to peer recognition programs, we ensure contributions never go unnoticed. We believe success is best when it's shared."
            }].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-xl shadow-md">
                <div className="mx-auto mb-4 h-11 w-11 rounded-full bg-[#FFE3D3] grid place-items-center">
                  <Image src={item.icon} alt={`${item.title} icon`} width={22} height={22} className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
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
