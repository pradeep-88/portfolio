import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <motion.section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-slate-800 rounded-lg p-6 border border-slate-700/50 hover:border-primary/30 transition-colors duration-300 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700/80 text-primary border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.details && (
              <>
                <button
                  onClick={() =>
                    setExpandedId(expandedId === project.title ? null : project.title)
                  }
                  className="flex items-center gap-1 text-primary text-sm font-medium hover:underline self-start"
                >
                  {expandedId === project.title ? (
                    <>
                      <X className="w-4 h-4" /> Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" /> View Details
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedId === project.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm mt-3 pt-3 border-t border-slate-700">
                        {project.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
