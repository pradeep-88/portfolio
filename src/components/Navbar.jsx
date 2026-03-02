import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github-activity", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#" className="font-bold text-primary text-lg focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-dark rounded" onClick={closeMobile}>
          Pradeep
        </a>

        <div className="hidden md:flex items-center gap-1">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeId === id ? "text-primary" : "text-slate-300 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-700/60 bg-dark/95 backdrop-blur-md px-6 py-4">
          <div className="flex flex-col gap-1">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeId === id ? "text-primary bg-primary/10" : "text-slate-300 hover:bg-slate-800/80"
                }`}
                onClick={closeMobile}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
