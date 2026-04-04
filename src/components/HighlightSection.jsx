import { ArrowRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function HighlightSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden" id="highlight">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(0,128,128,0.22),transparent_70%)] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_72%)] rounded-full pointer-events-none"></div>
      
      <PageContainer>
        <SectionReveal>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold tracking-tight text-white leading-[1.2]">
              Building AI-powered tools for the future of content and media.
            </h2>
            <div className="mt-12 flex justify-center">
              <a
                href="https://ai.cre8sphere.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(255,255,255,0.15)]"
              >
                Explore AI Studio
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default HighlightSection;
