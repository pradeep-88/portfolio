import React, { useState, useEffect, Suspense } from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
const GitHubActivity = React.lazy(() => import("./components/GitHubActivity"));
import Contact from "./components/Contact";
import Now from "./components/Now";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CommandPalette from "./components/CommandPalette";
import ResumeModal from "./components/ResumeModal";
import NotFound from "./pages/NotFound";

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [pathname, setPathname] = useState(
    () => (typeof window !== "undefined" ? window.location.pathname : "/")
  );

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  if (pathname !== "/" && pathname !== "") {
    return <NotFound />;
  }

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <Hero
        resumeModalOpen={resumeModalOpen}
        onCloseResume={() => setResumeModalOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
      />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Suspense
        fallback={
          <section id="github-activity" className="py-24 md:py-28">
            <div className="max-w-section mx-auto px-6 md:px-12 flex flex-col gap-6">
              <div className="h-[200px] rounded-md bg-surface-2 animate-pulse" style={{ borderRadius: "var(--radius-md)" }} />
              <div className="h-[120px] rounded-md bg-surface-2 animate-pulse" style={{ borderRadius: "var(--radius-md)" }} />
            </div>
          </section>
        }
      >
        <GitHubActivity />
      </Suspense>
      <Contact />
      <Now />
      <Footer />
      <BackToTop />
      <CommandPalette
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => {
          setCommandPaletteOpen(false);
          setResumeModalOpen(true);
        }}
      />
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
