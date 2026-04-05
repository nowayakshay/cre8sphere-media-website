import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "./PageContainer";
import SectionReveal from "../components/SectionReveal";
import Seo from "../components/Seo";

function LegalPageLayout({
  title,
  intro,
  updatedOn,
  seoTitle,
  seoDescription,
  seoPath,
  sections = [],
  children,
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="bg-white text-[#333333]">
      <Seo title={seoTitle || title} description={seoDescription || intro} path={seoPath || "/"} />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="border-b border-[#E5E7EB] bg-[#F9FAFB] py-14 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <div className="max-w-3xl">
                <div className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                <h1 className="text-[30px] font-bold leading-tight tracking-tight text-black sm:text-[42px]">
                  {title}
                </h1>
                <p className="mt-5 max-w-[620px] text-base leading-relaxed text-[#6B7280] sm:text-[17px]">
                  {intro}
                </p>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-[#6B7280]">
                  Last Updated: {updatedOn}
                </p>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>

        {/* ── Mobile section nav ── */}
        {sections.length > 0 && (
          <div className="border-b border-[#E5E7EB] bg-white sm:hidden">
            <div className="px-5">
              <button
                type="button"
                onClick={() => setMobileNavOpen((p) => !p)}
                className="flex w-full items-center justify-between py-4 text-sm font-semibold text-[#333333]"
              >
                <span>Jump to section</span>
                <ChevronDown className={`h-4 w-4 text-[#6B7280] transition-transform duration-300 ${mobileNavOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileNavOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={() => setMobileNavOpen(false)}
                        className="block rounded-[20px] px-3 py-2.5 text-sm text-[#333333] hover:bg-[#F2F9F9] hover:text-[#008080] transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── Content ── */}
        <section className="py-16 sm:py-24">
          <PageContainer>
            <div className={sections.length > 0 ? "grid gap-16 lg:grid-cols-[220px_1fr]" : ""}>
              {/* Desktop sidebar nav */}
              {sections.length > 0 && (
                <aside className="hidden lg:block">
                  <div className="sticky top-24">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#008080]">
                      On This Page
                    </p>
                    <ul className="space-y-1">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="block rounded-[16px] px-3 py-2 text-[13px] text-[#6B7280] hover:bg-[#F2F9F9] hover:text-[#008080] transition-colors"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              )}

              {/* Main content */}
              <div className="max-w-[720px] space-y-0">
                {children}
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LegalPageLayout;
