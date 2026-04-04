import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cre8sphere_cookie_consent";
const CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000; // 12 months

const defaultPreferences = {
  essential: true,
  analytics: false,
  marketing: false
};

function parseStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.expiresAt || Date.now() > parsed.expiresAt) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function persistConsent(preferences, status = "customized") {
  const payload = {
    status,
    preferences: {
      essential: true,
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing)
    },
    createdAt: Date.now(),
    expiresAt: Date.now() + CONSENT_DURATION_MS
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  return payload;
}

function applyConsent(payload) {
  // Keep this available for any analytics loader/gating logic.
  window.__cookieConsent = payload;
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", { detail: payload })
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const stored = parseStoredConsent();
    if (!stored) {
      setVisible(true);
      return;
    }
    applyConsent(stored);
    setPreferences(stored.preferences || defaultPreferences);
  }, []);

  const acceptAll = () => {
    const payload = persistConsent(
      { essential: true, analytics: true, marketing: true },
      "accepted"
    );
    applyConsent(payload);
    setVisible(false);
    setIsModalOpen(false);
  };

  const rejectNonEssential = () => {
    const payload = persistConsent(
      { essential: true, analytics: false, marketing: false },
      "rejected"
    );
    applyConsent(payload);
    setVisible(false);
    setIsModalOpen(false);
  };

  const savePreferences = () => {
    const payload = persistConsent(preferences, "customized");
    applyConsent(payload);
    setVisible(false);
    setIsModalOpen(false);
  };

  const canShow = useMemo(() => visible || isModalOpen, [visible, isModalOpen]);

  if (!canShow) return null;

  return (
    <>
      {visible ? (
        <div className="fixed inset-x-0 bottom-4 z-[90] px-4 sm:bottom-6 sm:px-6">
          <div className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.12)] sm:p-6">
            <h3 className="text-lg font-semibold text-slate-900">We Value Your Privacy</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              We use cookies and similar technologies to enhance your experience, analyze traffic, and improve our services. You can choose to accept or manage your preferences.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              <Link to="/privacy-policy" className="text-brand-accent hover:text-brand-hover">
                Learn more in our Privacy Policy
              </Link>
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[#008080] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0a6d6d]"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-700"
              >
                Manage Preferences
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
              >
                Reject Non-Essential
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isModalOpen ? (
        <div className="fixed inset-0 z-[95] flex items-end justify-center bg-slate-900/40 px-4 py-6 sm:items-center">
          <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
            <h3 className="text-xl font-semibold text-slate-900">Cookie Settings</h3>
            <p className="mt-2 text-sm text-slate-600">
              You can control how we use cookies.
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Essential Cookies (Always Active)
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Required for the website to function properly.
                </p>
              </div>

              <label className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Analytics Cookies</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Help us understand how visitors interact with our website (e.g., Google Analytics).
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
              </label>

              <label className="flex items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Marketing Cookies</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Used to deliver relevant ads and track campaign performance.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={savePreferences}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-300 hover:text-teal-700"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[#008080] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0a6d6d]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CookieConsent;

