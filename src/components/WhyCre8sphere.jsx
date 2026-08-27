import { motion } from "framer-motion";
import { Compass, Lightbulb, Rocket, Workflow, WandSparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const pillars = [
  {
    title: "Future-Focused Vision",
    description: "We build and invest in technology platforms, AI tools, and digital media systems designed for long-term impact.",
    icon: Rocket,
    iconClass: "bg-teal-50 text-[#008080] border-teal-100"
  },
  {
    title: "Product & AI Engineering",
    description: "Our AI studio creates workflow automation tools like Repurplex, Refyn, and Newstrix for digital teams and creators.",
    icon: Lightbulb,
    iconClass: "bg-teal-50 text-[#008080] border-teal-100"
  },
  {
    title: "Domain Authority Media",
    description: "Through GizmoGeek Hub and TechOrbis, we operate focused digital media brands delivering high-quality tech coverage.",
    icon: Workflow,
    iconClass: "bg-teal-50 text-[#008080] border-teal-100"
  },
  {
    title: "Creative & Brand Systems",
    description: "Origin8 powers digital design, brand strategy, and creative storytelling across our corporate ecosystem.",
    icon: WandSparkles,
    iconClass: "bg-teal-50 text-[#008080] border-teal-100"
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
    <section className="relative py-16 sm:py-24 overflow-hidden bg-white" id="why-cre8sphere">
      <PageContainer>
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            
            {/* Left Column */}
            <article className="relative z-10 text-left flex flex-col items-start">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080] mb-6">
                <Compass className="h-6 w-6" />
              </div>
              
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                Why Cre8sphere
              </h2>
              
              <div className="mt-6 space-y-5 readable-text text-slate-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  Cre8sphere LLP is building a connected ecosystem at the intersection of artificial intelligence, digital media platforms, software tools, and creative systems.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  We combine engineering, media platforms, and creative strategy to create scalable technology products that empower businesses, creators, and audiences.
                </p>
                <p className="italic font-bold text-slate-900 border-l-4 border-[#008080] pl-5 py-1 text-sm sm:text-base">
                  Cre8sphere LLP is positioned as a forward-thinking technology and innovation company.
                </p>
              </div>
            </article>

            {/* Right Column */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10">
                <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,rgba(0,128,128,0.06),transparent_70%)] blur-2xl" />
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.article 
                      key={pillar.title} 
                      variants={itemVariants}
                      className="group relative rounded-3xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 transition-all duration-300 hover:bg-white hover:border-[#008080]/30 hover:shadow-xl"
                    >
                      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${pillar.iconClass} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-heading text-lg font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
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
