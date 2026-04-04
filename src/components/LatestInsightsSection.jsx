import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function LatestInsightsSection() {
  return (
    <section className="py-16 sm:py-20">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Trusted by Teams Worldwide
            </h2>
            <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-gray-200 bg-white p-8 text-left shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:p-10">
              <p className="text-xl leading-9 text-slate-800 sm:text-2xl">
                &ldquo;Cre8sphere Media is building a structured ecosystem for content, AI,
                and digital innovation.&rdquo;
              </p>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default LatestInsightsSection;
