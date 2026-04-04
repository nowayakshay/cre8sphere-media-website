import { BrainCircuit, Car, Cpu, PenTool, Rocket, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const coverage = [
  {
    title: "Consumer Technology",
    icon: Smartphone,
    iconClass: "bg-cyan-50 text-cyan-600 border-cyan-100"
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    iconClass: "bg-teal-50 text-teal-600 border-teal-100"
  },
  {
    title: "Electric Vehicles",
    icon: Car,
    iconClass: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    title: "Emerging Technology",
    icon: Cpu,
    iconClass: "bg-sky-50 text-sky-600 border-sky-100"
  },
  {
    title: "Startups & Innovation",
    icon: Rocket,
    iconClass: "bg-orange-50 text-orange-600 border-orange-100"
  },
  {
    title: "Creative Media",
    icon: PenTool,
    iconClass: "bg-teal-50 text-teal-600 border-teal-100"
  }
];

function CoverageSection() {
  return (
    <section className="py-20 sm:py-28 border-y border-slate-100 bg-slate-50">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="section-title text-slate-950">
              What We Cover
            </h2>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {coverage.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="surface-card flex flex-col items-center justify-center bg-white p-8 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-[28px] border ${item.iconClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900">{item.title}</h3>
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

