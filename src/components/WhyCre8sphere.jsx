import { motion } from "framer-motion";
import { Compass, Lightbulb, Rocket, WandSparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

const pillars = [
  {
    title: "Future-Focused Vision",
    description: "We build and invest in technology platforms, AI tools, and digital media systems designed for long-term impact.",
    icon: Rocket,
  },
  {
    title: "Product & AI Engineering",
    description: "Our AI studio creates workflow automation tools like Repurplex, Refyn, and Newstrix for digital teams and creators.",
    icon: Lightbulb,
  },
  {
    title: "Domain Authority Media",
    description: "Through GizmoGeek Hub and TechOrbis, we operate focused digital media brands delivering high-quality tech coverage.",
    icon: Compass,
  },
  {
    title: "Creative & Brand Systems",
    description: "Origin8 powers digital design, brand strategy, and creative storytelling across our corporate ecosystem.",
    icon: WandSparkles,
  }
];

export default function WhyCre8sphere() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden" id="why-cre8sphere">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left Narrative */}
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080] mb-6">
              <Compass className="h-6 w-6" />
            </div>

            <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              Why Cre8sphere
            </h2>

            <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-slate-600">
              <p>
                Cre8sphere LLP is building a connected ecosystem at the intersection of artificial intelligence, digital media platforms, software tools, and creative systems.
              </p>
              <p>
                We combine engineering, media platforms, and creative strategy to create scalable technology products that empower businesses, creators, and audiences.
              </p>
              <p className="italic font-bold text-slate-900 border-l-4 border-[#008080] pl-5 py-1 text-sm sm:text-base">
                Cre8sphere LLP is positioned as a forward-thinking technology and innovation company.
              </p>
            </div>
          </div>

          {/* Right Pillars Grid */}
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="minimal-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F9F9] text-[#008080]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
