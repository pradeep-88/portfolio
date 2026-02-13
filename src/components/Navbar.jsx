export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-primary text-lg">Pradeep</span>
        <div className="flex flex-wrap justify-end gap-4 sm:gap-6 text-sm">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#github-activity" className="hover:text-primary transition-colors">GitHub</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
