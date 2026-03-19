import { Compass, Layers3 } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const pillars = [
  "Clear technology insights",
  "Structured media ecosystem",
  "Creator-focused systems",
  "Future AI integration"
];

function WhyCre8sphere() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <article className="surface-card p-8 text-left sm:p-10">
              <div className="feature-chip h-11 w-11 rounded-xl">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
                Why Cre8sphere Media
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                Cre8sphere Media is building a structured ecosystem that combines media,
                products, and creative systems under one future-facing company vision.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                Our goal is to make technology clearer, more useful, and more accessible
                while building tools and platforms that scale with the next generation of digital media.
              </p>
            </article>

            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <article key={pillar} className="surface-card p-6 text-left">
                  <div className="feature-chip h-10 w-10 rounded-xl">
                    <Layers3 className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{pillar}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Part of a company ecosystem designed for long-term clarity, trust, and growth.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhyCre8sphere;
