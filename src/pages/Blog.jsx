import { useState } from "react";
import { Clock, ArrowRight, Tag, Calendar, BookOpen } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { blogPosts } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Blog categories for filtering
const blogCategories = [
  "All",
  "Networking Basics",
  "Security Concepts",
  "Lab Setups",
  "Tools",
];

// Category color mapping
const catColors = {
  "Networking Basics": "#00e5ff",
  "Security Concepts": "#00ff9d",
  "Lab Setups": "#a855f7",
  Tools: "#f59e0b",
};

/**
 * Blog — Premium technical blog listing with category filtering,
 * numbered entries, and hover interactions.
 */
export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper
      id="blog"
      title="Technical Blog"
      label="// blog-posts"
      subtitle="Articles, guides, and write-ups on networking, security, and lab experiments."
    >
      {/* ── Category Filter ── */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
        <Tag size={14} className="text-[#64748b]" />
        {blogCategories.map((cat) => {
          const color = catColors[cat] || "#00e5ff";
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
                activeCategory === cat
                  ? `border-opacity-30 shadow-[0_0_12px_rgba(0,229,255,0.1)]`
                  : "text-[#64748b] border-[#1e293b] hover:text-[#e2e8f0] hover:border-[#2a3550]"
              }`}
              style={
                activeCategory === cat
                  ? { color, borderColor: `${color}40`, background: `${color}10` }
                  : {}
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* ── Blog Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <BookOpen size={40} className="mx-auto text-[#1e293b] mb-4" />
          <p className="text-[#64748b]">No posts in this category yet.</p>
        </div>
      )}
    </SectionWrapper>
  );
}

/**
 * BlogCard — Premium blog post preview card with hover effects.
 */
function BlogCard({ post, index }) {
  const { ref, isVisible } = useScrollReveal(0.08);
  const color = catColors[post.category] || "#00e5ff";

  return (
    <article
      ref={ref}
      className={`glass rounded-2xl p-6 flex flex-col glow-border group relative overflow-hidden
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Top color accent */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-30" style={{ background: color }} />

      {/* Post number watermark */}
      <span className="absolute top-4 right-5 text-[60px] font-black text-white/[0.02] leading-none select-none">
        {String(post.id).padStart(2, "0")}
      </span>

      {/* Category & Meta */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border"
          style={{ color, borderColor: `${color}20`, background: `${color}10` }}
        >
          {post.category}
        </span>
        <div className="flex items-center gap-1 text-[#64748b] text-[11px]">
          <Calendar size={10} />
          {post.date}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white font-semibold text-base mb-3 group-hover:text-[#00e5ff] transition-colors duration-300 leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[#94a3b8] text-sm leading-relaxed mb-5 flex-1">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[#1e293b]/50">
        <div className="flex items-center gap-1.5 text-[#64748b] text-xs">
          <Clock size={12} />
          {post.readTime}
        </div>
        <span className="flex items-center gap-1.5 text-xs text-[#64748b] group-hover:text-[#00e5ff] transition-colors duration-300">
          Read Article
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </span>
      </div>
    </article>
  );
}
