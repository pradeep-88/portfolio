import { useCursor } from "../hooks/useCursor";

export default function CustomCursor() {
  const { isHovering } = useCursor();

  return (
    <>
      <div
        className="cursor-dot"
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent, #22c55e)",
          transform: "translate(var(--cx, 0), var(--cy, 0)) translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0s, scale 0.15s ease",
          scale: isHovering ? 0 : 1,
        }}
      />
      <div
        className="cursor-ring"
        aria-hidden
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid rgba(34,197,94,0.5)",
          transform: "translate(var(--cx, 0), var(--cy, 0)) translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.12s ease-out, width 0.15s ease, height 0.15s ease, background 0.15s ease",
          ...(isHovering
            ? {
                width: 48,
                height: 48,
                background: "rgba(34,197,94,0.08)",
              }
            : {}),
        }}
      />
      <style>{`
        @media (hover: none) {
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
