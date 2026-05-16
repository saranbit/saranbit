import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const QUOTES = [
  "Mindset is Everything.",
  "Earn over travel moreover.",
  "Explore new things.",
  "Make things good, don't expect good.",
  "Loyal in heart, brave in action.",
  "Always stay high.",
];

export default function QuotesSection() {
  const [current, setCurrent] = useState(0);
  const { isColorful } = useColorfulMode();

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((i) => (i + 1) % QUOTES.length),
      4000,
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((i) => (i - 1 + QUOTES.length) % QUOTES.length);
  const next = () => setCurrent((i) => (i + 1) % QUOTES.length);

  return (
    <section
      id="quotes"
      className="relative py-24 px-4 overflow-hidden"
      data-ocid="quotes_section"
      style={{ background: "rgba(124,58,237,0.04)" }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5 neon-grid-bg" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3 block"
            style={{ color: "#00f5ff" }}
          >
            — Life Quotes
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            Words I Live By
          </h2>
        </motion.div>

        <div
          className="glass-card-strong p-10 relative"
          style={{
            minHeight: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Big quote icon */}
          <Quote
            size={48}
            className="absolute top-6 left-6 opacity-15"
            style={{ color: isColorful ? "#ff0080" : "#00f5ff" }}
          />
          <Quote
            size={48}
            className="absolute bottom-6 right-6 opacity-15 rotate-180"
            style={{ color: isColorful ? "#7928ca" : "#7c3aed" }}
          />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className={`text-2xl sm:text-3xl font-display font-bold leading-relaxed ${
                isColorful ? "rainbow-text" : "glow-text-primary"
              }`}
              style={{ color: isColorful ? undefined : "#00f5ff" }}
            >
              "{QUOTES[current]}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prev}
            data-ocid="quotes_prev_button"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {QUOTES.map((quote, i) => (
              <button
                key={quote}
                type="button"
                onClick={() => setCurrent(i)}
                data-ocid={`quotes_dot_${i + 1}`}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background:
                    i === current
                      ? isColorful
                        ? "#ff0080"
                        : "#00f5ff"
                      : "rgba(255,255,255,0.2)",
                  boxShadow:
                    i === current
                      ? `0 0 8px ${isColorful ? "#ff0080" : "#00f5ff"}`
                      : "none",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            data-ocid="quotes_next_button"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
