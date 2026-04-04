import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function PageHeroSection({ title, description }) {
  return (
    <section>
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell relative overflow-hidden border border-slate-200 bg-white rounded-[28px] shadow-sm px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.12),transparent_72%)]" />
              <div className="absolute right-8 top-8 h-24 w-24 rounded-2xl border border-teal-100 bg-teal-50/70" />
            </div>
            <div className="flex flex-col max-w-3xl">
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
                {title}
              </h1>
              <p className="mt-5 max-w-[580px] text-base leading-relaxed text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default PageHeroSection;
