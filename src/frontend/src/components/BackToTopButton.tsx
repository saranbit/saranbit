import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const { isColorful } = useColorfulMode();

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollTop}
          data-ocid="back_to_top_button"
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-xl transition-smooth hover:scale-110"
          style={{
            background: isColorful
              ? "linear-gradient(135deg, #ff0080, #7928ca)"
              : "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(124,58,237,0.2))",
            border: `1px solid ${isColorful ? "#ff0080" : "rgba(0,245,255,0.4)"}`,
            boxShadow: isColorful
              ? "0 0 20px #ff0080"
              : "0 0 20px rgba(0,245,255,0.4)",
          }}
          title="Back to top"
          aria-label="Back to top"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="block"
          >
            🚀
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
