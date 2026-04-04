import LegalPageLayout from "../layouts/LegalPageLayout";
import SectionReveal from "../components/SectionReveal";

const updatedOn = "01/04/26";

function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      intro="The information provided on Cre8sphere Media is for general informational purposes only."
      updatedOn={updatedOn}
      seoTitle="Disclaimer | Cre8sphere Media"
      seoDescription="Read the Cre8sphere Media disclaimer covering editorial opinions, informational content, affiliate disclosure, and limitation of liability."
      seoPath="/disclaimer"
    >
      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">1. No Professional Advice</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            The content published on this website does not constitute professional advice, financial advice, or technical guarantees.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Users should verify information independently before making decisions.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">2. Reviews & Opinions</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            All reviews and opinions are based on our own analysis and experience. They are subjective in nature, and preferences may vary from user to user.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">3. Accuracy of Information</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            While we aim to keep content accurate and updated, we make no warranties about completeness or reliability. Information may change over time.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">4. Affiliate & Monetization Disclaimer</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We may participate in affiliate programs and earn commissions from links. This comes at no additional cost to users.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">5. External Content</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We are not responsible for third-party websites, external links, or their content or policies.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">6. Limitation of Responsibility</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Cre8sphere Digital Media LLP shall not be held responsible for any loss or damage, or decisions made based on our content.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-[28px] p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">7. Contact</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            For any concerns:
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

export default DisclaimerPage;
