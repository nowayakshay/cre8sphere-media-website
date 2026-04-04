import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const faqs = [
  {
    question: "What is Cre8sphere Media?",
    answer: "Cre8sphere Media is a digital media and AI product company focused on exploring technology, artificial intelligence, and digital innovation."
  },
  {
    question: "What products do you offer?",
    answer: "Our primary products operate under the Cre8sphere AI Studio, featuring Repurplex, Refyn AI, and Newstrix. We also operate consumer-facing editorial platforms like GizmoGeek Hub and TechOrbis."
  },
  {
    question: "What is Repurplex?",
    answer: "Repurplex is our flagship AI-powered content transformation engine designed to convert a single input (like a blog or video) into multiple platform-ready outputs tailored for various social channels."
  },
  {
    question: "Who is this for?",
    answer: "Our platforms and products are built for modern creators, digital publishers, media teams, and anyone looking to leverage technology and AI to scale their output efficiently."
  }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="faq">
      <PageContainer>
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight leading-[1.2] text-slate-950 sm:text-4xl lg:text-[36px]">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="surface-card overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-all duration-300">
                    <button
                      onClick={() => toggleOpen(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="p-6 pt-0 text-base leading-relaxed text-slate-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default FaqSection;

