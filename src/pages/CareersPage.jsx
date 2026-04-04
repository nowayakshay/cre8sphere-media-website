import { ArrowRight, Zap, Layers, Users, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import Seo from "../components/Seo";

const whyWork = [
  { title: "Build from 0 to 1", desc: "Work on products and platforms from early stages." },
  { title: "Real Platforms & Products", desc: "Not just concepts - real, live platforms with real audiences." },
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
        <section className="py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px] mb-10">Why Work With Us</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {whyWork.map((item) => (
                  <article key={item.title} className="surface-card p-7 flex items-start gap-5">
                    <span className="h-2.5 w-2.5 mt-2 flex-shrink-0 rounded-full bg-teal-500" />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Culture */}
        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px] mb-10">Our Culture</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {culture.map((item) => (
                  <article key={item.title} className="surface-card p-7 text-left">
                    <div className="feature-chip h-11 w-11 rounded-[28px]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* What We're Building */}
        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px] mb-10">What We're Building</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {building.map((group) => (
                  <article key={group.label} className="surface-card p-7">
                    <p className="text-xs font-bold tracking-widest uppercase text-teal-600 mb-4">{group.label}</p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-base font-semibold text-slate-900">{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Open Roles */}
        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <div className="surface-card p-10 sm:p-12 text-center border-dashed border-2 border-slate-200 bg-slate-50/60">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">No Open Roles Currently</h2>
                <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-slate-600">
                  We are not actively hiring right now, but we are always looking for talented individuals who align with our vision.
                </p>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Future Roles */}
        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <h2 className="text-[28px] font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-[34px] mb-8">Future Roles We're Planning</h2>
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
        <section className="pb-16 sm:pb-24">
          <PageContainer>
            <SectionReveal>
              <div className="surface-card bg-slate-50 p-10 sm:p-14 text-center rounded-[28px]">
                <h2 className="text-3xl font-bold tracking-tight text-slate-950">Interested in Working With Us?</h2>
                <p className="mt-4 max-w-lg mx-auto text-base text-slate-600">
                  Send your profile and let us know what you want to build.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="mailto:contact@cre8sphere.in?subject=Career%20Profile"
                    className="inline-flex items-center justify-center gap-2 rounded-[28px] bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-teal-700"
                  >
                    Send Your Profile <ArrowRight className="h-4 w-4" />
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

export default CareersPage;


