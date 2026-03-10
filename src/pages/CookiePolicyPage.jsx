import LegalPageLayout from "../layouts/LegalPageLayout";
import SectionReveal from "../components/SectionReveal";

const updatedOn = "March 5, 2026";

function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      intro="This Cookie Policy explains how cookies are used on the Cre8sphere Media website."
      updatedOn={updatedOn}
    >
      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">What Are Cookies</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember preferences and improve usability.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">How We Use Cookies</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We use cookies to improve website functionality, understand user behavior,
            and optimize performance and experience.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Types of Cookies</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Cookies used on this website may include essential cookies for core
            functionality and analytics cookies for measuring website usage patterns.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Managing Cookies</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            You can manage or disable cookies through your browser settings. Disabling
            some cookies may affect website functionality.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card section-layer bg-white/95 p-7 sm:p-8 shadow-md hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold tracking-tight">Third-Party Cookies</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            Some cookies may be set by third-party services, such as analytics tools,
            to help us understand and improve website performance.
          </p>
        </article>
      </SectionReveal>
    </LegalPageLayout>
  );
}

export default CookiePolicyPage;
