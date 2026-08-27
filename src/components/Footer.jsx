import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50/80 pb-12 pt-16" id="contact">
      <PageContainer>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/logo-main.svg"
                alt="Cre8sphere"
                className="h-10 w-auto object-contain sm:h-11"
              />
            </Link>
            <div className="mt-5 flex flex-col gap-3">
              <p className="text-xs leading-relaxed text-slate-500 max-w-[240px]">
                Cre8sphere LLP is a modern technology and innovation company exploring artificial intelligence, digital media platforms, creative systems, and electric mobility.
              </p>
              <div className="flex flex-col gap-1.5 pt-1">
                <div className="h-[2px] w-8 rounded-full bg-[#008080]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#008080]">
                  Technology & Innovation
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#008080]">
              Company
            </h3>
            <div className="mt-5 flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <Link to="/about" className="transition-colors hover:text-[#008080]">About Us</Link>
              <Link to="/platforms" className="transition-colors hover:text-[#008080]">Solutions</Link>
              <Link to="/products" className="transition-colors hover:text-[#008080]">Products</Link>
              <Link to="/join" className="transition-colors hover:text-[#008080]">Join Us</Link>
              <Link to="/careers" className="transition-colors hover:text-[#008080]">Careers</Link>
              <Link to="/faq" className="transition-colors hover:text-[#008080]">FAQ</Link>
              <Link to="/contact" className="transition-colors hover:text-[#008080]">Contact Us</Link>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#008080]">
              Ecosystem
            </h3>
            <div className="mt-5 flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <a href="https://gizmogeekhub.com/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#008080]">GizmoGeek Hub</a>
              <a href="https://techorbis.in/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#008080]">TechOrbis</a>
              <a href="https://origin8agency.in/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#008080]">Origin8</a>
              <Link to="/products" className="transition-colors hover:text-[#008080]">Repurplex AI</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#008080]">
              Social
            </h3>
            <div className="mt-5 flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <a href="https://x.com/cre8spheremedia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#008080]">X (Twitter)</a>
              <a href="https://www.instagram.com/cre8spheremedia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#008080]">Instagram</a>
              <a href="https://www.linkedin.com/company/cre8sphere-media/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#008080]">LinkedIn</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.16em] text-[#008080]">
              Legal
            </h3>
            <div className="mt-5 flex flex-col gap-2.5 text-xs font-medium text-slate-600">
              <Link to="/privacy-policy" className="transition-colors hover:text-[#008080]">Privacy Policy</Link>
              <Link to="/terms" className="transition-colors hover:text-[#008080]">Terms and Conditions</Link>
              <Link to="/disclaimer" className="transition-colors hover:text-[#008080]">Disclaimer</Link>
              <Link to="/cookie-policy" className="transition-colors hover:text-[#008080]">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-200/80 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-slate-500">
              © 2026 <span className="font-semibold text-slate-700">Cre8sphere LLP</span>. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 italic">
              Cre8sphere LLP — formerly known as Cre8sphere Digital Media LLP.
            </p>
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:mt-0">
            Crafted with
            <Heart className="mx-0.5 h-3.5 w-3.5 text-[#008080]" fill="currentColor" />
            by
            <a href="https://origin8agency.in/" target="_blank" rel="noopener noreferrer" className="ml-0.5 font-semibold text-slate-700 hover:text-[#008080] transition-colors">
              Origin8
            </a>
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
