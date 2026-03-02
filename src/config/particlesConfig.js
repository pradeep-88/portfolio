export const particlesOptions = {
  fullScreen: false,
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: { value: 32 },
    color: {
      value: ["#f8fafc", "#94a3b8", "#a5b4fc"],
    },
    size: {
      value: { min: 0.4, max: 1.2 },
    },
    opacity: {
      value: { min: 0.12, max: 0.28 },
    },
    move: {
      enable: true,
      speed: 0.25,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
    },
    links: { enable: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
    },
  },
  retina_detect: true,
};
