import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Workflow } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function InnovationToolsSection() {
  return (
    <section className="bg-gray-50/70 py-20">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer px-7 py-9 sm:px-10 sm:py-12">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              <Bot className="h-7 w-7 text-brand-accent" />
              Cre8sphere <span className="gradient-text">AI Studio</span>
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
              Building intelligent tools that simplify content creation and digital
              workflows.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="gradient-card p-7 sm:p-8">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-full border border-brand-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                    Featured Product
                  </span>
                  <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                    Beta
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="feature-chip h-12 w-12 shrink-0">
                    <Workflow className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      <span className="gradient-text">Repurplex</span>
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                      Repurplex is an AI-powered content transformation engine that
                      converts a single article, blog or YouTube link into multiple
                      platform-ready content formats.
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                      Turn one piece of content into posts for X, LinkedIn, newsletters,
                      summaries and more.
                    </p>
                    <motion.a
                      whileHover={{ y: -2, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-teal-700"
                    >
                      Try Repurplex
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </article>

              <motion.article
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="soft-panel accent-grid p-6"
              >
                <div className="gradient-card p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                        <span className="gradient-text">Repurplex</span>
                      </p>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-text">
                        Content Transformation Engine
                      </h3>
                    </div>
                    <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
                      Early Access
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    One input, multiple outputs for social posts, summaries,
                    newsletters, and distribution-ready content workflows.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="feature-tile p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
                        Inputs
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        Articles, blogs, YouTube links
                      </p>
                    </div>
                    <div className="gradient-card p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
                        Outputs
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        X, LinkedIn, newsletters, summaries
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default InnovationToolsSection;
