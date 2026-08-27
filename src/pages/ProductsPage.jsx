import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { ArrowRight, Bot, ExternalLink, Newspaper, Sparkles } from "lucide-react";

const products = [
  {
    id: "repurplex",
    name: "Repurplex",
    tagline: "AI-Powered Content Repurposing Platform",
    description: "Repurplex helps creators, marketers, publishers, and businesses transform a single piece of content into multiple platform-ready formats in seconds using advanced AI.",
    status: "Live",
    statusColor: "bg-emerald-500",
    icon: Sparkles,
    features: [
      "AI-powered content repurposing",
      "YouTube & article content extraction",
      "Multi-platform social media generation",
      "Multiple writing styles & tones",
      "Creator & marketing workflows"
    ],
    website: "https://repurplex.com"
  },
  {
    id: "refyn",
    name: "Refyn",
    tagline: "AI Humanizer & Writing Enhancer",
    description: "Refyn transforms draft AI-generated content into natural, human-like writing by improving tone, readability, and authenticity while preserving core meaning.",
    status: "In Development",
    statusColor: "bg-amber-500",
    icon: Bot,
    features: [
      "Humanize AI-generated text",
      "Improve readability & flow",
      "Tone refinement algorithms",
      "Natural language enhancement",
      "Writing optimization"
    ],
    website: "#"
  },
  {
    id: "newstrix",
    name: "Newstrix",
    tagline: "Intelligent News & Tech Intelligence Platform",
    description: "Newstrix is an AI-powered news intelligence platform focused on discovering, organizing, and delivering important technology, AI, startup, and innovation news.",
    status: "In Development",
    statusColor: "bg-amber-500",
    icon: Newspaper,
    features: [
      "AI news aggregation",
      "Personalized tech feeds",
      "Trend discovery algorithms",
      "Curated editorial summaries",
      "Real-time tech alerts"
    ],
    website: "#"
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="AI Products & Tools | Cre8sphere LLP"
        description="Discover AI-powered tools and software products built by Cre8sphere LLP, including Repurplex, Refyn, and Newstrix."
        path="/products"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <Sparkles className="h-3.5 w-3.5" />
              Cre8sphere AI Studio
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Software Products & AI Tools
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              We design and build intelligent software applications, AI tools, and content acceleration systems for creators, businesses, and digital teams.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="minimal-card p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                        <span className={`h-2 w-2 rounded-full ${product.statusColor}`} />
                        {product.status}
                      </span>
                    </div>

                    <h2 className="mt-6 font-heading text-2xl font-bold text-slate-900">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#008080]">
                      {product.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {product.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities
                      </p>
                      <ul className="mt-3 space-y-2">
                        {product.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#008080]" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    {product.website !== "#" ? (
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#008080] py-3 text-sm font-semibold text-white hover:bg-[#006666]"
                      >
                        Visit App
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex w-full items-center justify-center rounded-full bg-slate-100 py-3 text-sm font-semibold text-slate-400 cursor-not-allowed">
                        {product.status}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
              Have a Product Idea or Partnership Inquiry?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Cre8sphere LLP collaborates with strategic partners, investors, and teams to build high-impact technology products.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-8 py-3.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Get In Touch With Us
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
