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
            <article className="surface-card section-layer rounded-xl bg-gradient-to-br from-white via-gray-50 to-teal-50/40 p-7 sm:p-8">
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
              className="surface-card rounded-xl bg-white p-6 shadow-md"
            >
              <svg viewBox="0 0 320 220" className="h-full w-full">
                <rect x="8" y="10" width="304" height="200" rx="18" fill="#F7F9FA" stroke="#E5E7EB" />
                <rect x="28" y="36" width="264" height="34" rx="8" fill="#fff" stroke="#E5E7EB" />
                <rect x="28" y="84" width="172" height="18" rx="6" fill="#008080" fillOpacity="0.2" />
                <rect x="28" y="112" width="220" height="18" rx="6" fill="#008080" fillOpacity="0.14" />
                <rect x="28" y="140" width="196" height="18" rx="6" fill="#008080" fillOpacity="0.1" />
                <circle cx="267" cy="93" r="18" fill="#008080" fillOpacity="0.2" />
                <path d="M267 85V101M259 93H275" stroke="#008080" strokeWidth="2" />
              </svg>
            </motion.div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {innovationCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.24 }}
                  className="surface-card elevate-card rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex rounded-xl border border-brand-border bg-brand-soft p-2.5">
                    <Icon className="h-5 w-5 text-brand-accent" />
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
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default InnovationToolsSection;









