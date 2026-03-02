import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { href: profile.socialLinks.github, icon: Github, label: "GitHub" },
  { href: profile.socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: profile.socialLinks.email, icon: Mail, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Pradeep Rajput
        </p>
        <div className="flex items-center gap-6">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              className="text-slate-400 hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
