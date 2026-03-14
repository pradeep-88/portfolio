import { motion } from "framer-motion";
import { Hammer, BookOpen, Book, MapPin } from "lucide-react";
import { now } from "../data/now";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  { key: "building", label: "Building", icon: Hammer, value: now.building },
  { key: "learning", label: "Learning", icon: BookOpen, value: now.learning },
  { key: "reading", label: "Reading", icon: Book, value: now.reading },
  { key: "location", label: "Based in", icon: MapPin, value: now.location },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Now() {
  const reduced = prefersReducedMotion();

  return (
    <motion.section
      className="relative overflow-hidden py-16 md:py-20"
      initial={reduced ? {} : { opacity: 0 }}
      whileInView={reduced ? {} : { opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 bg-surface-0" aria-hidden />
      <div className="max-w-section mx-auto px-6 md:px-12">
        {now.available && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent bg-surface-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-[13px] text-text-secondary">Open to work</span>
            </div>
          </div>
        )}
        <SectionHeading label="07 — now" title="Currently" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {ITEMS.map(({ key, label, icon: Icon, value }) => (
            <div
              key={key}
              className="rounded-md border border-surface-3 bg-surface-1 p-4"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              <div className="flex items-start gap-3">
                <Icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-text-tertiary">{label}</p>
                  <p className="text-[14px] text-text-primary mt-0.5">{value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
