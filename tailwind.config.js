export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      colors: {
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        "accent-glow": "var(--accent-glow)",
        "accent-subtle": "var(--accent-subtle)",
        "surface-0": "var(--surface-0)",
        "surface-1": "var(--surface-1)",
        "surface-2": "var(--surface-2)",
        "surface-3": "var(--surface-3)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        primary: "var(--accent)",
        dark: "var(--surface-0)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        glow: "0 0 20px var(--accent-glow)",
      },
      transitionDuration: {
        DEFAULT: "var(--transition)",
      },
      maxWidth: {
        "section": "1100px",
      },
    },
  },
  plugins: [],
};
