import {
  Award,
  Shield,
  Network,
  CheckCircle,
  Trophy,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import TiltCard from "../components/TiltCard";
import {
  certifications,
  achievements,
  trainings,
} from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Icon map for dynamic rendering
const iconMap = { Award, Shield, Network, CheckCircle };

// Status styling
const statusStyles = {
  Completed: { color: "#00ff9d", bg: "bg-[#00ff9d]/10", border: "border-[#00ff9d]/20" },
  "In Progress": { color: "#00e5ff", bg: "bg-[#00e5ff]/10", border: "border-[#00e5ff]/20" },
  Planned: { color: "#f59e0b", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/20" },
};

/**
 * Certifications — Premium credentials, achievements, and training overview
 * with tilt cards and badge-style layouts.
 */
export default function Certifications() {
  return (
    <>
      {/* ── Certifications Grid ── */}
      <SectionWrapper
        id="certifications"
        title="Certifications"
        label="// credentials"
        subtitle="Industry credentials I've earned or am actively pursuing."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Achievements ── */}
      <SectionWrapper
        id="achievements"
        title="Achievements"
        label="// recognition"
        subtitle="Academic and extracurricular recognitions."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {achievements.map((ach, i) => (
            <AchievementCard key={i} item={ach} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Trainings ── */}
      <SectionWrapper
        id="trainings"
        title="Trainings & Workshops"
        label="// learning"
        subtitle="Courses and workshops that have shaped my knowledge."
      >
        <div className="max-w-2xl mx-auto space-y-3">
          {trainings.map((t, i) => (
            <TrainingItem key={i} text={t} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

/**
 * CertCard — Premium certification badge card with 3D tilt and status glow.
 */
function CertCard({ cert, index }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const Icon = iconMap[cert.icon] || Award;
  const style = statusStyles[cert.status] || statusStyles.Planned;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <TiltCard>
        <div className="glass rounded-2xl p-6 text-center glow-border h-full relative overflow-hidden group">
          {/* Top accent glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px opacity-40"
            style={{ background: style.color }}
          />

          {/* Icon */}
          <div
            className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 border border-white/5
                        group-hover:scale-110 transition-transform duration-300"
            style={{ background: `${style.color}10` }}
          >
            <Icon size={28} style={{ color: style.color }} />
          </div>

          {/* Title */}
          <h4 className="text-white font-semibold text-sm mb-1.5 leading-snug">
            {cert.title}
          </h4>
          <p className="text-[#64748b] text-xs mb-4">{cert.issuer}</p>

          {/* Status Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium ${style.bg} border ${style.border}`}
            style={{ color: style.color }}
          >
            {cert.status === "Completed" && <CheckCircle size={11} />}
            {cert.status} — {cert.date}
          </span>
        </div>
      </TiltCard>
    </div>
  );
}

/**
 * AchievementCard — Achievement display with trophy icon and hover effects.
 */
function AchievementCard({ item, index }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-7 glow-border card-hover group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center border border-[#f59e0b]/20 shrink-0
                        group-hover:scale-110 transition-transform duration-300">
          <Trophy size={18} className="text-[#f59e0b]" />
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-[#f59e0b] transition-colors">
            {item.title}
          </h4>
          <p className="text-[#94a3b8] text-xs leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * TrainingItem — Single training/workshop entry with hover interaction.
 */
function TrainingItem({ text, index }) {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 px-5 py-4 rounded-xl glass glow-border group
                  transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-8 h-8 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center border border-[#00e5ff]/20 shrink-0
                      group-hover:scale-110 transition-transform duration-300">
        <BookOpen size={14} className="text-[#00e5ff]" />
      </div>
      <span className="text-[#e2e8f0] text-sm flex-1 group-hover:text-white transition-colors">{text}</span>
      <ArrowUpRight size={14} className="text-[#64748b] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
