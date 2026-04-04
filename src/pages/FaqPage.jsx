import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import Seo from "../components/Seo";

const faqGroups = [
  {
    category: "About",
    questions: [
      {
        q: "What is Cre8sphere Media?",
        a: "Cre8sphere Media is a digital media and AI product company focused on technology, artificial intelligence, electric mobility, and digital innovation. We operate a growing ecosystem of platforms, AI tools, and creative solutions."
      },
      {
        q: "What does Cre8sphere do?",
        a: "We build and operate digital media platforms (GizmoGeek Hub, TechOrbis), AI-powered tools (Repurplex, Refyn AI, Newstrix), and a creative studio (Origin8). Our goal is to simplify complex ideas and make technology more accessible."
      }
    ]
  },
  {
    category: "Platforms",
    questions: [
      {
        q: "What platforms do you operate?",
        a: "We operate GizmoGeek Hub (consumer tech), TechOrbis (AI, EV, future tech), and Origin8 (creative branding and digital storytelling)."
      },
      {
        q: "What is GizmoGeek Hub?",
        a: "GizmoGeek Hub is our consumer technology platform exploring devices, software, and everyday digital life."
      },
      {
        q: "What is TechOrbis?",
        a: "TechOrbis is our deep-dive platform covering artificial intelligence, electric mobility, and future-shaping innovations."
      }
    ]
  },
  {
    category: "AI Products",
    questions: [
      {
        q: "What is Cre8sphere AI Studio?",
        a: "Cre8sphere AI Studio is our internal product division focused on building AI-powered tools that simplify content creation, distribution, and digital workflows."
      },
      {
        q: "What is Repurplex?",
        a: "Repurplex is our flagship AI content repurposing engine. It converts long-form content (articles, blogs, YouTube links) into platform-ready formats for X, LinkedIn, newsletters, and summaries. Currently in Beta."
      },
      {
        q: "What tools are you building?",
        a: "Beyond Repurplex, we are building Refyn AI and Newstrix - tools designed for content creators, founders, and media teams."
      }
    ]
  },
  {
    category: "Collaboration",
    questions: [
      {
        q: "Can I contribute to your platforms?",
        a: "Yes! We welcome writers, tech enthusiasts, founders, and brands to collaborate with us. You can contribute articles, share ideas, or work on products."
      },
      {
        q: "How do I join or collaborate with Cre8sphere?",
        a: "Visit our Join Us page or reach out directly at contact@cre8sphere.in. Tell us who you are and how you'd like to work with us."
      }
    ]
  },
  {
    category: "Careers",
    questions: [
      {
        q: "Are you currently hiring?",
        a: "We are not actively hiring right now, but we are always looking for talented individuals aligned with our vision. Feel free to send your profile to contact@cre8sphere.in."
      }
    ]
  },
  {
    category: "General",
    questions: [
      {
        q: "How can I contact Cre8sphere Media?",
        a: "You can reach us at contact@cre8sphere.in, or via our Contact page. We typically respond within 24-48 hours."
      }
    ]
  }
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-semibold text-slate-900 hover:text-teal-600 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180 text-teal-500" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-base leading-relaxed text-slate-600">{a}</p>
      </div>
    </div>
  );
}

function FaqPage() {
  return (
    <div className="internal-page bg-brand-bg text-brand-text">
      <Seo
        title="FAQ - Cre8sphere Media"
        description="Frequently asked questions about Cre8sphere Media, our platforms, AI tools, collaboration, and careers."
        path="/faq"
      />
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageHeroSection
          title="Frequently Asked Questions"
          description="Everything you need to know about Cre8sphere Media - our platforms, products, and how to work with us."
        />

        <section className="py-16 sm:py-20 bg-slate-50">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-3xl mx-auto space-y-8">
                {faqGroups.map((group) => (
                  <article key={group.category} className="surface-card border border-slate-200 bg-white p-6 sm:p-8">
                    <h2 className="mb-2 text-xs font-bold tracking-[0.18em] uppercase text-teal-600">
                      {group.category}
                    </h2>
                    {group.questions.map((item) => (
                      <AccordionItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </article>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FaqPage;

