import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import SharedPlatformsSection from "../components/SharedPlatformsSection";
import EcosystemStructureSection from "../components/EcosystemStructureSection";
import InnovationToolsSection from "../components/InnovationToolsSection";
import CoverageSection from "../components/CoverageSection";
import WhyCre8sphere from "../components/WhyCre8sphere";
import MissionStatement from "../components/MissionStatement";
import WhatWeAreBuilding from "../components/WhatWeAreBuilding";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

function HomePage() {
  return (
    <div className="home-page bg-white text-brand-text">
      <Seo
        title="Cre8sphere Media | Exploring Tomorrow's Technology Today"
        description="Cre8sphere Media explores technology, AI, EV innovation, and the future of digital media through platforms like GizmoGeek Hub and TechOrbis."
        path="/"
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAre />
        <SharedPlatformsSection
          title="Our Media Platforms"
          subtitle="Explore the two core brands that power the Cre8sphere ecosystem across consumer technology and AI innovation."
        />
        <div className="border-y border-slate-100 py-6 sm:py-7">
          <div className="mx-auto max-w-[1200px] px-5">
            <p className="text-center text-[11px] sm:text-[12px] font-bold italic uppercase tracking-[0.18em] text-[#008080]/70 leading-relaxed">
              Beyond individual platforms, Cre8sphere Media operates as a connected ecosystem<br />
              bringing together media, AI, and creative systems.
            </p>
          </div>
        </div>
        <EcosystemStructureSection />
        <InnovationToolsSection />
        <CoverageSection />
        <WhyCre8sphere />
        <MissionStatement />
        <WhatWeAreBuilding />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
