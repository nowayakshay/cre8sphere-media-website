import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "./SectionReveal";

function HeroSection() {
  return (
    <section className="pt-6 sm:pt-8">
      <PageContainer>
        <SectionReveal>
          <div className="surface-card relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-gray-50 to-teal-50 px-6 py-10 sm:px-10 sm:py-14">
            <div className="hero-orb pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />
            <div className="hero-orb pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-teal-100/40 blur-3xl" />
            <div className="hero-orb pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-accent/20 via-brand-accent/10 to-transparent blur-3xl" />
            <div className="hero-orb pointer-events-none absolute right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-accent/14 via-brand-accent/8 to-transparent blur-3xl" />
            <div className="hero-orb pointer-events-none absolute bottom-8 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-gradient-to-t from-brand-accent/12 to-transparent blur-2xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,128,128,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,128,128,0.08) 1px, transparent 1px)",
                backgroundSize: "34px 34px"
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 inline-flex items-center rounded-full border border-brand-border bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  Cre8sphere Media
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-6xl">
                  Exploring Tomorrow&apos;s Technology Today
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                  Cre8sphere Media is a modern digital media company focused on
                  exploring the evolving world of technology, artificial intelligence,
                  electric mobility, and digital innovation. Through our platforms and
                  creative initiatives, we simplify complex ideas and make technology more
                  accessible for everyone.
                </p>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <motion.a
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    href="#platforms"
                    className="rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-teal-700"
                  >
                    Explore Our Platforms
                  </motion.a>
                  <motion.div whileHover={{ y: -2, scale: 1.01 }} transition={{ duration: 0.3 }}>
                    <Link
                      to="/about"
                      className="inline-flex rounded-lg border border-brand-border bg-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105 hover:border-brand-accent hover:text-brand-accent"
                    >
                      Learn More About Us
                    </Link>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="rounded-xl border border-white/50 bg-white/60 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <article className="rounded-xl bg-white p-4 shadow-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                        Platforms
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">3+</p>
                    </article>
                    <article className="rounded-xl bg-white p-4 shadow-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                        Coverage Areas
                      </p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight">6+</p>
                    </article>
                    <article className="col-span-2 rounded-xl bg-white p-5 shadow-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                        Focus
                      </p>
                      <p className="mt-2 text-base leading-7 text-slate-700">
                        Technology, AI, Electric Mobility, and Digital Innovation.
                      </p>
                    </article>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="pointer-events-none absolute -right-4 -top-6 hidden rounded-xl border border-brand-border bg-white p-3 shadow-md md:block"
                >
                  <Cpu className="h-5 w-5 text-brand-accent" />
                </motion.div>

                <motion.svg
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                  viewBox="0 0 320 210"
                  className="mt-6 h-48 w-full"
                >
                  <defs>
                    <linearGradient id="heroGrid" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#008080" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#008080" stopOpacity="0.08" />
                    </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="318" height="208" rx="18" fill="#fff" stroke="#E5E7EB" />
                  <path d="M36 162L96 108L150 136L222 76L284 104" fill="none" stroke="url(#heroGrid)" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="96" cy="108" r="7" fill="#008080" />
                  <circle cx="150" cy="136" r="7" fill="#008080" />
                  <circle cx="222" cy="76" r="7" fill="#008080" />
                </motion.svg>
              </motion.div>
            </div>
          </div>
        </SectionReveal>
      </PageContainer>
    </section>
  );
}

export default HeroSection;









