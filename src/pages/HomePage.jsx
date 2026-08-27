import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EcosystemSection from "../components/EcosystemSection";
import ProductsSection from "../components/ProductsSection";
import WhyCre8sphere from "../components/WhyCre8sphere";
import MissionStatement from "../components/MissionStatement";
import WhatWeAreBuilding from "../components/WhatWeAreBuilding";
import Footer from "../components/Footer";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

export default function HomePage() {
  return (
    <div className="home-page min-h-screen bg-white text-slate-900">
      <Seo
        title="Cre8sphere | Technology & Innovation"
        description="Cre8sphere LLP is a modern technology and innovation company creating AI products, software platforms, digital media, and creative experiences."
        path="/"
      />

      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Connected Media Platforms & Solutions */}
        <EcosystemSection />

        {/* 3. AI Studio Products */}
        <ProductsSection />

        {/* 4. Why Cre8sphere - Focus Pillars */}
        <WhyCre8sphere />

        {/* 5. Corporate Mission Quote */}
        <MissionStatement />

        {/* 6. Strategic Roadmap Timeline */}
        <WhatWeAreBuilding />

        {/* 7. Corporate Partnership CTA */}
        <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/60">
          <PageContainer>
            <div className="minimal-card p-8 text-center sm:p-14 shadow-sm bg-white">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008080]">
                Strategic Collaboration
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Ready to Collaborate or Build Together?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Cre8sphere LLP partners with technology teams, creators, and strategic investors to build high-impact digital solutions.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  to="/contact"
                  className="btn-premium inline-flex items-center gap-2.5 rounded-full bg-[#0F172A] px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-slate-800"
                >
                  Get In Touch With Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
}
