import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function CtaSection() {
  return (
    <section className="pb-24 pt-4">
      <PageContainer>
        <SectionReveal>
          <div className="surface-card section-layer overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-gray-50 to-teal-50 p-10 text-center sm:p-14">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Discover the Future of Technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore our platforms and stay connected with the ideas, innovations,
              and technologies shaping tomorrow.
            </p>
            <motion.a
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ duration: 0.24 }}
              href="#platforms"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-teal-700"
            >
              Explore Our Platforms
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default CtaSection;






