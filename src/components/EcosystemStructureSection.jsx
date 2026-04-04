import { ArrowRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const ecosystemGroups = [
  {
    title: "Media Division",
    accent: "bg-cyan-50 text-cyan-700 border-cyan-100",
    items: [
      { label: "GizmoGeek Hub", href: "https://gizmogeekhub.com/" },
      { label: "TechOrbis", href: "https://techorbis.in/" }
    ]
  },
  {
    title: "AI Studio",
    accent: "bg-teal-50 text-teal-700 border-teal-100",
    items: [
      { label: "Repurplex", href: "https://repurplex.app" },
      { label: "Refyn AI", beta: true }
    ]
  },
  {
    title: "Creative Division",
    accent: "bg-violet-50 text-violet-700 border-violet-100",
    items: [{ label: "Origin8", href: "https://origin8agency.in/" }]
  }
];

function EcosystemStructureSection() {
  return (
    <section className="pb-16 sm:pb-20" id="ecosystem-structure">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer p-8 sm:p-10">
            <h2 className="section-title text-slate-950">
              The Cre8sphere Media Ecosystem
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Cre8sphere Media brings together platforms, products, and creative systems into one unified ecosystem.
            </p>

            <div className="relative mt-10">
              <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-1/2 hidden h-px -translate-y-1/2 bg-slate-200 lg:block" />

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {ecosystemGroups.map((group, index) => (
                  <article
                    key={group.title}
                    className="relative gradient-card step-card p-6 sm:p-7"
                  >
                    <span className="text-4xl font-semibold tracking-tight text-teal-600/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
                      {index < ecosystemGroups.length - 1 ? (
                        <ArrowRight className="hidden h-4 w-4 text-slate-400 lg:block" />
                      ) : null}
                    </div>

                    <div className="space-y-3">
                      {group.items.map((item) =>
                        item.href ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-11 items-center rounded-[28px] border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-brand-accent"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <div
                            key={item.label}
                            className="flex min-h-11 items-center justify-between rounded-[28px] border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700"
                          >
                            <span>{item.label}</span>
                          </div>
                        )
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default EcosystemStructureSection;
