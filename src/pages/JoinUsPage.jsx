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
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="mb-12">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                <h2>Who This Is For</h2>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {audience.map((item) => (
                  <div key={item.title} className="flex flex-col gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3>{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Ways to Work / What You Get */}
        <section className="py-20 sm:py-24 bg-slate-50/60">
          <PageContainer>
            <SectionReveal>
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                   <div className="mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                  <h2>Ways to Work With Us</h2>
                  <ul className="mt-8 space-y-5">
                    {waysToWork.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#008080]" />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-8 h-1 w-12 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                  <h2>What You Get</h2>
                  <ul className="mt-8 space-y-5">
                    {whatYouGet.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600" />
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* How It Works */}
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="mb-12">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>How It Works</h2>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex flex-col gap-3">
                    <span className="text-4xl font-bold text-[#008080]/10">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-24 text-center bg-slate-50/60">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-xl mx-auto">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-teal-600 to-teal-400 mx-auto" />
                <h2>Start Your Journey with Cre8sphere</h2>
                <p className="mt-6 readable-text">
                  Submit your details and let us know how you want to collaborate.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:contact@cre8sphere.in?subject=Collaboration%20Inquiry"
                    className="inline-flex items-center justify-center gap-2 rounded-[28px] bg-[#008080] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006666] hover:text-white"
                  >
                    Apply to Collaborate <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-[28px] border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#008080] hover:border-[#008080] hover:text-white"
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
