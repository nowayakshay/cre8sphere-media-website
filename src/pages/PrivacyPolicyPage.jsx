import LegalPageLayout from "../layouts/LegalPageLayout";
import SectionReveal from "../components/SectionReveal";

const updatedOn = "March 5, 2026";

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro="Cre8sphere Media respects your privacy and is committed to protecting personal information shared through this website."
      updatedOn={updatedOn}
      seoTitle="Privacy Policy | Cre8sphere Media"
      seoDescription="Read the Privacy Policy for Cre8sphere Media and understand how personal information is collected, used, and protected."
      seoPath="/privacy-policy"
    >
      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This Privacy Policy describes how Cre8sphere Digital Media LLP, publicly
            operating as Cre8sphere Media, collects, uses, and protects personal
            information provided by users of this website.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Information We Collect</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We may collect information such as your name, email address, and details
            you provide through forms, contact requests, and other interactions on
            this website.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">How We Use Information</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Information collected may be used to respond to inquiries, improve website
            functionality, and enhance overall user experience.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Cookies and Tracking Technologies
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Our website may use cookies and similar tracking technologies to improve
            performance, understand traffic patterns, and support a better browsing
            experience.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Third-Party Services</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We may use third-party services, including analytics tools, to help us
            understand how users interact with the website.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Data Security</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We take reasonable administrative and technical measures to protect
            personal information submitted through this website.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">External Links</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This website may include links to third-party websites. Cre8sphere Media
            is not responsible for the privacy practices or content of those external
            sites.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated effective date.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact Information</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Company: Cre8sphere Digital Media LLP
            <br />
            Brand: Cre8sphere Media
            <br />
            Location: Ahmedabad, Gujarat, India
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

export default PrivacyPolicyPage;


