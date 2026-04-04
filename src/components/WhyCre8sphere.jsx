import { Compass, Lightbulb, Rocket, Workflow, WandSparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const pillars = [
  {
    title: "Future-Focused Perspective",
    icon: Rocket,
    iconClass: "bg-cyan-50 text-cyan-600 border-cyan-100"
  },
  {
    title: "Simplifying Complex Technology",
    icon: Lightbulb,
    iconClass: "bg-amber-50 text-amber-600 border-amber-100"
  },
  {
    title: "Platform-Driven Media",
    icon: Workflow,
    iconClass: "bg-violet-50 text-violet-600 border-violet-100"
  },
  {
    title: "Innovation Through Media",
    icon: WandSparkles,
    iconClass: "bg-emerald-50 text-emerald-600 border-emerald-100"
  }
];

function WhyCre8sphere() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <PageContainer>
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <article className="surface-card p-10 md:p-12 text-left">
              <div className="feature-chip h-11 w-11 rounded-[28px]">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="section-title mt-6 text-slate-950">
                Why Cre8sphere Media
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
                Cre8sphere Media is building a structured ecosystem that combines media,
                products, and creative systems under one future-facing company vision.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
                Our goal is to make technology clearer, more useful, and more accessible
                while building tools and platforms that scale with the next generation of digital media.
              </p>
              <p className="mt-4 font-semibold text-slate-900 sm:text-xl">
                Cre8sphere Media is positioned at the intersection of media, AI, and digital product innovation.
              </p>
            </article>

            <div className="grid gap-5 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="surface-card p-8 text-left">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-[28px] border ${pillar.iconClass}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">{pillar.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      Part of a company ecosystem designed for long-term clarity, trust, and growth.
                    </p>
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

export default WhyCre8sphere;
