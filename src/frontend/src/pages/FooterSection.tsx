import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub, SiInstagram, SiWhatsapp, SiYoutube } from "react-icons/si";

const socials = [
  { icon: SiGithub, href: "https://github.com", label: "GitHub" },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/im.sarannx10",
    label: "Instagram",
  },
  {
    icon: SiYoutube,
    href: "https://youtube.com/@saranb2007",
    label: "YouTube",
  },
  {
    icon: SiWhatsapp,
    href: "https://wa.me/qr/HCBXRDPTISGIC1",
    label: "WhatsApp",
  },
];

export default function FooterSection() {
  const { isColorful } = useColorfulMode();
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      className="relative py-12 px-4 mt-0"
      data-ocid="footer_section"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(0,245,255,0.1)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: isColorful
                ? "linear-gradient(135deg, #ff0080, #7928ca)"
                : "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(124,58,237,0.2))",
              border: "1px solid rgba(0,245,255,0.3)",
              boxShadow: "0 0 20px rgba(0,245,255,0.2)",
            }}
          >
            <span
              className={`text-lg font-display font-black ${isColorful ? "text-white" : "gradient-text-cyan-to-purple"}`}
            >
              SB
            </span>
          </div>
          <span
            className={`font-display font-bold text-xl ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            SARAN B
          </span>
        </motion.div>

        {/* Social icons */}
        <div className="flex gap-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                data-ocid={`footer_social_${i + 1}_link`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Icon size={15} className="text-muted-foreground" />
              </motion.a>
            );
          })}
        </div>

        {/* Credits */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-body">
            Designed and Developed by{" "}
            <span className="font-semibold" style={{ color: "#00f5ff" }}>
              SARAN B
            </span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 flex items-center justify-center gap-1">
            &copy; {year}. Built with{" "}
            <Heart size={10} className="text-red-400 inline" /> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
