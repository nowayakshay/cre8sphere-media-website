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

        {/* Our Mission */}
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-3xl">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Our Mission</h2>
                <p className="mt-6 readable-text">
                  Our mission is to inform, inspire, and innovate by exploring
                  emerging technologies and delivering insights that matter. We
                  aim to bridge the gap between rapid technological advancements
                  and everyday understanding through clear, engaging, and
                  practical digital content.
                </p>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Our Vision */}
        <section className="py-20 sm:py-24 bg-slate-50/60">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-3xl">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Our Vision</h2>
                <p className="mt-6 readable-text">
                  We envision Cre8sphere Media as a growing ecosystem of digital
                  platforms and creative initiatives shaping the future of media
                  and technology. By combining media, creativity, and innovation,
                  we aim to build impactful digital experiences that evolve with
                  the next generation of users.
                </p>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        <SharedPlatformsSection
          subtitle="Cre8sphere Media operates a growing network of digital platforms, each focused on a specific domain."
        />

        {/* Innovation at Cre8sphere */}
        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-3xl">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Innovation at Cre8sphere Media</h2>
                <div className="mt-6 readable-text space-y-4">
                  <p>
                    At Cre8sphere Media, we are not just building content platforms
                    — we are also exploring the intersection of media and technology.
                  </p>
                  <p>
                    We are developing AI-powered tools designed to empower creators
                    and digital communities.
                  </p>
                  <p>
                    One such initiative is Repurplex, an AI-based content
                    transformation engine that converts long-form content into
                    multiple platform-ready formats instantly. Our goal is to
                    create a dynamic ecosystem where media, technology, and AI work
                    together to enhance digital creativity.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* Our Values */}
        <section className="py-20 sm:py-24 bg-slate-50/60">
          <PageContainer>
            <SectionReveal>
              <div className="mb-12">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h2>Our Values</h2>
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {values.map((value) => (
                  <div key={value.title} className="flex flex-col gap-3">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#008080]" />
                    <h3 className="text-brand-accent">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        <OurTeamSection />

        {/* CTA */}
        <section className="py-20 sm:py-24 text-center">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-2xl mx-auto">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0] mx-auto" />
                <h2>Let&apos;s Build Together</h2>
                <p className="mt-6 readable-text">
                  We collaborate with brands, creators, and innovators to create meaningful digital experiences.
                </p>
                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-[28px] bg-brand-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover hover:text-white"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
