import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageContainer from "../layouts/PageContainer";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
      <PageContainer>
        <div className="flex min-h-[76px] items-center justify-between gap-6 py-3">
          <Link to="/" className="inline-flex items-center text-brand-text">
            <img
              src="/logo-main.svg"
              alt="Cre8sphere Media"
              className="h-12 w-auto object-contain sm:h-14 lg:h-[72px]"
            />
          </Link>

          <div className="hidden flex-1 justify-center md:flex">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(link.to)
                        ? "text-brand-accent"
                        : "text-slate-700 hover:text-brand-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex">
            <Link
              to="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-700"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-black/5 bg-white p-2.5 text-slate-700 transition-all duration-300 hover:border-brand-accent/30 hover:text-brand-accent"
            >
              <span className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isOpen ? "top-2.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    isOpen ? "top-2.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-200 py-4">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-[48px] w-full items-center rounded-lg px-3 py-3 text-base font-medium transition-all duration-300 ${
                    isActive(link.to)
                      ? "bg-slate-50 text-brand-accent"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}

export default Navbar;
