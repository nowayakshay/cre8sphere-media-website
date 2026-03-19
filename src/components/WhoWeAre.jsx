import { Lightbulb, Sparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function WhoWeAre() {
  return (
    <section className="py-16 sm:py-20" id="ecosystem">
      <PageContainer>
        <SectionReveal>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-lg border border-black/5 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Company Overview
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Cre8sphere Media is a modern digital media and product company focused on
              making technology, AI, and emerging innovation easier to understand.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Through our media platforms, AI products, and creative systems, we are
              building a structured ecosystem for the future of digital communication.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="surface-card p-6 text-left">
                <div className="feature-chip h-11 w-11 rounded-xl">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Media Division</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Covers technology, AI, mobility, and the digital ecosystem through
                  platforms designed for modern readers.
                </p>
              </article>
              <article className="surface-card p-6 text-left">
                <div className="feature-chip h-11 w-11 rounded-xl">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Creative Division</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Supports the ecosystem through brand systems, websites, storytelling,
                  and digital execution via Origin8.
                </p>
              </article>
              <article className="surface-card p-6 text-left">
                <div className="feature-chip h-11 w-11 rounded-xl">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">Product Division</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Builds AI-powered systems for creators, media workflows, and future
                  digital intelligence use cases.
                </p>
              </article>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhoWeAre;
