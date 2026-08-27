import { motion } from "framer-motion";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

const milestones = [
  {
    phase: "Phase 1 — Foundation & Media Growth",
    status: "Completed",
    done: true,
    title: "Established Tech Publications & Brand Studio",
    description: "Launched GizmoGeek Hub and TechOrbis media publications alongside Origin8 digital studio."
  },
  {
    phase: "Phase 2 — AI Product Development",
    status: "Active Stage",
    done: true,
    title: "Engineering AI Content Acceleration Tools",
    description: "Built Repurplex AI content repurposing application and initiating development of Refyn and Newstrix."
  },
  {
    phase: "Phase 3 — Ecosystem Integration",
    status: "Upcoming",
    done: false,
    title: "Unified Platform & Developer APIs",
    description: "Connecting AI studio tools, publisher distribution feeds, and brand systems under unified Cre8sphere APIs."
  }
];

export default function WhatWeAreBuilding() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="roadmap">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
            <Sparkles className="h-3.5 w-3.5" />
            Roadmap & Vision
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What We Are Building
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our strategic evolution from media properties to an integrated technology and innovation company.
          </p>
        </div>

        <div className="mt-14 max-w-3xl mx-auto space-y-6">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="minimal-card p-6 sm:p-8 flex items-start gap-4"
            >
              <div className="mt-1 flex-shrink-0 text-[#008080]">
                {item.done ? (
                  <CheckCircle2 className="h-6 w-6 text-[#008080]" />
                ) : (
                  <Circle className="h-6 w-6 text-slate-300" />
                )}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008080]">
                    {item.phase}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-2 font-heading text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
