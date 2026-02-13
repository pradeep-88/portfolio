import { motion } from "framer-motion";
import {
  Code2,
  FileCode,
  Database,
  Braces,
  Atom,
  Server,
  Layout,
  Zap,
  Radio,
  Container,
  GitBranch,
} from "lucide-react";
import { skills } from "../data/skills";

const iconMap = {
  Code2,
  FileCode,
  Database,
  Braces,
  Atom,
  Server,
  Layout,
  Zap,
  Radio,
  Container,
  GitBranch,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || FileCode;
          return (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="group relative bg-slate-800/80 rounded-xl p-6 flex flex-col items-center justify-center gap-3 border border-slate-700/50 hover:border-primary/50 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <IconComponent className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300" />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
