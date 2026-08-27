import { motion } from "framer-motion";
import PageContainer from "../layouts/PageContainer";

export default function MissionStatement() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F172A] text-white overflow-hidden relative" id="mission">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#008080] blur-3xl" />
      </div>

      <PageContainer>
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#008080]">
              Corporate Philosophy
            </span>

            <blockquote className="mt-6 font-heading text-2xl font-bold tracking-tight sm:text-4xl leading-tight text-white">
              &ldquo;We combine engineering, artificial intelligence, and media platforms to build technology products that make information clearer, teams faster, and digital experiences seamless.&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 bg-[#008080]" />
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Cre8sphere LLP — Technology & Innovation
              </p>
              <div className="h-[2px] w-10 bg-[#008080]" />
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
