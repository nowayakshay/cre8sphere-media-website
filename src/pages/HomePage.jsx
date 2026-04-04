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
    <div className="home-page bg-brand-bg text-brand-text">
      <Seo
        title="Cre8sphere Media | Exploring Tomorrow's Technology Today"
        description="Cre8sphere Media explores technology, AI, EV innovation, and the future of digital media through platforms like GizmoGeek Hub and TechOrbis."
        path="/"
      />
      <Navbar />
      <main className="home-main-canvas pb-8 pt-4 sm:pt-6">
        <HeroSection />
        <WhoWeAre />
        <SharedPlatformsSection
          title="Our Media Platforms"
          subtitle="Explore the two core brands that power the Cre8sphere ecosystem across consumer technology and AI innovation."
        />
        <div className="px-5 pb-10 sm:pb-12">
          <div className="mx-auto max-w-[1200px] border-y border-slate-200/90 py-5 sm:py-6">
            <div className="overflow-x-auto">
              <p className="mx-auto w-max whitespace-nowrap text-center text-[13px] font-medium tracking-[0.08em] text-slate-700 sm:text-sm">
                Beyond individual platforms, Cre8sphere Media operates as a connected ecosystem bringing together media, AI, and creative systems.
              </p>
            </div>
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

