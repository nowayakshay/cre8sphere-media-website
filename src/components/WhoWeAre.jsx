import { CheckCircle2 } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const whoWeAreCards = [
  "Technology + Creativity + Innovation",
  "Digital media for modern audiences",
  "Media Intelligence",
  "Modern Formats",
  "Connected Ideas"
];

function WhoWeAre() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-100" id="about">
      <PageContainer>
        <SectionReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Text */}
            <div className="text-left">
              <h2 className="section-title text-slate-950">
                Who We Are
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
                <p>
                  Cre8sphere Media is a digital media company built on curiosity, creativity, and innovation. We believe the future of technology should not only be built - it should also be understood. Our platform simplifies complex ideas and makes technology more accessible for everyone.
                </p>
                <p className="font-medium text-slate-900">
                  We are building a new-age digital ecosystem where media, technology, and AI-driven products work together to inform, simplify, and scale ideas.
                </p>
              </div>
            </div>

            {/* Right Visual / Cards */}
            <div className="flex flex-col gap-4">
              {whoWeAreCards.map((text, i) => (
                <div key={i} className="surface-card bg-white border border-slate-200 p-5 rounded-[28px] flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 shadow-sm">
                  <div className="text-brand-accent flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-bold text-slate-900">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default WhoWeAre;

