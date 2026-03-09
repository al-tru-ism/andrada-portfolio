import {
  User,
  Target,
  MapPin,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Terminal,
  Globe,
  Cpu,
  Shield,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { personalInfo, timeline } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * About — Premium bento-grid layout with profile card, career objective,
 * interests, quick stats, and an interactive career timeline.
 */
export default function About() {
  return (
    <>
      {/* ── Bento Grid Section ── */}
      <SectionWrapper
        id="about-intro"
        title="About Me"
        label="// who-am-i"
        subtitle="A quick overview of who I am, where I'm headed, and why I'm passionate about networking and security."
      >
        {/* Bento Grid — asymmetric layout like modern dashboards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {/* ── Card 1: Profile (spans 2 cols on lg) ── */}
          <div className="lg:col-span-2 glass rounded-2xl p-8 glow-border card-hover group">
            <div className="flex items-start gap-5 mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#00ff9d]/10 flex items-center justify-center border border-[#00e5ff]/10">
                  <User size={32} className="text-[#00e5ff]" />
                </div>
                {/* Status indicator */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#00ff9d] border-2 border-[#060a13] shadow-[0_0_8px_rgba(0,255,157,0.6)]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-[#00e5ff] text-sm font-medium mb-1">
                  Network Engineer &amp; Security Enthusiast
                </p>
                <div className="terminal-text opacity-50 text-[10px]">
                  $ cat /etc/profile
                </div>
              </div>
            </div>

            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              {personalInfo.intro}
            </p>

            {/* Quick Info Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: "Remote / On-site" },
                { icon: Briefcase, text: "Network Engineering" },
                { icon: GraduationCap, text: "B.S. Information Technology" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1e293b]/50 text-[#94a3b8] text-xs"
                >
                  <Icon size={12} className="text-[#00e5ff]" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* ── Card 2: Career Objective ── */}
          <div className="glass rounded-2xl p-7 glow-border-green card-hover">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00ff9d]/10 flex items-center justify-center">
                <Target size={16} className="text-[#00ff9d]" />
              </div>
              <h4 className="text-white font-semibold text-sm">Career Objective</h4>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Build expertise as a{" "}
              <span className="text-[#00e5ff] font-medium">Network Engineer</span>,
              then transition into{" "}
              <span className="text-[#00ff9d] font-medium">Cybersecurity</span> — 
              specializing in threat analysis, penetration testing, and security operations.
            </p>
            {/* Mini roadmap */}
            <div className="mt-5 flex items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-[#00e5ff]/10 text-[#00e5ff]">Networking</span>
              <ArrowRight size={12} className="text-[#64748b]" />
              <span className="px-2 py-1 rounded bg-[#00ff9d]/10 text-[#00ff9d]">Security</span>
              <ArrowRight size={12} className="text-[#64748b]" />
              <span className="px-2 py-1 rounded bg-[#a855f7]/10 text-[#a855f7]">SOC / PenTest</span>
            </div>
          </div>

          {/* ── Card 3: What Drives Me ── */}
          <div className="glass rounded-2xl p-7 glow-border card-hover">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center">
                <Cpu size={16} className="text-[#00e5ff]" />
              </div>
              <h4 className="text-white font-semibold text-sm">What Drives Me</h4>
            </div>
            <ul className="space-y-2.5">
              {[
                "Designing scalable network architectures",
                "Identifying security vulnerabilities",
                "Hands-on lab experimentation",
                "Open-source security tools",
                "Industry certifications",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[#94a3b8] text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#00e5ff] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Card 4: Tech Terminal ── */}
          <div className="glass rounded-2xl p-7 glow-border card-hover overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
              </div>
              <span className="terminal-text opacity-50 ml-2">terminal</span>
            </div>
            <div className="font-[JetBrains_Mono,monospace] text-xs space-y-1.5 leading-relaxed">
              <p><span className="text-[#00ff9d]">andrada@net</span>:<span className="text-[#00e5ff]">~</span>$ whoami</p>
              <p className="text-[#94a3b8]">Network Engineer & Security Enthusiast</p>
              <p><span className="text-[#00ff9d]">andrada@net</span>:<span className="text-[#00e5ff]">~</span>$ cat skills.txt</p>
              <p className="text-[#94a3b8]">TCP/IP, OSPF, VLANs, Firewalls,</p>
              <p className="text-[#94a3b8]">IDS/IPS, Python, Wireshark, Linux</p>
              <p><span className="text-[#00ff9d]">andrada@net</span>:<span className="text-[#00e5ff]">~</span>$ echo $GOAL</p>
              <p className="text-[#f59e0b]">Cybersecurity Specialist</p>
              <p className="animate-pulse"><span className="text-[#00ff9d]">andrada@net</span>:<span className="text-[#00e5ff]">~</span>$ <span className="inline-block w-1.5 h-3.5 bg-[#00e5ff] ml-0.5" /></p>
            </div>
          </div>

          {/* ── Card 5: Interests (spans 1 col) ── */}
          <div className="glass rounded-2xl p-7 glow-border card-hover">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#a855f7]/10 flex items-center justify-center">
                <Globe size={16} className="text-[#a855f7]" />
              </div>
              <h4 className="text-white font-semibold text-sm">Interests</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Network Design",
                "Threat Hunting",
                "CTF Challenges",
                "Home Lab",
                "Automation",
                "Cloud Security",
                "Open Source",
                "Packet Analysis",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-[#111827] border border-[#1e293b]/50 text-[#94a3b8] text-xs
                             hover:border-[#a855f7]/30 hover:text-[#a855f7] transition-colors duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Timeline Section ── */}
      <SectionWrapper
        id="timeline"
        title="Career Roadmap"
        label="// my-journey"
        subtitle="From discovering IT to becoming a Cybersecurity specialist — step by step."
      >
        <div className="relative max-w-3xl mx-auto px-4">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00e5ff]/40 via-[#00e5ff]/15 to-transparent" />

          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} total={timeline.length} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

/**
 * TimelineItem — Premium timeline entry with glow dot and animated reveal.
 */
function TimelineItem({ item, index, total }) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isLeft = index % 2 === 0;
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-10 md:mb-14 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Glow dot */}
      <div className={`absolute left-1/2 -translate-x-1/2 z-10 mt-1.5`}>
        <div className={`w-3 h-3 rounded-full ${isLast ? "bg-[#00ff9d]" : "bg-[#00e5ff]"} border-[3px] border-[#060a13]`} />
        {isVisible && (
          <div className={`absolute inset-0 rounded-full ${isLast ? "bg-[#00ff9d]" : "bg-[#00e5ff]"} animate-ping opacity-20`} />
        )}
      </div>

      {/* Content Card */}
      <div
        className={`w-[calc(50%-2.5rem)] ${
          isLeft ? "mr-auto pr-0 text-right" : "ml-auto pl-0"
        }`}
      >
        <div className="glass rounded-xl p-5 glow-border card-hover group">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
            isLast
              ? "bg-[#00ff9d]/10 text-[#00ff9d]"
              : "bg-[#00e5ff]/10 text-[#00e5ff]"
          }`}>
            {item.year}
          </span>
          <h4 className="text-white font-semibold mb-2 group-hover:text-[#00e5ff] transition-colors">
            {item.title}
          </h4>
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
