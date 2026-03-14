import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import Tag from "./Tag";

import { Smile, Image, Activity } from "lucide-react";

const ICON_MAP = { Smile, Image, Activity };

const CARD_GRADIENTS = [
  "linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f172a 100%)",
  "linear-gradient(135deg, #0f172a 0%, #14532d 45%, #0c4a6e 100%)",
  "linear-gradient(135deg, #0f172a 0%, #0c4a6e 50%, #1e3a5f 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #134e4a 100%)",
  "linear-gradient(135deg, #0f172a 0%, #1e3a5f 45%, #0f172a 100%)",
];

export default function CaseStudyModal({ project, index = 0, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const IconComponent = ICON_MAP[project.icon] || Activity;
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <AnimatePresence>
      {project && (
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          className="relative w-[90vw] max-w-[680px] max-h-[85vh] overflow-y-auto rounded-lg border border-surface-3 bg-surface-1"
          style={{ borderRadius: "var(--radius-lg)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-1 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" style={{ width: 24, height: 24 }} />
          </button>

          <div
            className="h-[120px] flex items-center justify-center"
            style={{ background: gradient }}
          >
            <IconComponent className="h-10 w-10 text-accent" strokeWidth={1.8} />
          </div>

          <div className="p-6">
            <h2 className="text-[22px] font-bold text-text-primary">{project.title}</h2>
            {project.metric && (
              <div className="mt-3">
                <Tag variant="accent" size="md">
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 600 }}>
                    {project.metric}
                  </span>
                </Tag>
              </div>
            )}

            <h3 className="mt-6 text-[11px] uppercase tracking-wider text-accent font-mono mb-2">
              Details
            </h3>
            <p
              className="text-text-secondary text-[15px] leading-relaxed"
              style={{ lineHeight: 1.8 }}
            >
              {project.details || project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Tag key={tech} size="sm">
                  {tech}
                </Tag>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-medium bg-accent text-surface-0 hover:opacity-90"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  View Live
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm font-medium border border-surface-3 bg-surface-2 text-text-primary hover:border-accent"
                  style={{ borderRadius: "var(--radius-sm)" }}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
