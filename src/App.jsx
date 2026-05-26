import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import CommitteePage from "./pages/CommitteePage";
import ContactPage from "./pages/ContactPage";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function AppInner() {
  // Apply design tone to <html> element (formal = cool paper background)
  useEffect(() => {
    document.documentElement.setAttribute("data-tone", "formal");
    document.documentElement.style.setProperty("--accent", "#1e3a5f");
    document.documentElement.style.setProperty("--accent-soft", "#a6c4dd");
  }, []);

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/events"    element={<EventsPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/contact"   element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
}
