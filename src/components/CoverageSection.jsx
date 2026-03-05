import { motion } from "framer-motion";
import {
  Grid2x2,
  Smartphone,
  BrainCircuit,
  Car,
  Orbit,
  Rocket,
  PenTool
} from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const coverage = [
  {
    title: "Consumer Technology",
    description:
      "Smartphones, gadgets, apps, and the digital tools that shape everyday life.",
    icon: Smartphone
  },
  {
    title: "Artificial Intelligence",
    description:
      "AI tools, machine learning, and innovations transforming industries and society.",
    icon: BrainCircuit
  },
  {
    title: "Electric Vehicles",
    description:
      "EV technology, mobility innovation, and the shift toward sustainable transportation.",
    icon: Car
  },
  {
    title: "Emerging Technology",
    description:
      "Breakthrough innovations and technologies that will shape the future.",
    icon: Orbit
  },
  {
    title: "Startups & Innovation",
    description:
      "Founders, ideas, and emerging companies driving the next wave of digital progress.",
    icon: Rocket
  },
  {
    title: "Creative Media",
    description:
      "Design, storytelling, and digital media strategies that connect technology with audiences.",
    icon: PenTool
  }
];

function CoverageSection() {
  return (
    <section className="bg-white py-20" id="coverage">
      <PageContainer>
        <SectionReveal>
          <div className="surface-card section-layer rounded-[2rem] bg-gradient-to-br from-white via-gray-50 to-teal-50/40 p-7 sm:p-10">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              <Grid2x2 className="h-7 w-7 text-brand-accent" />
              What We Cover
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {coverage.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.24 }}
                    className="elevate-card rounded-xl border border-brand-border bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="inline-flex rounded-lg border border-brand-border bg-brand-soft p-2">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </motion.article>
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







