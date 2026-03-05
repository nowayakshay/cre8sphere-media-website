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
        <div className="rounded-full border border-brand-border/80 bg-white px-6 py-3 shadow-sm backdrop-blur-md">
          <nav className="flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center text-brand-text transition-colors duration-200 hover:text-brand-accent"
            >
              <img
                src="/logo-main.svg"
                alt="Cre8sphere Media"
                className="h-14 w-auto object-contain sm:h-16 lg:h-[90px]"
              />
            </Link>

            <div className="hidden items-center gap-2 md:flex">
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

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white p-2.5 text-brand-text transition-colors duration-200 hover:border-brand-accent hover:text-brand-accent"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      d="M6 6L18 18M6 18L18 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 7H20M4 12H20M4 17H20"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="mt-4 space-y-2 border-t border-brand-border pt-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-brand-text transition-colors duration-200 hover:bg-brand-soft hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}

export default Navbar;


