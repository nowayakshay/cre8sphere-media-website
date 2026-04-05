import { motion } from "framer-motion";
import { BrainCircuit, Car, Cpu, PenTool, Rocket, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const coverage = [
  {
    title: "Consumer Technology",
    icon: Smartphone,
    iconClass: "bg-cyan-50/50 text-cyan-600 border-cyan-100/50 group-hover:bg-cyan-100 group-hover:text-cyan-700"
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    iconClass: "bg-[#F2F9F9]/50 text-[#008080] border-[#008080]/10 group-hover:bg-[#F2F9F9] group-hover:text-[#006666]"
  },
  {
    title: "Electric Vehicles",
    icon: Car,
    iconClass: "bg-emerald-50/50 text-emerald-600 border-emerald-100/50 group-hover:bg-emerald-100 group-hover:text-emerald-700"
  },
  {
    title: "Emerging Technology",
    icon: Cpu,
    iconClass: "bg-sky-50/50 text-sky-600 border-sky-100/50 group-hover:bg-sky-100 group-hover:text-sky-700"
  },
  {
    title: "Startups & Innovation",
    icon: Rocket,
    iconClass: "bg-orange-50/50 text-orange-600 border-orange-100/50 group-hover:bg-orange-100 group-hover:text-orange-700"
  },
  {
    title: "Creative Media",
    icon: PenTool,
    iconClass: "bg-indigo-50/50 text-indigo-600 border-indigo-100/50 group-hover:bg-indigo-100 group-hover:text-indigo-700"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function CoverageSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-20" id="coverage">
      {/* Subtle Section Glow Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.03),transparent_70%)] blur-3xl opacity-40" />
      </div>

      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="tracking-tight">
              What We Cover
            </h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3"
            >
              {coverage.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article 
                    key={item.title} 
                    variants={itemVariants}
                    className="group relative flex flex-col items-center justify-center rounded-[28px] border border-transparent bg-slate-50/40 p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-slate-100 hover:shadow-[0_12px_30px_-6px_rgba(15,23,42,0.08)]"
                  >
                    {/* Icon Container with intensified hover color */}
                    <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-[22px] border transition-all duration-300 group-hover:scale-110 ${item.iconClass}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                      {item.title}
                    </h3>
                    
                    <div className="mt-4 h-1 w-12 rounded-full bg-slate-200/50 transition-all duration-300 group-hover:w-16 group-hover:bg-[#008080]/20" />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default CoverageSection;
