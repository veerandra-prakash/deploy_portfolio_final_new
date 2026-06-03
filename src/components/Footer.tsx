import { motion } from "framer-motion";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-5 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm font-['Inter']">
          © 2026{" "}
          <span className="text-[#a4e6ff]">Veerandra Prakash A</span>
          {" "}— Built with React + Vite + Framer Motion
        </p>
        <div className="flex items-center gap-6">
          {["about", "skills", "projects", "timeline"].map((section) => (
            <button
              key={section}
              data-hover
              onClick={() => scrollTo(section)}
              className="text-white/30 text-xs font-['JetBrains_Mono'] tracking-wide hover:text-[#a4e6ff] transition-colors capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
