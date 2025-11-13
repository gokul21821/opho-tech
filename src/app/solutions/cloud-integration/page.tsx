export default function CloudIntegrationPage() {
      return (
        <main className="bg-white text-gray-800">
          {/* Hero Section */}
          <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
            <div className="absolute inset-0 bg-[url('/placeholder-blue-bg.png')] bg-cover bg-center opacity-60"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Cloud Integration & Architecture</h1>
              <p className="text-base leading-relaxed">Building the Digital Backbone</p>
            </div>
          </section>
    
          {/* Overview Section */}
          <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
              <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
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
                outcome: 'Single source of truth for reliable decision-making and AI.'
              }, {
                title: 'Slow Scaling To Meet Peak Demand Or New Markets',
                solution: 'Hyper-Scalable Cloud Infrastructure (AWS, Azure, GCP and local partners).',
                outcome: 'Agility to enter new markets or handle massive growth instantly.'
              }, {
                title: 'High Maintenance Costs And Security Complexity',
                solution: 'Managed Services & Infrastructure-as-Code (IaC).',
                outcome: 'Reduced operational overhead and enhanced compliance/security posture.'
              }].map((item, i) => (
                <div key={i} className="p-6 bg-white shadow-md rounded-xl border border-gray-200 text-left">
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
                desc: 'We focus on cost-optimization and governance from the start, ensuring your cloud expenditure is efficient and aligned with business value.'
              }, {
                title: 'Seamless Integration Expertise',
                desc: 'We modernize legacy systems, migrate applications, and establish robust data pipelines for secure and reliable flows.'
              }, {
                title: 'Security By Design',
                desc: 'We implement enterprise-grade security and compliance frameworks to protect assets in the cloud environment.'
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
              {["Unified Data Environment For Reliable Analytics", "Scalable And Compliant Architecture", "Reduced Operational Costs And Maintenance", "Governance And FinOps Efficiency", "Faster Market Entry And Innovation Cycles"].map((benefit, i) => (
                <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="mx-auto mb-4 w-10 h-10 bg-gray-300 rounded-full"></div>
                  <p className="text-sm font-medium text-gray-700">{benefit}</p>
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
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
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
      );
    }
    