import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const socials = [
  {
    id: "github",
    icon: SiGithub,
    href: "https://github.com",
    label: "GitHub",
    color: "#ffffff",
    glow: "rgba(255,255,255,0.3)",
  },
  {
    id: "instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/im.sarannx10",
    label: "Instagram",
    color: "#e1306c",
    glow: "rgba(225,48,108,0.4)",
  },
  {
    id: "youtube",
    icon: SiYoutube,
    href: "https://youtube.com/@saranb2007",
    label: "YouTube",
    color: "#ff0000",
    glow: "rgba(255,0,0,0.4)",
  },
  {
    id: "whatsapp",
    icon: SiWhatsapp,
    href: "https://wa.me/qr/HCBXRDPTISGIC1",
    label: "WhatsApp",
    color: "#25d366",
    glow: "rgba(37,211,102,0.4)",
  },
  {
    id: "email",
    icon: Mail,
    href: "mailto:saranbit2026@gmail.com",
    label: "Email",
    color: "#00f5ff",
    glow: "rgba(0,245,255,0.4)",
  },
  {
    id: "phone",
    icon: Phone,
    href: "tel:7904206138",
    label: "Call",
    color: "#e879f9",
    glow: "rgba(232,121,249,0.4)",
  },
];

export default function FloatingSocialDock() {
  const { isColorful } = useColorfulMode();

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.6 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      data-ocid="social_dock"
    >
      {/* Vertical line */}
      <div
        className="w-px h-12 mx-auto"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,245,255,0.4))",
        }}
      />

      {socials.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            data-ocid={`social_${s.id}_link`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3 + i * 0.1 }}
            whileHover={{ scale: 1.2, x: -4 }}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth"
            style={{
              background: isColorful
                ? "linear-gradient(135deg, rgba(255,0,128,0.2), rgba(121,40,202,0.2))"
                : "rgba(255,255,255,0.05)",
              border: `1px solid ${isColorful ? "rgba(255,0,128,0.4)" : "rgba(255,255,255,0.1)"}`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.boxShadow = `0 0 15px ${s.glow}`;
              el.style.borderColor = s.color;
              el.style.color = s.color;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.boxShadow = "";
              el.style.borderColor = isColorful
                ? "rgba(255,0,128,0.4)"
                : "rgba(255,255,255,0.1)";
              el.style.color = "";
            }}
          >
            <Icon size={14} className="text-muted-foreground" />
          </motion.a>
        );
      })}

      {/* Bottom line */}
      <div
        className="w-px h-12 mx-auto"
        style={{
          background:
            "linear-gradient(to top, transparent, rgba(0,245,255,0.4))",
        }}
      />
    </motion.div>
  );
}
