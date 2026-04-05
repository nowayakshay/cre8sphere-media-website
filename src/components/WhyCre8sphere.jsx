import { motion } from "framer-motion";
import { Compass, Lightbulb, Rocket, Workflow, WandSparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const pillars = [
  {
    title: "Future-Focused Perspective",
    description: "We analyze emerging trends and technologies to help audiences stay ahead in a rapidly evolving digital world.",
    icon: Rocket,
    iconClass: "bg-cyan-50 text-cyan-600 border-cyan-100"
  },
  {
    title: "Simplifying Complex Technology",
    description: "We break down complex technologies into clear, easy-to-understand insights for everyday users.",
    icon: Lightbulb,
    iconClass: "bg-amber-50 text-amber-600 border-amber-100"
  },
  {
    title: "Platform-Driven Media",
    description: "Our platforms are built to deliver focused, high-quality content tailored to specific technology domains.",
    icon: Workflow,
    iconClass: "bg-violet-50 text-violet-600 border-violet-100"
  },
  {
    title: "Innovation Through Media",
    description: "We explore new ways of combining media, technology, and creativity to build impactful digital experiences.",
    icon: WandSparkles,
    iconClass: "bg-emerald-50 text-emerald-600 border-emerald-100"
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

function WhyCre8sphere() {
  return (
    <section className="relative py-10 sm:py-20 overflow-hidden bg-white" id="why-cre8sphere">
      <PageContainer>
        <SectionReveal>
          <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            
            {/* Left Column: Narrative Storytelling */}
            <article className="relative z-10 text-left flex flex-col items-start">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080] mb-8">
                <Compass className="h-6 w-6" />
              </div>
              
              <h2 className="tracking-tight leading-[1.1]">
                Why Cre8sphere Media
              </h2>
              
              <div className="mt-8 space-y-6 readable-text">
                <p>
                  Cre8sphere Media is building a structured ecosystem that combines media,
                  products, and creative systems under one future-facing company vision.
                </p>
                <p>
                  Our goal is to make technology clearer, more useful, and more accessible
                  while building tools and platforms that scale with the next generation of digital media.
                </p>
                <p className="italic font-bold text-slate-950 border-l-4 border-[#008080] pl-6 py-2">
                  Cre8sphere Media is positioned at the intersection of media, AI, and digital product innovation.
                </p>
              </div>
            </article>

            {/* Right Column: Supporting Pillar Blocks */}
            <div className="relative">
              {/* Subtle Background Glow behind pillars */}
              <div className="pointer-events-none absolute -inset-4 -z-10">
                <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(17,122,122,0.05),transparent_70%)] blur-2xl" />
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.article 
                      key={pillar.title} 
                      variants={itemVariants}
                      className="group relative rounded-[28px] border border-slate-100 bg-slate-50/40 p-8 transition-all duration-300 hover:bg-white hover:shadow-[0_12px_30px_-6px_rgba(15,23,42,0.08)]"
                    >
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${pillar.iconClass} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="mt-6 text-slate-950 uppercase opacity-90 text-[16px] sm:text-[18px] tracking-widest">{pillar.title}</h3>
                      <p className="mt-4 subtext opacity-100">
                        {pillar.description}
                      </p>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhyCre8sphere;
