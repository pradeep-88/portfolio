import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const SHOW_AFTER = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          className="fixed z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-surface-0 shadow-lg transition-opacity hover:opacity-90"
          style={{ bottom: "2rem", right: "2rem" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
