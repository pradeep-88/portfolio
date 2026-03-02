import { useState } from "react";
import { motion } from "framer-motion";
import { FileDown, ChevronDown } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      <ParticlesBackground id="particles-hero" className="absolute inset-0 -z-10" />
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Pradeep <span className="text-primary">Rajput</span>
        </h1>
        <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed mx-auto max-w-2xl text-center [text-wrap:balance]">
          I'm a Full-Stack Engineer focused on building scalable backend
          systems and clean, high-performance web applications. I work across
          APIs, databases, and real-time systems to turn complex problems into
          reliable software. With experience in backend architecture, data
          pipelines, and modern frontend frameworks, I care deeply about
          performance, maintainability, and real-world impact. Currently
          engineering production systems at PREPZR.
        </p>
        <motion.button
          type="button"
          onClick={() => setResumeModalOpen(true)}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary/20 text-primary border border-primary/50 font-medium hover:bg-primary/30 hover:border-primary/70 transition-colors duration-300"
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          <FileDown className="w-5 h-5" />
          Download Resume
        </motion.button>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
