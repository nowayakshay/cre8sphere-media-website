import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function MissionStatement() {
  return (
    <section className="relative py-10 sm:py-20 overflow-hidden bg-white" id="mission">
      {/* Subtle Background Visual */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.04),transparent_70%)] blur-3xl opacity-40" />
      </div>

      <PageContainer>
        <SectionReveal>
          <div className="relative z-10 mx-auto max-w-[940px] text-center">
            
            {/* Styled Section Label */}
            <div className="mb-10 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#008080]/20" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#008080]/80">
                Our Philosophy
              </span>
              <div className="h-px w-8 bg-[#008080]/20" />
            </div>

            {/* High-Impact Quote */}
            <div className="relative">
              {/* Decorative Background Quote (Optional) */}
              <span className="absolute -left-4 -top-12 select-none text-[120px] font-serif leading-none text-slate-100 opacity-60 sm:-left-8 sm:-top-16 sm:text-[180px]">
                &ldquo;
              </span>
              
              <blockquote className="relative z-10">
                <p className="font-heading font-bold tracking-tight text-slate-950 text-[32px] sm:text-[48px] leading-[1.15]">
                  At Cre8sphere Media, we believe the future of technology should not only be built <span className="text-[#008080]">&ndash;</span> it should also be understood.
                </p>
              </blockquote>

              <span className="absolute -right-4 -bottom-12 select-none text-[120px] font-serif leading-none text-slate-100 opacity-60 sm:-right-8 sm:-bottom-16 sm:text-[180px]">
                &rdquo;
              </span>
            </div>

            {/* Refined Tagline signature */}
            <div className="mt-16 flex flex-col items-center gap-4">
              <div className="h-12 w-px bg-gradient-to-b from-[#008080]/0 via-[#008080]/30 to-[#008080]/0" />
              <p className="subtext italic opacity-60">
                Exploring Tomorrow&apos;s Technology Today
              </p>
            </div>

          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default MissionStatement;
