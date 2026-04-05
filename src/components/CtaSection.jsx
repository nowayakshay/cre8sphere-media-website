import { ArrowRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-20" id="cta">
      {/* Subtle Background Glow behind CTA */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.06),transparent_70%)] blur-3xl opacity-50" />
      </div>

      <PageContainer>
        <SectionReveal>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            
            {/* Main Heading & Catchphrase */}
            <h2 className="tracking-tight leading-[1.1]">
              Stay Connected
            </h2>
            
            <div className="mt-8 flex flex-col items-center gap-2">
              <p className="font-heading font-bold uppercase tracking-[0.1em] text-[#008080] text-[18px] sm:text-[22px]">
                Discover the Future of Technology
              </p>
              <div className="h-1 w-12 rounded-full bg-[#008080]/20" />
            </div>

            {/* Supporting Description */}
            <p className="mx-auto mt-6 max-w-[480px] text-[15px] sm:text-[16px] leading-relaxed text-slate-500">
              Explore our platforms and stay connected with the digital media ecosystem of tomorrow.
            </p>

            {/* Refined CTA Button */}
            <div className="mt-14 flex justify-center">
              <a
                href="#ecosystem"
                className="btn-premium btn-primary-glow group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-[28px] bg-[#008080] px-10 text-lg font-bold text-white hover:bg-[#006666] hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Our Platforms
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
                
                {/* Subtle Button Shine Animation */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 -translate-x-full group-hover:translate-x-full" />
              </a>
            </div>

          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default CtaSection;
