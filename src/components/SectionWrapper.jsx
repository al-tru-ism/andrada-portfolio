import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * SectionWrapper — Wraps page sections with scroll-reveal animation,
 * consistent padding, and premium section headers with terminal-style labels.
 */
export default function SectionWrapper({ id, title, subtitle, label, children }) {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section id={id} className="section-container">
      <div
        ref={ref}
        className={`transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Header */}
        {title && (
          <div className="mb-16 text-center">
            {/* Terminal-style label */}
            {label && (
              <span className="terminal-text inline-block mb-4 opacity-60">
                {label}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {title}
              <span className="text-[#00e5ff]">.</span>
            </h2>
            {subtitle && (
              <p className="text-[#94a3b8] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                {subtitle}
              </p>
            )}
            {/* Decorative gradient line */}
            <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent" />
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
