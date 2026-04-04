import { ArrowRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-100">
      <PageContainer>
        <SectionReveal>
          <div className="surface-card border border-slate-200 bg-white p-10 text-center sm:p-16 lg:p-20 rounded-[28px]">
            <h2 className="section-title mx-auto max-w-4xl text-slate-950">
              Stay Connected
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 font-medium">
              Discover the Future of Technology
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-slate-500">
              Explore our platforms and stay connected with the digital media ecosystem of tomorrow.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#ecosystem"
                className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-[28px] bg-[#008080] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#0a6d6d] hover:shadow-[0_14px_28px_rgba(13,148,136,0.24)]"
              >
                Explore Our Platforms
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default CtaSection;

