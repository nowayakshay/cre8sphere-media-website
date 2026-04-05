import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Sparkles,
  Workflow
} from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const repurplexFeatures = [
  "Multi-platform outputs",
  "Consistent content formatting",
  "Built for creators and teams"
];

const refynFeatures = [
  "Human-like rewriting",
  "Tone and clarity optimization",
  "Cleaner, more readable outputs"
];

const repurplexFlow = ["Input content", "AI transforms", "Get multiple outputs"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function InnovationToolsSection() {
  return (
    <section className="py-10 sm:py-20 bg-white" id="products">
      <PageContainer>
        <SectionReveal>
          <div className="text-left">
            <h2 className="text-slate-950">
              Cre8sphere AI Studio
            </h2>
            <p className="mt-4 readable-text">
              Building intelligent tools that simplify content creation and digital workflows.
            </p>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <motion.article 
              variants={itemVariants}
              className="relative text-left"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                  <Workflow className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Repurplex</h3>
                  <p className="text-sm font-semibold text-[#008080] uppercase tracking-wider">AI Content Engine</p>
                </div>
              </div>

              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                Repurplex is an AI-powered content transformation engine that converts a single article, blog, or YouTube link into multiple platform-ready content formats.
              </p>
              
              <div className="mt-8 space-y-4">
                <p className="font-bold text-slate-900">Key Capabilities:</p>
                <ul className="grid gap-3 sm:grid-cols-1">
                  {repurplexFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#008080]" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
                <p className="text-sm font-bold text-slate-900 border-b border-slate-200/60 pb-3 mb-4">Content Lifecycle</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {repurplexFlow.map((step, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-[#008080] uppercase">Step {idx + 1}</span>
                      <span className="text-sm font-semibold text-slate-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://repurplex.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-primary-glow group mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-[28px] bg-[#008080] px-10 text-base font-bold text-white hover:bg-[#006666]"
              >
                Launch Repurplex
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.article>

            <motion.article 
              variants={itemVariants}
              className="relative text-left border-t border-slate-100 pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16 font-body"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Refyn</h3>
                  <p className="text-sm font-semibold text-[#008080] uppercase tracking-wider">AI Humanizer</p>
                </div>
              </div>

              <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                Refyn improves AI-generated text by making it more natural, clear, and human, ensuring high engagement across all digital platforms.
              </p>

              <div className="mt-8 space-y-6">
                <p className="font-bold text-slate-900 text-lg">Coming Soon Features:</p>
                <ul className="space-y-4">
                  {refynFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 text-slate-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#008080]" />
                      <span className="text-base font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 p-8 rounded-2xl bg-[#F2F9F9]/50 border border-[#008080]/10 border-dashed">
                <p className="text-slate-600 text-sm italic">
                  "Building a future where AI content feels authentically human."
                </p>
              </div>

              <button
                type="button"
                className="btn-premium mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-[28px] border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-400 cursor-not-allowed"
                disabled
              >
                Stay Tuned
                <Sparkles className="h-5 w-5 text-[#008080]/40" />
              </button>
            </motion.article>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default InnovationToolsSection;
