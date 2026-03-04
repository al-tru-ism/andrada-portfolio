import { Github, Linkedin, Mail, Shield, Terminal, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

/**
 * Footer — Premium site footer with glass styling, terminal accent, and social links.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#1e293b]/50 bg-[#060a13]/80 backdrop-blur-xl">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* ── Brand ── */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 border border-[#00e5ff]/20 flex items-center justify-center group-hover:border-[#00e5ff]/40 transition-colors duration-300">
                <Shield size={16} className="text-[#00e5ff]" />
              </div>
              <span className="text-lg font-bold font-[Poppins] text-white">
                Andrada<span className="text-[#00e5ff]">.</span>
              </span>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed max-w-sm mb-5">
              Aspiring Network Engineer with a passion for building secure,
              resilient infrastructure and a clear path toward Cybersecurity.
            </p>

            {/* Terminal decoration */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d1224]/60 border border-[#1e293b]/40 font-mono text-[11px] text-[#3a4560]">
              <Terminal size={11} className="text-[#00ff9d]" />
              <span className="text-[#00ff9d]">$</span> echo &quot;open to opportunities&quot;
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-[#94a3b8] hover:text-[#00e5ff] transition-colors duration-300 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1e293b] group-hover:bg-[#00e5ff] transition-colors duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Social ── */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-semibold text-[#64748b] uppercase tracking-[0.2em] mb-5">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#0d1224] border border-[#1e293b]/60 flex items-center justify-center
                             text-[#64748b] hover:text-[#00e5ff] hover:border-[#00e5ff]/30 hover:shadow-[0_0_12px_rgba(0,229,255,0.08)]
                             transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <p className="text-[#3a4560] text-xs mt-5">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-[#1e293b]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#3a4560]">
            &copy; {currentYear} Andrada. All rights reserved.
          </p>
          <p className="text-[11px] text-[#3a4560] flex items-center gap-1.5">
            Crafted with <Heart size={10} className="text-[#00e5ff]" /> using
            <span className="text-[#94a3b8]">React</span> &amp;
            <span className="text-[#94a3b8]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
