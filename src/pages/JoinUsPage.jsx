import { ArrowRight, Pen, Cpu, Rocket, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import Seo from "../components/Seo";

const audience = [
  {
    icon: Pen,
    title: "Writers & Creators",
    description: "Contribute articles, insights, and ideas across our platforms."
  },
  {
    icon: Cpu,
    title: "Tech Enthusiasts",
    description: "Share your perspective on emerging technologies and innovation."
  },
  {
    icon: Rocket,
    title: "Founders & Builders",
    description: "Collaborate on ideas, tools, and early-stage products."
  },
  {
    icon: Briefcase,
    title: "Brands & Partners",
    description: "Work with us on content, distribution, and storytelling."
  }
];

const waysToWork = [
  "Write for GizmoGeek Hub",
  "Contribute to TechOrbis",
  "Collaborate with Origin8 (branding / media)",
  "Early access + feedback for AI tools",
  "Co-create products and experiments"
];

const whatYouGet = [
  "Platform exposure",
  "Personal brand growth",
  "Real ecosystem experience",
  "Early access to tools",
  "Long-term collaboration opportunities"
];

const steps = [
  { num: "01", title: "Apply / Reach out", desc: "Tell us who you are and what you want to build." },
  { num: "02", title: "We review & connect", desc: "Our team reviews your profile and gets in touch." },
  { num: "03", title: "Start collaborating", desc: "Jump into a platform, project, or product." },
  { num: "04", title: "Grow within ecosystem", desc: "Build your presence and impact across Cre8sphere." }
];

function JoinUsPage() {
  return (
    <div className="internal-page bg-brand-bg text-brand-text">
      <Seo
        title="Join Cre8sphere Media"
        description="Be part of a growing ecosystem at the intersection of technology, media, and AI. Collaborate with Cre8sphere Media."
        path="/join"
      />
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageHeroSection
          title="Join Cre8sphere"
          description="Be part of a growing ecosystem at the intersection of technology, media, and AI. Work with platforms, contribute ideas, and collaborate on products shaping the future."
        />

        {/* Who This Is For */}
        <section className="py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px] mb-10">Who This Is For</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {audience.map((item) => (
                  <article key={item.title} className="surface-card p-7 text-left">
                    <div className="feature-chip h-11 w-11 rounded-[28px]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Ways to Work / What You Get */}
        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <div className="grid gap-6 lg:grid-cols-2">
                <article className="surface-card p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950">Ways to Work With Us</h2>
                  <ul className="mt-6 space-y-4">
                    {waysToWork.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="surface-card p-8 bg-teal-50 border-teal-100">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950">What You Get</h2>
                  <ul className="mt-6 space-y-4">
                    {whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* How It Works */}
        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px] mb-10">How It Works</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <article key={step.num} className="surface-card p-7 text-left">
                    <span className="text-4xl font-bold text-teal-100">{step.num}</span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.desc}</p>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* CTA */}
        <section className="pb-16 sm:pb-24">
          <PageContainer>
            <SectionReveal>
              <div className="surface-card bg-slate-50 border-slate-200 p-10 sm:p-14 text-center rounded-[28px]">
                <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px]">
                  Start Your Journey with Cre8sphere
                </h2>
                <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto">
                  Submit your details and let us know how you want to collaborate.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:contact@cre8sphere.in?subject=Collaboration%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 rounded-[28px] bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-teal-700"
                  >
                    Apply to Collaborate <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-[28px] border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-teal-300 hover:text-teal-600"
                  >
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default JoinUsPage;


