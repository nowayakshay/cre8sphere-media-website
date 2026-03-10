import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import PlatformsSection from "../components/PlatformsSection";
import LatestInsightsSection from "../components/LatestInsightsSection";
import InnovationToolsSection from "../components/InnovationToolsSection";
import CoverageSection from "../components/CoverageSection";
import WhyCre8sphere from "../components/WhyCre8sphere";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      <Navbar />
      <main className="pb-8">
        <HeroSection />
        <WhoWeAre />
        <PlatformsSection />
        <LatestInsightsSection />
        <InnovationToolsSection />
        <CoverageSection />
        <WhyCre8sphere />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;







