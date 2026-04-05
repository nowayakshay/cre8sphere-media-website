import { ArrowUpRight, Newspaper, PenTool, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const platforms = [
  {
    title: "GizmoGeek Hub",
    website: "https://gizmogeekhub.com/",
    description: "Consumer technology platform",
    icon: Smartphone,
    iconClass: "bg-cyan-50 text-cyan-600 border-cyan-100"
  },
  {
    title: "TechOrbis",
    website: "https://techorbis.in/",
    description: "AI, EV, future technology",
    icon: Newspaper,
    iconClass: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    title: "Origin8",
    website: "https://origin8agency.in/",
    description: "Creative studio for branding and digital storytelling",
    icon: PenTool,
    iconClass: "bg-[#F2F9F9] text-[#008080] border-[#008080]/10"
  }
];

function PlatformsSection() {
  return (
    <section className="py-20 sm:py-28" id="platforms">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-4xl lg:text-[36px]">
              Our Platforms
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              The Cre8sphere Media ecosystem spans editorial brands and creative
              systems designed for modern technology audiences.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.title}
                    href={platform.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card elevate-card block p-8 md:p-10 text-left"
                  >
                    <div className={`mb-0 flex h-12 w-12 items-center justify-center rounded-[14px] border ${platform.iconClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-3">
                      <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight leading-[1.25] text-slate-900 group-hover:text-brand-accent transition-colors">{platform.title}</h3>
                      <div className="flex items-center gap-1 text-sm font-semibold text-brand-accent">
                        <span>Visit Website</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{platform.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default PlatformsSection;

