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
    <header className="sticky top-4 z-50">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <nav className="flex items-center justify-between">
            <Link
              to="/"
              className="relative inline-flex items-center text-brand-text transition-colors duration-200 hover:text-brand-accent"
            >
              <img
                src="/logo-main.svg"
                alt="Cre8sphere Media"
                className="h-14 w-auto object-contain sm:h-16 lg:h-[90px]"
              />
            </Link>

            <div className="relative hidden items-center gap-2 md:flex">
              <ul className="flex items-center gap-1">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive(link.to)
                          ? "bg-brand-soft text-brand-accent"
                          : "text-brand-text hover:bg-brand-soft hover:text-brand-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex items-center gap-2 md:hidden">
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl border border-brand-border bg-white p-2.5 text-brand-text transition-all duration-300 hover:border-brand-accent hover:text-brand-accent"
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
          </nav>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
              isOpen ? "max-h-96 translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"
            }`}
          >
            <div className="pt-4">
              <div className="w-full rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`flex min-h-[44px] w-full items-center rounded-2xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                      isActive(link.to)
                        ? "bg-brand-soft text-brand-accent"
                        : "text-brand-text hover:bg-brand-soft hover:text-brand-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}

export default Navbar;


