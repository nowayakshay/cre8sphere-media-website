import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { ArrowRight, ExternalLink, Globe, Newspaper, Palette, Smartphone } from "lucide-react";

const solutions = [
  {
    id: "gizmogeek-hub",
    title: "GizmoGeek Hub",
    category: "Consumer Technology Media",
    description: "GizmoGeek Hub is a digital tech publication delivering real-time coverage on smartphones, laptops, wearables, consumer electronics, buyer guides, and hardware analysis.",
    link: "https://gizmogeekhub.com/",
    icon: Smartphone,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    features: [
      "Real-time consumer tech news & coverage",
      "Hands-on gadget reviews & buying guides",
      "Mobile, laptop & audio tech analysis",
      "Tech specs comparison tools"
    ]
  },
  {
    id: "techorbis",
    title: "TechOrbis",
    category: "Emerging Tech & AI Platform",
    description: "TechOrbis focuses on artificial intelligence breakthroughs, electric mobility trends, future energy systems, and emerging technologies shaping modern industries.",
    link: "https://techorbis.in/",
    icon: Newspaper,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    features: [
      "In-depth AI & machine learning insights",
      "Electric vehicle (EV) market trends",
      "Robotics & automation reporting",
      "Future tech innovation analysis"
    ]
  },
  {
    id: "origin8",
    title: "Origin8",
    category: "Digital Design & Brand Studio",
    description: "Origin8 is Cre8sphere's creative agency division, specializing in modern visual identity, UI/UX interface design, web development, and digital marketing strategies.",
    link: "https://origin8agency.in/",
    icon: Palette,
    color: "bg-violet-50 text-violet-600 border-violet-100",
    features: [
      "Brand identity & logo design",
      "UI/UX product design systems",
      "Web application engineering",
      "Strategic content & marketing"
    ]
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="Solutions & Media Platforms | Cre8sphere LLP"
        description="Explore Cre8sphere LLP's connected ecosystem of media platforms and creative solutions, including GizmoGeek Hub, TechOrbis, and Origin8."
        path="/solutions"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <Globe className="h-3.5 w-3.5" />
              Ecosystem Platforms
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Solutions & Platforms
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We operate domain-focused digital media properties and creative systems that connect technology enthusiasts, innovators, and creators globally.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="minimal-card p-8 sm:p-10 grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-center"
                >
                  <div>
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${item.color}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#008080]">
                      {item.category}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium inline-flex items-center gap-2 rounded-full bg-[#008080] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#006666]"
                      >
                        Visit Official Site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Focus Areas
                    </h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#008080]" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              Interested in Partnering with Our Media Platforms?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Cre8sphere LLP works with technology brands, PR agencies, and innovators for strategic media coverage and product announcements.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-3.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Contact Partnership Team
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
