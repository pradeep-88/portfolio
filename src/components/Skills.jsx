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

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  GitBranch,
  Cloud,
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/40 via-dark to-slate-900/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(34,197,94,0.06),transparent)]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Skills
          </h2>
          <p className="mt-3 text-slate-400 md:text-lg">
            Technologies and tools I use to build and ship products.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.1 },
            },
          }}
        >
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-slate-600/80 hover:shadow-xl hover:shadow-primary/5 hover:ring-1 hover:ring-primary/20"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-700/80 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    <IconComponent className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-white">
                    {category.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-600/60 bg-slate-700/50 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-slate-500/80 hover:bg-slate-600/50 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
