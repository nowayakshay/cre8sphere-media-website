import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhoWeAre from "../components/WhoWeAre";
import PlatformsSection from "../components/PlatformsSection";
import InnovationToolsSection from "../components/InnovationToolsSection";
import CoverageSection from "../components/CoverageSection";
import WhyCre8sphere from "../components/WhyCre8sphere";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

function HomePage() {
  return (
    <div className="bg-brand-bg text-brand-text">
      <Seo
        title="Cre8sphere Media | Exploring Tomorrow's Technology Today"
        description="Cre8sphere Media explores technology, AI, EV innovation, and the future of digital media through platforms like GizmoGeek Hub and TechOrbis."
        path="/"
      />
      <Navbar />
      <main className="pb-8">
        <HeroSection />
        <WhoWeAre />
        <PlatformsSection />
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







