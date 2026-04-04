import { ArrowRight, Bot, Target, Sparkles, Send } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-100">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-4xl lg:text-[36px]">
              How It Works
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Our AI automation turns single inputs into scaled digital success.
            </p>

            <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-5xl mx-auto">
              
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-px bg-slate-200 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-20"></div>
              </div>

              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-[28px] bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">1. Input Content</h3>
                <p className="mt-2 text-sm text-slate-500 text-center max-w-[200px]">
                  Provide a blog post, video, or simple text prompt.
                </p>
              </div>

              {/* Arrow (Mobile) */}
              <ArrowRight className="w-6 h-6 text-slate-300 md:hidden" />

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-[28px] bg-teal-600 border border-teal-500 shadow-xl shadow-teal-500/20 flex items-center justify-center text-white relative">
                  <div className="absolute inset-0 rounded-[28px] border border-white/30 opacity-60"></div>
                  <Bot className="w-8 h-8 relative z-10" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">2. AI Processing</h3>
                <p className="mt-2 text-sm text-slate-500 text-center max-w-[200px]">
                  Our engines restructure, humanize, and optimize for platforms.
                </p>
              </div>

              {/* Arrow (Mobile) */}
              <ArrowRight className="w-6 h-6 text-slate-300 md:hidden" />

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center w-full md:w-1/3">
                <div className="w-24 h-24 rounded-[28px] bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-800">
                  <Send className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">3. Multi-platform</h3>
                <p className="mt-2 text-sm text-slate-500 text-center max-w-[200px]">
                  Outputs delivered formatted for Twitter, LinkedIn, Newsletters & more.
                </p>
              </div>

            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default HowItWorks;

