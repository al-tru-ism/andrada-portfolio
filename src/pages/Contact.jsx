import { useState, useRef } from "react";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  Download,
  CheckCircle,
  Loader2,
  MapPin,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ── Input styling ── */
const inputBase = `w-full px-4 py-3.5 rounded-xl bg-[#0d1224] border border-[#1e293b]/60 text-[#e2e8f0] text-sm
                   placeholder-[#3a4560] focus:border-[#00e5ff]/40 focus:shadow-[0_0_0_3px_rgba(0,229,255,0.06)]
                   focus:outline-none transition-all duration-300`;

/**
 * Contact — Premium contact form + social connect panel.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  const { ref: formRef, isVisible: formVis } = useScrollReveal(0.05);
  const { ref: panelRef, isVisible: panelVis } = useScrollReveal(0.05);

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      label="// contact"
      subtitle="Have a question, opportunity, or just want to connect? I'd love to hear from you."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ── Contact Form (3 cols) ── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`lg:col-span-3 glass rounded-2xl p-7 md:p-9 glow-border space-y-6 relative overflow-hidden
                      transition-all duration-700 ${formVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />

          {/* Terminal label */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#3a4560] mb-2">
            <Terminal size={12} />
            <span>~/contact/new-message</span>
          </div>

          {/* 2-col row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Full Name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              focused={focused}
              onFocus={setFocused}
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              focused={focused}
              onFocus={setFocused}
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            type="text"
            placeholder="What is this regarding?"
            value={formData.subject}
            onChange={handleChange}
            focused={focused}
            onFocus={setFocused}
          />

          <div>
            <label className="block text-xs font-medium text-[#94a3b8] mb-2 tracking-wide uppercase">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder="Your message..."
              className={`${inputBase} resize-none ${focused === "message" ? "border-[#00e5ff]/40" : ""}`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`group relative flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm overflow-hidden
                        transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed
                        ${status === "sent"
                          ? "bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30"
                          : "bg-[#00e5ff] text-[#060a13] hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]"
                        }`}
          >
            {status === "sending" ? (
              <>
                <Loader2 size={15} className="animate-spin" /> Sending…
              </>
            ) : status === "sent" ? (
              <>
                <CheckCircle size={15} /> Message Sent!
              </>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </button>
        </form>

        {/* ── Connect Panel (2 cols) ── */}
        <div
          ref={panelRef}
          className={`lg:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-150
                      ${panelVis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Info Card */}
          <div className="glass rounded-2xl p-7 glow-border relative overflow-hidden flex-1">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff9d]/30 to-transparent" />

            <h3 className="text-white font-semibold text-lg mb-2">
              Let&apos;s Connect
            </h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              Open to Network Engineering roles, cybersecurity collaborations,
              or just a good tech conversation.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2.5 text-[#64748b] text-xs mb-6">
              <MapPin size={13} className="text-[#00ff9d]" />
              <span>{personalInfo.location || "Philippines"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] animate-pulse ml-1" />
              <span className="text-[#00ff9d] text-[10px]">Available</span>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <SocialLink
                href={`mailto:${personalInfo.email}`}
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                color="#00e5ff"
              />
              <SocialLink
                href={personalInfo.github}
                icon={Github}
                label="GitHub"
                value="github.com/andrada"
                color="#a855f7"
              />
              <SocialLink
                href={personalInfo.linkedin}
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/andrada"
                color="#0077b5"
              />
            </div>
          </div>

          {/* Download CV */}
          <a
            href={personalInfo.resumeUrl}
            download
            className="group flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl glass glow-border
                       text-[#e2e8f0] font-medium text-sm hover:border-[#00e5ff]/30 transition-all duration-300"
          >
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            Download Resume
            <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00e5ff]" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

/* ── Reusable Field ── */
function Field({ label, name, type, placeholder, value, onChange, focused, onFocus }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#94a3b8] mb-2 tracking-wide uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        onFocus={() => onFocus(name)}
        onBlur={() => onFocus(null)}
        placeholder={placeholder}
        className={`${inputBase} ${focused === name ? "border-[#00e5ff]/40" : ""}`}
      />
    </div>
  );
}

/* ── SocialLink ── */
function SocialLink({ href, icon: Icon, label, value, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300 group"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
        style={{
          borderColor: `${color}20`,
          background: `${color}08`,
        }}
      >
        <Icon size={16} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#64748b] text-[10px] uppercase tracking-wider">{label}</p>
        <p className="text-[#cbd5e1] text-sm truncate group-hover:text-white transition-colors duration-300">
          {value}
        </p>
      </div>
      <ArrowUpRight
        size={14}
        className="text-[#3a4560] opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{ color }}
      />
    </a>
  );
}
