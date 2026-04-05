import { ArrowRight, Bot, Newspaper, Palette, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

const productStack = [
  {
    title: "GizmoGeek Hub",
    description: "Consumer tech platform",
    icon: Smartphone,
    colorClass: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "TechOrbis",
    description: "AI, EV, future tech",
    icon: Newspaper,
    colorClass: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Origin8",
    description: "Branding, storytelling, and digital design",
    icon: Palette,
    colorClass: "bg-violet-50 text-violet-600",
  },
  {
    title: "AI Studio",
    description: "Repurplex, Refyn AI, Newstrix",
    icon: Bot,
    colorClass: "bg-[#F2F9F9] text-[#008080]",
  },
];

function HeroSection() {
  const headingWords = ["Cre8sphere", "Media"];

  return (
    <section className="pt-10 sm:pt-20 pb-16 lg:pb-24 overflow-hidden">
      <PageContainer>
        <div className="saas-shell hero-showcase border border-slate-200 bg-white p-6 sm:p-8 lg:p-10">
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-orb hero-orb-a absolute -left-12 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.14),transparent_72%)] blur-2xl" />
            <div className="hero-orb hero-orb-b absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,164,0.1),transparent_74%)] blur-3xl" />
            <div className="absolute bottom-4 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full border border-[#008080]/10" />
            <div className="hero-ribbon hero-ribbon-a" />
            <div className="hero-ribbon hero-ribbon-b" />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* ── Left: Text ── */}
            <div className="text-left flex flex-col items-start">

              {/* Tagline — enhanced gradient + weight */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="inline-block text-[11px] font-extrabold uppercase tracking-[0.28em] bg-gradient-to-r from-[#006666] via-[#008080] to-[#00b3b3] bg-clip-text text-transparent"
              >
                Exploring Tomorrow&apos;s Technology Today
              </motion.span>

              {/* H1 */}
              <h1 className="mt-4">
                {headingWords.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 + index * 0.1 }}
                    className={index === 1 ? "gradient-text italic block sm:inline pr-2" : ""}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </h1>

              {/* Hook line */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.28 }}
                className="mt-3 text-[17px] sm:text-[18px] font-medium leading-snug text-[#333333] max-w-[480px]"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                Building the future of digital media and AI platforms.
              </motion.p>

              {/* Body copy */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.38 }}
                className="mt-5 readable-text space-y-4"
              >
                <p>
                  Cre8sphere Media is a digital media and AI product company
                  focused on technology, artificial intelligence, electric
                  mobility, and digital innovation.
                </p>
                <p>
                  We build and operate a growing ecosystem of platforms, AI
                  tools, and creative solutions through our media, AI, and
                  creative divisions.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.48 }}
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto"
              >
                <Link
                  to="/platforms"
                  className="btn-premium btn-primary-glow whitespace-nowrap inline-flex h-12 items-center justify-center gap-2 rounded-[28px] bg-[#008080] px-5 sm:px-8 font-semibold text-white hover:bg-[#006666] hover:text-white"
                >
                  Explore Our Platforms
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="btn-premium whitespace-nowrap inline-flex h-12 items-center justify-center gap-2 rounded-[28px] border border-[#008080] bg-white px-5 sm:px-8 font-semibold text-[#008080] hover:bg-[#008080] hover:border-[#008080] hover:text-white"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Stats ticker */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.56 }}
                className="mt-10 inline-block text-sm font-bold tracking-wide text-slate-700"
              >
                3+ Platforms • 6+ Coverage Areas
              </motion.div>
            </div>

            {/* ── Right: Ecosystem card ── */}
            <div className="relative mt-10 w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto lg:mt-0">

              {/* Soft teal glow behind card */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[72px]"
                style={{ background: "radial-gradient(circle, rgba(0,128,128,0.18) 0%, transparent 70%)" }}
              />

              {/* Corner accent */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-2xl border border-[#008080]/10 bg-[#F2F9F9]/70" />

              {/* Glassmorphism card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="relative z-10 rounded-[28px] p-6 sm:p-7"
                style={{
                  background: "rgba(255, 255, 255, 0.72)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(0, 128, 128, 0.12)",
                  boxShadow: "0 8px 32px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(0,128,128,0.06)",
                }}
              >
                {/* Status badge */}
                <div className="rounded-[20px] border border-[#008080]/10 bg-gradient-to-b from-[#F2F9F9]/75 to-white p-4 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#008080]/10 bg-white px-3 py-1 text-[13px] font-medium text-slate-700">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#008080] animate-pulse" />
                    Building core ecosystem...
                  </div>
                </div>

                {/* Product rows */}
                <div className="mt-5 space-y-3">
                  {productStack.map((product, i) => (
                    <motion.div
                      key={product.title}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.35 + i * 0.07 }}
                      className="flex items-center gap-4 rounded-[16px] border border-slate-200/80 bg-white px-4 py-3 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                    >
                      <div className={`inline-flex items-center justify-center h-11 w-11 flex-shrink-0 rounded-[12px] ${product.colorClass}`}>
                        <product.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3>{product.title}</h3>
                        <p className="subtext mt-0.5">{product.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* Banner Below Hero */}
      <div className="mt-16 sm:mt-24 border-t border-slate-100 bg-slate-50/50 py-10 text-center px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500 leading-relaxed max-w-3xl mx-auto italic">
          A MULTI-PLATFORM MEDIA AND AI ECOSYSTEM BUILT FOR THE FUTURE OF TECHNOLOGY.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
