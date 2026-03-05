function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#F7F9FA] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-24 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <p className="inline-flex items-center rounded-full border border-brand-border bg-brand-soft px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
            Cre8sphere Media
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-text sm:text-5xl lg:text-6xl">
            Exploring Tomorrow&apos;s Technology Today
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Cre8sphere Media is a digital media company exploring technology, artificial
            intelligence, electric vehicles, and digital innovation through clear,
            future-focused storytelling.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#platforms"
              className="inline-flex items-center justify-center rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              Explore Platforms
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border border-brand-border bg-white px-6 py-3 text-sm font-semibold text-brand-text transition-colors duration-200 hover:border-brand-accent hover:text-brand-accent"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
              Platform Focus
            </p>
            <h3 className="mt-3 text-lg font-semibold text-brand-text">Tech + AI</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Consumer technology, artificial intelligence, and practical insights.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
              Innovation Lens
            </p>
            <h3 className="mt-3 text-lg font-semibold text-brand-text">EV + Future</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Electric vehicles and emerging technologies shaping tomorrow.
            </p>
          </article>

          <article className="rounded-2xl border border-brand-border bg-brand-soft p-6 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
              Mission
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              Simplifying complex technology through digital media platforms,
              creativity, and innovation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;







