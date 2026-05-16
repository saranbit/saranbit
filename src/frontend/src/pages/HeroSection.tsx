import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ROLES = [
  "IT Student",
  "Software Developer",
  "Front-End Developer",
  "Future Full Stack Engineer",
];

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(
        () => setDisplayed(role.slice(0, displayed.length + 1)),
        70,
      );
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="gradient-text-cyan-to-purple font-semibold">
      {displayed}
      <span className="animate-typing-cursor" style={{ color: "#00f5ff" }}>
        |
      </span>
    </span>
  );
}

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-1 h-1 rounded-full animate-particle pointer-events-none"
      style={style}
    />
  );
}

export default function HeroSection() {
  const { isColorful } = useColorfulMode();
  const particles = Array.from({ length: 20 }, (_, i) => i);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero_section"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "#020817" }} />
      <div className="absolute inset-0 neon-grid-bg opacity-30" />

      {/* Hero image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/assets/generated/hero-bg.dim_1920x600.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 animate-blob pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00f5ff 0%, transparent 70%)",
          top: "-10%",
          left: "-5%",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 animate-blob pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          bottom: "-10%",
          right: "-5%",
          animationDelay: "4s",
        }}
      />

      {/* Particles */}
      {particles.map((i) => (
        <Particle
          key={i}
          style={{
            left: `${(i * 5.2) % 100}%`,
            top: `${(i * 7.3) % 100}%`,
            background:
              i % 3 === 0 ? "#00f5ff" : i % 3 === 1 ? "#7c3aed" : "#e879f9",
            opacity: 0.4 + (i % 5) * 0.1,
            animationDuration: `${8 + (i % 6) * 2}s`,
            animationDelay: `${(i % 5) * 1.5}s`,
            boxShadow: `0 0 6px ${i % 3 === 0 ? "#00f5ff" : "#7c3aed"}`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium mb-8"
          style={{
            background: "rgba(0,245,255,0.1)",
            border: "1px solid rgba(0,245,255,0.3)",
            color: "#00f5ff",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-glow-pulse" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-5xl sm:text-7xl lg:text-8xl font-display font-black mb-4 leading-none tracking-tight ${
            isColorful ? "rainbow-text" : "glow-text-primary"
          }`}
          style={{ color: isColorful ? undefined : "#00f5ff" }}
        >
          Hi, I'm SARAN B
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl font-body text-muted-foreground mb-6 min-h-[2rem]"
        >
          <TypingText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building creative digital experiences at the
          intersection of technology and innovation.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0,245,255,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contact")}
            data-ocid="hero_contact_button"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-all"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(124,58,237,0.3))",
              border: "1px solid rgba(0,245,255,0.5)",
              color: "#00f5ff",
              boxShadow: "0 0 20px rgba(0,245,255,0.2)",
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-mono tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #00f5ff, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
