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

function InnovationToolsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="products">
      <PageContainer>
        <SectionReveal>
          <div className="text-left">
            <h2 className="section-title text-slate-950">
              Cre8sphere AI Studio
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Building intelligent tools that simplify content creation and digital workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <article className="surface-card rounded-[28px] border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_26px_rgba(15,23,42,0.09)] md:p-10">
              <div className="mb-6 flex items-center justify-end">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-[28px] border border-teal-100 bg-teal-50 text-teal-600">
                  <Workflow className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-3xl font-semibold tracking-tight text-slate-900">Repurplex</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Repurplex is an AI-powered content transformation engine that converts a single article, blog, or YouTube link into multiple platform-ready content formats.
              </p>
              <p className="mt-3 text-base font-medium leading-7 text-slate-900">
                Turn one piece of content into posts for X, LinkedIn, newsletters, summaries, and more.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {repurplexFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 rounded-[28px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-700">How it works</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {repurplexFlow.map((step) => (
                    <div key={step} className="rounded-[28px] border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://repurplex.app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-[28px] bg-slate-900 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Try Repurplex
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            <article className="surface-card rounded-[28px] border border-slate-200 bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_22px_rgba(15,23,42,0.08)] md:p-8">
              <div className="mb-5 flex items-center justify-end">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-[28px] border border-violet-100 bg-violet-50 text-violet-600">
                  <Bot className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight leading-[1.25] text-slate-900">
                Refyn
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Refyn improves AI-generated text by making it more natural, clear, and human.
              </p>

              <ul className="mt-5 space-y-3">
                {refynFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Sparkles className="h-4 w-4 text-teal-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-[28px] border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700"
                aria-disabled="true"
              >
                Try Refyn
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default InnovationToolsSection;
