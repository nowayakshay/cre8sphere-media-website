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
    accent: "bg-[#F2F9F9] text-[#008080] border-[#008080]/10",
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
    <section className="relative py-24 sm:py-32 overflow-hidden" id="ecosystem-structure">
      {/* Subtle Background Visual */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.03),transparent_70%)] blur-3xl opacity-50" />
      </div>

      <PageContainer>
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2>
              The Cre8sphere Media Ecosystem
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] sm:text-[16px] leading-relaxed text-slate-500">
              Cre8sphere Media brings together platforms, products, and creative systems into one unified ecosystem.
            </p>
          </div>

          <div className="relative mt-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
              {ecosystemGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="group relative flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#008080]/30 hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.1)]"
                >
                  {/* Top Accent Line */}
                  <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#008080] via-[#00a0a0] to-[#00c0c0] opacity-90 transition-transform duration-500 group-hover:scale-x-105" />
                  
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-xl font-bold text-[#008080] transition-colors duration-300 group-hover:bg-[#008080] group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex-grow space-y-3">
                    {group.items.map((item) =>
                      item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[44px] items-center justify-between rounded-2xl bg-slate-50/50 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-[#F2F9F9] hover:text-[#008080]"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </a>
                      ) : (
                        <div
                          key={item.label}
                          className="flex min-h-[44px] items-center justify-between rounded-2xl bg-slate-50/50 px-4 py-2 text-sm font-semibold text-slate-400"
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.label}</span>
                            {item.beta && (
                              <span className="rounded-full bg-[#008080]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#008080]">
                                Beta
                              </span>
                            )}
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-8 flex items-center gap-2 subtext">
                    <div className="h-1 w-8 rounded-full bg-slate-100 transition-colors duration-300 group-hover:bg-[#008080]/20" />
                    <span>Division Details</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default EcosystemStructureSection;
