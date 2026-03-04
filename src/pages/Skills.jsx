import { Network, Shield, Wrench, Code } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { skillCategories } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Icon + color map for each category
const categoryMeta = {
  Network: { icon: Network, color: "#00e5ff", gradient: "from-[#00e5ff]/20 to-[#0891b2]/10" },
  Shield: { icon: Shield, color: "#00ff9d", gradient: "from-[#00ff9d]/20 to-[#059669]/10" },
  Wrench: { icon: Wrench, color: "#a855f7", gradient: "from-[#a855f7]/20 to-[#7c3aed]/10" },
  Code: { icon: Code, color: "#f59e0b", gradient: "from-[#f59e0b]/20 to-[#d97706]/10" },
};

/**
 * Skills — Premium categorized skill display with animated progress bars,
 * color-coded categories, and staggered reveal animations.
 */
export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      label="// tech-stack"
      subtitle="A categorized overview of my technical competencies and proficiency levels."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {skillCategories.map((cat, i) => (
          <SkillCategory key={cat.category} data={cat} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

/**
 * SkillCategory — Premium skill category card with gradient accents and animated bars.
 */
function SkillCategory({ data, index }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const meta = categoryMeta[data.icon] || categoryMeta.Code;
  const Icon = meta.icon;

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-7 glow-border card-hover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-7">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center border border-white/5`}
        >
          <Icon size={20} style={{ color: meta.color }} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-base">{data.category}</h3>
          <p className="text-[#64748b] text-[11px]">{data.skills.length} skills</p>
        </div>
      </div>

      {/* Skill Bars */}
      <div className="space-y-4">
        {data.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={meta.color}
            isVisible={isVisible}
            delay={i * 100 + index * 80}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * SkillBar — Individual skill with premium animated gradient progress bar.
 */
function SkillBar({ skill, color, isVisible, delay }) {
  // Level label
  const getLevel = (level) => {
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Learning";
  };

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#e2e8f0] text-sm font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#64748b] uppercase tracking-wider hidden group-hover:inline-block transition-all">
            {getLevel(skill.level)}
          </span>
          <span className="text-[#64748b] text-xs tabular-nums">{skill.level}%</span>
        </div>
      </div>
      <div className="w-full h-2 bg-[#111827] rounded-full overflow-hidden border border-[#1e293b]/30">
        <div
          className="h-full rounded-full progress-fill relative overflow-hidden"
          style={{
            width: isVisible ? `${skill.level}%` : "0%",
            transitionDelay: `${delay}ms`,
            background: `linear-gradient(90deg, ${color}dd, ${color}88)`,
          }}
        >
          {/* Shimmer effect on the bar */}
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>
    </div>
  );
}
