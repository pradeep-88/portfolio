import { motion } from "framer-motion";
import { education } from "../data/education";
import profileImage from "../assets/profile1.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const sectionBg = (
  <>
    <div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/50 via-dark to-slate-900/50"
      aria-hidden
    />
    <div
      className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(34,197,94,0.06),transparent)]"
      aria-hidden
    />
  </>
);

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative overflow-hidden py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      {sectionBg}
      <div className="mx-auto max-w-5xl px-6">
        <motion.header
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            About & Education
          </h2>
          <p className="mt-3 text-slate-400 md:text-lg">
            Background, approach, and academic foundation.
          </p>
        </motion.header>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            className="flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profileImage}
              alt="Pradeep Rajput"
              className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl object-cover border border-slate-700/60 shadow-xl ring-2 ring-primary/20"
            />
          </motion.div>

          <div className="flex-1 min-w-0">
            <p className="text-slate-400 leading-relaxed mb-8">
              I come from a strong engineering background with a focus on
              problem-solving, systems thinking, and disciplined execution.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              My journey blends core engineering fundamentals with modern
              software development, shaping how I design and build systems
              today.
            </p>

            <h3 className="text-xl font-semibold mb-6 text-primary">
              Education
            </h3>
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="border-l-2 border-primary/50 pl-6 py-1"
                >
                  <h4 className="font-semibold text-white">{edu.degree}</h4>
                  <p className="text-primary text-sm font-medium mt-0.5">
                    {edu.specialization}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
