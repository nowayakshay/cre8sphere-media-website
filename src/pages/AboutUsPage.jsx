import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { ArrowRight, Building2, Compass, Cpu, Layers, Sparkles } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="About Us | Cre8sphere LLP"
        description="Learn about Cre8sphere LLP — a technology and innovation company creating AI tools, software platforms, and digital media properties."
        path="/about"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <Building2 className="h-3.5 w-3.5" />
              Corporate Profile
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              About Cre8sphere
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Cre8sphere LLP is a forward-thinking technology and innovation company building AI tools, digital media platforms, and creative systems.
            </p>
          </div>

          {/* Narrative Story Section */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-base leading-relaxed text-slate-600">
              <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                Our Evolution into a Technology & Innovation Company
              </h2>
              <p>
                Founded with a passion for emerging technology and digital publishing, Cre8sphere LLP has evolved from specialized media brands into an integrated technology company.
              </p>
              <p>
                Today, our engineering and product teams build software tools like <strong>Repurplex</strong> (AI Content Repurposer), <strong>Refyn</strong>, and <strong>Newstrix</strong> while operating digital media platforms including <strong>GizmoGeek Hub</strong> and <strong>TechOrbis</strong>.
              </p>
              <div className="rounded-2xl border-l-4 border-[#008080] bg-slate-50 p-5 text-slate-800 font-semibold italic text-sm">
                &ldquo;Cre8sphere LLP — formerly known as Cre8sphere Digital Media LLP — represents our expanded commitment to software product engineering and AI innovation.&rdquo;
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Product Engineering", desc: "Building scalable AI applications & SaaS tools.", icon: Cpu },
                { title: "Domain Media", desc: "Operating trusted tech & AI news publications.", icon: Compass },
                { title: "Creative Systems", desc: "Crafting digital brand identity & UX design.", icon: Layers },
                { title: "Future Innovation", desc: "Pioneering workflow automation tools.", icon: Sparkles },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="minimal-card p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F9F9] text-[#008080]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              Want to Learn More or Join Us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore career opportunities, partnership options, or get in touch with our team directly.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-full bg-[#008080] px-6 py-3 text-xs font-semibold text-white hover:bg-[#006666]"
              >
                Contact Us
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/careers"
                className="btn-premium inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                View Careers
              </Link>
            </div>
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
