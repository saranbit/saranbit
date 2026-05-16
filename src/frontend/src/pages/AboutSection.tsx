import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { Code2, Cpu, Globe, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: Code2, label: "Software Development", color: "#00f5ff" },
  { icon: Globe, label: "Frontend Development", color: "#7c3aed" },
  { icon: Cpu, label: "Full Stack Engineering", color: "#e879f9" },
  { icon: Lightbulb, label: "Problem Solving", color: "#39ff14" },
];

export default function AboutSection() {
  const { isColorful } = useColorfulMode();

  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
      data-ocid="about_section"
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(255,255,255,0.01)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3 block"
            style={{ color: "#00f5ff" }}
          >
            — About Me
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card-strong p-8 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ background: "#00f5ff" }}
              />
              <p className="text-lg text-foreground/90 leading-relaxed font-body mb-6">
                My name is{" "}
                <span className="font-bold" style={{ color: "#00f5ff" }}>
                  SARAN B
                </span>
                . I am an IT student passionate about software development,
                modern technologies, and building creative digital experiences.
                I enjoy exploring programming, frontend development, full stack
                development, and problem solving.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I believe in continuous learning, discipline, and building
                useful things that create value. Every line of code is an
                opportunity to make something better than what existed before.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Student", "Developer", "Creator", "Learner"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                    style={{
                      background: isColorful
                        ? "linear-gradient(135deg, #ff0080, #7928ca)"
                        : "rgba(0,245,255,0.1)",
                      border: "1px solid rgba(0,245,255,0.25)",
                      color: isColorful ? "white" : "#00f5ff",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="glass-card p-6 flex flex-col gap-3 cursor-default"
                  data-ocid={`about_highlight_${i + 1}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${item.color}22`,
                      border: `1px solid ${item.color}44`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <p className="text-sm font-medium text-foreground/80 leading-snug">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
