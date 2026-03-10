import { motion } from "framer-motion";
import { ArrowUpRight, Boxes, Sparkles } from "lucide-react";
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
    logo: "/Origin8%20Logo%20Dark.svg",
    description:
      "A creative studio dedicated to branding, digital storytelling, and visual communication. Origin8 supports media projects and creative initiatives developed within the Cre8sphere Media ecosystem."
  }
];

function PlatformsSection() {
  return (
    <section className="bg-white py-20" id="platforms">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer px-7 py-9 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Cre8sphere Ecosystem
                </p>
                <h2 className="mt-4 inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  <Boxes className="h-7 w-7 text-brand-accent" />
                  Our Platforms
                </h2>
              </div>
              <div className="soft-panel max-w-md p-4">
                <p className="text-sm leading-6 text-slate-600">
                  Distinct brands inside one media network, each tailored to a specific
                  technology and creative audience.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((platform, index) => (
                <motion.a
                  key={platform.title}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  href={platform.website}
                  target="_blank"
                  rel="noreferrer"
                  className="group gradient-card elevate-card block p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mb-5 rounded-2xl p-4 ${
                      index === 0
                        ? "bg-gradient-to-br from-teal-50 via-white to-cyan-50"
                        : index === 1
                          ? "bg-gradient-to-br from-lime-50 via-white to-teal-50"
                          : "bg-gradient-to-br from-fuchsia-50 via-white to-rose-50"
                    }`}
                  >
                    <div className="flex h-14 items-center">
                      <img
                        src={platform.logo}
                        alt={`${platform.title} logo`}
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-brand-accent">
                      {platform.title}
                    </h3>
                    <span className="feature-chip h-10 w-10 shrink-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                    {platform.description}
                  </p>
                  <p className="mt-5 text-sm font-medium text-brand-accent">Visit Website</p>
                </motion.a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default PlatformsSection;


