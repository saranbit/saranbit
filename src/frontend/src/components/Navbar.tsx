import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Quotes", href: "#quotes" },
  { label: "Engagement", href: "#engagement" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isColorful, toggleColorful } = useColorfulMode();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{
        background: scrolled ? "rgba(2,8,23,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          type="button"
          onClick={() => handleNavClick("#home")}
          data-ocid="navbar_logo_link"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 group"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: isColorful
                ? "linear-gradient(135deg, #ff0080, #7928ca)"
                : "linear-gradient(135deg, rgba(0,245,255,0.2), rgba(124,58,237,0.3))",
              border: "1px solid rgba(0,245,255,0.4)",
              boxShadow: "0 0 12px rgba(0,245,255,0.3)",
            }}
          >
            <span className="text-sm font-display font-bold text-white">
              SB
            </span>
          </div>
          <span
            className={`font-display font-bold text-lg ${isColorful ? "rainbow-text" : "gradient-text-cyan-to-purple"}`}
          >
            SARAN B
          </span>
        </motion.button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          data-ocid="navbar_nav"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href)}
              data-ocid={`navbar_${link.label.toLowerCase()}_link`}
              className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
                }}
              />
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Colorful Mode toggle */}
          <motion.button
            type="button"
            onClick={toggleColorful}
            data-ocid="colorful_mode_toggle"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
            style={{
              background: isColorful
                ? "linear-gradient(135deg, #ff0080, #7928ca, #00d2ff)"
                : "rgba(0,245,255,0.1)",
              border: isColorful
                ? "1px solid rgba(255,255,255,0.3)"
                : "1px solid rgba(0,245,255,0.3)",
              color: isColorful ? "white" : "#00f5ff",
              boxShadow: isColorful
                ? "0 0 20px rgba(255,0,128,0.5)"
                : "0 0 12px rgba(0,245,255,0.2)",
            }}
          >
            <Sparkles size={12} />
            {isColorful ? "Normal Mode" : "Colorful"}
          </motion.button>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            data-ocid="navbar_mobile_toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            data-ocid="navbar_mobile_menu"
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(2,8,23,0.95)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(0,245,255,0.1)",
            }}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  data-ocid={`navbar_mobile_${link.label.toLowerCase()}_link`}
                  className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                type="button"
                onClick={toggleColorful}
                data-ocid="colorful_mode_mobile_toggle"
                className="mt-2 flex items-center gap-2 px-4 py-3 rounded-full text-xs font-medium"
                style={{
                  background: isColorful
                    ? "linear-gradient(135deg, #ff0080, #7928ca)"
                    : "rgba(0,245,255,0.1)",
                  border: "1px solid rgba(0,245,255,0.3)",
                  color: isColorful ? "white" : "#00f5ff",
                }}
              >
                <Sparkles size={12} />
                {isColorful ? "Normal Mode" : "Colorful Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
