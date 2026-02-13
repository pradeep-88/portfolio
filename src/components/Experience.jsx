import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="border-l-2 border-primary pl-6">
        <h3 className="text-xl font-semibold">
          Full-Stack Engineer — PREPZR
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          Feb 2026 – Present
        </p>
        <ul className="list-disc ml-4 text-gray-400 space-y-2">
          <li>Built scalable backend services and REST APIs</li>
          <li>Optimized SQL queries improving latency by 25%+</li>
          <li>Developed reusable data processing pipelines</li>
        </ul>
      </div>
    </motion.section>
  );
}
