import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { BookOpen, Eye, RefreshCw, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const MOTIVATIONAL = [
  "Keep building. Every line of code is progress.",
  "Your potential is limitless. Trust the process.",
  "Great developers are made, not born. Code daily.",
  "Debug your life the way you debug your code.",
  "The best time to start was yesterday. The next best is now.",
  "Small consistent actions create massive results.",
  "You are one project away from a breakthrough.",
];

const CURRENTLY_LEARNING = [
  { topic: "React Advanced Patterns", emoji: "⚛️", progress: 65 },
  { topic: "Node.js & REST APIs", emoji: "🖥️", progress: 40 },
  { topic: "Data Structures & Algorithms", emoji: "🧮", progress: 55 },
  { topic: "UI/UX Design Principles", emoji: "🎨", progress: 70 },
];

const TECH_STACK = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "TypeScript", icon: "📘", color: "#3178c6" },
  { name: "Java", icon: "☕", color: "#f89820" },
  { name: "Python", icon: "🐍", color: "#3776ab" },
  { name: "Tailwind", icon: "🌪️", color: "#06b6d4" },
  { name: "Git", icon: "🗂️", color: "#f05032" },
  { name: "VS Code", icon: "💻", color: "#007acc" },
  { name: "Figma", icon: "🖌️", color: "#f24e1e" },
];

export default function EngagementSection() {
  const [visitorCount, setVisitorCount] = useState(1247);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const { isColorful } = useColorfulMode();

  useEffect(() => {
    const n = Math.floor(Math.random() * 500);
    setVisitorCount(1247 + n);
  }, []);

  const accentColor = isColorful ? "#ff0080" : "#00f5ff";

  return (
    <section
      id="engagement"
      className="relative py-24 px-4"
      data-ocid="engagement_section"
      style={{ background: "rgba(124,58,237,0.03)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3 block"
            style={{ color: "#00f5ff" }}
          >
            — More About Me
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            Explore More
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Visitor Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="glass-card-strong p-6 flex flex-col items-center justify-center text-center gap-3"
            data-ocid="visitor_counter"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: `${accentColor}22`,
                border: `1px solid ${accentColor}44`,
              }}
            >
              <Eye size={20} style={{ color: accentColor }} />
            </div>
            <div
              className="text-4xl font-display font-black"
              style={{ color: accentColor }}
            >
              {visitorCount.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Portfolio Visitors
            </p>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card-strong p-6 flex flex-col gap-4"
            data-ocid="currently_learning"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={16} style={{ color: "#7c3aed" }} />
              <h3
                className="font-display font-semibold text-sm"
                style={{ color: "#7c3aed" }}
              >
                Currently Learning
              </h3>
            </div>
            {CURRENTLY_LEARNING.map((item) => (
              <div key={item.topic}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-foreground/80">
                    {item.emoji} {item.topic}
                  </span>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "#7c3aed" }}
                  >
                    {item.progress}%
                  </span>
                </div>
                <div
                  className="h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                      background: isColorful
                        ? "linear-gradient(90deg, #ff0080, #7928ca)"
                        : "linear-gradient(90deg, #7c3aed88, #7c3aed)",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Random Quote Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card-strong p-6 flex flex-col gap-4"
            data-ocid="random_quote_card"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap size={16} style={{ color: "#e879f9" }} />
                <h3
                  className="font-display font-semibold text-sm"
                  style={{ color: "#e879f9" }}
                >
                  Motivation
                </h3>
              </div>
              <motion.button
                type="button"
                whileTap={{ scale: 0.9, rotate: 180 }}
                onClick={() =>
                  setQuoteIdx((i) => (i + 1) % MOTIVATIONAL.length)
                }
                data-ocid="random_quote_button"
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="New quote"
              >
                <RefreshCw size={14} className="text-muted-foreground" />
              </motion.button>
            </div>
            <motion.p
              key={quoteIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-foreground/80 leading-relaxed flex-1 flex items-center"
            >
              "{MOTIVATIONAL[quoteIdx]}"
            </motion.p>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card-strong p-8"
          data-ocid="tech_stack"
        >
          <h3 className="font-display font-bold text-center mb-6 gradient-text-cyan-to-purple">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.08 }}
                className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl transition-smooth cursor-default"
                style={{
                  background: `${tech.color}11`,
                  border: `1px solid ${tech.color}33`,
                }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span
                  className="text-xs font-mono"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
