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
  title = "Our Media Platforms",
  subtitle = "Powering the Cre8sphere ecosystem across consumer technology and AI innovation."
}) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="platforms">
      {/* Subtle Background Visual */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.04),transparent_70%)] blur-3xl opacity-60" />
      </div>

      <PageContainer>
        <SectionReveal>
          <div className="mb-16 text-center lg:text-left">
            <h2>
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 readable-text">
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
            {platforms.map((platform) => (
              <a
                key={platform.title}
                href={platform.website}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col text-left transition-all duration-300"
              >
                {/* Logo & Header Section */}
                <div className="mb-8 flex flex-col items-start gap-6">
                  <div className="flex h-16 w-48 items-center justify-center rounded-2xl border border-slate-100 bg-white/50 px-6 p-4 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:shadow-md group-hover:border-[#008080]/30">
                    <img
                      src={platform.logo}
                      alt={`${platform.title} logo`}
                      className="h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#008080] transition-colors">
                      {platform.title}
                    </h3>
                    <div className="h-1 w-8 rounded-full bg-[#008080]/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[#008080]" />
                  </div>
                </div>

                <p className="text-[17px] leading-relaxed text-slate-600 flex-grow">
                  {platform.description}
                </p>

                <div className="mt-10 flex items-center gap-3 text-base font-bold uppercase tracking-widest text-[#008080] transition-all duration-300 group-hover:gap-5 group-hover:text-[#006666]">
                  <span>Visit Platform</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F9F9] group-hover:bg-[#008080] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default SharedPlatformsSection;
