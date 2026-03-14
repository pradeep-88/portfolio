import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LEVEL_LABELS = {
  1: "Beginner",
  2: "Familiar",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

export default function SkillTag({ name, level = 3, icon }) {
  const [show, setShow] = useState(false);
  const label = LEVEL_LABELS[level] ?? "Proficient";

  return (
    <span
      className="relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-surface-3 bg-surface-2 text-text-secondary text-[13px] font-medium transition-colors duration-200 hover:border-accent hover:text-text-primary hover:bg-accent-subtle"
      style={{ borderRadius: "var(--radius-sm)" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {icon}
      {name}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 rounded-lg border border-surface-3 bg-surface-2 whitespace-nowrap z-50"
            style={{
              fontSize: "11px",
              borderRadius: "8px",
              padding: "6px 10px",
            }}
          >
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: i <= level ? "var(--accent)" : "var(--surface-3)",
                  }}
                />
              ))}
            </div>
            <div className="text-text-secondary text-[11px]">{label}</div>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-surface-2"
              style={{ filter: "drop-shadow(0 1px 0 var(--surface-3))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
