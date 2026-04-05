import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const platforms = [
  {
    title: "GizmoGeek Hub",
    logoPath: "/GizmoGeek Hub Logo.png",
    website: "https://gizmogeekhub.com/",
    description: "Consumer technology platform exploring devices, software, and everyday digital life."
  },
  {
    title: "TechOrbis",
    logoPath: "/TechOrbis Logo.png",
    website: "https://techorbis.in/",
    description: "Deep dives into artificial intelligence, electric mobility, and future-shaping innovations."
  },
  {
    title: "Origin8",
    logoPath: "/Origin8 Logo.png",
    website: "https://origin8agency.in/",
    description: "Creative studio focused on branding, digital storytelling, and platform development."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

function EcosystemSection() {
  return (
    <section className="py-10 sm:py-20 bg-white" id="ecosystem">
      <PageContainer>
        <SectionReveal>
          <div className="text-center flex flex-col items-center">
            <h2 className="tracking-tight">
              Cre8sphere Ecosystem
            </h2>
            <p className="mt-6 readable-text">
              Distinct brands inside one media network.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="mt-16 grid gap-6 md:grid-cols-3 w-full"
            >
              {platforms.map((platform) => (
                <motion.a
                  key={platform.title}
                  variants={itemVariants}
                  href={platform.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium group surface-card block rounded-[28px] border border-slate-200 bg-white p-8 text-left md:p-10"
                >
                  <div className="h-16 flex items-center justify-start mb-6 w-full">
                    <img
                      src={platform.logoPath}
                      alt={`${platform.title} Logo`}
                      className="h-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mt-4 text-slate-900 group-hover:text-brand-accent transition-colors leading-[1.25]">
                    {platform.title}
                  </h3>

                  <p className="mt-4 leading-relaxed min-h-[3rem]">
                    {platform.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-brand-accent transition-colors">
                    <span>Visit Website</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default EcosystemSection;

