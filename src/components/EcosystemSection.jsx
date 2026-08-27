import { motion } from "framer-motion";
import { ExternalLink, Globe, Newspaper, Palette, Smartphone } from "lucide-react";
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
  }
];

export default function EcosystemSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 border-y border-slate-200/60" id="solutions">
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
          {platforms.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="minimal-card flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${platform.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700">
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
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
