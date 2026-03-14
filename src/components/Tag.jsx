export default function Tag({ children, size = "md", variant = "default" }) {
  const sizeClass =
    size === "sm"
      ? "px-2 py-0.5 text-[11px]"
      : "px-2.5 py-1.5 text-xs";

  const variantClass =
    variant === "accent"
      ? "bg-accent-subtle text-accent border border-accent/30"
      : "bg-surface-2 text-text-secondary border border-surface-3";

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-sm)] font-medium ${sizeClass} ${variantClass}`}
    >
      {children}
    </span>
  );
}
