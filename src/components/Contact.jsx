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
      className="relative overflow-hidden py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/50 via-dark to-slate-900/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(34,197,94,0.06),transparent)]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.header
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-slate-400 md:text-lg max-w-md mx-auto">
            Open to opportunities. Let’s build something together — say hi.
          </p>
        </motion.header>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {links.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/40 px-6 py-4 text-slate-300 transition-all duration-200 hover:border-primary/40 hover:bg-slate-700/40 hover:text-white min-w-[180px] justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon className="w-5 h-5 shrink-0 text-primary" />
              <span className="font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
        <p className="text-slate-500 text-sm mt-8">{profile.contact.email}</p>
      </div>
    </motion.section>
  );
}
