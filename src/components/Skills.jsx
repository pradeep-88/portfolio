import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  GitBranch,
  Cloud,
} from "lucide-react";
import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  GitBranch,
  Cloud,
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Skills() {
  const reduced = prefersReducedMotion();

  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden py-24 md:py-28"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />
      <div className="max-w-section mx-auto px-6 md:px-12">
        <SectionHeading label="03 — skills" title="Skills" />

        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.id}
                variants={
                  reduced
                    ? {}
                    : {
                        hidden: { opacity: 0, y: 16 },
                        visible: { opacity: 1, y: 0 },
                      }
                }
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
              >
                <div className="flex items-center gap-3 shrink-0 sm:w-48">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-surface-2 text-accent">
                    <IconComponent className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const name = typeof skill === "string" ? skill : skill.name;
                    const level = typeof skill === "string" ? 3 : (skill.level ?? 3);
                    return (
                      <SkillTag
                        key={name}
                        name={name}
                        level={level}
                        icon={<IconComponent className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />}
                      />
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
