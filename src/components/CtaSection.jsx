import { ArrowUpRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function CtaSection() {
  return (
    <section className="pb-24 pt-8">
      <PageContainer>
        <SectionReveal>
          <div className="surface-card p-8 text-center sm:p-14">
            <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Start Exploring Cre8sphere Media
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#ecosystem"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-700"
              >
                Explore Platforms
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#platforms"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition-colors duration-300 hover:border-brand-accent/30 hover:text-brand-accent"
              >
                View AI Products
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default CtaSection;
