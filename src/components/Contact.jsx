  import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  const { socialLinks } = profile;

  const links = [
    { href: socialLinks.github, icon: Github, label: "GitHub" },
    { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socialLinks.email, icon: Mail, label: "Email" },
  ];

  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        Open to opportunities. Feel free to reach out.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {links.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel={label !== "Email" ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="w-10 h-10" />
            <span className="text-sm">{label}</span>
          </motion.a>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-6">{profile.contact.email}</p>
    </motion.section>
  );
}
