import LegalPageLayout from "../layouts/LegalPageLayout";
import SectionReveal from "../components/SectionReveal";

const updatedOn = "March 5, 2026";

function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      intro="By accessing this website, you agree to comply with these Terms and Conditions."
      updatedOn={updatedOn}
    >
      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            These Terms and Conditions govern your use of the Cre8sphere Media
            website owned by Cre8sphere Digital Media LLP.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Use of Website</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            You agree to use this website only for lawful purposes and not to engage
            in any activity that may harm the website, its users, or its services.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Intellectual Property Rights</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            All content, including articles, branding, design elements, and related
            materials, is the property of Cre8sphere Media unless otherwise stated.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Content Usage</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            You may not reproduce, republish, distribute, or commercially exploit
            website content without prior written permission.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">External Links</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This website may include links to external resources for convenience.
            Cre8sphere Media does not control or endorse the content of external
            websites.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Cre8sphere Media and Cre8sphere Digital Media LLP are not liable for any
            loss or damages arising from the use of this website.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card section-layer bg-white/95 p-7 sm:p-8 shadow-md hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold tracking-tight">Changes to Terms</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            We may update these Terms and Conditions at any time. Continued use of
            the website after updates indicates acceptance of the revised terms.
          </p>
        </article>
      </SectionReveal>
    </LegalPageLayout>
  );
}

export default TermsPage;
