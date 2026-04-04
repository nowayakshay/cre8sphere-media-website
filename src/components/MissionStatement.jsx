import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function MissionStatement() {
  return (
    <section className="py-16 sm:py-20 bg-transparent relative overflow-hidden" id="mission">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell relative z-10 mx-auto flex max-w-[860px] flex-col items-center justify-center border border-slate-200 bg-white px-8 py-12 text-center sm:px-12 sm:py-14">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Our Philosophy
            </h2>

            {/* Quote */}
            <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-slate-900 leading-relaxed">
              &ldquo;At Cre8sphere Media, we believe the future of technology should not only be built - it should also be understood.&rdquo;
            </p>

            <div className="mt-8 text-sm font-semibold text-slate-500">
                Exploring Tomorrow's Technology Today
            </div>

          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default MissionStatement;
