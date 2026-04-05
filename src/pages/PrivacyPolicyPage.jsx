import LegalPageLayout from "../layouts/LegalPageLayout";
import LegalSection from "../components/LegalSection";

const updatedOn = "01 April 2026";

const sections = [
  { id: "information-we-collect",   label: "1. Information We Collect" },
  { id: "how-we-use",               label: "2. How We Use Your Information" },
  { id: "cookies",                  label: "3. Cookies & Tracking" },
  { id: "third-party",              label: "4. Third-Party Services" },
  { id: "data-sharing",             label: "5. Data Sharing & Disclosure" },
  { id: "data-security",            label: "6. Data Security" },
  { id: "your-rights",              label: "7. Your Rights" },
  { id: "external-links",           label: "8. External Links" },
  { id: "changes",                  label: "9. Changes to This Policy" },
  { id: "contact",                  label: "10. Contact Us" },
  { id: "company-info",             label: "11. Company Information" },
];

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro="Cre8sphere Digital Media LLP respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website."
      updatedOn={updatedOn}
      seoTitle="Privacy Policy | Cre8sphere Media"
      seoDescription="Read the Privacy Policy for Cre8sphere Media and understand how personal information is collected, used, and protected."
      seoPath="/privacy-policy"
      sections={sections}
    >
      <LegalSection id="information-we-collect" title="1. Information We Collect">
        <p>We may collect the following types of information:</p>
        <div>
          <p className="font-semibold text-black">a) Personal Information</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[#6B7280]">
            <li>Name</li>
            <li>Email address</li>
            <li>Any information you provide through contact forms</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-black">b) Non-Personal Information</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[#6B7280]">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited and interaction data</li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="how-we-use" title="2. How We Use Your Information">
        <p>We use the collected information to:</p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>Respond to inquiries and messages</li>
          <li>Improve our website and user experience</li>
          <li>Communicate updates or relevant information</li>
          <li>Analyze website performance and usage</li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies" title="3. Cookies & Tracking Technologies">
        <p>
          We may use cookies and similar technologies to understand user behavior,
          improve performance, and provide a better browsing experience.
        </p>
        <p>
          Cookie preferences can be managed through our cookie consent banner or
          disabled entirely through your browser settings.
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="4. Third-Party Services">
        <p>
          We may use trusted third-party services such as analytics tools (e.g., Google
          Analytics), hosting providers, and email services. These services may collect
          and process data as per their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection id="data-sharing" title="5. Data Sharing & Disclosure">
        <p>
          We do not sell, trade, or rent your personal information. We may share
          information with service providers assisting in our operations, or if required
          by law or legal processes.
        </p>
      </LegalSection>

      <LegalSection id="data-security" title="6. Data Security">
        <p>
          We implement reasonable security measures to protect your information. However,
          no method of transmission over the internet is completely secure.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="7. Your Rights">
        <p>
          Under applicable laws (including India&apos;s Digital Personal Data Protection
          Act, 2023), you have the right to:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise your rights, contact us using the details below.</p>
      </LegalSection>

      <LegalSection id="external-links" title="8. External Links">
        <p>
          Our website may contain links to third-party websites. We are not responsible
          for the privacy practices or content of those websites.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page with an updated date.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact Us">
        <p>For any privacy-related concerns or requests, you can contact us at:</p>
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

      <LegalSection id="company-info" title="11. Company Information">
        <div className="space-y-1 text-[#6B7280]">
          <p>Cre8sphere Digital Media LLP</p>
          <p>Brand: Cre8sphere Media</p>
          <p>Location: Ahmedabad, Gujarat, India</p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default PrivacyPolicyPage;
