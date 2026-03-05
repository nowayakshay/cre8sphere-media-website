import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "./PageContainer";
import SectionReveal from "../components/SectionReveal";

function LegalPageLayout({ title, intro, updatedOn, children }) {
  return (
    <div className="bg-white text-brand-text">
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageContainer>
          <SectionReveal>
            <section className="surface-card section-layer rounded-[2rem] bg-gradient-to-br from-white via-gray-50 to-teal-50 px-6 py-12 text-center sm:px-10 sm:py-16">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                {intro}
              </p>
              <p className="mt-4 text-sm text-slate-500">Last Updated: {updatedOn}</p>
            </section>
          </SectionReveal>
        </PageContainer>

        <section className="bg-gray-50/70 py-16 sm:py-20">
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








