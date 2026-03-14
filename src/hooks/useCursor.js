import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

export function useCursor() {
  const posRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePos = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      document.documentElement.style.setProperty("--cx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cy", `${e.clientY}px`);
    };

    const checkHover = (e) => {
      const target = e.target;
      if (!target || !target.closest) return;
      const hit = target.closest(HOVER_SELECTOR);
      setIsHovering(!!hit);
    };

    window.addEventListener("mousemove", updatePos, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    return () => {
      window.removeEventListener("mousemove", updatePos);
      window.removeEventListener("mousemove", checkHover);
    };
  }, []);

  return { x: posRef.current.x, y: posRef.current.y, isHovering };
}
