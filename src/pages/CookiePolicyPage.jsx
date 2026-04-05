import LegalPageLayout from "../layouts/LegalPageLayout";
import LegalSection from "../components/LegalSection";

const updatedOn = "01 April 2026";

const sections = [
  { id: "what-are-cookies",    label: "What Are Cookies" },
  { id: "how-we-use-cookies",  label: "How We Use Cookies" },
  { id: "types-of-cookies",    label: "Types of Cookies" },
  { id: "managing-cookies",    label: "Managing Cookies" },
  { id: "third-party-cookies", label: "Third-Party Cookies" },
];

function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      intro="This Cookie Policy explains how cookies and similar technologies are used on the Cre8sphere Media website, and how you can manage your preferences."
      updatedOn={updatedOn}
      seoTitle="Cookie Policy | Cre8sphere Media"
      seoDescription="Learn how Cre8sphere Media uses cookies, analytics tools, and browser-based tracking technologies."
      seoPath="/cookie-policy"
      sections={sections}
    >
      <LegalSection id="what-are-cookies" title="What Are Cookies">
        <p>
          Cookies are small text files stored on your device when you visit a website.
          They help websites remember your preferences and improve usability across
          browsing sessions.
        </p>
      </LegalSection>

      <LegalSection id="how-we-use-cookies" title="How We Use Cookies">
        <p>We use cookies to:</p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>Improve website functionality and performance</li>
          <li>Understand how users interact with our content</li>
          <li>Optimize the overall browsing experience</li>
        </ul>
      </LegalSection>

      <LegalSection id="types-of-cookies" title="Types of Cookies">
        <p>Cookies used on this website may include:</p>
        <ul className="list-disc space-y-1 pl-5 text-[#6B7280]">
          <li>
            <strong className="text-black">Essential cookies</strong> — required for core
            functionality and cannot be disabled
          </li>
          <li>
            <strong className="text-black">Analytics cookies</strong> — used to measure
            website usage patterns and improve performance
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="managing-cookies" title="Managing Cookies">
        <p>
          You can manage or disable cookies through your browser settings. Note that
          disabling some cookies may affect website functionality and your browsing
          experience.
        </p>
      </LegalSection>

      <LegalSection id="third-party-cookies" title="Third-Party Cookies">
        <p>
          Some cookies may be set by third-party services (such as Google Analytics) to
          help us understand and improve website performance. These services operate under
          their own privacy and cookie policies.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

export default CookiePolicyPage;
