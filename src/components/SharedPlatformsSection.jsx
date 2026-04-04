import { ArrowRight } from "lucide-react";
import SectionReveal from "./SectionReveal";
import PageContainer from "../layouts/PageContainer";

const platforms = [
  {
    title: "GizmoGeek Hub",
    website: "https://gizmogeekhub.com/",
    logo: "/GizmoGeek%20Hub%20Logo.png",
    description:
      "Consumer technology platform focused on smartphones, gadgets, and practical tech insights that simplify everyday digital life."
  },
  {
    title: "TechOrbis",
    website: "https://techorbis.in/",
    logo: "/TechOrbis%20Logo.png",
    description:
      "Future-focused platform exploring artificial intelligence, electric mobility, and emerging technologies shaping the next generation of innovation."
  }
];

function SharedPlatformsSection({
  title = "Our Platforms",
  subtitle = null
}) {
  return (
    <section className="pb-16 sm:pb-20" id="platforms">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer p-8">
            <h2 className="section-title selection:bg-transparent selection:text-current text-slate-950">
              {title}
            </h2>
            {subtitle ? (
              <p className="selection:bg-transparent selection:text-current mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {platforms.map((platform) => (
                <a
                  key={platform.title}
                  href={platform.website}
                  target="_blank"
                  rel="noreferrer"
                  className="group gradient-card elevate-card block h-full border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(15,23,42,0.1)]"
                >
                  <div className="mb-4 h-1 w-14 rounded-[28px] bg-gradient-to-r from-teal-600 to-teal-400" />
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-24 flex-shrink-0 items-center justify-center rounded-[28px] border border-slate-200 bg-white px-2">
                      <img
                        src={platform.logo}
                        alt={`${platform.title} logo`}
                        className="h-6 w-auto max-w-[80px] object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-slate-950">{platform.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {platform.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent">
                    <span>Visit Platform</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default SharedPlatformsSection;
