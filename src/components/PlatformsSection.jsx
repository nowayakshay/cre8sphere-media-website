import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const platforms = [
  {
    title: "GizmoGeek Hub",
    website: "https://gizmogeekhub.com/",
    logo: "/GizmoGeek%20Hub%20Logo.png",
    description:
      "A consumer technology platform covering smartphones, gadgets, and digital tools that power everyday life. GizmoGeek Hub focuses on simplified tech insights, product coverage, and practical guides."
  },
  {
    title: "TechOrbis",
    website: "https://techorbis.in/",
    logo: "/TechOrbis%20Logo.png",
    description:
      "A future-focused platform exploring artificial intelligence, electric vehicles, automation, and emerging technologies shaping the next generation of innovation."
  },
  {
    title: "Origin8",
    website: "https://origin8agency.in/",
    logo: "/Origin8%20Logo.png",
    description:
      "A creative studio dedicated to branding, digital storytelling, and visual communication. Origin8 supports media projects and creative initiatives developed within the Cre8sphere Media ecosystem."
  }
];

function PlatformsSection() {
  return (
    <section className="bg-white py-20" id="platforms">
      <PageContainer>
        <SectionReveal>
          <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            <Boxes className="h-7 w-7 text-brand-accent" />
            Our Platforms
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <motion.a
                key={platform.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                href={platform.website}
                target="_blank"
                rel="noreferrer"
                className="group surface-card elevate-card block rounded-xl border border-gray-200 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 items-center">
                  <img
                    src={platform.logo}
                    alt={`${platform.title} logo`}
                    className="h-10 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-brand-accent">
                  {platform.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                  {platform.description}
                </p>
                <p className="mt-4 text-sm font-medium text-brand-accent">Visit Website</p>
              </motion.a>
            ))}
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default PlatformsSection;


