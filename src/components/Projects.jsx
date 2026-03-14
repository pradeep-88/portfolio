import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";
import ParticlesBackground from "./ParticlesBackground";
import SectionHeading from "./SectionHeading";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const reduced = prefersReducedMotion();

  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden py-24 md:py-28"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <ParticlesBackground id="particles-projects" className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />

      <div className="max-w-section mx-auto px-6 md:px-12">
        <SectionHeading label="04 — projects" title="Projects" />

        <ul className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.title}>
              <ProjectCard
                project={project}
                index={index}
                onOpenModal={setSelectedProject}
              />
            </li>
          ))}
        </ul>

        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            index={projects.findIndex((p) => p.title === selectedProject.title)}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </motion.section>
  );
}
