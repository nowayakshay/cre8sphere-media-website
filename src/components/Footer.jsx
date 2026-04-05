import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50/70 pb-10 pt-16" id="contact">
      <PageContainer>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/logo-main.svg"
                alt="Cre8sphere Media"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <div className="mt-6 flex flex-col gap-4">
              <p className="text-[14px] leading-relaxed text-slate-500 max-w-[240px]">
                Cre8sphere Media is a digital media and AI-driven platform exploring technology, artificial intelligence, electric mobility, and digital innovation.
              </p>
              <div className="flex flex-col gap-1.5">
                <div className="h-[2px] w-8 rounded-full bg-[#008080]/30" />
                <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#008080]/80">
                  Exploring Tomorrow&apos;s Technology Today
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-[0.16em] text-brand-accent">
              Company
            </h3>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-slate-600">
              <Link to="/about" className="transition-colors hover:text-brand-accent">About</Link>
              <Link to="/join" className="transition-colors hover:text-brand-accent">Join Us</Link>
              <Link to="/careers" className="transition-colors hover:text-brand-accent">Careers</Link>
              <Link to="/faq" className="transition-colors hover:text-brand-accent">FAQ</Link>
              <Link to="/contact" className="transition-colors hover:text-brand-accent">Contact</Link>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-[0.16em] text-brand-accent">
              Platforms
            </h3>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-slate-600">
              <a href="https://gizmogeekhub.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">GizmoGeek Hub</a>
              <a href="https://techorbis.in/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">TechOrbis</a>
              <a href="https://origin8agency.in/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">Origin8</a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-[0.16em] text-brand-accent">
              Social
            </h3>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-slate-600">
              <a href="https://x.com/cre8spheremedia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">X</a>
              <a href="https://www.instagram.com/cre8spheremedia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">Instagram</a>
              <a href="https://www.linkedin.com/company/cre8sphere-media/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">LinkedIn</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-heading font-bold uppercase tracking-[0.16em] text-brand-accent">
              Legal
            </h3>
            <div className="mt-6 flex flex-col gap-3 text-[14px] text-slate-600">
              <Link to="/privacy-policy" className="transition-colors hover:text-brand-accent">Privacy Policy</Link>
              <Link to="/terms" className="transition-colors hover:text-brand-accent">Terms and Conditions</Link>
              <Link to="/disclaimer" className="transition-colors hover:text-brand-accent">Disclaimer</Link>
              <Link to="/cookie-policy" className="transition-colors hover:text-brand-accent">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-200/80 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-[13px] font-medium text-slate-400">
            © 2026 <span className="text-slate-500">Cre8sphere Digital Media LLP</span>. All rights reserved.
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-400 sm:mt-0">
            Crafted with
            <Heart className="mx-0.5 h-3.5 w-3.5 text-[#008080]/70" fill="currentColor" />
            by
            <a href="https://origin8agency.in/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-500 hover:text-[#008080] transition-colors">
              Origin8
            </a>
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
