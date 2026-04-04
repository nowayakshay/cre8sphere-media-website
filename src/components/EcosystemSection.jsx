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

function EcosystemSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="ecosystem">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-4xl lg:text-[36px]">
              Cre8sphere Ecosystem - Our Platforms
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Distinct brands inside one media network.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {platforms.map((platform) => (
                <a
                  key={platform.title}
                  href={platform.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group surface-card block rounded-[28px] border border-slate-200 bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] md:p-10"
                >
                  <div className="h-16 flex items-center justify-start mb-6 w-full">
                    <img
                      src={platform.logoPath}
                      alt={`${platform.title} Logo`}
                      className="h-full object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="mt-4 text-xl sm:text-[22px] font-semibold tracking-tight leading-[1.25] text-slate-900 group-hover:text-brand-accent transition-colors">
                    {platform.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600 min-h-[3rem]">
                    {platform.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-brand-accent transition-colors">
                    <span>Visit Website</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

export default EcosystemSection;

