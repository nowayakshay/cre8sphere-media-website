import { ArrowRight, Bot, Newspaper, Palette, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const productStack = [
  {
    title: "GizmoGeek Hub",
    description: "Consumer tech platform",
    icon: Smartphone,
    colorClass: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "TechOrbis",
    description: "AI, EV, future tech",
    icon: Newspaper,
    colorClass: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Origin8",
    description: "Branding, storytelling, and digital design",
    icon: Palette,
    colorClass: "bg-violet-50 text-violet-600"
  },
  {
    title: "AI Studio",
    description: "Repurplex, Refyn AI, Newstrix",
    icon: Bot,
    colorClass: "bg-teal-50 text-teal-600"
  }
];

function HeroSection() {
  const headingWords = ["Cre8sphere", "Media"];

  return (
    <section className="pt-8 sm:pt-10 pb-16 lg:pb-24 overflow-hidden">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell hero-showcase border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="hero-orb hero-orb-a absolute -left-12 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.14),transparent_72%)] blur-2xl" />
              <div className="hero-orb hero-orb-b absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,164,0.1),transparent_74%)] blur-3xl" />
              <div className="absolute bottom-4 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border border-teal-100/70" />
              <div className="hero-ribbon hero-ribbon-a" />
              <div className="hero-ribbon hero-ribbon-b" />
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              {/* Left Column: Text */}
              <div className="text-left max-w-2xl pt-0 lg:pt-0">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                >
                  EXPLORING TOMORROW&apos;S TECHNOLOGY TODAY
                </motion.span>

                <h1 className="mt-3 text-4xl font-semibold leading-[1.03] tracking-tight text-slate-950 sm:mt-4 sm:text-5xl lg:text-[60px]">
                  {headingWords.map((word, index) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 + index * 0.1 }}
                      className={index === 1 ? "gradient-text ml-3" : ""}
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                  className="mt-5 max-w-[600px] space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  <p>
                    Cre8sphere Media is a digital media and AI product company focused on technology, artificial intelligence, electric mobility, and digital innovation.
                  </p>
                  <p>
                    We build and operate a growing ecosystem of platforms, AI tools, and creative solutions through our media, AI, and creative divisions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
                  className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
                >
                  <a
                    href="#platforms"
                    className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-[28px] bg-[#008080] px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#0a6d6d] hover:shadow-[0_14px_26px_rgba(13,148,136,0.22)]"
                  >
                    Explore Our Platforms
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#about"
                    className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-[28px] border border-[#008080] bg-white px-8 font-semibold text-[#008080] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-teal-50 hover:text-[#0a6d6d] hover:shadow-[0_10px_18px_rgba(15,23,42,0.08)]"
                  >
                    Learn More About Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.48 }}
                  className="mt-8 text-sm font-medium leading-relaxed text-slate-600 sm:text-base"
                >
                  3+ Platforms • 6+ Coverage Areas • Technology, AI, Electric Mobility, Digital Innovation
                </motion.p>
              </div>

              {/* Right Column: Visual System */}
              <div className="relative mt-10 w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto lg:mt-0">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.1),transparent_72%)]" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-2xl border border-teal-100 bg-teal-50/70" />

                <div className="surface-card relative z-10 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_34px_-16px_rgba(15,23,42,0.14)] sm:p-7">
                  <div className="rounded-[20px] border border-teal-100/70 bg-gradient-to-b from-teal-50/75 to-white p-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                      <span className="inline-block h-2 w-2 rounded-full bg-teal-500" />
                      Building ecosystem preview...
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {productStack.map((product) => (
                      <div key={product.title} className="flex items-center gap-4 rounded-[16px] border border-slate-200/80 bg-white px-4 py-3 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                        <div className={`inline-flex items-center justify-center h-11 w-11 flex-shrink-0 rounded-[12px] ${product.colorClass}`}>
                          <product.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-slate-950">{product.title}</h3>
                          <p className="text-sm leading-relaxed text-slate-500">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>

      {/* Banner Below Hero */}
      <div className="mt-16 sm:mt-24 border-t border-slate-100 bg-slate-50/50 py-6 text-center px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500">
          A MULTI-PLATFORM MEDIA AND AI ECOSYSTEM BUILT FOR THE FUTURE OF TECHNOLOGY.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
