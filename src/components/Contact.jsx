import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import { useSpotlight } from "../hooks/useSpotlight";

const links = [
  { href: profile.socialLinks.github, icon: Github, label: "GitHub", external: true },
  { href: profile.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
  { href: profile.socialLinks.email, icon: Mail, label: "Email", external: false },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const reduced = prefersReducedMotion();
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  useSpotlight(cardRef1);
  useSpotlight(cardRef2);
  useSpotlight(cardRef3);
  const contactCardRefs = [cardRef1, cardRef2, cardRef3];

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = profile.contact.email;
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden py-24 md:py-28"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />

      <div className="max-w-section mx-auto px-6 md:px-12 text-center">
        <SectionHeading label="06 — contact" title="Contact" />
        <p className="text-text-secondary text-base max-w-md mx-auto mb-12">
          Let's build something together.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {links.map(({ href, icon: Icon, label, external }, i) => (
            <motion.div
              key={label}
              ref={contactCardRefs[i]}
              className="spotlight-card relative h-full"
              whileHover={reduced ? {} : { y: -2 }}
            >
              {label === "Email" ? (
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="relative w-full h-full min-h-[180px] flex flex-col items-center justify-center gap-3 rounded-md border border-surface-3 bg-surface-1 p-6 text-left transition-all duration-300 hover:border-accent hover:shadow-[0_8px_24px_var(--accent-glow)]"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <Icon className="h-7 w-7 text-accent shrink-0" />
                  <span className="text-sm font-medium text-text-primary">{label}</span>
                  <span className="text-xs text-text-tertiary text-center break-all">{profile.contact.email}</span>
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-1 rounded-sm bg-accent text-surface-0 text-xs font-medium"
                        style={{ borderRadius: "var(--radius-sm)" }}
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full min-h-[180px] flex flex-col items-center justify-center gap-3 rounded-md border border-surface-3 bg-surface-1 p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_8px_24px_var(--accent-glow)]"
                  style={{ borderRadius: "var(--radius-md)" }}
                >
                  <Icon className="h-7 w-7 text-accent shrink-0" />
                  <span className="text-sm font-medium text-text-primary">{label}</span>
                  <ExternalLink className="h-4 w-4 text-text-tertiary absolute top-3 right-3" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
