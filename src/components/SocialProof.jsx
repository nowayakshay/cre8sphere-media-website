import { motion } from "framer-motion";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function SocialProof() {
  const logos = [
    { type: "block", name: "MEDIACO", class: "font-bold tracking-tight text-slate-800" },
    { type: "text", name: "CRAFTED", class: "font-black tracking-tighter text-slate-800 italic" },
    { type: "svg", name: "PEAK", class: "font-medium tracking-wide text-slate-800" },
    { type: "text", name: "Nexus", class: "font-serif font-bold text-slate-800" },
    { type: "text", name: "LUMINA", class: "font-bold tracking-widest text-slate-800" },
  ];

  return (
    <section className="py-10 sm:py-12 border-b border-slate-100 bg-white">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-500 mb-8 uppercase tracking-widest">
              Built for modern creators & media teams
            </p>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale filter contrast-125"
            >
              {logos.map((logo, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`text-xl flex items-center gap-2 ${logo.class}`}
                >
                  {logo.type === "block" && <div className="w-5 h-5 rounded bg-slate-800"></div>}
                  {logo.type === "svg" && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 22h20L12 2z"/>
                    </svg>
                  )}
                  {logo.name}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default SocialProof;
