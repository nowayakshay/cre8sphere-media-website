import { ArrowUpRight, Newspaper, PenTool, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const platforms = [
  {
    title: "GizmoGeek Hub",
    website: "https://gizmogeekhub.com/",
    description: "Consumer tech insights, smartphone reviews, and ecosystem updates.",
    icon: Smartphone
  },
  {
    title: "TechOrbis",
    website: "https://techorbis.in/",
    description: "Focused on AI, electric vehicles, and future technology trends.",
    icon: Newspaper
  },
  {
    title: "Origin8 by Cre8sphere",
    website: "https://origin8agency.in/",
    description: "Creative and digital execution for brand, content, and web experiences.",
    icon: PenTool
  }
];

function PlatformsSection() {
  return (
    <section className="py-16 sm:py-20" id="platforms">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <p className="inline-flex items-center rounded-lg border border-black/5 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-accent">
              Media Platforms
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Our Platforms
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              The Cre8sphere Media ecosystem spans editorial brands and creative
              systems designed for modern technology audiences.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.title}
                    href={platform.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="surface-card elevate-card block p-6 text-left"
                  >
                    <div className="feature-chip h-11 w-11 rounded-xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold text-slate-900">{platform.title}</h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-accent" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{platform.description}</p>
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
