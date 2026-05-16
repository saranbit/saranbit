import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const PROJECTS = [
  {
    title: "Portfolio Website",
    desc: "A futuristic personal portfolio built with React, Tailwind CSS, and Framer Motion featuring glassmorphism and neon aesthetics.",
    tags: ["React", "Tailwind", "Framer Motion"],
    color: "#00f5ff",
    icon: "🌐",
  },
  {
    title: "Java Applications",
    desc: "Collection of Java programs covering OOP concepts, data structures, algorithms, and problem-solving challenges.",
    tags: ["Java", "OOP", "DSA"],
    color: "#f89820",
    icon: "☕",
  },
  {
    title: "Python Projects",
    desc: "Python scripts and mini-projects including automation tools, web scrapers, and beginner ML experiments.",
    tags: ["Python", "Automation", "ML"],
    color: "#3776ab",
    icon: "🐍",
  },
  {
    title: "Frontend UI Designs",
    desc: "Modern responsive UI components and landing page designs with advanced CSS animations and interactions.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#e879f9",
    icon: "🎨",
  },
  {
    title: "Full Stack Future Project",
    desc: "Upcoming full-stack application combining React frontend with robust backend APIs. Currently in planning.",
    tags: ["Coming Soon", "Full Stack", "API"],
    color: "#7c3aed",
    icon: "🚀",
  },
];

export default function ProjectsSection() {
  const { isColorful } = useColorfulMode();

  return (
    <section
      id="projects"
      className="relative py-24 px-4"
      data-ocid="projects_section"
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
            — Projects
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            What I've Built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-strong p-6 flex flex-col gap-4 group cursor-default relative overflow-hidden"
              data-ocid={`project_card_${i + 1}`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${proj.color}15, transparent 60%)`,
                }}
              />

              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: `${isColorful ? "#ff008022" : `${proj.color}22`}`,
                    border: `1px solid ${isColorful ? "#ff008044" : `${proj.color}44`}`,
                  }}
                >
                  {proj.icon}
                </div>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: proj.color,
                    boxShadow: `0 0 8px ${proj.color}`,
                  }}
                />
              </div>

              <div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: `${isColorful ? "#ff008015" : `${proj.color}15`}`,
                      color: isColorful ? "#ff0080" : proj.color,
                      border: `1px solid ${isColorful ? "#ff008030" : `${proj.color}30`}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto pt-2">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  data-ocid={`project_demo_${i + 1}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-smooth"
                  title="Coming soon"
                  onClick={() => {}}
                  style={{
                    background: isColorful
                      ? "linear-gradient(135deg, #ff0080, #7928ca)"
                      : `${proj.color}22`,
                    border: `1px solid ${isColorful ? "#ff008040" : `${proj.color}40`}`,
                    color: isColorful ? "white" : proj.color,
                  }}
                >
                  <ExternalLink size={12} /> Live Demo
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  data-ocid={`project_github_${i + 1}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-smooth"
                  title="GitHub link coming soon"
                  onClick={() => {}}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <Github size={12} /> GitHub
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
