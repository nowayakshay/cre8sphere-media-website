import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import SharedPlatformsSection from "../components/SharedPlatformsSection";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import OurTeamSection from "../components/OurTeamSection";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "Exploring new ideas, technologies, and perspectives."
  },
  {
    title: "Simplicity",
    description: "Making complex topics easy to understand."
  },
  {
    title: "Transparency",
    description: "Building trust through authentic and responsible storytelling."
  },
  {
    title: "Collaboration",
    description:
      "Connecting creators, innovators, and audiences through meaningful platforms."
  }
];

function AboutUsPage() {
  return (
    <div className="internal-page bg-brand-bg text-brand-text">
      <Seo
        title="About Cre8sphere Media"
        description="Learn about Cre8sphere Media, a digital media company focused on technology, AI innovation, and emerging tech ecosystems."
        path="/about"
      />
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageHeroSection
          illustration="about"
          title="About Cre8sphere Media"
          description="Cre8sphere Media is a digital media company building platforms around technology, artificial intelligence, electric mobility, and digital innovation. We focus on simplifying complex ideas and turning them into meaningful, accessible content for the modern audience."
        />

        <section className="py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <article className="gradient-card elevate-card p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  Our mission is to inform, inspire, and innovate by exploring
                  emerging technologies and delivering insights that matter. We
                  aim to bridge the gap between rapid technological advancements
                  and everyday understanding through clear, engaging, and
                  practical digital content.
                </p>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>

        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <article className="saas-shell section-layer p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Our Vision
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  We envision Cre8sphere Media as a growing ecosystem of digital
                  platforms and creative initiatives shaping the future of media
                  and technology. By combining media, creativity, and innovation,
                  we aim to build impactful digital experiences that evolve with
                  the next generation of users.
                </p>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>

        <SharedPlatformsSection
          subtitle="Cre8sphere Media operates a growing network of digital platforms, each focused on a specific domain."
        />

        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <article className="saas-shell section-layer p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Innovation at Cre8sphere Media
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  At Cre8sphere Media, we are not just building content platforms
                  - we are also exploring the intersection of media and
                  technology.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  We are developing AI-powered tools designed to empower creators
                  and digital communities.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  One such initiative is Repurplex, an AI-based content
                  transformation engine that converts long-form content into
                  multiple platform-ready formats instantly. Our goal is to
                  create a dynamic ecosystem where media, technology, and AI work
                  together to enhance digital creativity.
                </p>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <div className="saas-shell section-layer p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Our Values
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {values.map((value, index) => (
                    <article
                      key={value.title}
                      className={`${index === 0 || index === 3 ? "feature-tile" : "gradient-card"} elevate-card border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md`}
                    >
                      <h3 className="text-lg font-semibold text-brand-accent">{value.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{value.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        <OurTeamSection />

        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <article className="surface-card elevate-card rounded-[28px] p-8">
                <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-teal-400" />
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Let&apos;s Build Together
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  We collaborate with brands, creators, and innovators to create meaningful digital experiences.
                </p>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUsPage;



