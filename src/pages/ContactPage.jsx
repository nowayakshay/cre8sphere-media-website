import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageContainer from "../layouts/PageContainer";
import Seo from "../components/Seo";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Seo
        title="Contact Us | Cre8sphere LLP"
        description="Get in touch with Cre8sphere LLP for technology partnerships, product inquiries, media coverage, or general questions."
        path="/contact"
      />
      <Navbar />

      <main className="pb-24 pt-12 sm:pt-16">
        <PageContainer>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F9F9] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#008080]">
              <Mail className="h-3.5 w-3.5" />
              Get In Touch
            </span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold text-slate-900 sm:text-5xl">
              Contact Cre8sphere
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Have a product inquiry, partnership proposal, or general question? We would love to hear from you.
            </p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.5fr] max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="minimal-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F9F9] text-[#008080]">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">Email Inquiries</h3>
                <p className="mt-1 text-xs text-slate-500">Official Communication</p>
                <a href="mailto:contact@cre8sphere.in" className="mt-3 block font-semibold text-[#008080] hover:underline text-sm">
                  contact@cre8sphere.in
                </a>
              </div>

              <div className="minimal-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2F9F9] text-[#008080]">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">Corporate Identity</h3>
                <p className="mt-1 text-xs font-semibold text-slate-700">Cre8sphere LLP</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Cre8sphere LLP — formerly known as Cre8sphere Digital Media LLP. Registered in India.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="minimal-card p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle className="h-16 w-16 text-[#008080]" />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md">
                    Thank you for contacting Cre8sphere LLP. Our team will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-premium rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading text-xl font-bold text-slate-900">Send Us a Message</h3>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-[#008080] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-[#008080] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Product Partnership / Inquiry"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-[#008080] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Message</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-[#008080] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-premium inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#008080] py-3.5 text-sm font-semibold text-white hover:bg-[#006666]"
                  >
                    Submit Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </PageContainer>
      </main>

      <Footer />
    </div>
  );
}
