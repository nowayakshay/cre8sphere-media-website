import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function PageHeroSection({ title, description }) {
  return (
    <section className="border-b border-slate-100 bg-slate-50/50 py-14 sm:py-20">
      <PageContainer>
        <SectionReveal>
          <div className="flex flex-col max-w-3xl">
            <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
            <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-[44px] lg:text-[52px]">
              {title}
            </h1>
            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default PageHeroSection;
