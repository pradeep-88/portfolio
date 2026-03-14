import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github-activity", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenCommandPalette }) {
  const [activeId, setActiveId] = useState("");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (scrollY / max) * 100 : 0;
      setScrollPercent(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeEl = linkRefs.current[activeId];
    const container = navRef.current;
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setPillStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  }, [activeId]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-surface-3 transition-shadow duration-200 relative"
      style={{
        background: "rgba(15, 23, 42, 0.8)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        boxShadow: "0 1px 0 var(--surface-3)",
      }}
    >
      <div
        ref={navRef}
        className="max-w-section mx-auto flex justify-between items-center px-6 md:px-12 py-4 relative"
      >
        <a
          href="#"
          className="flex items-center gap-2.5 focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-surface-0 rounded-sm"
          style={{ borderRadius: "var(--radius-sm)" }}
          onClick={closeMobile}
        >
          <span
            className="w-7 h-7 flex items-center justify-center text-surface-0 text-sm font-semibold rounded-sm"
            style={{
              background: "var(--accent)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            PR
          </span>
          <span className="text-text-primary font-semibold">Pradeep</span>
        </a>

        <div className="hidden md:flex items-center gap-1 relative">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              ref={(el) => (linkRefs.current[id] = el)}
              href={`#${id}`}
              className={`px-3 py-2 rounded-sm text-[13px] font-medium tracking-[0.03em] transition-colors ${
                activeId === id
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {label}
            </a>
          ))}
          {activeId && (
            <span
              className="absolute bottom-0 h-0.5 bg-accent rounded-full transition-all duration-300 ease-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
            />
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="flex items-center px-1.5 py-0.5 rounded-sm border border-surface-3 bg-surface-2 text-text-tertiary text-[11px] font-mono"
              style={{ borderRadius: 6 }}
            >
              ⌘K
            </button>
          )}
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-sm"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-150"
        style={{ width: `${scrollPercent}%` }}
        aria-hidden
      />

      <div
        className={`md:hidden fixed top-[57px] right-0 bottom-0 w-[280px] border-l border-surface-3 transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "rgba(17, 24, 39, 0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="flex flex-col gap-1 p-4">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-4 py-3 rounded-sm text-[13px] font-medium tracking-[0.03em] transition-colors ${
                activeId === id
                  ? "text-accent bg-accent-subtle"
                  : "text-text-secondary hover:bg-surface-2 hover:text-text-primary"
              }`}
              onClick={closeMobile}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
