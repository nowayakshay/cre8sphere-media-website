import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "What is Cre8sphere LLP?",
    a: "Cre8sphere LLP is a technology and innovation company that builds AI products, software tools, digital media properties, and creative systems."
  },
  {
    q: "Is Cre8sphere LLP formerly known as Cre8sphere Digital Media LLP?",
    a: "Yes. Cre8sphere LLP — formerly known as Cre8sphere Digital Media LLP — evolved into a technology and innovation company to reflect our expanded focus on AI product development."
  },
  {
    q: "What products does Cre8sphere AI Studio build?",
    a: "Cre8sphere AI Studio builds workflow tools like Repurplex (AI content repurposer), Refyn (AI text humanizer), and Newstrix (news intelligence)."
  },
  {
    q: "What media properties does Cre8sphere operate?",
    a: "We operate GizmoGeek Hub (consumer tech reviews & news) and TechOrbis (emerging tech & AI insights)."
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="Frequently Asked Questions | Cre8sphere LLP"
        description="Find answers to common questions about Cre8sphere LLP, our AI products, media platforms, and company structure."
        path="/faq"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <HelpCircle className="h-3.5 w-3.5" />
              Help & FAQ
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="minimal-card p-6 sm:p-8">
                <h3 className="font-heading text-lg font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
