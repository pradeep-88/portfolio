import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileDown } from "lucide-react";

const PDF_URL = "/resume.pdf";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = "Pradeep_Rajput_Resume.pdf";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative flex w-full max-w-4xl flex-col rounded-md border border-surface-3 bg-surface-1 shadow-2xl overflow-hidden"
              style={{ borderRadius: "var(--radius-md)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-surface-3 bg-surface-2 px-4 py-3">
                <span className="text-sm font-medium text-text-secondary">Resume</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-sm font-medium text-surface-0 hover:opacity-90 transition-opacity"
                    style={{ borderRadius: "var(--radius-sm)" }}
                  >
                    <FileDown className="w-4 h-4" />
                    Download PDF
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-sm p-2 text-text-tertiary hover:bg-surface-3 hover:text-text-primary transition-colors"
                    style={{ borderRadius: "var(--radius-sm)" }}
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="relative h-[70vh] min-h-[400px] bg-surface-2">
                <iframe
                  src={PDF_URL}
                  title="Resume PDF preview"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
