import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function Footer() {
  return (
    <footer className="pb-12 pt-10" id="contact">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-10 text-brand-text shadow-[0_18px_34px_rgba(15,23,42,0.08)] sm:p-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(0,128,128,0.09),transparent_70%)]" />
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06),transparent_70%)]" />
          </div>
          <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
                Company
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <Link to="/about" className="transition-colors hover:text-brand-accent">
                  About
                </Link>
                <Link to="/join" className="transition-colors hover:text-brand-accent">
                  Join Us
                </Link>
                <Link to="/careers" className="transition-colors hover:text-brand-accent">
                  Careers
                </Link>
                <Link to="/faq" className="transition-colors hover:text-brand-accent">
                  FAQ
                </Link>
                <Link to="/contact" className="transition-colors hover:text-brand-accent">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
                Platforms
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <a href="https://gizmogeekhub.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">
                  GizmoGeek Hub
                </a>
                <a href="https://techorbis.in/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">
                  TechOrbis
                </a>
                <a href="https://origin8agency.in/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">
                  Origin8
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
                Social
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <a href="https://x.com/cre8spheremedia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">X</a>
                <a href="https://www.instagram.com/cre8spheremedia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">Instagram</a>
                <a href="https://www.linkedin.com/company/cre8sphere-media/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-accent">LinkedIn</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
                Legal
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <Link to="/privacy-policy" className="transition-colors hover:text-brand-accent">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="transition-colors hover:text-brand-accent">
                  Terms and Conditions
                </Link>
                <Link to="/disclaimer" className="transition-colors hover:text-brand-accent">
                  Disclaimer
                </Link>
                <Link to="/cookie-policy" className="transition-colors hover:text-brand-accent">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
            <p>© 2026 Cre8sphere Digital Media LLP. All rights reserved.</p>
            <p className="mt-2 inline-flex items-center gap-1">
              Crafted with Love
              <Heart className="h-4 w-4 text-brand-accent" fill="currentColor" />
              by
              <a href="https://origin8agency.in/" target="_blank" rel="noopener noreferrer" className="ml-1 text-brand-accent hover:text-brand-hover">
                Origin8
              </a>
            </p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
