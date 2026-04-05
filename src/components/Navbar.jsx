import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import PageContainer from "../layouts/PageContainer";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

const platformGroups = [
  {
    heading: "MEDIA",
    items: [
      { label: "GizmoGeek Hub", href: "https://gizmogeekhub.com/", external: true },
      { label: "TechOrbis", href: "https://techorbis.in/", external: true }
    ]
  },
  {
    heading: "CREATIVE",
    items: [{ label: "Origin8", href: "https://origin8agency.in/", external: true }]
  },
  {
    heading: "AI",
    items: [
      { label: "AI Studio", href: "https://ai.cre8sphere.in", external: true },
      { label: "Repurplex", href: "https://repurplex.app", external: true },
      { label: "Refyn", beta: true }
    ]
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const platformsRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (platformsRef.current && !platformsRef.current.contains(event.target)) {
        setIsPlatformsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    setIsPlatformsOpen(false);
    setIsOpen(false);
    setIsMobilePlatformsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 shadow-[0_1px_12px_-4px_rgba(15,23,42,0.1)]"
          : "border-b border-slate-100"
      }`}
    >
      <PageContainer>
        <div className="flex h-[64px] items-center justify-between sm:h-[68px]">
          {/* Logo */}
          <Link to="/" className="inline-flex flex-shrink-0 items-center">
            <img
              src="/logo-main.svg"
              alt="Cre8sphere Media"
              className="h-[46px] w-auto object-contain sm:h-[52px]"
            />
          </Link>

          {/* Desktop Navigation — Center */}
          <nav className="hidden h-full flex-1 justify-center md:flex">
            <ul className="flex h-full items-center gap-8">
              {primaryLinks.slice(0, 2).map((link) => (
                <li key={link.label} className="h-full">
                  <Link
                    to={link.to}
                    className={`relative inline-flex h-full items-center px-1 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.to)
                        ? "text-[#008080]"
                        : "text-slate-600 hover:text-[#008080]"
                    }`}
                  >
                    {link.label}
                    {isActive(link.to) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#008080]" />
                    )}
                  </Link>
                </li>
              ))}

              <li
                ref={platformsRef}
                className="relative h-full"
                onMouseEnter={() => setIsPlatformsOpen(true)}
                onMouseLeave={() => setIsPlatformsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsPlatformsOpen((prev) => !prev)}
                  className={`inline-flex h-full items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                    isPlatformsOpen
                      ? "text-[#008080]"
                      : "text-slate-600 hover:text-[#008080]"
                  }`}
                >
                  <span>Platforms</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      isPlatformsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-4 transition-all duration-300 ${
                    isPlatformsOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.16)]">
                    <div className="space-y-2">
                      {platformGroups.map((group) => (
                        <div key={group.heading} className="space-y-1">
                          <div className="space-y-1">
                            {group.items.map((item) =>
                              item.beta ? (
                                <div
                                  key={item.label}
                                  className="flex min-h-[44px] items-center rounded-[28px] px-3 text-sm font-medium text-slate-500 bg-slate-50/30 border border-slate-100/50"
                                >
                                  {item.label}
                                </div>
                              ) : item.external ? (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group flex min-h-[44px] items-center justify-between rounded-[28px] px-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#F2F9F9] hover:text-[#008080] hover:translate-x-1"
                                >
                                  <span>{item.label}</span>
                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
                                </a>
                              ) : (
                                <Link
                                  key={item.label}
                                  to={item.to || "#"}
                                  className="group flex min-h-[44px] items-center justify-between rounded-[28px] px-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#F2F9F9] hover:text-[#008080] hover:translate-x-1"
                                >
                                  <span>{item.label}</span>
                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100" />
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {primaryLinks.slice(2).map((link) => (
                <li key={link.label} className="h-full">
                  <Link
                    to={link.to}
                    className={`relative inline-flex h-full items-center px-1 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.to)
                        ? "text-[#008080]"
                        : "text-slate-600 hover:text-[#008080]"
                    }`}
                  >
                    {link.label}
                    {isActive(link.to) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#008080]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden flex-shrink-0 md:flex">
              <a
                href="https://gizmogeekhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-primary-glow group inline-flex items-center gap-2 rounded-[999px] bg-[#008080] px-5 py-2 text-[12px] font-bold !text-white hover:bg-[#006666]"
              >
                Visit GizmoGeek Hub
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors duration-200 hover:bg-slate-100 md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-h-[75vh] overflow-y-auto border-t border-slate-100 px-1 pb-6 pt-4">
            <div className="space-y-1.5">
              {primaryLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex h-11 w-full items-center rounded-[28px] px-4 text-[13px] font-semibold transition-all duration-200 ${
                    isActive(link.to)
                      ? "bg-[#F2F9F9] text-[#008080]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#008080]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="overflow-hidden rounded-[28px] border border-slate-200/60 bg-slate-50/30">
                <button
                  type="button"
                  onClick={() => setIsMobilePlatformsOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between px-4 py-3.5 transition-colors duration-200"
                >
                  <span className="text-[13px] font-semibold text-slate-700">
                    Platforms
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                      isMobilePlatformsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobilePlatformsOpen ? "max-h-[500px] border-t border-slate-100/50" : "max-h-0"
                  }`}
                >
                  <div className="p-3 pt-1">
                    {platformGroups.map((group) => (
                      <div key={group.heading} className="pb-3 last:pb-0">
                        <div className="space-y-1">
                          {group.items.map((item) =>
                            item.beta ? (
                              <span
                                key={item.label}
                                className="flex min-h-12 items-center rounded-[28px] bg-white px-3 text-[13px] font-semibold text-slate-600 shadow-sm border border-slate-100"
                              >
                                {item.label}
                              </span>
                            ) : item.external ? (
                              <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex min-h-11 items-center rounded-[28px] px-3 text-[13px] font-semibold text-slate-700 transition-colors duration-200 hover:bg-white/80"
                              >
                                {item.label}
                              </a>
                            ) : item.to ? (
                              <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setIsOpen(false)}
                                className="flex min-h-11 items-center rounded-[28px] px-3 text-[13px] font-semibold text-slate-700 transition-colors duration-200 hover:bg-white/80"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <span
                                key={item.label}
                                className="flex min-h-11 items-center rounded-[28px] px-3 text-[13px] font-semibold text-slate-700"
                              >
                                {item.label}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {primaryLinks.slice(2).map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`flex h-11 w-full items-center rounded-[28px] px-4 text-[13px] font-semibold transition-all duration-200 ${
                    isActive(link.to)
                      ? "bg-[#F2F9F9] text-[#008080]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#008080]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://gizmogeekhub.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-premium btn-primary-glow mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[28px] bg-[#008080] px-6 text-[13px] font-bold !text-white hover:bg-[#006666]"
              >
                Visit GizmoGeek Hub
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}

export default Navbar;
