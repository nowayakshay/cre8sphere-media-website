import { motion } from "framer-motion";
import { Bot, WandSparkles, Workflow } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const innovationCards = [
  {
    title: "AI Innovation",
    description:
      "Cre8sphere Media is exploring the intersection of media and artificial intelligence by building tools that enhance content creation and digital storytelling.",
    icon: Bot
  },
  {
    title: "Repurplex",
    description:
      "An AI-powered content transformation engine that converts a single piece of content into multiple platform-ready formats such as threads, posts, summaries, and newsletters.",
    icon: Workflow
  },
  {
    title: "Future Tools",
    description:
      "We are continuously exploring new ideas and technologies to build tools that help creators work smarter and communicate ideas more effectively.",
    icon: WandSparkles
  }
];

function InnovationToolsSection() {
  return (
    <section className="bg-gray-50/70 py-20">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer px-7 py-9 sm:px-10 sm:py-12">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              <Bot className="h-7 w-7 text-brand-accent" />
              Innovation & AI Tools
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
              At Cre8sphere Media, we believe the future of digital media will be shaped by
              intelligent tools and creative technology. Alongside our media platforms,
              we are building AI-powered solutions that help creators, marketers, and
              businesses transform the way they create and distribute content.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
              Our goal is to explore how artificial intelligence can enhance creativity,
              productivity, and digital storytelling.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <article className="gradient-card p-7 sm:p-8">
                <div className="mb-6 inline-flex rounded-full border border-brand-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  AI Product Highlight
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">Repurplex</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                  Repurplex is an AI-powered content transformation engine designed to
                  help creators and marketers repurpose a single piece of content into
                  multiple platform-optimized formats. Instead of rewriting content
                  manually for different platforms, Repurplex converts a single article,
                  video, or link into structured content formats such as social media
                  threads, professional posts, summaries, and newsletter content.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  This allows creators to expand their reach while saving time and
                  maintaining consistent messaging across platforms.
                </p>
              </article>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="soft-panel accent-grid p-6"
              >
                <svg viewBox="0 0 320 220" className="h-full w-full">
                  <rect x="8" y="10" width="304" height="200" rx="18" fill="#F7F9FA" stroke="#E5E7EB" />
                  <rect x="24" y="26" width="272" height="44" rx="14" fill="#ffffff" stroke="#E5E7EB" />
                  <rect x="28" y="84" width="172" height="18" rx="6" fill="#008080" fillOpacity="0.2" />
                  <rect x="28" y="112" width="220" height="18" rx="6" fill="#008080" fillOpacity="0.14" />
                  <rect x="28" y="140" width="196" height="18" rx="6" fill="#008080" fillOpacity="0.1" />
                  <rect x="216" y="84" width="72" height="74" rx="16" fill="#ffffff" stroke="#E5E7EB" />
                  <circle cx="252" cy="95" r="18" fill="#008080" fillOpacity="0.2" />
                  <path d="M252 87V103M244 95H260" stroke="#008080" strokeWidth="2" />
                </svg>
              </motion.div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {innovationCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.24 }}
                    className={`elevate-card rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl ${
                      index === 0
                        ? "feature-tile"
                        : "gradient-card"
                    }`}
                  >
                    <div className="feature-chip h-11 w-11">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-brand-accent">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                      {card.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <p className="mt-10 max-w-4xl text-base leading-7 text-slate-700 sm:text-lg">
              As Cre8sphere Media continues to evolve, we aim to build more AI-powered tools
              and digital products that empower creators and simplify the way content is
              created, shared, and consumed across the internet.
            </p>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default InnovationToolsSection;









