import { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import { useSpotlight } from "../hooks/useSpotlight";

const CHECK_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 text-accent" aria-hidden>
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BULLETS = [
  "Built scalable backend services and REST APIs",
  "Optimized SQL queries improving latency by 25%+",
  "Developed reusable data processing pipelines",
];

const TECH_TAGS = ["Node.js", "SQL", "REST APIs", "Data pipelines"];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Experience() {
  const cardRef = useRef(null);
  useSpotlight(cardRef);
  const reduced = prefersReducedMotion();

  return (
    <motion.section
      id="experience"
      className="relative overflow-hidden py-24 md:py-28"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />
      <div className="max-w-section mx-auto px-6 md:px-12">
        <SectionHeading label="02 — experience" title="Experience" />

        <motion.div
          ref={cardRef}
          className="spotlight-card max-w-2xl mx-auto rounded-md border border-surface-3 bg-surface-1 p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_var(--accent-glow)]"
          style={{
            borderRadius: "var(--radius-md)",
            borderLeftWidth: "4px",
            borderLeftColor: "var(--accent)",
          }}
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent text-surface-0 text-lg font-semibold"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              P
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-text-primary">
                  Full-Stack Engineer — PREPZR
                </h3>
                <span className="text-text-tertiary text-sm">Feb 2026 – Present</span>
              </div>
              <ul className="mt-4 space-y-2">
                {BULLETS.map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                    {CHECK_SVG}
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-surface-3">
                <span className="text-text-tertiary text-[12px] font-medium w-full mb-1">Tech used</span>
                {TECH_TAGS.map((tech) => (
                  <Tag key={tech} size="sm">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
