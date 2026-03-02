import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <motion.section
      id="experience"
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
            Experience
          </h2>
          <p className="mt-3 text-slate-400 md:text-lg">
            Where I’ve built and shipped.
          </p>
        </motion.header>

        <motion.div
          className="max-w-2xl mx-auto rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 shadow-lg backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-700/80 text-primary">
              <Briefcase className="h-5 w-5" strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Full-Stack Engineer — PREPZR
              </h3>
              <p className="text-slate-400 text-sm mt-1">Feb 2026 – Present</p>
              <ul className="mt-4 space-y-2 text-slate-400 text-sm list-disc list-inside">
                <li>Built scalable backend services and REST APIs</li>
                <li>Optimized SQL queries improving latency by 25%+</li>
                <li>Developed reusable data processing pipelines</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
