import { useState } from "react";
import { ExternalLink, Github, Filter, Folder } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import TiltCard from "../components/TiltCard";
import { projects } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Available filter categories
const categories = ["All", "Networking", "Cybersecurity", "Web", "Research"];

// Category color mapping
const categoryColors = {
  Networking: { bg: "bg-[#00e5ff]/10", text: "text-[#00e5ff]", border: "border-[#00e5ff]/20" },
  Cybersecurity: { bg: "bg-[#00ff9d]/10", text: "text-[#00ff9d]", border: "border-[#00ff9d]/20" },
  Web: { bg: "bg-[#a855f7]/10", text: "text-[#a855f7]", border: "border-[#a855f7]/20" },
  Research: { bg: "bg-[#f59e0b]/10", text: "text-[#f59e0b]", border: "border-[#f59e0b]/20" },
};

/**
 * Projects — Premium filterable project cards with 3D tilt effect,
 * gradient borders, and staggered reveal animations.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      label="// my-work"
      subtitle="A selection of hands-on projects demonstrating my skills in networking, security, and development."
    >
      {/* ── Filter Buttons ── */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        <Filter size={14} className="text-[#64748b]" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
              activeFilter === cat
                ? "bg-[#00e5ff]/10 text-[#00e5ff] border-[#00e5ff]/30 shadow-[0_0_12px_rgba(0,229,255,0.1)]"
                : "text-[#64748b] border-[#1e293b] hover:text-[#e2e8f0] hover:border-[#2a3550]"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span className="ml-1.5 text-[10px] opacity-50">
                ({projects.filter((p) => cat === "All" || p.category === cat).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── Project Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <Folder size={40} className="mx-auto text-[#1e293b] mb-4" />
          <p className="text-[#64748b]">No projects in this category yet.</p>
        </div>
      )}
    </SectionWrapper>
  );
}

/**
 * ProjectCard — Premium project card with 3D tilt, gradient accent, and hover effects.
 */
function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollReveal(0.08);
  const colors = categoryColors[project.category] || categoryColors.Networking;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <TiltCard>
        <div className="glass rounded-2xl p-6 flex flex-col h-full glow-border group relative overflow-hidden">
          {/* Top accent line */}
          <div className={`absolute top-0 left-0 right-0 h-px ${colors.bg.replace("/10", "")} opacity-30`} />

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
              <Folder size={18} className={colors.text} />
            </div>
            <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#00e5ff] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#111827] text-[#64748b] text-[11px] border border-[#1e293b]/50
                           hover:text-[#94a3b8] hover:border-[#2a3550] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-5 pt-4 border-t border-[#1e293b]/50">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#64748b] hover:text-[#00e5ff] transition-colors duration-300 group/link"
              >
                <Github size={14} />
                <span className="group-hover/link:underline underline-offset-2">Source Code</span>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#64748b] hover:text-[#00ff9d] transition-colors duration-300 group/link"
              >
                <ExternalLink size={14} />
                <span className="group-hover/link:underline underline-offset-2">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
