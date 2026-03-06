import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";

const platforms = [
  {
    title: "GizmoGeek Hub",
    website: "https://gizmogeekhub.com/",
    logo: "/GizmoGeek%20Hub%20Logo.png",
    description: "Consumer technology insights and gadget coverage."
  },
  {
    title: "TechOrbis",
    website: "https://techorbis.in/",
    logo: "/TechOrbis%20Logo.png",
    description: "Artificial intelligence, electric vehicles, and emerging tech."
  },
  {
    title: "Origin8",
    website: "https://origin8agency.in/",
    logo: "/Origin8%20Logo.png",
    description: "Creative branding and digital storytelling."
  }
];

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
    <div className="bg-white text-brand-text">
      <Navbar />
      <main className="pb-8">
        <PageHeroSection
          illustration="about"
          subtitle="Cre8sphere Media"
          title="About Cre8sphere Media"
          description="Cre8sphere Media is a digital media company focused on exploring technology, artificial intelligence, electric mobility and digital innovation through modern digital platforms."
        />

        <section className="bg-gray-50/70 py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <article className="gradient-card elevate-card p-8 shadow-md hover:-translate-y-1 hover:shadow-xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                  Our mission is to inform, inspire, and innovate by exploring
                  emerging technologies and sharing meaningful insights with our
                  audience. We aim to bridge the gap between technological
                  advancements and everyday understanding through clear and engaging
                  digital media.
                </p>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>

        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <article className="saas-shell section-layer p-8">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our Vision
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                  We envision Cre8sphere Media as a growing ecosystem of digital platforms
                  and creative initiatives that explore the technologies shaping
                  tomorrow. By combining media, creativity, and innovation, we
                  strive to create impactful digital experiences for the modern
                  audience.
                </p>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>

        <section className="pb-16 sm:pb-20" id="platforms">
          <PageContainer>
            <SectionReveal>
              <div className="saas-shell section-layer p-8">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our Platforms
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {platforms.map((platform, index) => (
                  <a
                    key={platform.title}
                    href={platform.website}
                    target="_blank"
                    rel="noreferrer"
                    className="gradient-card elevate-card block p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mb-5 rounded-2xl p-4 ${
                        index === 0
                          ? "bg-gradient-to-br from-teal-50 via-white to-cyan-50"
                          : index === 1
                            ? "bg-gradient-to-br from-lime-50 via-white to-teal-50"
                            : "bg-gradient-to-br from-fuchsia-50 via-white to-rose-50"
                      }`}
                    >
                      <div className="flex h-12 items-center">
                      <img
                        src={platform.logo}
                        alt={`${platform.title} logo`}
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-accent">
                      {platform.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                      {platform.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-brand-accent">Visit Website</p>
                  </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        <section className="pb-16 sm:pb-20">
          <PageContainer>
            <SectionReveal>
              <article className="saas-shell section-layer p-8">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Innovation at Cre8sphere Media
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                  Beyond media platforms, Cre8sphere Media is actively exploring the
                  development of AI-powered tools designed to support creators and
                  digital communities.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                  One such initiative is Repurplex, an AI-based content
                  transformation engine that helps convert long-form content into
                  multiple platform-ready formats instantly.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">
                  Through these innovations, Cre8sphere Media aims to combine media,
                  technology, and artificial intelligence to build a more dynamic
                  digital ecosystem.
                </p>
              </article>
            </SectionReveal>
          </PageContainer>
        </section>

        <section className="bg-gray-50/70 py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <div className="saas-shell section-layer p-8">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our Values
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {values.map((value, index) => (
                  <article
                    key={value.title}
                    className={`elevate-card rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl ${
                      index === 0 || index === 3 ? "feature-tile" : "gradient-card"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-brand-accent">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {value.description}
                    </p>
                  </article>
                  ))}
                </div>
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




