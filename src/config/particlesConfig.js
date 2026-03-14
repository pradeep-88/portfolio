export const particlesOptions = {
  fullScreen: false,
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: { value: 32 },
    color: {
      value: ["#22c55e"],
    },
    size: {
      value: { min: 0.4, max: 1.2 },
    },
    opacity: {
      value: { min: 0.2, max: 0.4 },
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
