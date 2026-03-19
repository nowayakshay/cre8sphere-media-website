import { motion } from "framer-motion";
import { ArrowRight, Bot, Newspaper, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const ecosystemCards = [
  {
    title: "GizmoGeek Hub",
    description: "Consumer tech insights",
    icon: Smartphone,
    className: "lg:translate-y-0 lg:scale-[0.98]",
    zIndex: "z-10"
  },
  {
    title: "TechOrbis",
    description: "AI, EV, future tech",
    icon: Newspaper,
    className: "lg:translate-y-0 lg:scale-[1.02]",
    zIndex: "z-20"
  },
  {
    title: "AI Studio",
    description: "Repurplex, Refyn AI, Newstrix",
    icon: Bot,
    className: "lg:translate-y-0 lg:scale-[0.99]",
    zIndex: "z-10"
  }
];

function PageHeroSection({ title, description, subtitle }) {
  return (
    <section className="pt-2 sm:pt-3">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="absolute right-[10%] top-1/2 hidden h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.08),transparent_72%)] lg:block" />
            <div className="relative grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="flex flex-col">
                {subtitle ? (
                  <p className="inline-flex w-fit items-center rounded-lg border border-black/5 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
                    {subtitle}
                  </p>
                ) : null}
                <h1 className="mt-3 text-[2.45rem] font-bold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.7rem]">
                  {title}
                </h1>
                <p className="mt-5 max-w-[580px] text-base leading-7 text-slate-600 sm:text-lg">
                  {description}
                </p>

                <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="#ecosystem"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-[0_10px_20px_rgba(13,148,136,0.18)]"
                  >
                    Explore Our Ecosystem
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#platforms"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/30 hover:text-brand-accent hover:shadow-[0_8px_18px_rgba(15,23,42,0.06)]"
                  >
                    View Our Products
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex min-h-[380px] items-center justify-center lg:min-h-[470px]">
                <div className="relative w-full max-w-[520px]">
                  {ecosystemCards.map((card, index) => {
                    const Icon = card.icon;
                    const topOffsets = ["0px", "96px", "192px"];
                    return (
                      <motion.article
                        key={card.title}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 6 + index, ease: "easeInOut", delay: index * 0.2 }}
                        whileHover={{ y: -6, boxShadow: "0 14px 30px rgba(15,23,42,0.09)" }}
                        className={`surface-card absolute left-0 right-0 mx-auto w-full max-w-[420px] p-6 transition-all duration-300 ${card.className} ${card.zIndex}`}
                        style={{ top: topOffsets[index] }}
                      >
                        <div className="feature-chip h-11 w-11 rounded-xl">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default PageHeroSection;
