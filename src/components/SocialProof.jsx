import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function SocialProof() {
  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-500 mb-8">
              Built for modern creators & media teams
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale">
              {/* Using text placeholders styled as logos, matching a structured SaaS feel */}
              <div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-slate-800"></div> MEDIACO
              </div>
              <div className="text-xl font-black tracking-tighter text-slate-800 italic">
                CRAFTED
              </div>
              <div className="text-xl font-medium tracking-wide text-slate-800 flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
                PEAK
              </div>
              <div className="text-xl font-serif font-bold text-slate-800">
                Nexus
              </div>
              <div className="text-xl font-bold tracking-widest text-slate-800">
                LUMINA
              </div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default SocialProof;
