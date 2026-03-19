import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function Footer() {
  return (
    <footer className="pb-8 pt-6" id="contact">
      <PageContainer>
        <div className="surface-card px-6 py-10 text-brand-text sm:px-8 sm:py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-accent">
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
                Products
              </h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
                <span>Repurplex</span>
                <span>Refyn AI</span>
                <span>Newstrix</span>
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

          <div className="mt-10 border-t border-black/5 pt-6 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Cre8sphere Digital Media LLP. All rights reserved.</p>
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
