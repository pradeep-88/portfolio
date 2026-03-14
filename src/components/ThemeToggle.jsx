import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-3 bg-surface-2 hover:bg-surface-3 transition-colors"
      style={{ width: 40, height: 40, borderRadius: "var(--radius-sm)" }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-[18px] w-[18px] text-text-secondary" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-[18px] w-[18px] text-text-secondary" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
