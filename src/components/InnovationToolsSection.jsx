import { Bot, Sparkles, Workflow } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const products = [
  {
    title: "Repurplex",
    description: "AI content repurposing engine for platform-ready output across formats.",
    icon: Workflow
  },
  {
    title: "Refyn AI",
    description: "AI writing optimization and humanization platform for better readability and refinement.",
    icon: Sparkles
  },
  {
    title: "Newstrix",
    description: "AI-powered trend intelligence platform for tracking movement across emerging topics.",
    icon: Bot
  }
];

function InnovationToolsSection() {
  return (
    <section className="py-16 sm:py-20" id="products">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <p className="inline-flex items-center rounded-lg border border-black/5 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-accent">
              AI Studio
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              AI Studio / Products
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Cre8sphere AI Studio builds future-facing tools for creators, research,
              and media workflows.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <article key={product.title} className="surface-card p-6 text-left">
                    <div className="feature-chip h-11 w-11 rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{product.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default InnovationToolsSection;
