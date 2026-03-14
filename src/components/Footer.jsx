import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "github-activity", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

const links = [
  { href: profile.socialLinks.github, icon: Github, label: "GitHub" },
  { href: profile.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.socialLinks.email, icon: Mail, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-3 py-10">
      <div className="max-w-section mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2">
            <span
              className="w-7 h-7 flex items-center justify-center text-surface-0 text-sm font-semibold rounded-sm bg-accent"
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              PR
            </span>
            <span className="text-text-tertiary text-[13px]">Full-Stack Engineer</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {SECTIONS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-text-tertiary text-[13px] hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex justify-center md:justify-end items-center gap-6">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-text-tertiary hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="text-center text-text-tertiary mt-10 text-[12px]">
          © {year} Pradeep Rajput
        </p>
      </div>
    </footer>
  );
}
