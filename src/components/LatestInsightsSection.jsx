import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon, Sparkles } from "lucide-react";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

const feeds = [
  {
    platform: "GizmoGeek Hub",
    label: "From GizmoGeek Hub",
    logo: "/GizmoGeek%20Hub%20Logo.png",
    feedUrl: "https://gizmogeekhub.com/feed"
  },
  {
    platform: "TechOrbis",
    label: "From TechOrbis",
    logo: "/TechOrbis%20Logo.png",
    feedUrl: "https://techorbis.in/feed"
  }
];

function extractThumbnail(item) {
  if (item.thumbnail) return item.thumbnail;
  if (item.enclosure?.link) return item.enclosure.link;

  const match = item.description?.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function formatDate(dateString) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function LatestInsightsSection() {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadFeeds() {
      try {
        const results = await Promise.all(
          feeds.map(async (feed) => {
            const response = await fetch(
              `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.feedUrl)}`
            );

            if (!response.ok) {
              throw new Error(`Failed to fetch ${feed.platform}`);
            }

            const data = await response.json();
            const articles = (data.items || []).slice(0, 3).map((item) => ({
              title: item.title,
              href: item.link,
              thumbnail: extractThumbnail(item),
              publishDate: formatDate(item.pubDate),
              platform: feed.platform
            }));

            return {
              ...feed,
              articles,
              error: articles.length === 0 ? "No articles available right now." : null
            };
          })
        );

        if (!cancelled) {
          setInsights(results);
        }
      } catch (error) {
        if (!cancelled) {
          setInsights(
            feeds.map((feed) => ({
              ...feed,
              articles: [],
              error: "Unable to load articles right now."
            }))
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadFeeds();

    return () => {
      cancelled = true;
    };
  }, []);

  const groups = loading ? feeds.map((feed) => ({ ...feed, articles: [] })) : insights;

  return (
    <section className="bg-white py-20">
      <PageContainer>
        <SectionReveal>
          <div className="saas-shell section-layer px-7 py-9 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Editorial Highlights
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Latest Insights
                </h2>
              </div>
              <div className="soft-panel max-w-md p-4">
                <p className="text-sm leading-6 text-slate-600">
                  Recent articles and insights from the Cre8sphere Media ecosystem.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-10">
              {groups.map((group, groupIndex) => (
                <div key={group.platform}>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl border border-brand-border bg-white px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                      <img
                        src={group.logo}
                        alt={`${group.platform} logo`}
                        className="h-8 w-auto object-contain sm:h-10"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
                      {group.label}
                    </p>
                  </div>

                  {loading ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="surface-card overflow-hidden p-0">
                          <div className="h-44 animate-pulse bg-slate-100" />
                          <div className="space-y-3 p-6">
                            <div className="h-3 w-24 animate-pulse rounded bg-slate-100" />
                            <div className="h-6 w-4/5 animate-pulse rounded bg-slate-100" />
                            <div className="h-4 w-1/2 animate-pulse rounded bg-slate-100" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : group.error ? (
                    <div className="surface-card p-6">
                      <p className="text-sm text-slate-600">{group.error}</p>
                    </div>
                  ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {group.articles.map((article) => (
                        <motion.a
                          key={article.href}
                          whileHover={{ y: -6 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          href={article.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="surface-card elevate-card block overflow-hidden p-0 transition-all duration-300"
                        >
                          <div
                            className={`flex h-44 items-center justify-center overflow-hidden ${
                              groupIndex === 0
                                ? "bg-gradient-to-br from-teal-50 via-white to-cyan-50"
                                : "bg-gradient-to-br from-lime-50 via-white to-teal-50"
                            }`}
                          >
                            {article.thumbnail ? (
                              <img
                                src={article.thumbnail}
                                alt={article.title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center">
                                <div className="feature-chip h-12 w-12">
                                  <ImageIcon className="h-5 w-5 text-white" />
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="p-6">
                            <div className="flex flex-wrap items-center gap-3">
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                                {article.platform}
                              </p>
                              <span className="text-xs text-slate-500">{article.publishDate}</span>
                            </div>
                            <h3 className="mt-3 text-xl font-semibold leading-8 text-brand-text">
                              {article.title}
                            </h3>
                            <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-accent">
                              Read Article
                              <ArrowUpRight className="h-4 w-4" />
                            </div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default LatestInsightsSection;
