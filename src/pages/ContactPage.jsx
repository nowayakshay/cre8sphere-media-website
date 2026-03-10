import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import Seo from "../components/Seo";

const contactItems = [
  {
    label: "Email",
    value: "contact@cre8sphere.in",
    href: "mailto:contact@cre8sphere.in"
  },
  {
    label: "Business Inquiries",
    value: "For partnerships, media collaborations, and creative projects.",
    href: "mailto:contact@cre8sphere.in"
  },
  { label: "Location", value: "India", href: "#" }
];

function ContactPage() {
  return (
    <div className="bg-white text-brand-text">
      <Seo
        title="Contact Cre8sphere Media"
        description="Get in touch with Cre8sphere Media for collaborations, media inquiries, and partnerships."
        path="/contact"
      />
      <Navbar />
      <main className="pb-8">
        <PageHeroSection
          illustration="contact"
          subtitle="Cre8sphere Media"
          title="Contact Cre8sphere Media"
          description="Have questions, collaborations, or partnership inquiries? Get in touch with the Cre8sphere Media team."
        />

        <section className="bg-gray-50/70 py-16 sm:py-20">
          <PageContainer>
            <SectionReveal>
              <div className="grid gap-8 lg:grid-cols-2">
                <article className="saas-shell section-layer p-8">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Contact Information
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {contactItems.map((item) => (
                      <li key={item.label}>
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="mt-1 inline-block text-base text-slate-700 transition-colors hover:text-brand-accent"
                        >
                          {item.value}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <h3 className="text-lg font-semibold">Social Links</h3>
                    <div className="mt-4 flex items-center gap-4">
                      <a
                        href="https://x.com/cre8spheremedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Cre8sphere Media on X"
                        className="text-slate-500 transition-colors duration-200 hover:text-teal-600"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-6.42L6.4 22H3.3l7.24-8.27L.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 18h1.73L6.22 3.9H4.36L17.8 20Z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/cre8spheremedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Cre8sphere Media on Instagram"
                        className="text-slate-500 transition-colors duration-200 hover:text-teal-600"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/cre8sphere-media/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Cre8sphere Media on LinkedIn"
                        className="text-slate-500 transition-colors duration-200 hover:text-teal-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </article>

                <article className="gradient-card elevate-card p-8 shadow-md hover:-translate-y-1 hover:shadow-xl">
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Send Us a Message
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Have a question or want to collaborate with us? Fill out the
                    form below and our team will get back to you.
                  </p>
                  <form className="mt-6 space-y-5">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium">Full Name</span>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-accent"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium">Email Address</span>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-accent"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-medium">Message</span>
                      <textarea
                        rows="5"
                        placeholder="Tell us how we can help"
                        className="w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-accent"
                      />
                    </label>

                    <button
                      type="submit"
                      className="inline-flex rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-teal-700"
                    >
                      Send Message
                    </button>
                  </form>
                  <p className="mt-5 text-sm text-slate-500">
                    Looking for policies? Read our{" "}
                    <Link
                      to="/privacy-policy"
                      className="text-brand-accent hover:text-brand-hover"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/terms"
                      className="text-brand-accent hover:text-brand-hover"
                    >
                      Terms and Conditions
                    </Link>
                    .
                  </p>
                </article>
              </div>
            </SectionReveal>
          </PageContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
