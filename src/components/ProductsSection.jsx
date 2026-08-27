import { motion } from "framer-motion";
import { Bot, ExternalLink, Newspaper, Sparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

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

export default function ProductsSection() {
  return (
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
          {products.map((prod, idx) => {
            const Icon = prod.icon;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="minimal-card flex flex-col justify-between p-8"
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
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
