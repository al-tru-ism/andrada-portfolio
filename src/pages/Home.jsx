import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Network,
  Shield,
  Terminal,
  Award,
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import NetworkBackground from "../components/NetworkBackground";
import AnimatedText from "../components/AnimatedText";
import AnimatedCounter from "../components/AnimatedCounter";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Home — Premium landing page with interactive network canvas,
 * animated typing headline, floating bento stats, and bold CTAs.
 */
export default function Home() {
  return (
    <>
      {/* ━━━ HERO SECTION ━━━ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Interactive network topology background */}
        <NetworkBackground intensity={1} />

        {/* Ambient gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00e5ff]/[0.03] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00ff9d]/[0.03] rounded-full blur-[130px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#a855f7]/[0.015] rounded-full blur-[160px]" />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Terminal-style status line */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass glow-border mb-10 animate-fade-in opacity-0">
            <span className="status-dot" />
            <span className="terminal-text tracking-widest uppercase">
              Open to Opportunities
            </span>
          </div>

          {/* Name — large and bold */}
          <h1 className="animate-fade-in-up opacity-0 delay-100">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Animated headline */}
          <div className="mt-6 mb-4 animate-fade-in-up opacity-0 delay-200">
            <AnimatedText
              text="Aspiring Network Engineer"
              className="text-xl sm:text-2xl md:text-3xl font-semibold gradient-text-cyan"
              speed={35}
              delay={800}
              tag="h2"
            />
          </div>
          <p className="text-[#64748b] text-lg md:text-xl font-medium animate-fade-in-up opacity-0 delay-300">
            Future Cybersecurity Specialist
          </p>

          {/* Tagline */}
          <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto mt-6 mb-10 leading-relaxed animate-fade-in-up opacity-0 delay-400">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-500">
            <Link
              to="/projects"
              className="btn-primary group flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#00e5ff] text-[#060a13] font-semibold text-sm"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-outline flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-[#1e293b] text-[#e2e8f0] font-semibold text-sm"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-in-up opacity-0 delay-600">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl border border-[#1e293b]/50 text-[#64748b] 
                           hover:text-[#00e5ff] hover:border-[#00e5ff]/30 hover:bg-[#00e5ff]/5 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-[#64748b] opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0 delay-700">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#64748b]">
            Scroll
          </span>
          <ChevronDown size={16} className="text-[#64748b] animate-bounce" />
        </div>
      </section>

      {/* ━━━ STATS / BENTO SECTION ━━━ */}
      <section className="section-container !pt-0">
        <StatsGrid />
      </section>
    </>
  );
}

/**
 * StatsGrid — Bento-style stats cards (inspired by dashboard UIs).
 */
function StatsGrid() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const stats = [
    {
      icon: Network,
      value: 6,
      suffix: "+",
      label: "Projects Completed",
      color: "#00e5ff",
    },
    {
      icon: Shield,
      value: 4,
      suffix: "+",
      label: "Certifications",
      color: "#00ff9d",
    },
    {
      icon: Terminal,
      value: 500,
      suffix: "+",
      label: "Hours of Lab Work",
      color: "#a855f7",
    },
    {
      icon: Award,
      value: 3,
      suffix: "",
      label: "Achievements",
      color: "#f59e0b",
    },
  ];

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="glass rounded-2xl p-6 md:p-8 glow-border card-hover text-center group"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div
            className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${stat.color}10` }}
          >
            <stat.icon size={22} style={{ color: stat.color }} />
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-[#64748b] text-xs md:text-sm font-medium">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
