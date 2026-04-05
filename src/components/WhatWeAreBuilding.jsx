import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const items = [
  "A network of focused media platforms across technology, AI, and innovation",
  "AI-powered tools that simplify content creation, transformation, and distribution",
  "A connected ecosystem where media, products, and creativity work together",
  "A scalable digital infrastructure for the next generation of tech-driven platforms",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

function WhatWeAreBuilding() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-20" id="building">
      <PageContainer>
        <SectionReveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-16 text-center">
              What We Are Building
            </h2>

            <div className="relative">
              {/* Vertical "Roadmap" Line Guide */}
              <div className="absolute left-[19px] top-4 h-[calc(100%-32px)] w-px bg-gradient-to-b from-[#008080]/5 via-[#008080]/20 to-[#008080]/5 sm:left-[23px]" />

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col gap-6"
              >
                {items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="group relative flex items-start gap-8 rounded-2xl p-6 transition-all duration-300 hover:bg-slate-50/70"
                  >
                    {/* Icon Container with specific branding */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2F9F9] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#008080] group-hover:text-white sm:h-14 sm:w-14">
                      <CheckCircle2 className="h-6 w-6 text-[#008080] transition-colors duration-300 group-hover:text-white sm:h-7 sm:w-7" />
                    </div>

                    <div className="flex flex-col pt-3 sm:pt-4">
                      <span className="text-[17px] font-semibold leading-relaxed text-slate-800 transition-colors duration-300 group-hover:text-slate-950">
                        {item}
                      </span>
                      <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-[#008080]/30 to-transparent transition-all duration-700 group-hover:w-full" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhatWeAreBuilding;
