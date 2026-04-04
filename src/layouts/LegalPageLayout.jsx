import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "./PageContainer";
import SectionReveal from "../components/SectionReveal";
import Seo from "../components/Seo";

function LegalPageLayout({ title, intro, updatedOn, seoTitle, seoDescription, seoPath, children }) {
  return (
    <div className="bg-brand-bg text-brand-text">
      <Seo title={seoTitle || title} description={seoDescription || intro} path={seoPath || "/"} />
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageContainer>
          <SectionReveal>
            <section className="surface-card section-layer px-6 py-12 text-center sm:px-10 sm:py-16">
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
                {title}
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {intro}
              </p>
              <p className="mt-4 text-sm text-slate-500">Last Updated: {updatedOn}</p>
            </section>
          </SectionReveal>
        </PageContainer>

        <section className="py-16 sm:py-20">
          <PageContainer>
            <div className="space-y-6">{children}</div>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LegalPageLayout;



