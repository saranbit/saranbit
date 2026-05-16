import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { motion } from "motion/react";

const SKILLS = {
  "Programming Languages": [
    { name: "Java", level: 75, color: "#f89820" },
    { name: "Python", level: 70, color: "#3776ab" },
    { name: "C++", level: 65, color: "#00599c" },
    { name: "C", level: 70, color: "#a8b9cc" },
    { name: "C#", color: "#239120", level: 55 },
  ],
  Development: [
    { name: "Frontend Development", level: 80, color: "#00f5ff" },
    { name: "Full Stack Development", level: 55, color: "#7c3aed" },
    { name: "Web Design", level: 72, color: "#e879f9" },
    { name: "UI/UX Basics", level: 65, color: "#fb923c" },
  ],
  Interests: [
    { name: "Athletics", level: 90, color: "#22c55e" },
    { name: "Outdoor Games", level: 85, color: "#84cc16" },
    { name: "Chess", level: 70, color: "#f59e0b" },
    { name: "Computer Technology", level: 88, color: "#06b6d4" },
    { name: "Exploring New Things", level: 95, color: "#a855f7" },
  ],
};

function SkillBar({
  name,
  level,
  color,
  delay,
}: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { isColorful } = useColorfulMode();

  return (
    <section
      id="skills"
      className="relative py-24 px-4"
      data-ocid="skills_section"
      style={{ background: "rgba(0,245,255,0.02)" }}
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
            — My Skills
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card-strong p-6 flex flex-col gap-5"
              data-ocid={`skills_category_${catIdx + 1}`}
            >
              <h3
                className="text-base font-display font-semibold mb-1 pb-2 border-b"
                style={{
                  borderColor: "rgba(0,245,255,0.15)",
                  color: "#00f5ff",
                }}
              >
                {category}
              </h3>
              {items.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={
                    isColorful
                      ? ["#ff0080", "#ffd700", "#00ff88", "#00d2ff", "#7928ca"][
                          i % 5
                        ]
                      : skill.color
                  }
                  delay={catIdx * 0.1 + i * 0.06}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
