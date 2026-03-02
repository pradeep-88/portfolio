import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ParticlesBackground from "./ParticlesBackground";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative overflow-hidden py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <ParticlesBackground id="particles-projects" className="absolute inset-0 -z-20" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/50 via-dark to-slate-900/30"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.08),transparent)]" aria-hidden />

      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Projects
          </h2>
          <p className="mt-3 text-slate-400 md:text-lg">
            Production systems and side projects I’ve built and shipped.
          </p>
        </motion.header>

        <ul className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.title}>
              <ProjectCard project={project} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
