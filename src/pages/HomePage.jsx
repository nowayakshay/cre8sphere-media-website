import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhyCre8sphere from "../components/WhyCre8sphere";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, ExternalLink, Globe, Newspaper, Palette, Sparkles, Smartphone } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

const platforms = [
  {
    id: "gizmogeek-hub",
    title: "GizmoGeek Hub",
    category: "Consumer Tech Media",
    description: "Digital publication delivering in-depth consumer technology news, gadget reviews, buyer guides, and tech analysis.",
    link: "https://gizmogeekhub.com/",
    icon: Smartphone,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    badge: "Live Platform",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "techorbis",
    title: "TechOrbis",
    category: "Emerging Tech & AI",
    description: "Insights platform focusing on artificial intelligence, electric mobility, robotics, and next-generation tech breakthroughs.",
    link: "https://techorbis.in/",
    icon: Newspaper,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    badge: "Live Platform",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    id: "origin8",
    title: "Origin8",
    category: "Creative & Brand Studio",
    description: "Digital design agency powering brand identity, UI/UX systems, visual storytelling, and strategic media experiences.",
    link: "https://origin8agency.in/",
    icon: Palette,
    color: "bg-violet-50 text-violet-600 border-violet-100",
    badge: "Creative Division",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200"
  }
];

const products = [
  {
    id: "repurplex",
    name: "Repurplex",
    tagline: "AI Content Repurposing",
    description: "Transform long-form articles, YouTube videos, and transcripts into multi-platform social media posts in seconds.",
    status: "Live",
    statusColor: "bg-emerald-500",
    icon: Sparkles,
    website: "https://repurplex.com"
  },
  {
    id: "refyn",
    name: "Refyn",
    tagline: "AI Writing Humanizer",
    description: "Refine draft AI text into natural, authentic, human-like writing while preserving core narrative tone and clarity.",
    status: "In Development",
    statusColor: "bg-amber-500",
    icon: Bot,
    website: "#"
  },
  {
    id: "newstrix",
    name: "Newstrix",
    tagline: "AI News Intelligence",
    description: "Intelligent news discovery and aggregation system tailored for tech trends, startup news, and AI announcements.",
    status: "In Development",
    statusColor: "bg-amber-500",
    icon: Newspaper,
    website: "#"
  }
];

function HomePage() {
  return (
    <div className="home-page min-h-screen bg-white text-slate-800">
      <Seo
        title="Cre8sphere | Technology & Innovation"
        description="Cre8sphere LLP is a modern technology and innovation company creating AI products, software platforms, digital media, and creative experiences."
        path="/"
      />
      
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Ecosystem Platforms Section */}
        <section className="py-16 sm:py-24 bg-slate-50/50 border-y border-slate-100" id="solutions">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
                <Globe className="h-3.5 w-3.5" />
                Connected Ecosystem
              </span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Media Platforms & Creative Solutions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                We operate domain-focused digital media properties and creative systems that reach tech enthusiasts, innovators, and creators worldwide.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div
                    key={platform.id}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#008080]/30 hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${platform.color}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${platform.badgeColor}`}>
                          {platform.badge}
                        </span>
                      </div>

                      <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900">
                        {platform.title}
                      </h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#008080]">
                        {platform.category}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {platform.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4">
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-[#008080] hover:bg-[#008080] hover:text-white"
                      >
                        Visit Platform
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </PageContainer>
        </section>

        {/* 3. AI Studio Products Section */}
        <section className="py-16 sm:py-24 bg-white" id="products">
          <PageContainer>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
                <Sparkles className="h-3.5 w-3.5" />
                Cre8sphere AI Studio
              </span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Software Products & AI Tools
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Intelligent tools and content acceleration applications engineered for modern workflows.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {products.map((prod) => {
                const Icon = prod.icon;
                return (
                  <div
                    key={prod.id}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#008080]/30 hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                          <span className={`h-2 w-2 rounded-full ${prod.statusColor}`} />
                          {prod.status}
                        </span>
                      </div>

                      <h3 className="mt-6 font-heading text-2xl font-bold text-slate-900">
                        {prod.name}
                      </h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#008080]">
                        {prod.tagline}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {prod.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4">
                      {prod.website !== "#" ? (
                        <a
                          href={prod.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-premium inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#008080] py-3 text-sm font-semibold text-white transition-all hover:bg-[#006666]"
                        >
                          Visit App
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 py-3 text-sm font-semibold text-slate-400 cursor-not-allowed">
                          {prod.status}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </PageContainer>
        </section>

        {/* 4. Why Cre8sphere Section */}
        <WhyCre8sphere />

        {/* 5. Corporate CTA Section */}
        <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
          <PageContainer>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center sm:p-12 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                Ready to Collaborate or Build Together?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Cre8sphere LLP partners with technology teams, creators, and strategic investors to build impactful digital solutions.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="btn-premium inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 shadow-md"
                >
                  Get In Touch With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
