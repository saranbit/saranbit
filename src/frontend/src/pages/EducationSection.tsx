import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { GraduationCap, MapPin } from "lucide-react";
import { motion } from "motion/react";

const timeline = [
  {
    school: "Park Matric Hr Sec School",
    location: "Tiruppur, Chinnakarai",
    period: "Kindergarten – 6th Grade",
    type: "Primary School",
    color: "#00f5ff",
    icon: "🏫",
  },
  {
    school: "Universal Matric Hr Sec School",
    location: "Tiruppur, Sedapalayam",
    period: "7th Grade – 12th Grade",
    type: "Secondary School",
    color: "#7c3aed",
    icon: "📚",
  },
  {
    school: "Sri Shakthi Institute of Engineering and Technology",
    location: "Coimbatore, Tamil Nadu",
    period: "Currently Pursuing",
    type: "Information Technology",
    color: "#e879f9",
    icon: "🎓",
  },
];

export default function EducationSection() {
  const { isColorful } = useColorfulMode();

  return (
    <section
      id="education"
      className="relative py-24 px-4 overflow-hidden"
      data-ocid="education_section"
    >
      <div className="max-w-4xl mx-auto">
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
            — Education
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(0,245,255,0.4) 20%, rgba(124,58,237,0.4) 60%, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 items-start md:pl-20 relative"
                data-ocid={`education_item_${i + 1}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-5 top-6 w-6 h-6 rounded-full hidden md:flex items-center justify-center text-sm"
                  style={{
                    background: `${item.color}22`,
                    border: `2px solid ${item.color}`,
                    boxShadow: `0 0 12px ${item.color}66`,
                  }}
                >
                  <GraduationCap size={12} style={{ color: item.color }} />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-card-strong p-6 flex-1 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                    style={{
                      background: isColorful
                        ? "linear-gradient(to bottom, #ff0080, #7928ca)"
                        : item.color,
                    }}
                  />
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <span
                        className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded mb-3 inline-block"
                        style={{
                          background: `${isColorful ? "#ff008022" : `${item.color}22`}`,
                          color: isColorful ? "#ff0080" : item.color,
                          border: `1px solid ${isColorful ? "#ff008044" : `${item.color}44`}`,
                        }}
                      >
                        {item.type}
                      </span>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2 leading-tight">
                        {item.school}
                      </h3>
                    </div>
                    <span className="text-3xl">{item.icon}</span>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} style={{ color: item.color }} />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <GraduationCap size={12} style={{ color: item.color }} />
                      {item.period}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
