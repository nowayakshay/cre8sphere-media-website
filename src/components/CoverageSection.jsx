import { BrainCircuit, Car, Newspaper, Rocket, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const coverage = [
  {
    title: "Mobile Ecosystem",
    description: "Smartphones, devices, apps, and the surrounding technology ecosystem.",
    icon: Smartphone
  },
  {
    title: "Artificial Intelligence",
    description: "AI tools, platforms, and developments shaping how work and media evolve.",
    icon: BrainCircuit
  },
  {
    title: "Electric Vehicles",
    description: "EV products, mobility innovation, and the transition to future transport.",
    icon: Car
  },
  {
    title: "Startups & Innovation",
    description: "Emerging companies, ideas, and products driving digital progress.",
    icon: Rocket
  },
  {
    title: "Digital Media Trends",
    description: "The formats, tools, and systems changing how content reaches audiences.",
    icon: Newspaper
  }
];

function CoverageSection() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <p className="inline-flex items-center rounded-lg border border-black/5 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-accent">
              Coverage Areas
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              What We Cover
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              We cover the technologies, products, and innovation systems shaping the
              modern digital world.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {coverage.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="surface-card p-6 text-left">
                    <div className="feature-chip h-11 w-11 rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
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

export default CoverageSection;
