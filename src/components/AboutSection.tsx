import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal, fadeUpVariants, staggerContainer } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";

function StatCard({
  stat,
  index,
}: {
  stat: { label: string; value: string; icon: string };
  index: number;
}) {
  const icons: Record<string, React.ReactNode> = {
    graduation: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a4e6ff" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    code: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00f8cb" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    trophy: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dfb7ff" strokeWidth="1.5">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
      </svg>
    ),
  };

  const accentColors: Record<string, string> = {
    graduation: "#a4e6ff",
    code: "#00f8cb",
    trophy: "#dfb7ff",
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      className="glass rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300 group"
      style={{
        boxShadow: `0 0 0 0 ${accentColors[stat.icon]}20`,
      }}
      whileHover={{
        boxShadow: `0 0 30px ${accentColors[stat.icon]}20`,
        y: -4,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
          {icons[stat.icon]}
        </div>
      </div>
      <div
        className="font-['Sora'] font-extrabold text-3xl mb-1"
        style={{ color: accentColors[stat.icon] }}
      >
        {stat.value}
      </div>
      <div className="font-['JetBrains_Mono'] text-[10px] tracking-[2px] text-white/40 uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-5 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Section label */}
          <motion.p variants={fadeUpVariants} className="section-label mb-3">
            About Me
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
          >
            Academic &{" "}
            <span className="grad-text">Competitive Excellence</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            custom={2}
            className="text-[#bbc9cf] text-base leading-relaxed max-w-xl mb-12"
          >
            A passionate full-stack engineer and AI enthusiast with a strong academic foundation
            and proven competitive programming track record. I build systems that scale, think,
            and inspire.
          </motion.p>

          {/* Stat cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
          >
            {portfolioData.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i + 3} />
            ))}
          </motion.div>

          {/* Hackathon card */}
          <motion.div
            variants={fadeUpVariants}
            custom={6}
            className="rounded-2xl overflow-hidden border border-white/10 glass"
          >
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="section-label mb-2">Top Hackathon</p>
                  <h3 className="font-['Sora'] font-bold text-xl text-white">
                    {portfolioData.hackathon.title}
                  </h3>
                </div>
                <span className="glass-cyan px-3 py-1 rounded-full text-[#a4e6ff] text-xs font-['JetBrains_Mono'] whitespace-nowrap">
                  {portfolioData.hackathon.award}
                </span>
              </div>

              <p className="text-[#bbc9cf] text-sm leading-relaxed mb-5">
                {portfolioData.hackathon.description}
              </p>

              <div className="flex gap-6 text-sm text-white/40 font-['JetBrains_Mono']">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {portfolioData.hackathon.location}
                </div>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {portfolioData.hackathon.date}
                </div>
              </div>
            </div>

            {/* Image placeholder strip */}
            <div
              className="h-32 w-full relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0e1a2e 0%, #0a1628 50%, #0e2019 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/10 font-['Sora'] font-extrabold text-4xl tracking-wider">
                  INDIA INNOVATES
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#a4e6ff]/10 via-transparent to-[#00f8cb]/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
