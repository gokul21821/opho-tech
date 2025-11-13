export default function LeadershipPage() {
      return (
        <main className="bg-white text-gray-800">
          {/* Hero Section */}
          <section className="relative bg-blue-900 text-white py-24 px-6 text-center">
            <div className="absolute inset-0 bg-[url('/placeholder-blue-bg.png')] bg-cover bg-center opacity-60"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-4">Leadership Team</h1>
              <p className="text-base leading-relaxed">
                Leading with empathy, transparency, and a relentless focus on outcomes that drive real growth.
              </p>
            </div>
          </section>
    
          {/* Team Grid */}
          <section className="py-16 px-6 bg-gradient-to-b from-white to-orange-50">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
              {[{
                name: 'Mr. Bhavneet Walia',
                title: 'Founder',
              },{
                name: 'Mr. Shivender Sofat',
                title: 'Advisory Board Member',
              },{
                name: 'Mr. Rajveer Singh',
                title: 'Advisory Board Member',
              },{
                name: 'Dr. Vijay Varadi, PhD',
                title: 'Director',
              }].map((person, i) => (
                <div key={i} className="bg-white shadow-sm rounded-xl p-6">
                  <div className="mx-auto mb-4 w-32 h-32 bg-gray-300 rounded-md"></div>
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
                  Mr. Bhavneet Walia is the Founder & Chief Executive Officer of OphoTech with a distinguished track record in
                  enterprise AI leadership and strategic innovation management. Based in Toronto with global partnerships across
                  North America, Europe, and the APAC region, he excels in aligning research initiatives with commercial
                  production while maintaining compliance and governance standards. His leadership extends beyond corporate
                  boundaries through his roles in high-performance computing collaboration and community impact initiatives.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gray-300 rounded-md"></div>
              </div>
            </div>
    
            {/* Shivender Sofat */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:order-1">
                <div className="w-48 h-48 bg-gray-300 rounded-md"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Mr. Shivender Sofat</h3>
                <p className="text-orange-600 font-medium mb-4">Advisory Board Member</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mr. Shivender Sofat is a distinguished cross-border finance and assurance leader who enables organizational
                  growth through strong controls, transparency, and compliance. Holding multiple prestigious certifications,
                  he is a globally recognized expert in finance and risk management, contributing to anti-money laundering and
                  financial crime prevention initiatives.
                </p>
              </div>
            </div>
    
            {/* Rajveer Singh */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-1">Mr. Rajveer Singh</h3>
                <p className="text-orange-600 font-medium mb-4">Advisory Board Member</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mr. Rajveer Singh brings exceptional public-sector leadership expertise in audit, policy design, and
                  infrastructure finance. A former senior member of the Indian Civil Service, he has worked with multiple
                  government institutions, contributing to policy frameworks in agriculture, law, and economics. His role at
                  OphoTech focuses on compliance with regulatory frameworks and maximizing impact through strategic alignment.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gray-300 rounded-md"></div>
              </div>
            </div>
    
            {/* Vijay Varadi */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:order-1">
                <div className="w-48 h-48 bg-gray-300 rounded-md"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1">Dr. Vijay Varadi, PhD</h3>
                <p className="text-orange-600 font-medium mb-4">Director</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dr. Vijay Varadi brings a unique interdisciplinary expertise that combines data science, economics, and
                  enterprise transformation. With a Ph.D. in Economics and a leadership certification from a leading business
                  school, he has established himself as a thought leader in applied AI. His work bridges theoretical research
                  with industry-driven innovation.
                </p>
              </div>
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
      );
    }
    