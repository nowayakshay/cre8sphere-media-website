import LegalPageLayout from "../layouts/LegalPageLayout";
import SectionReveal from "../components/SectionReveal";

const updatedOn = "01/04/26";

function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      intro={"Welcome to Cre8sphere Media, operated by Cre8sphere Digital Media LLP (\"we\", \"our\", or \"us\"). By accessing or using our website, you agree to comply with the following Terms & Conditions."}
      updatedOn={updatedOn}
      seoTitle="Terms and Conditions | Cre8sphere Media"
      seoDescription="Review the Terms and Conditions governing your use of the Cre8sphere Media website."
      seoPath="/terms"
    >
      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">1. Use of the Website</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            The content provided on this website is for informational and educational purposes only. By using this site, you agree not to:
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm leading-7 text-slate-600 sm:text-base">
            <li>Use the website for unlawful purposes</li>
            <li>Attempt to harm, disrupt, or misuse the platform</li>
            <li>Copy, reproduce, or redistribute content without permission</li>
          </ul>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">2. Intellectual Property</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            All content on this website, including articles, graphics, logos, and branding, is the property of Cre8sphere Digital Media LLP, unless otherwise stated.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">You may not:</p>
          <ul className="mt-2 list-disc pl-6 text-sm leading-7 text-slate-600 sm:text-base">
            <li>Copy or republish content without permission</li>
            <li>Use our brand assets without authorization</li>
          </ul>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">3. Content Accuracy</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We strive to provide accurate and up-to-date information. However:
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm leading-7 text-slate-600 sm:text-base">
            <li>We do not guarantee completeness or accuracy</li>
            <li>Content may change without notice</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Use the information at your own discretion.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">4. External Links</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Our website may contain links to third-party websites. We are not responsible for content on external sites, their privacy practices, or any damages resulting from their use.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">5. User Submissions</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            If you contact us or submit content:
          </p>
          <ul className="mt-2 list-disc pl-6 text-sm leading-7 text-slate-600 sm:text-base">
            <li>You grant us the right to use, respond, and store that information</li>
            <li>You agree not to submit unlawful or harmful content</li>
          </ul>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">6. Limitation of Liability</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Cre8sphere Digital Media LLP shall not be liable for any direct or indirect damages, losses arising from use of the website, or decisions made based on our content.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">7. Changes to Terms</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We may update these Terms at any time. Continued use of the website means you accept the updated terms.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">8. Governing Law</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            These Terms shall be governed by the laws of India.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">9. Contact</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            For any questions regarding these Terms:
            <br />
            Email:
            <a
              href="mailto:contact@cre8sphere.in"
              className="ml-1 text-brand-accent hover:text-brand-hover"
            >
              contact@cre8sphere.in
            </a>
          </p>
        </article>
      </SectionReveal>
    </LegalPageLayout>
  );
}

export default TermsPage;
