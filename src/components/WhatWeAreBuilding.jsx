import { CheckCircle2 } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const items = [
  "A network of focused media platforms across technology, AI, and innovation",
  "AI-powered tools that simplify content creation, transformation, and distribution",
  "A connected ecosystem where media, products, and creativity work together",
  "A scalable digital infrastructure for the next generation of tech-driven platforms",
];

function WhatWeAreBuilding() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="building">
      <PageContainer>
        <SectionReveal>
          <div className="surface-card max-w-4xl mx-auto rounded-[28px] border border-slate-200 bg-white p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 text-center mb-8">
              What We Are Building
            </h2>
            <div className="grid gap-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-brand-accent flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-lg font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhatWeAreBuilding;
