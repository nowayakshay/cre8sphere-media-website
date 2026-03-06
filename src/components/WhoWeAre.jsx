import { motion } from "framer-motion";
import { Lightbulb, CircleDot } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function WhoWeAre() {
  return (
    <section className="bg-gray-50/70 py-20" id="about">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer relative px-7 py-9 sm:px-10 sm:py-12">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-accent/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
              <div>
                <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  <Lightbulb className="h-7 w-7 text-brand-accent" />
                  Who We Are
                </h2>
                <p className="mt-5 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
                  Cre8sphere Media is a digital media company built on curiosity, creativity,
                  and innovation. Our mission is to explore emerging technologies and
                  communicate them in a way that is clear, insightful, and engaging.
                </p>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
                  Through our platforms and media initiatives, we aim to bridge the gap
                  between technological innovation and everyday understanding, helping
                  audiences navigate the fast-changing digital world.
                </p>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="gradient-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <svg viewBox="0 0 280 220" className="h-56 w-full">
                  <defs>
                    <linearGradient id="whoPanel" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#008080" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#00b3b3" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>
                  <rect x="10" y="12" width="260" height="196" rx="18" fill="#F7F9FA" stroke="#E5E7EB" />
                  <rect x="28" y="28" width="92" height="72" rx="18" fill="url(#whoPanel)" />
                  <rect x="136" y="28" width="116" height="34" rx="12" fill="#fff" stroke="#E5E7EB" />
                  <circle cx="62" cy="62" r="20" fill="#008080" fillOpacity="0.16" />
                  <circle cx="140" cy="48" r="12" fill="#008080" fillOpacity="0.24" />
                  <circle cx="216" cy="74" r="16" fill="#008080" fillOpacity="0.2" />
                  <path d="M62 62L140 48L216 74" fill="none" stroke="#008080" strokeWidth="2" strokeDasharray="5 6" />
                  <rect x="36" y="120" width="208" height="56" rx="12" fill="#fff" stroke="#E5E7EB" />
                  <text x="52" y="145" fontSize="12" fill="#333333">Technology + Creativity + Innovation</text>
                  <text x="52" y="164" fontSize="10" fill="#6B7280">Digital media for modern audiences</text>
                </svg>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <div className="feature-tile p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                      Media Intelligence
                    </p>
                    <p className="mt-1 text-sm text-slate-600">Complex topics, translated clearly.</p>
                  </div>
                  <div className="gradient-card p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                      Modern Formats
                    </p>
                    <p className="mt-1 text-sm text-slate-600">Platforms designed for today&apos;s audiences.</p>
                  </div>
                </div>
                <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                  <CircleDot className="h-3.5 w-3.5" />
                  Connected ideas
                </p>
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhoWeAre;








