import { ArrowRight, Zap, Layers, Users, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import Seo from "../components/Seo";

const whyWork = [
  { title: "Build from 0 to 1", desc: "Work on products and platforms from early stages." },
  { title: "Real Platforms & Products", desc: "Not just concepts — real, live platforms with real audiences." },
  { title: "Media + AI Exposure", desc: "Gain hands-on experience across both media and AI product spaces." },
  { title: "Fast Learning Environment", desc: "Move quickly, learn deeply, and take ownership." }
];

const culture = [
  { icon: BookOpen, title: "Curiosity-Driven", desc: "We ask questions first and build second." },
  { icon: Zap, title: "Execution-Focused", desc: "Ideas matter, but shipping matters more." },
  { icon: Layers, title: "Lean & Ownership Mindset", desc: "Everyone owns their area fully." },
  { icon: Users, title: "Builders Over Titles", desc: "What you build defines you, not your designation." }
];

const building = [
  { label: "Media Platforms", items: ["GizmoGeek Hub", "TechOrbis"] },
  { label: "AI Tools", items: ["Repurplex", "Refyn AI", "Newstrix"] },
  { label: "Creative Systems", items: ["Origin8"] }
];

const futureRoles = [
  "Content Writers",
  "Product Builders",
  "Designers",
  "Developers",
  "Growth / Marketing"
];

function CareersPage() {
  return (
    <div className="internal-page bg-brand-bg text-brand-text">
      <Seo
        title="Careers at Cre8sphere Media"
        description="Join Cre8sphere Media - a modern digital ecosystem across media, AI, and technology."
        path="/careers"
      />
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageHeroSection
          title="Careers at Cre8sphere"
          description="We're building a modern digital ecosystem across media, AI, and technology. Join us if you want to build things that matter."
        />

        {/* Why Work With Us */}
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="mb-12">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Why Work With Us</h2>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                {whyWork.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="h-2 w-2 mt-3 flex-shrink-0 rounded-full bg-[#008080]" />
                    <div>
                      <h3>{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Culture */}
        <section className="py-20 sm:py-24 bg-slate-50/60">
          <PageContainer>
            <SectionReveal>
              <div className="mb-12">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Our Culture</h2>
              </div>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {culture.map((item) => (
                  <div key={item.title} className="flex flex-col gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3>{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* What We're Building */}
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="mb-12">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>What We&apos;re Building</h2>
              </div>
              <div className="grid gap-10 sm:grid-cols-3">
                {building.map((group) => (
                  <div key={group.label}>
                    <p className="mb-4 text-xs font-bold tracking-widest uppercase text-[#008080]">{group.label}</p>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-base font-semibold text-slate-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#008080] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* No Open Roles */}
        <section className="py-20 sm:py-24 bg-slate-50/60">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0] mx-auto" />
                <h2>No Open Roles Currently</h2>
                <p className="mt-6 readable-text">
                  We are not actively hiring right now, but we are always looking for talented individuals who align with our vision.
                </p>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Future Roles */}
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="mb-10">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Future Roles We&apos;re Planning</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {futureRoles.map((role) => (
                  <span key={role} className="rounded-[28px] border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">
                    {role}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Apply CTA */}
        <section className="py-20 sm:py-24 text-center">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-xl mx-auto">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0] mx-auto" />
                <h2>Interested in Working With Us?</h2>
                <p className="mt-6 readable-text">
                  Send your profile and let us know what you want to build.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:contact@cre8sphere.in?subject=Career%20Profile"
                    className="inline-flex items-center justify-center gap-2 rounded-[28px] bg-[#008080] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006666] hover:text-white"
                  >
                    Send Your Profile <ArrowRight className="h-4 w-4" />
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

export default CareersPage;
