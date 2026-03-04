import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, Terminal } from "lucide-react";
import { navLinks } from "../data/portfolioData";

/**
 * Navbar — Premium sticky navigation bar with frosted glass effect,
 * animated active indicator, and responsive mobile drawer.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ── Desktop / Main Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#060a13]/80 backdrop-blur-xl border-b border-[#1e293b]/50 shadow-lg shadow-black/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Shield
                size={24}
                className="text-[#00e5ff] group-hover:text-[#00ff9d] transition-colors duration-300"
              />
              <div className="absolute inset-0 bg-[#00e5ff]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-lg font-bold font-[Poppins] tracking-wide text-white">
              Andrada<span className="text-[#00e5ff]">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-[#00e5ff]"
                      : "text-[#64748b] hover:text-[#e2e8f0]"
                  }`}
                >
                  {link.name}
                  {/* Active indicator dot */}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00e5ff] shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume button (desktop) */}
          <a
            href="/resume.pdf"
            download
            className="hidden lg:flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-medium
                       hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/60 transition-all duration-300"
          >
            <Terminal size={12} />
            Resume
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-[#64748b] hover:text-[#00e5ff] transition-colors p-2"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#0d1117] border-l border-[#1e293b]/50
                      transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between p-6 border-b border-[#1e293b]/50">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-[#00e5ff]" />
              <span className="text-base font-bold font-[Poppins] text-white">
                Andrada<span className="text-[#00e5ff]">.</span>
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-[#64748b] hover:text-white p-1 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="p-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.name}
                  style={{ animationDelay: `${i * 50 + 100}ms` }}
                  className={`${mobileOpen ? "animate-fade-in-up" : "opacity-0"}`}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-[#00e5ff] bg-[#00e5ff]/5 border border-[#00e5ff]/20"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    {/* Active bar */}
                    <span
                      className={`w-0.5 h-4 rounded-full transition-colors ${
                        isActive(link.path) ? "bg-[#00e5ff]" : "bg-transparent"
                      }`}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Resume button mobile */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 mt-6 px-4 py-3 rounded-xl border border-[#00e5ff]/30
                         text-[#00e5ff] text-sm font-medium hover:bg-[#00e5ff]/10 transition-all"
            >
              <Terminal size={14} />
              Download Resume
            </a>
          </nav>

          {/* Terminal-style decoration at bottom */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="terminal-text opacity-30 text-[10px] leading-relaxed">
              <p>$ whoami</p>
              <p className="text-[#00ff9d]">andrada@network:~$</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
