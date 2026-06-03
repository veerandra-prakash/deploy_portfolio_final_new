import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Timeline"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (section: string) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(section);
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-2xl mx-4 px-6 py-3 border border-white/10"
            : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a4e6ff] to-[#00d1ff] flex items-center justify-center">
            <span className="font-bold text-[#003543] text-sm font-['JetBrains_Mono']">VP</span>
          </div>
          <span className="font-['Sora'] font-semibold text-sm text-white/90 hidden sm:block">
            Veerandra Prakash
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              data-hover
              onClick={() => handleNav(link)}
              className={`relative px-4 py-2 text-sm font-['JetBrains_Mono'] tracking-wide transition-colors duration-300 rounded-lg
                ${active === link ? "text-[#a4e6ff]" : "text-white/50 hover:text-white/80"}`}
            >
              {active === link && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{link}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          data-hover
          onClick={() => handleNav("contact")}
          className="glass-cyan px-5 py-2 rounded-full text-[#a4e6ff] text-sm font-['JetBrains_Mono'] tracking-wide 
            hover:bg-[rgba(164,230,255,0.12)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(164,230,255,0.3)]"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
