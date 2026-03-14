import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Smile,
  Image,
  Activity,
  ExternalLink,
  Github,
} from "lucide-react";
import Tag from "./Tag";
import { useSpotlight } from "../hooks/useSpotlight";

const iconMap = {
  Smile,
  Image,
  Activity,
};

const CARD_GRADIENTS = [
  "linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f172a 100%)",
  "linear-gradient(135deg, #0f172a 0%, #14532d 45%, #0c4a6e 100%)",
  "linear-gradient(135deg, #0f172a 0%, #0c4a6e 50%, #1e3a5f 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #134e4a 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #0f172a 100%)",
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ProjectCard({ project, index = 0, onOpenModal }) {
  const cardRef = useRef(null);
  useSpotlight(cardRef);
  const IconComponent = iconMap[project.icon] || Activity;
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  const reduced = prefersReducedMotion();

  return (
    <motion.article
      ref={cardRef}
      data-cursor-hover
      className="spotlight-card group rounded-md border border-surface-3 bg-surface-1 overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_8px_32px_var(--accent-glow)]"
      style={{ borderRadius: "var(--radius-md)" }}
      onClick={() => onOpenModal?.(project)}
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={reduced ? {} : { y: -4 }}
    >
      <div
        className="h-40 flex items-center justify-center"
        style={{
          background: gradient,
        }}
      >
        <IconComponent className="h-8 w-8 text-accent" strokeWidth={1.8} />
      </div>

      <div className="p-5">
        <h3 className="text-base font-semibold text-text-primary">
          {project.title}
        </h3>
        <p
          className="mt-2 text-[13px] text-text-secondary leading-relaxed line-clamp-3"
          style={{ WebkitLineClamp: 3 }}
        >
          {project.description}
        </p>

        {project.metric && (
          <div className="mt-3">
            <Tag variant="accent" size="sm">
              <span
                className="font-semibold"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                }}
              >
                {project.metric}
              </span>
            </Tag>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech) => (
            <Tag key={tech} size="sm">
              <span className="text-[11px]">{tech}</span>
            </Tag>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 relative z-10">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
