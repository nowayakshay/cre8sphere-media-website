import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cre8sphere_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cre8sphere_cookie_consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-[#008080]">
          <Cookie className="h-5 w-5" />
          <h4 className="font-heading text-sm font-bold text-slate-900">Cookie Notice</h4>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">
        We use essential cookies to ensure our website functions securely and efficiently. Read our{" "}
        <Link to="/cookie-policy" className="text-[#008080] underline font-semibold hover:text-[#006666]">
          Cookie Policy
        </Link>.
      </p>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          onClick={acceptCookies}
          className="btn-premium rounded-full bg-[#008080] px-5 py-1.5 text-xs font-semibold text-white hover:bg-[#006666]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
