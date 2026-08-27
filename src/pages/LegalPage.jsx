import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { ShieldCheck } from "lucide-react";

export default function LegalPage({ type = "privacy" }) {
  const contentMap = {
    privacy: {
      title: "Privacy Policy",
      updated: "February 2026",
      text: [
        "Cre8sphere LLP ('Cre8sphere', 'we', 'our', or 'us') respects your privacy and is committed to protecting your personal data.",
        "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://cre8sphere.in or use our digital services.",
        "We collect personal information that you voluntarily provide when submitting inquiry forms, registering for applications, or contacting our support team.",
        "Legal Disclosure: Cre8sphere LLP formally known as Cre8sphere Digital Media LLP operates in compliance with applicable Indian data protection laws and international standards."
      ]
    },
    terms: {
      title: "Terms & Conditions",
      updated: "February 2026",
      text: [
        "Welcome to Cre8sphere LLP. By accessing or using our website and software applications, you agree to comply with and be bound by these Terms and Conditions.",
        "All intellectual property, trademarks, logos, content, and software code on this website remain the exclusive property of Cre8sphere LLP.",
        "You agree not to modify, reverse engineer, reproduce, or distribute any material without prior written permission from Cre8sphere LLP.",
        "Cre8sphere LLP formally known as Cre8sphere Digital Media LLP reserves the right to update these terms at any time."
      ]
    },
    disclaimer: {
      title: "Disclaimer",
      updated: "February 2026",
      text: [
        "The information provided on Cre8sphere LLP's website is for general informational and educational purposes only.",
        "While we strive to keep information accurate and up-to-date, we make no representations or warranties of any kind regarding completeness, accuracy, or reliability.",
        "Cre8sphere LLP is not liable for any losses or damages arising from the use of our websites, software tools, or third-party links."
      ]
    },
    cookie: {
      title: "Cookie Policy",
      updated: "February 2026",
      text: [
        "Cre8sphere LLP uses cookies and similar tracking technologies to enhance user navigation and analyze traffic patterns.",
        "Essential cookies are required for basic site functionality, while analytical cookies help us understand how visitors interact with our content.",
        "You can manage your cookie preferences through your browser settings at any time."
      ]
    }
  };

  const current = contentMap[type] || contentMap.privacy;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title={`${current.title} | Cre8sphere LLP`}
        description={`${current.title} of Cre8sphere LLP.`}
        path={`/${type}`}
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <ShieldCheck className="h-3.5 w-3.5" />
              Legal & Compliance
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              {current.title}
            </h1>
            <p className="mt-2 text-xs font-semibold text-slate-400">Last updated: {current.updated}</p>
          </div>

          <div className="mt-14 max-w-3xl mx-auto minimal-card p-8 sm:p-10 space-y-6 text-sm leading-relaxed text-slate-600">
            {current.text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
              Cre8sphere LLP formally known as Cre8sphere Digital Media LLP. Registered Entity in India.
            </div>
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
