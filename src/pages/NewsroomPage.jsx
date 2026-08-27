import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { ArrowRight, Calendar, Newspaper, Tag } from "lucide-react";

const newsArticles = [
  {
    id: "cre8sphere-ai-studio-launch",
    title: "Cre8sphere Announces Launch of Repurplex AI Content Application",
    date: "February 20, 2026",
    category: "Product Launch",
    summary: "Cre8sphere LLP officially launches Repurplex, an intelligent AI application designed to repurpose long-form text and video content into multi-platform social media posts."
  },
  {
    id: "gizmogeek-hub-growth-milestone",
    title: "GizmoGeek Hub Reaches 500,000 Monthly Tech Enthusiast Readers",
    date: "January 14, 2026",
    category: "Media Platform",
    summary: "Consumer tech publication GizmoGeek Hub achieves key readership milestone following expanded coverage on smartphones, wearables, and AI gadgets."
  },
  {
    id: "cre8sphere-corporate-rebrand",
    title: "Cre8sphere Repositioned as Technology & Innovation Company",
    date: "December 01, 2025",
    category: "Corporate",
    summary: "Cre8sphere LLP — formerly known as Cre8sphere Digital Media LLP — updates corporate identity to reflect expansion into software product engineering and AI tools."
  }
];

export default function NewsroomPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="Newsroom & Press | Cre8sphere LLP"
        description="Official corporate press releases, media coverage, and announcements from Cre8sphere LLP."
        path="/newsroom"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <Newspaper className="h-3.5 w-3.5" />
              Press & Media
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Cre8sphere Newsroom
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Official press releases, product announcements, corporate updates, and media coverage.
            </p>
          </div>

          <div className="mt-16 space-y-6 max-w-4xl mx-auto">
            {newsArticles.map((article) => (
              <article key={article.id} className="minimal-card p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1 text-[#008080]">
                    <Tag className="h-3.5 w-3.5" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </span>
                </div>

                <h2 className="mt-3 font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {article.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              Media & Press Inquiries
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              For interview requests, press kits, or official statements, please reach out to our communications team.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-full bg-[#008080] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#006666]"
              >
                Contact Press Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
