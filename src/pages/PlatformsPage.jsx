import { ArrowRight, Bot, Newspaper, Palette, Smartphone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import Seo from "../components/Seo";
import { motion } from "framer-motion";

const platformList = [
  {
    title: "GizmoGeek Hub",
    description: "Consumer technology platform focused on smartphones, gadgets, and practical tech insights that simplify everyday digital life.",
    icon: Smartphone,
    href: "https://gizmogeekhub.com/",
    cta: "Visit Platform",
    color: "text-cyan-600",
    bg: "bg-cyan-50"
  },
  {
    title: "TechOrbis",
    description: "Future-focused platform exploring artificial intelligence, electric mobility, and emerging technologies shaping the next generation of innovation.",
    icon: Newspaper,
    href: "https://techorbis.in/",
    cta: "Visit Platform",
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Origin8",
    description: "A specialized branding and digital design agency focused on visual storytelling and high-impact identity for the tech-first world.",
    icon: Palette,
    href: "https://origin8agency.in/",
    cta: "Learn More",
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
  {
    title: "AI Studio",
    description: "Our dedicated research and product wing building next-generation AI tools like Repurplex, Refyn AI, and Newstrix for creators.",
    icon: Bot,
    href: "https://ai.cre8sphere.in",
    cta: "Explore Tools",
    color: "text-[#008080]",
    bg: "bg-[#F2F9F9]"
  }
];

function PlatformsPage() {
  return (
    <div className="internal-page min-h-screen bg-white">
      <Seo 
        title="Our Platforms | Cre8sphere Media" 
        description="Explore the Cre8sphere Media ecosystem — from consumer tech and AI innovation to digital design and creative storytelling."
        path="/platforms"
      />
      <Navbar />

      <main>
        {/* ── Hero section ── */}
        <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-3xl">
                <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h1 className="text-[32px] font-bold tracking-tight text-black sm:text-[48px]">
                  Our Platforms
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#6B7280] sm:text-xl">
                  Cre8sphere Media operates a diverse ecosystem of platforms designed 
                  to bridge the gap between technology and everyday users.
                </p>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* ── Platforms Grid section ── */}
        <section className="py-20 sm:py-32">
          <PageContainer>
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
              {platformList.map((platform, index) => (
                <SectionReveal key={platform.title} delay={index * 0.1}>
                  <div className="group relative border-t border-slate-100 pt-10">
                    {/* Hover indicator strip */}
                    <div className="absolute -inset-x-4 -top-px h-[2px] w-[60px] bg-[#008080] opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                    
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      {/* Icon */}
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${platform.bg} ${platform.color} transition-transform duration-300 group-hover:scale-110`}>
                        <platform.icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-black sm:text-3xl">
                          {platform.title}
                        </h2>
                        <p className="mt-4 text-[16px] leading-relaxed text-[#6B7280] sm:text-[17px]">
                          {platform.description}
                        </p>
                        
                        <a
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#008080] transition-colors hover:text-[#006666]"
                        >
                          {platform.cta}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* ── Final CTA ── */}
        <section className="border-t border-slate-100 py-20 sm:py-32">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-black sm:text-3xl">
                  Interested in collaborating with us?
                </h3>
                <p className="mt-4 text-[#6B7280]">
                  Whether you are looking for design expertise or media partnerships, we are 
                  always open to new creative opportunities.
                </p>
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-[28px] bg-[#008080] px-8 font-bold text-white transition-all hover:bg-[#006666] hover:-translate-y-0.5"
                  >
                    Contact Us
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

export default PlatformsPage;
