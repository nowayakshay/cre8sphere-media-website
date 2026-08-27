import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="Careers | Cre8sphere LLP"
        description="Join Cre8sphere LLP — work on AI products, software engineering, digital media, and creative design."
        path="/careers"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <Briefcase className="h-3.5 w-3.5" />
              Join Our Team
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Careers at Cre8sphere
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We are building a culture of innovation, engineering excellence, and creative autonomy.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto space-y-6">
            {[
              { role: "Senior Full-Stack Engineer (React / Node)", dept: "AI Product Engineering", type: "Full-Time / Remote" },
              { role: "AI & NLP Workflow Specialist", dept: "Cre8sphere AI Studio", type: "Full-Time / Remote" },
              { role: "Tech Content Lead / Editor", dept: "GizmoGeek Hub & TechOrbis", type: "Full-Time" },
              { role: "UI/UX Product Designer", dept: "Origin8 Agency", type: "Full-Time" },
            ].map((job) => (
              <div key={job.role} className="minimal-card p-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008080]">{job.dept}</span>
                  <h3 className="mt-1 font-heading text-lg font-bold text-slate-900">{job.role}</h3>
                  <span className="mt-1 inline-block text-xs text-slate-500 font-medium">{job.type}</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-premium inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Apply Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
