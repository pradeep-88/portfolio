import { motion } from "framer-motion";
import { education } from "../data/education";
import SectionHeading from "./SectionHeading";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function About() {
  const reduced = prefersReducedMotion();

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden py-24 md:py-28"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />
      <div className="max-w-section mx-auto px-6 md:px-12">
        <SectionHeading label="01 — about" title="About & Education" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            className="relative flex-shrink-0 mx-auto lg:mx-0"
            initial={reduced ? {} : { opacity: 0, scale: 0.98 }}
            whileInView={reduced ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-[180px] h-[180px] rounded-full overflow-hidden border-[3px] border-accent"
              style={{ boxShadow: "0 0 0 6px var(--accent-glow)" }}
            >
              <img
                src="/profile-pic.png"
                alt="Pradeep Rajput"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-1 border border-surface-3"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-medium text-text-secondary">Open to work</span>
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <p className="text-text-secondary leading-relaxed mb-6" style={{ fontSize: "15px", lineHeight: 1.8 }}>
              I come from a strong engineering background with a focus on problem-solving, systems thinking, and disciplined execution.
            </p>
            <p className="text-text-secondary leading-relaxed mb-10" style={{ fontSize: "15px", lineHeight: 1.8 }}>
              My journey blends core engineering fundamentals with modern software development, shaping how I design and build systems today.
            </p>

            <h3 className="text-accent font-semibold mb-6" style={{ fontSize: "15px" }}>
              Education
            </h3>
            <div className="relative pl-4">
              <div
                className="absolute left-0 top-0 bottom-0 w-px bg-accent/40"
                style={{ width: "2px" }}
              />
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  className="relative pl-6 pb-8 last:pb-0"
                  initial={reduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <span
                    className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-[5px]"
                    style={{ left: "2px" }}
                  />
                  <p className="text-text-secondary text-[13px]">{edu.institution}</p>
                  <h4 className="text-text-primary font-medium mt-0.5" style={{ fontSize: "15px" }}>
                    {edu.degree}
                  </h4>
                  <p className="text-text-primary text-sm mt-0.5">{edu.specialization}</p>
                  <span
                    className="inline-block mt-2 px-2 py-0.5 rounded-sm bg-surface-2 text-accent text-[12px] font-medium"
                    style={{ borderRadius: "var(--radius-sm)" }}
                  >
                    {edu.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
