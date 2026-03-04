import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";

/**
 * Layout — Root layout component that wraps every page with
 * the Navbar, cursor spotlight, content area, and Footer.
 */
export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col noise-overlay">
      <CursorGlow />
      <Navbar />
      {/* Main content area with top padding for fixed navbar */}
      <main className="flex-1 pt-20 relative z-[2]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
