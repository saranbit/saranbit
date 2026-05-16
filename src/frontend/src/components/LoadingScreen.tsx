import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 4;
      });
    }, 60);
    const timer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: "#020817" }}
          data-ocid="loading_state"
        >
          {/* Background grid */}
          <div className="absolute inset-0 neon-grid-bg opacity-40" />

          {/* Animated blobs */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-20 animate-blob"
            style={{
              background: "radial-gradient(circle, #00f5ff, transparent)",
              top: "20%",
              left: "30%",
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full opacity-15 animate-blob"
            style={{
              background: "radial-gradient(circle, #7c3aed, transparent)",
              bottom: "20%",
              right: "25%",
              animationDelay: "4s",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(124,58,237,0.2))",
                border: "1px solid rgba(0,245,255,0.4)",
                boxShadow:
                  "0 0 30px rgba(0,245,255,0.3), 0 0 60px rgba(124,58,237,0.2)",
              }}
            >
              <span className="text-3xl font-display font-bold gradient-text-cyan-to-purple">
                S
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl font-display font-bold tracking-wider glow-text-primary"
              style={{ color: "#00f5ff" }}
            >
              SARAN B
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
            >
              Portfolio Loading...
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "240px" }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="h-0.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg, #00f5ff, #7c3aed, #e879f9)",
                  boxShadow: "0 0 8px #00f5ff",
                }}
              />
            </motion.div>

            {/* Loading bars */}
            <div className="flex gap-1.5 items-end h-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 rounded-full"
                  style={{ background: `hsl(${180 + i * 20}, 100%, 60%)` }}
                  animate={{ height: ["8px", "28px", "8px"] }}
                  transition={{
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
