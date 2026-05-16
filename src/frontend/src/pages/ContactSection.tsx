import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { motion } from "motion/react";

const CONTACTS = [
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "7904206138",
    href: "tel:7904206138",
    color: "#00f5ff",
    desc: "Call me directly",
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/qr/HCBXRDPTISGIC1",
    color: "#25d366",
    desc: "Message me anytime",
  },
  {
    id: "email1",
    icon: Mail,
    label: "Email (Primary)",
    value: "saranbit2026@gmail.com",
    href: "mailto:saranbit2026@gmail.com",
    color: "#7c3aed",
    desc: "For professional inquiries",
  },
  {
    id: "email2",
    icon: Mail,
    label: "Email (Alt)",
    value: "kid444ff@gmail.com",
    href: "mailto:kid444ff@gmail.com",
    color: "#e879f9",
    desc: "Alternative contact",
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@im.sarannx10",
    href: "https://www.instagram.com/im.sarannx10",
    color: "#e1306c",
    desc: "Follow my journey",
  },
  {
    id: "youtube",
    icon: Youtube,
    label: "YouTube",
    value: "@saranb2007",
    href: "https://youtube.com/@saranb2007",
    color: "#ff0000",
    desc: "Watch my videos",
  },
];

export default function ContactSection() {
  const { isColorful } = useColorfulMode();

  return (
    <section
      id="contact"
      className="relative py-24 px-4"
      data-ocid="contact_section"
    >
      <div className="max-w-5xl mx-auto">
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
            — Contact
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-display font-black ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Open to collaborations, opportunities, and interesting
            conversations. Reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONTACTS.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                data-ocid={`contact_${contact.id}_link`}
                className="glass-card-strong p-6 flex flex-col gap-3 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${contact.color}12, transparent 60%)`,
                  }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${isColorful ? "#ff008022" : `${contact.color}22`}`,
                    border: `1px solid ${isColorful ? "#ff008044" : `${contact.color}44`}`,
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: isColorful ? "#ff0080" : contact.color }}
                  />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground font-mono mb-1">
                    {contact.label}
                  </p>
                  <p className="font-medium text-sm text-foreground/90 truncate group-hover:text-foreground transition-colors">
                    {contact.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {contact.desc}
                  </p>
                </div>

                <div
                  className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                  style={{ color: isColorful ? "#ff0080" : contact.color }}
                >
                  Connect →
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
