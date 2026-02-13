import { motion } from "framer-motion";
import { education } from "../data/education";
import profileImage from "../assets/profile1.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left: Profile image */}
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
            className="w-56 h-56 lg:w-64 lg:h-64 rounded-2xl object-cover border-2 border-primary/30 shadow-lg"
          />
        </motion.div>

        {/* Right: About intro + Education */}
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-bold mb-6">About & Education</h2>

          {/* About intro */}
          <p className="text-gray-400 leading-relaxed mb-8">
            I come from a strong engineering background with a focus on
            problem-solving, systems thinking, and disciplined execution.
          </p>
          <p className="text-gray-400 leading-relaxed mb-10">
            My journey blends core engineering fundamentals with modern software
            development, shaping how I design and build systems today.
          </p>

          {/* Education */}
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
                <p className="text-gray-400 text-sm mt-1">
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-xs mt-1">{edu.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
