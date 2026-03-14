import SectionHeading from "../components/SectionHeading";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-surface-0 relative">
      <div
        className="absolute inset-0 flex items-center justify-center text-accent font-mono font-extrabold opacity-[0.15] pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 15vw, 10rem)",
          fontFamily: "var(--font-mono)",
        }}
      >
        404
      </div>
      <div className="relative z-10 text-center">
        <SectionHeading label="Error" title="Page not found" />
        <p className="text-text-secondary mb-8 mt-2">Looks like this route doesn&apos;t exist.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-sm font-medium bg-accent text-surface-0 hover:opacity-90 transition-opacity"
          style={{ borderRadius: "var(--radius-sm)" }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
