import LegalPageLayout from "../layouts/LegalPageLayout";
import LegalSection from "../components/LegalSection";

const updatedOn = "01 April 2026";

const sections = [
  { id: "no-professional-advice",    label: "1. No Professional Advice" },
  { id: "reviews-opinions",          label: "2. Reviews & Opinions" },
  { id: "accuracy",                  label: "3. Accuracy of Information" },
  { id: "affiliate",                 label: "4. Affiliate & Monetization" },
  { id: "external-content",          label: "5. External Content" },
  { id: "limitation-of-res",         label: "6. Limitation of Responsibility" },
  { id: "contact",                   label: "7. Contact" },
];

function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      intro="The information provided on Cre8sphere Media is for general informational purposes only. It does not constitute professional advice or guarantee accuracy."
      updatedOn={updatedOn}
      seoTitle="Disclaimer | Cre8sphere Media"
      seoDescription="Read the Cre8sphere Media disclaimer covering editorial opinions, informational content, affiliate disclosure, and limitation of liability."
      seoPath="/disclaimer"
      sections={sections}
    >
      <LegalSection id="no-professional-advice" title="1. No Professional Advice">
        <p>
          The content published on this website does not constitute professional advice,
          financial advice, or technical guarantees.
        </p>
        <p>
          Users should verify information independently before making any decisions.
        </p>
      </LegalSection>

      <LegalSection id="reviews-opinions" title="2. Reviews & Opinions">
        <p>
          All reviews and opinions are based on our own analysis and experience. They are
          subjective in nature, and preferences may vary from user to user.
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="3. Accuracy of Information">
        <p>
          While we aim to keep content accurate and updated, we make no warranties about
          completeness or reliability. Information may change over time.
        </p>
      </LegalSection>

      <LegalSection id="affiliate" title="4. Affiliate & Monetization Disclaimer">
        <p>
          We may participate in affiliate programs and earn commissions from links. This
          comes at no additional cost to users and does not influence our editorial
          opinions.
        </p>
      </LegalSection>

      <LegalSection id="external-content" title="5. External Content">
        <p>
          We are not responsible for third-party websites, external links, or their
          content or policies.
        </p>
      </LegalSection>

      <LegalSection id="limitation-of-res" title="6. Limitation of Responsibility">
        <p>
          Cre8sphere Digital Media LLP shall not be held responsible for any loss or
          damage, or decisions made based on our content.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact">
        <p>For any concerns:</p>
        <p>
          Email:{" "}
          <a
            href="mailto:contact@cre8sphere.in"
            className="font-medium text-[#008080] hover:text-[#006666] underline underline-offset-2 transition-colors"
          >
            contact@cre8sphere.in
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default DisclaimerPage;
