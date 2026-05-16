import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const { isColorful } = useColorfulMode();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-0.5">
      <div
        style={{ width: `${progress}%` }}
        className={`h-full transition-all duration-100 ${
          isColorful
            ? "bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 to-blue-500"
            : "bg-gradient-to-r from-primary to-accent"
        }`}
      />
      {/* Glow effect */}
      <div
        style={{ width: `${progress}%` }}
        className="h-full blur-sm opacity-70 -mt-0.5 bg-gradient-to-r from-primary to-accent absolute top-0 left-0 transition-all duration-100"
      />
    </div>
  );
}
