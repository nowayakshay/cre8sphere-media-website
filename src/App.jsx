import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import ProductsPage from "./pages/ProductsPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsroomPage from "./pages/NewsroomPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import FaqPage from "./pages/FaqPage";
import LegalPage from "./pages/LegalPage";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-[#008080]/15 selection:text-slate-900">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/platforms" element={<SolutionsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />
            <Route path="/disclaimer" element={<LegalPage type="disclaimer" />} />
            <Route path="/cookie-policy" element={<LegalPage type="cookie" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </div>
    </SmoothScroll>
  );
}

export default App;
