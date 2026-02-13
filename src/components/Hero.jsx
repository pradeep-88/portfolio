import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Pradeep <span className="text-primary">Rajput</span>
        </h1>
        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed mx-auto max-w-2xl text-center [text-wrap:balance]">
          I'm a Full-Stack Engineer focused on building scalable backend
          systems and clean, high-performance web applications. I work across
          APIs, databases, and real-time systems to turn complex problems into
          reliable software. With experience in backend architecture, data
          pipelines, and modern frontend frameworks, I care deeply about
          performance, maintainability, and real-world impact. Currently
          engineering production systems at PREPZR.
        </p>
        <motion.a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary/20 text-primary border border-primary/50 font-medium hover:bg-primary/30 hover:border-primary/70 transition-colors duration-300"
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          <FileDown className="w-5 h-5" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
