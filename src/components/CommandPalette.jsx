import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Code2,
  FolderOpen,
  Mail,
  FileText,
  Clipboard,
  Github,
  Linkedin,
  Sun,
} from "lucide-react";
import { profile } from "../data/profile";
import { useTheme } from "../context/ThemeContext";

const ICON_MAP = {
  User,
  Briefcase,
  Code2,
  FolderOpen,
  Mail,
  FileText,
  Clipboard,
  Github,
  Linkedin,
  Sun,
};

const scrollTo = (id) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CommandPalette({ open, onClose, onOpenResume }) {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const { toggleTheme } = useTheme();

  const commands = [
    { id: "about", label: "Go to About", icon: "User", action: () => { scrollTo("#about"); onClose(); } },
    { id: "exp", label: "Go to Experience", icon: "Briefcase", action: () => { scrollTo("#experience"); onClose(); } },
    { id: "skills", label: "Go to Skills", icon: "Code2", action: () => { scrollTo("#skills"); onClose(); } },
    { id: "projects", label: "Go to Projects", icon: "FolderOpen", action: () => { scrollTo("#projects"); onClose(); } },
    { id: "contact", label: "Go to Contact", icon: "Mail", action: () => { scrollTo("#contact"); onClose(); } },
    { id: "resume", label: "Open Resume", icon: "FileText", action: () => { onOpenResume(); onClose(); } },
    { id: "email", label: "Copy Email Address", icon: "Clipboard", action: () => { navigator.clipboard?.writeText(profile.contact.email); onClose(); } },
    { id: "github", label: "Visit GitHub Profile", icon: "Github", action: () => { window.open(profile.socialLinks.github); onClose(); } },
    { id: "linkedin", label: "Visit LinkedIn", icon: "Linkedin", action: () => { window.open(profile.socialLinks.linkedin); onClose(); } },
    { id: "theme", label: "Toggle Light/Dark Mode", icon: "Sun", action: () => { toggleTheme(); onClose(); } },
  ];

  const filtered = query.trim()
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  useEffect(() => {
    if (open) {
      setQuery("");
      setHighlighted(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setHighlighted((i) => (i >= filtered.length ? Math.max(0, filtered.length - 1) : i));
  }, [filtered.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlighted((i) => (i + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlighted((i) => (i - 1 + filtered.length) % filtered.length);
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[highlighted]?.action?.();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, filtered, highlighted, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden
          />
          <motion.div
            className="relative w-[90vw] max-w-[560px] rounded-lg border border-surface-3 bg-surface-1 overflow-hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command..."
              className="w-full bg-transparent border-none border-b border-surface-3 px-5 py-4 text-[15px] text-text-primary placeholder-text-tertiary focus:outline-none"
            />
            <div
              ref={listRef}
              className="max-h-[320px] overflow-y-auto"
            >
              {filtered.map((cmd, i) => {
                const Icon = ICON_MAP[cmd.icon] || User;
                const isHighlighted = i === highlighted;
                return (
                  <button
                    key={cmd.id}
                    type="button"
                    className={`w-full flex items-center gap-3 px-5 h-12 text-left transition-colors ${
                      isHighlighted ? "bg-surface-2 border-l-[3px] border-accent" : "border-l-[3px] border-transparent"
                    }`}
                    onMouseEnter={() => setHighlighted(i)}
                    onClick={() => cmd.action?.()}
                  >
                    <Icon className="h-4 w-4 text-text-tertiary shrink-0" />
                    <span className="text-[14px] text-text-primary">{cmd.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
