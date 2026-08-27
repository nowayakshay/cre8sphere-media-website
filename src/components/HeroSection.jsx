import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, Layers, Sparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

const stats = [
  { value: "7+", label: "Software Products" },
  { value: "4", label: "Active Divisions" },
  { value: "2", label: "Live AI Platforms" },
  { value: "2024", label: "Founded" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white pb-20 pt-16 sm:pb-28 sm:pt-24" id="hero">
      {/* Subtle Vector Background Sphere Motif */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#008080]/10 via-[#008080]/5 to-transparent blur-3xl" />
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 opacity-15 text-slate-400"
          width="800"
          height="500"
          viewBox="0 0 800 500"
          fill="none"
        >
          <circle cx="400" cy="250" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="250" r="260" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="250" r="8" fill="#008080" />
        </svg>
      </div>

      <PageContainer>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#008080]/30 bg-white/90 px-4 py-1.5 shadow-xs backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#008080]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#008080]">
              Technology & Innovation Company
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.08]"
          >
            Building Technology <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#008080] via-[#00a0a0] to-[#006666] bg-clip-text text-transparent">
              That Shapes Tomorrow.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-xl"
          >
            Cre8sphere LLP is a technology and innovation company creating AI products, software platforms, digital media, and creative systems that help people and businesses achieve more.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/solutions"
              className="btn-premium inline-flex items-center gap-2.5 rounded-full bg-[#008080] px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#006666]"
            >
              Explore Ecosystem
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/products"
              className="btn-premium inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50"
            >
              View Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Core Focus Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { label: "AI & Automation", icon: Bot },
              { label: "Consumer Platforms", icon: Cpu },
              { label: "Creative Media Systems", icon: Layers },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  <Icon className="h-3.5 w-3.5 text-[#008080]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="minimal-card flex flex-col items-center justify-center p-5 text-center"
              >
                <span className="font-heading text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-semibold text-slate-500">
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
