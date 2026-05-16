import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { useEffect, useRef } from "react";

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const { isColorful } = useColorfulMode();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    let rafId: number;
    const animateTrail = () => {
      trailPos.current.x += (posRef.current.x - trailPos.current.x) * 0.12;
      trailPos.current.y += (posRef.current.y - trailPos.current.y) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 18}px, ${trailPos.current.y - 18}px)`;
      }
      rafId = requestAnimationFrame(animateTrail);
    };

    const onDown = () => {
      if (cursorRef.current) cursorRef.current.style.transform += " scale(0.6)";
    };
    const onUp = () => {
      if (cursorRef.current)
        cursorRef.current.style.removeProperty("transform");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    rafId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Trail ring */}
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[99999] top-0 left-0"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-9 h-9 rounded-full border-2 transition-colors duration-300 ${
            isColorful ? "border-pink-400" : "border-primary"
          }`}
          style={{
            boxShadow: isColorful
              ? "0 0 12px #f472b6, 0 0 24px rgba(244,114,182,0.3)"
              : "0 0 12px #00f5ff, 0 0 24px rgba(0,245,255,0.3)",
          }}
        />
      </div>
      {/* Dot cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[99999] top-0 left-0"
        style={{ willChange: "transform" }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            isColorful ? "bg-yellow-400" : "bg-primary"
          }`}
          style={{
            boxShadow: isColorful ? "0 0 8px #fbbf24" : "0 0 8px #00f5ff",
          }}
        />
      </div>
    </>
  );
}
