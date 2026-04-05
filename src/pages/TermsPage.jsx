import LegalPageLayout from "../layouts/LegalPageLayout";
import LegalSection from "../components/LegalSection";

const updatedOn = "01 April 2026";

const sections = [
  { id: "use-of-website",           label: "1. Use of the Website" },
  { id: "intellectual-property",    label: "2. Intellectual Property" },
  { id: "content-accuracy",         label: "3. Content Accuracy" },
  { id: "external-links",           label: "4. External Links" },
  { id: "user-submissions",         label: "5. User Submissions" },
  { id: "limitation-of-liability",  label: "6. Limitation of Liability" },
  { id: "changes-to-terms",         label: "7. Changes to Terms" },
  { id: "governing-law",            label: "8. Governing Law" },
  { id: "contact",                  label: "9. Contact" },
];

function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      intro="Welcome to Cre8sphere Media, operated by Cre8sphere Digital Media LLP. By accessing or using our website, you agree to comply with the following Terms & Conditions."
      updatedOn={updatedOn}
      seoTitle="Terms and Conditions | Cre8sphere Media"
      seoDescription="Review the Terms and Conditions governing your use of the Cre8sphere Media website."
      seoPath="/terms"
      sections={sections}
    >
      <LegalSection id="use-of-website" title="1. Use of the Website">
        <p>
          The content provided on this website is for informational and educational
          purposes only. By using this site, you agree not to:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>Use the website for unlawful purposes</li>
          <li>Attempt to harm, disrupt, or misuse the platform</li>
          <li>Copy, reproduce, or redistribute content without permission</li>
        </ul>
      </LegalSection>

      <LegalSection id="intellectual-property" title="2. Intellectual Property">
        <p>
          All content on this website — including articles, graphics, logos, and
          branding — is the property of Cre8sphere Digital Media LLP, unless otherwise
          stated.
        </p>
        <p>You may not:</p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>Copy or republish content without permission</li>
          <li>Use our brand assets without authorization</li>
        </ul>
      </LegalSection>

      <LegalSection id="content-accuracy" title="3. Content Accuracy">
        <p>We strive to provide accurate and up-to-date information. However:</p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>We do not guarantee completeness or accuracy</li>
          <li>Content may change without notice</li>
        </ul>
        <p>Use the information at your own discretion.</p>
      </LegalSection>

      <LegalSection id="external-links" title="4. External Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible
          for content on external sites, their privacy practices, or any damages resulting
          from their use.
        </p>
      </LegalSection>

      <LegalSection id="user-submissions" title="5. User Submissions">
        <p>If you contact us or submit content:</p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>You grant us the right to use, respond, and store that information</li>
          <li>You agree not to submit unlawful or harmful content</li>
        </ul>
      </LegalSection>

      <LegalSection id="limitation-of-liability" title="6. Limitation of Liability">
        <p>
          Cre8sphere Digital Media LLP shall not be liable for any direct or indirect
          damages, losses arising from use of the website, or decisions made based on our
          content.
        </p>
      </LegalSection>

      <LegalSection id="changes-to-terms" title="7. Changes to Terms">
        <p>
          We may update these Terms at any time. Continued use of the website means you
          accept the updated terms.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="8. Governing Law">
        <p>These Terms shall be governed by the laws of India.</p>
      </LegalSection>

      <LegalSection id="contact" title="9. Contact">
        <p>For any questions regarding these Terms:</p>
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

export default TermsPage;
