import LegalPageLayout from "../layouts/LegalPageLayout";
import SectionReveal from "../components/SectionReveal";

const updatedOn = "March 5, 2026";

function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      intro="This Disclaimer explains the scope and limitations of information published by Cre8sphere Media."
      updatedOn={updatedOn}
      seoTitle="Disclaimer | Cre8sphere Media"
      seoDescription="Read the Cre8sphere Media disclaimer covering editorial opinions, informational content, and limitation of liability."
      seoPath="/disclaimer"
    >
      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">General Information</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Content on this website is published for general informational purposes
            only by Cre8sphere Digital Media LLP under the brand Cre8sphere Media.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Editorial Opinions</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Opinions expressed in articles, commentary, and editorials reflect
            editorial viewpoints and should not be interpreted as professional advice.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Accuracy of Information</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            We make reasonable efforts to provide accurate and current information,
            but we do not guarantee completeness, reliability, or suitability of any
            content.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Technology and AI Content Disclaimer
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Content related to emerging technologies, AI tools, electric mobility,
            and digital innovation is intended for information and awareness only.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card rounded-xl p-7 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">External Links Disclaimer</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            This website may include links to third-party websites. Cre8sphere Media
            is not responsible for the content, policies, or practices of external
            websites.
          </p>
        </article>
      </SectionReveal>

      <SectionReveal>
        <article className="surface-card elevate-card section-layer bg-white/95 p-7 sm:p-8 shadow-md hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-2xl font-semibold tracking-tight">Limitation of Liability</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            You rely on information on this website at your own risk. Cre8sphere
            Digital Media LLP and Cre8sphere Media are not liable for losses or
            damages resulting from the use of this website.
          </p>
        </article>
      </SectionReveal>
    </LegalPageLayout>
  );
}

export default DisclaimerPage;
