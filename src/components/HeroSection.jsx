import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Cpu, ShoppingBag, Zap } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

const categories = [
  { label: "AI & Automation", icon: Cpu },
  { label: "Consumer Products", icon: ShoppingBag },
  { label: "Media & Publishing", icon: Zap },
];

const stats = [
  { value: "7+", label: "Software Products" },
  { value: "4", label: "Active Divisions" },
  { value: "2", label: "Live AI Platforms" },
  { value: "2024", label: "Founded" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white py-20 lg:py-28" id="hero">
      {/* Glow & Dot Background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-[10%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,128,128,0.16)_0%,rgba(0,179,179,0.05)_50%,transparent_70%)] blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:40px_40px] opacity-75" />
      </div>

      <PageContainer>
        <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#008080]/20 bg-white/95 px-5 py-2 text-xs sm:text-sm font-bold text-[#008080] tracking-wide shadow-[0_4px_20px_rgba(0,128,128,0.08)] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#008080]" />
              Technology & Innovation Company
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="mb-6 font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] leading-[1.05]"
          >
            Building Technology <br />
            <span className="bg-gradient-to-r from-[#008080] via-[#00b3b3] to-[#006666] bg-clip-text text-transparent inline">
              That Shapes Tomorrow.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mb-9 max-w-[640px] text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#475569]"
          >
            Cre8sphere is a technology and innovation company creating AI products, software platforms, consumer applications, digital media, and creative experiences that help people and businesses achieve more.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="mb-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#008080] to-[#00b3b3] px-8 text-base font-bold text-white shadow-[0_4px_18px_rgba(0,128,128,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,179,179,0.45)]"
            >
              Explore Our Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border border-[#e2e8f0] bg-white px-8 text-base font-semibold text-[#0f172a] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
            >
              View Products
              <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-slate-700" />
            </Link>
          </motion.div>

          {/* Sub-Category Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-3.5"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#334155] shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
                >
                  <Icon className="h-3.5 w-3.5 text-[#008080]" />
                  <span>{cat.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="grid w-full max-w-[820px] grid-cols-2 gap-3.5 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] text-center"
              >
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a] leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-[#64748b] leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
