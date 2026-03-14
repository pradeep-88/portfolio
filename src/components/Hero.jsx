import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileDown, ChevronDown, Github, Linkedin } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { profile } from "../data/profile";

const ROLES = ["Full-Stack Engineer", "React Developer", "Systems Builder"];

const CODE_LINES = [
  [{ type: "keyword", text: "const " }, { type: "name", text: "engineer" }, { type: "operator", text: " = " }, { type: "bracket", text: "{" }],
  [{ type: "key", text: "  name: " }, { type: "string", text: "'Pradeep Rajput'," }],
  [{ type: "key", text: "  focus: " }, { type: "string", text: "'Full-Stack'," }],
  [{ type: "key", text: "  stack: " }, { type: "bracket", text: "[" }, { type: "string", text: "'React'" }, { type: "punctuation", text: ", " }, { type: "string", text: "'Node'" }, { type: "punctuation", text: ", " }, { type: "string", text: "'Tailwind'" }, { type: "bracket", text: "]," }],
  [{ type: "key", text: "  available: " }, { type: "value", text: "true" }],
  [{ type: "bracket", text: "};" }],
  [{ type: "comment", text: "// Building scalable systems" }],
  [{ type: "comment", text: "// & production-grade apps" }],
];

function CodeBlock() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="rounded-md border border-surface-3 overflow-hidden text-left"
      style={{
        background: "var(--surface-1)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-surface-3 bg-surface-2/80">
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
        </span>
        <span
          className="text-[11px] text-text-tertiary ml-2 font-mono"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          portfolio.js
        </span>
      </div>
      <div className="p-4 font-mono text-xs leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
        {CODE_LINES.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={mounted ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, delay: i * 0.04 }}
            className="flex"
          >
            <span className="text-text-tertiary select-none w-4 shrink-0">{i + 1}</span>
            {line.map((seg, j) => (
              <span
                key={j}
                className={
                  seg.type === "keyword"
                    ? "text-purple-400"
                    : seg.type === "string"
                    ? "text-green-400"
                    : seg.type === "key"
                    ? "text-sky-300"
                    : seg.type === "value"
                    ? "text-amber-300"
                    : seg.type === "name"
                    ? "text-accent"
                    : seg.type === "comment"
                    ? "text-text-tertiary"
                    : "text-text-secondary"
                }
              >
                {seg.text}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Hero({ resumeModalOpen = false, onCloseResume, onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <ParticlesBackground id="particles-hero" className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-0/80 via-transparent to-surface-0" />

      <div className="max-w-section w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          className="text-left"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent mb-6"
            style={{ background: "var(--surface-2)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-[13px] text-text-secondary">Available for opportunities</span>
          </div>

          <h1
            className="font-bold text-text-primary leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            <span className="block">Pradeep</span>
            <span className="block text-accent">Rajput</span>
          </h1>

          <p className="mt-4 text-text-secondary text-lg min-h-[2rem]">
            <span className="inline-block min-w-[200px]">
              {ROLES[roleIndex]}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <p className="mt-4 text-text-secondary text-base leading-relaxed max-w-xl">
            I'm a Full-Stack Engineer focused on building scalable backend systems and
            clean, high-performance web applications. Currently engineering production
            systems at PREPZR.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <motion.button
              type="button"
              onClick={() => onOpenResume?.()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-medium text-surface-0 bg-accent hover:opacity-95 transition-opacity"
              style={{ borderRadius: "var(--radius-sm)" }}
              whileHover={prefersReducedMotion ? {} : { y: -1 }}
              whileTap={prefersReducedMotion ? {} : { y: 0 }}
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </motion.button>
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-medium border border-accent text-accent bg-surface-2 hover:bg-surface-3/50 transition-colors"
              style={{ borderRadius: "var(--radius-sm)" }}
              whileHover={prefersReducedMotion ? {} : { y: -1 }}
              whileTap={prefersReducedMotion ? {} : { y: 0 }}
            >
              View Projects
            </motion.a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CodeBlock />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-tertiary hover:text-accent transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>

    </section>
  );
}
