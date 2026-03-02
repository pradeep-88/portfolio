import { motion } from "framer-motion";
import {
  Smile,
  Image,
  Activity,
  Radio,
  BarChart2,
  ExternalLink,
  Github,
} from "lucide-react";

const iconMap = {
  Smile,
  Image,
  Activity,
  Radio,
  BarChart2,
};

export default function ProjectCard({ project, index = 0 }) {
  const IconComponent = iconMap[project.icon] || Activity;

  return (
    <motion.article
      className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-slate-600/80 hover:shadow-xl hover:shadow-primary/5 hover:ring-1 hover:ring-primary/20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -2 }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-700/80 text-primary transition-colors duration-300 group-hover:bg-primary/15">
          <IconComponent className="h-5 w-5" strokeWidth={1.8} />
        </div>
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      {project.metric && (
        <p className="mt-3 text-xs font-medium text-primary/90">
          {project.metric}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-slate-600/60 bg-slate-700/50 px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-slate-500 hover:bg-slate-600/50 hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
