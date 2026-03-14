export default function SectionHeading({ label, title }) {
  return (
    <header className="text-center mb-14">
      <p
        className="text-[11px] uppercase tracking-[0.12em] text-accent font-mono font-medium mb-3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </p>
      <h2
        className="text-text-primary font-bold"
        style={{
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        }}
      >
        {title}
      </h2>
    </header>
  );
}
