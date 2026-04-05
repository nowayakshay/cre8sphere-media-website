import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import SectionReveal from "../components/SectionReveal";
import PageHeroSection from "../components/PageHeroSection";
import Seo from "../components/Seo";

function ContactPage() {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
  const location = useLocation();
  const submitted = new URLSearchParams(location.search).get("submitted") === "true";

  return (
    <div className="internal-page bg-brand-bg text-brand-text">
      <Seo
        title="Contact Cre8sphere Media"
        description="Get in touch with Cre8sphere Media for collaborations, media inquiries, and partnerships."
        path="/contact"
      />
      <Navbar />
      <main className="pb-8 pt-6 sm:pt-8">
        <PageHeroSection
          title="Get in Touch"
          description="Got an idea, collaboration, or opportunity? We work with brands, creators, and innovators to build meaningful digital experiences and content."
        />

        <section className="py-20 sm:py-24">
          <PageContainer>
            <SectionReveal>
              <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">

                {/* Left: Contact Info — Open Layout */}
                <div className="flex flex-col gap-10">
                  {/* Contact Information */}
                  <div>
                    <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#008080] to-[#00a0a0]" />
                    <h2>Contact Information</h2>
                    <ul className="mt-8 space-y-8">
                      <li className="flex items-start gap-4">
                        <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                          <Mail className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-[#008080]">Email</p>
                          <a href="mailto:contact@cre8sphere.in" className="mt-1 text-base text-slate-700 hover:text-[#008080] transition-colors">
                            contact@cre8sphere.in
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F2F9F9] text-[#008080]">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-[#008080]">Location</p>
                          <span className="mt-1 block text-base text-slate-700">Ahmedabad, Gujarat, India</span>
                        </div>
                      </li>
                      <li>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#008080]">Business Inquiries</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          For brand collaborations, partnerships, and media opportunities.
                        </p>
                        <a href="mailto:business@cre8sphere.in" className="mt-2 inline-block text-sm font-semibold text-[#008080] hover:underline">
                          business@cre8sphere.in
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Follow Us */}
                  <div>
                    <h3 className="text-slate-950">Follow Us</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Stay connected with us across platforms.
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href="https://x.com/cre8spheremedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[28px] border border-slate-200 bg-white text-slate-500 hover:border-[#008080]/30 hover:text-[#008080] transition-colors"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-6.42L6.4 22H3.3l7.24-8.27L.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 18h1.73L6.22 3.9H4.36L17.8 20Z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/cre8spheremedia"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[28px] border border-slate-200 bg-white text-slate-500 hover:border-[#008080]/30 hover:text-[#008080] transition-colors"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/cre8sphere-media/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-[28px] border border-slate-200 bg-white text-slate-500 hover:border-[#008080]/30 hover:text-[#008080] transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Response Time Note — inline, no card */}
                  <p className="text-sm font-medium text-[#006666] border-l-4 border-[#008080]/20 pl-4">
                    We typically respond within <strong>24–48 hours.</strong> For urgent inquiries, use the business email.
                  </p>
                </div>

                {/* Right: Contact Form — KEEP as functional card */}
                <article className="surface-card p-8">
                  <h2>Send Us a Message</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Have a question, idea, or collaboration in mind? Fill out the form and our team will get back to you.
                  </p>
                  {submitted ? (
                    <div className="mt-4 rounded-[28px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                      Message sent successfully. Thank you for contacting Cre8sphere Media.
                    </div>
                  ) : null}
                  <form
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="mt-7 space-y-5"
                  >
                    <input type="hidden" name="access_key" value={web3FormsKey} />
                    <input type="hidden" name="from_name" value="Cre8sphere Media Contact Form" />
                    <input type="hidden" name="redirect" value={`${window.location.origin}/contact?submitted=true`} />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Full Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="w-full rounded-[28px] border border-gray-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Email Address</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        className="w-full rounded-[28px] border border-gray-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Subject</span>
                      <select
                        name="subject"
                        required
                        className="w-full rounded-[28px] border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-[#008080]/40 focus:ring-2 focus:ring-[#008080]/10"
                      >
                        <option value="">Select a subject</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="business-inquiry">Business Inquiry</option>
                        <option value="general-query">General Query</option>
                        <option value="media-press">Media / Press</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell us about your idea, requirement, or how we can help..."
                        required
                        className="w-full rounded-[28px] border border-gray-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                      />
                    </label>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-[28px] bg-[#008080] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#006666] hover:text-white"
                      >
                      Start a Conversation 🚀
                    </button>
                    <div className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#008080]">Who should reach out?</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>Brands & startups</li>
                        <li>Creators & contributors</li>
                        <li>PR & media teams</li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to our{" "}
                      <Link to="/privacy-policy" className="text-[#008080] hover:underline">Privacy Policy</Link>
                      {" "}and{" "}
                      <Link to="/terms" className="text-[#008080] hover:underline">Terms</Link>.
                    </p>
                  </form>
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
