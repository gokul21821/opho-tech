import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RichTextRenderer } from "@/components/Common/RichTextRenderer";
import { ContentDetailHeroSection } from "@/components/ui/ContentDetailHeroSection";
import { SocialShareCard } from "@/components/ui/SocialShareCard";
import { RecentContentCard } from "@/components/ui/RecentContentCard";
import { CTASection } from "@/components/sections/CTASection";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Bridging the Digital Gap in Manufacturing: How AI-Led RAR Cut IT Decision Time by 60%";
  const description = "Discover how OphoTech's AI-driven Business Research and Analysis (RAR) framework helped a manufacturing company streamline technology decisions, reduce vendor overlap, and achieve 60% faster IT decision-making.";

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const caseStudyUrl = `${baseUrl}/case-studies/manufacturing-ai-transformation`;

  // Use the framework image as the hero image for social sharing
  const absoluteImageUrl = `${baseUrl}/images/case/framework.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: caseStudyUrl,
      type: "article",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteImageUrl],
    },
  };
}

export default function ManufacturingAITransformationPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ophotech.com";
  const caseStudyUrl = `${baseUrl}/case-studies/manufacturing-ai-transformation`;

  // Static case study data
  const caseStudy = {
    id: "manufacturing-ai-transformation",
    title: "Bridging the Digital Gap in Manufacturing: How AI-Led RAR Cut IT Decision Time by 60%",
    date: "2025-11-06",
    author: {
      username: "admin"
    },
    description: `
<h2>Executive Summary</h2>
<p><strong>EcoShop Club</strong>, a mid-sized manufacturing company faced serious delays in technology approvals and struggled to measure the ROI of its digital investments. OphoTech applied its AI-driven <strong>Business Research and Analysis (RAR)</strong> framework to identify gaps in technology use, prioritize investments, and deliver a clear execution plan. In a short span, the organization streamlined technology decisions, reduced vendor overlap, and built cross-functional alignment around clear digital investment priorities.</p>

<h3>Client Overview</h3>
<ul>
<li><strong>Industry:</strong> Manufacturing</li>
<li><strong>Challenge:</strong> Outdated software, limited digital capabilities, and no quantifiable return on technology investments</li>
<li><strong>Engagement Model:</strong> <strong>Business Research and Analysis (RAR)</strong></li>
<li>The client had invested in multiple digital and automation projects, but each plant ran its own pilot initiatives with different vendors. Without a systematic approach or reliable data, as described in Fig.1, the leadership team struggled to approve budgets confidently or assess the impact of ongoing technology programs.</li>
</ul>

<p>The company needed a structured, data-backed framework to connect technology investments with measurable business value.</p>

<div style="text-align: center; margin: 2rem 0;">
  <Image
    src="/images/case/keyop.png"
    alt="Key operational challenges in manufacturing digital transformation"
    width={800}
    height={400}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
</div>

<h3>Key Pain Points</h3>
<ul>
<li>Legacy ERP systems restricted access to production, energy, and maintenance data, making performance tracking difficult.</li>
<li>Independent automation projects led to duplication of effort, budget overspend, and inconsistent reporting across plants.</li>
<li>IT approvals were delayed due to the absence of clear ROI validation and impact metrics.</li>
<li>Resistance to change and unclear ownership slowed digital adoption across teams.</li>
<li>Overlapping licenses and redundant vendor contracts inflated technology spending without delivering proportional value.</li>
<li>The company needed a structured, data-backed framework to connect technology investments with measurable business value.</li>
</ul>

<h3>Our Approach</h3>
<p>OphoTech applied its Business Research and Analysis (RAR) framework to identify inefficiencies, clarify priorities, and chart a focused digital transformation path for the client. The engagement combined stakeholder insights with AI-driven analytics to ensure every recommendation was backed by data and business context.</p>

<h4>Key Steps</h4>
<ul>
<li><strong>Stakeholder Discovery:</strong> Conducted in-depth interviews with over 23 stakeholders across operations, finance, IT, and sales to capture real goals and on-ground challenges.</li>
<li><strong>AI-Driven Diagnostics:</strong> Used Agentic AI to analyze ERP logs, maintenance reports, and approval workflows to uncover rework loops, process bottlenecks, and redundant tools.</li>
<li><strong>Business Priority Definition:</strong> Identified five core priorities: real-time production visibility, predictive maintenance, energy cost optimization, advanced analytics, and data-driven decision-making.</li>
<li><strong>Readiness and ROI Scoring:</strong> Evaluated each business unit's digital maturity and need for change using AI-based scoring to prioritize initiatives by feasibility and impact.</li>
<li><strong>Strategic Initiative Design:</strong> Developed action plans that were aligned to measurable ROI potential and ease of implementation.</li>
<li><strong>Phased Transformation Roadmap:</strong> Outlined a clear, staged roadmap covering near term wins, foundational improvements, and scalable long-term initiatives, each with defined KPIs, ownership, and budget allocation.</li>
</ul>

<h3>Solution Delivered</h3>

<h4>1. Strategic Execution Plan</h4>
<p>OphoTech created a board-approved roadmap citing outcome-based initiatives. Each recommendation was backed by AI-led ROI modelling and implementation feasibility data.</p>

<h4>2. Phased Implementation Roadmap</h4>
<p>The roadmap was executed in three phases as found in Fig.2:</p>
<ul>
<li><strong>Immediate Impact:</strong> Automated reporting and maintenance tracking within 90 days to demonstrate quick, visible results.</li>
<li><strong>Foundation:</strong> Streamlined ERP system usage, improved data accuracy, and standardized licensing.</li>
<li><strong>Scale-Up:</strong> Introduced predictive analytics and performance dashboards to enable continuous improvement.</li>
</ul>
<div style="text-align: center; margin: 2rem 0;">
  <Image
    src="/images/case/solution.png"
    alt="Three-phase transformation roadmap"
    width={800}
    height={400}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
</div>

<h4>3. Business Unit Prioritization</h4>
<p>Using OphoTech's AI-powered prioritization framework, each initiative was ranked by readiness, ROI potential, and strategic relevance. It helped the client focus resources on high value, high-impact projects.</p>

<h4>4. Vendor and Technology Rationalization</h4>
<p>Agentic AI analysed license use and vendor overlap, reducing redundancy and simplifying vendor management.</p>

<h4>5. Governance Dashboards</h4>
<p>Custom dashboards were built to track progress, cost efficiency, and ROI in real time. Executives could now monitor project outcomes, approve budgets faster, and sustain visibility across all digital programs.</p>

<h3>Business Impact</h3>

<div style="text-align: center; margin: 2rem 0;">
  <Image
    src="/images/case/impact.png"
    alt="Business impact metrics and results"
    width={800}
    height={400}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
</div>

<h4>Rationale for Metrics</h4>
<p>All metrics are based on stakeholder surveys, system analytics, and internal approval data collected before and after the six-month RAR implementation cycle.</p>

<h4>1. Strategic Focus (30% → 70%)</h4>
<p><strong>Assumption Basis:</strong></p>
<ul>
<li>Derived from an internal alignment index calculated through stakeholder interviews and survey scoring.</li>
<li>Each business unit was rated on how well its initiatives aligned with corporate goals (scale of 1-10).</li>
<li>Before RAR: only 3 out of 10 initiatives were directly aligned.</li>
<li>After RAR: 7 out of 10 initiatives were aligned, verified through roadmap validation workshops.</li>
</ul>
<p><strong>Hypothesis:</strong> RAR's structured prioritization improved cross-departmental understanding and reduced initiative overlap, creating a 133% lift in alignment.</p>

<div style="text-align: center; margin: 2rem 0;">
  <Image
    src="/images/case/performance.png"
    alt="Performance metrics and strategic focus improvement"
    width={800}
    height={400}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
</div>

<h4>2. Budget Approval Rate (20% → 80%)</h4>
<p><strong>Assumption Basis:</strong></p>
<ul>
<li>Based on the number of digital projects approved in the annual planning cycle.</li>
<li>Before RAR: 2 out of 10 project proposals received funding.</li>
<li>After RAR: 8 out of 10 received funding, since each included validated ROI data and feasibility scoring.</li>
</ul>
<p><strong>Hypothesis:</strong> Agentic AI-backed ROI models and cost-benefit justifications increased executive confidence, improving the approval rate fourfold.</p>

<h4>3. IT Decision Time (6 weeks → 2.5 weeks)</h4>
<p><strong>Assumption Basis:</strong></p>
<ul>
<li>Calculated from IT ticket and budget approval logs (average time from proposal submission to decision).</li>
<li>Before RAR: Fragmented data and unclear ownership delayed approvals.</li>
<li>After RAR: Defined roles, standardized templates, and integrated dashboards reduced average turnaround by 60%.</li>
</ul>
<p><strong>Hypothesis:</strong> RAR's governance dashboards and decision frameworks reduced cross departmental miscommunications, accelerating response time.</p>

<h4>4. Technology Pilots (7 pilots → 1 ecosystem)</h4>
<p><strong>Assumption Basis:</strong></p>
<ul>
<li>Count of concurrent automation or digital pilots across business units.</li>
<li>Before RAR: 7 pilots ran independently.</li>
<li>After RAR: unified under one validated, vendor-optimized ecosystem.</li>
</ul>
<p><strong>Hypothesis:</strong> Vendor rationalization through RAR eliminated redundancies and consolidated technology under a single strategic direction.</p>

<h3>Key Results</h3>
<ul>
<li>Increased approvals for IT and capital expenditure supported by ROI data.</li>
<li>Less uncoordinated pilot launches and reduced licensing costs.</li>
<li>Improved coordination between IT, operations, and leadership teams.</li>
<li>Measurable ROI within six months.</li>
</ul>

<h3>Strategic Value</h3>
<p>OphoTech's engagement created long-term clarity and control for leadership, operations, and IT teams. Besides making quick decisions, the organization gained a framework to sustain digital progress and measure its success continuously.</p>

<div style="text-align: center; margin: 2rem 0;">
  <Image
    src="/images/case/framework.png"
    alt="OphoTech RAR framework overview"
    width={800}
    height={400}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
</div>

<h4>For Leadership</h4>
<ul>
<li>Gained a clear link between technology investments and business outcomes.</li>
<li>Accelerated decision-making with transparent ROI data.</li>
<li>Improved cross-functional collaboration and accountability.</li>
</ul>

<h4>For Operations</h4>
<ul>
<li>Focused technology use on solving real production and efficiency challenges.</li>
<li>Minimized disruption through phased implementation.</li>
<li>Built early confidence through visible, impactful results.</li>
</ul>

<h4>For IT</h4>
<ul>
<li>Reduced ad-hoc requests and unmanaged pilots.</li>
<li>Simplified license management and budgeting.</li>
<li>Established governance dashboards for real-time visibility and proactive planning.</li>
</ul>

<h3>Why RAR is Different</h3>
<p>Many consulting approaches stop at analysis or strategy slides. OphoTech's Business Research and Analysis (RAR) framework goes further by combining expert insights with Agentic AI to deliver data-backed, execution-ready outcomes.</p>

<div style="text-align: center; margin: 2rem 0;">
  <Image
    src="/images/case/table.png"
    alt="Comparison between typical consulting and OphoTech RAR framework"
    width={800}
    height={400}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
</div>

<h3>Key Learnings</h3>
<ul>
<li>Align digital initiatives with quantifiable business outcomes before scaling pilots.</li>
<li>Use readiness and ROI scoring to prioritize investments effectively.</li>
<li>Establish ownership and governance early to maintain transformation momentum.</li>
</ul>

<h3>Testimonial</h3>
<BackgroundDots
  className="py-16"
  spacing={36}
  dotSize={2.5}
  backgroundColor=""
  dotColor="#D9D9D9"
  style={{
    background: "linear-gradient(to bottom, #ffffff 38.524%, #feecd6 171.52%)",
  }}
>
  <div className="px-[8%]">
    <div className="mx-auto max-w-[1200px]">
      <div className="text-center">
        <blockquote className="text-lg italic text-gray-700 mb-4">
          "What stood out about OphoTech was their ability to connect business goals with real execution strategy. They understood our digital ambitions and converted them into actionable steps, that gave us visibility we never had before. It changed how our leadership approaches technology decisions."
        </blockquote>
        <cite className="text-orange-600 font-semibold">— CIO, Manufacturing Client</cite>
      </div>
    </div>
  </div>
</BackgroundDots>
    `
  };

  return (
    <>
      <Header />
      <ContentDetailHeroSection
        title={caseStudy.title}
        date={caseStudy.date}
        author={caseStudy.author.username}
        contentType="case-studies"
      />
      <main className="bg-white px-[8%] py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            {/* Main Content - 70% */}
            <article className="flex-1 lg:w-[70%]">
              <RichTextRenderer content={caseStudy.description} />
            </article>

            {/* Sidebar - 30% */}
            <aside className="lg:w-[30%]">
              <SocialShareCard
                title={caseStudy.title}
                url={caseStudyUrl}
                contentType="case-studies"
              />
              <RecentContentCard contentType="case-studies" currentId={caseStudy.id} />
            </aside>
          </div>
        </div>
      </main>
      <div className="flex justify-center">
        <Image
          src="/images/horizontalline.svg"
          alt=""
          width={1200}
          height={3}
          className="w-full max-w-5xl"
          aria-hidden
        />
      </div>
      <CTASection variant="ready" />
      <Footer />
    </>
  );
}