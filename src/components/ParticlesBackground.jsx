import { useCallback, useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "../config/particlesConfig";

const DISABLE_BELOW_WIDTH = 640;

export default function ParticlesBackground({ id = "tsparticles", className = "" }) {
  const [enableParticles, setEnableParticles] = useState(true);

  useEffect(() => {
    const check = () =>
      setEnableParticles(window.innerWidth >= DISABLE_BELOW_WIDTH);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!enableParticles) return null;

  return (
    <div
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <Particles
        id={id}
        init={init}
        options={particlesOptions}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
