import { Heart, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function Footer() {
  return (
    <footer className="pb-8 pt-6" id="contact">
      <PageContainer>
        <div className="saas-shell px-6 py-10 text-brand-text transition-colors duration-300 sm:px-8 sm:py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">
                Company
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <Link to="/about" className="transition-colors hover:text-brand-accent">
                  About
                </Link>
                <Link to="/contact" className="transition-colors hover:text-brand-accent">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">
                Platforms
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <a
                  href="https://gizmogeekhub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-accent"
                >
                  GizmoGeek Hub
                </a>
                <a
                  href="https://techorbis.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-accent"
                >
                  TechOrbis
                </a>
                <a
                  href="https://origin8agency.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-accent"
                >
                  Origin8
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">
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

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600">
                Social
              </h3>
              <div className="mt-4 flex items-center gap-4 text-slate-500">
                <a
                  href="https://x.com/cre8spheremedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cre8sphere Media on X"
                  className="transition-colors duration-200 hover:text-teal-600"
                  title="X"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-6.42L6.4 22H3.3l7.24-8.27L.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 18h1.73L6.22 3.9H4.36L17.8 20Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/cre8spheremedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cre8sphere Media on Instagram"
                  className="transition-colors duration-200 hover:text-teal-600"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/cre8sphere-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cre8sphere Media on LinkedIn"
                  className="transition-colors duration-200 hover:text-teal-600"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
                <a
                  href="https://x.com/cre8spheremedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-accent"
                >
                  X
                </a>
                <a
                  href="https://www.instagram.com/cre8spheremedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-accent"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/cre8sphere-media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-brand-border pt-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Cre8sphere Digital Media LLP. All rights reserved.</p>
            <p className="mt-2 inline-flex items-center gap-1">
              Crafted with Love
              <Heart className="h-4 w-4 text-rose-500" fill="currentColor" />
              by
              <a
                href="https://origin8agency.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-brand-accent hover:text-brand-hover"
              >
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
