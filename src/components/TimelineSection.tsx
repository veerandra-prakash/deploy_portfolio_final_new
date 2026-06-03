import { motion } from "framer-motion";
import { useScrollReveal, fadeUpVariants, staggerContainer } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";
import { FiAward, FiCode, FiStar } from "react-icons/fi";

const timelineIcons = {
  award: <FiAward size={14} />,
  hackathon: <FiCode size={14} />,
  achievement: <FiStar size={14} />,
};

const timelineColors = {
  award: "#a4e6ff",
  hackathon: "#dfb7ff",
  achievement: "#00f8cb",
};

// Simple letter-based icons for each issuer
const CertIcon = ({ icon }: { icon: string }) => {
  const map: Record<string, { letter: string; color: string; bg: string }> = {
    infosys:      { letter: "I",  color: "#00b2ef", bg: "#00b2ef15" },
    iit:          { letter: "II", color: "#f59e0b", bg: "#f59e0b15" },
    linkedin:     { letter: "in", color: "#0a66c2", bg: "#0a66c215" },
    udemy:        { letter: "U",  color: "#a435f0", bg: "#a435f015" },
    greatlearning:{ letter: "GL", color: "#00b386", bg: "#00b38615" },
  };
  const item = map[icon] ?? { letter: icon[0].toUpperCase(), color: "#a4e6ff", bg: "#a4e6ff15" };
  return (
    <div
      className="w-10 h-10 rounded-lg border flex items-center justify-center font-bold text-xs font-['JetBrains_Mono']"
      style={{ background: item.bg, borderColor: `${item.color}40`, color: item.color }}
    >
      {item.letter}
    </div>
  );
};

export default function TimelineSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="timeline" className="py-24 px-5 relative">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#a4e6ff] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Achievements Timeline */}
            <div>
              <motion.p variants={fadeUpVariants} className="section-label mb-3">
                Achievements
              </motion.p>
              <motion.h2
                variants={fadeUpVariants}
                custom={1}
                className="font-['Sora'] font-extrabold text-2xl sm:text-3xl tracking-tight mb-8"
              >
                Awards &amp; <span className="grad-text">Wins</span>
              </motion.h2>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#a4e6ff]/40 via-[#00f8cb]/20 to-transparent" />

                <div className="space-y-8">
                  {portfolioData.timeline.map((item, i) => (
                    <motion.div
                      key={item.title}
                      variants={fadeUpVariants}
                      custom={i + 2}
                      className="relative pl-8"
                    >
                      {/* Dot */}
                      <div
                        className="absolute left-[-6px] top-1 w-3 h-3 rounded-full border-2 shadow-lg"
                        style={{
                          borderColor: timelineColors[item.type as keyof typeof timelineColors],
                          background: "#080810",
                          boxShadow: `0 0 10px ${timelineColors[item.type as keyof typeof timelineColors]}60`,
                        }}
                      />

                      <div className="flex items-start gap-2 mb-1.5">
                        <span style={{ color: timelineColors[item.type as keyof typeof timelineColors] }}>
                          {timelineIcons[item.type as keyof typeof timelineIcons]}
                        </span>
                        <h4 className="font-['Sora'] font-bold text-base text-white leading-tight">{item.title}</h4>
                      </div>
                      <p className="text-[#bbc9cf] text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.p variants={fadeUpVariants} className="section-label mb-3">
                Validation
              </motion.p>
              <motion.h2
                variants={fadeUpVariants}
                custom={1}
                className="font-['Sora'] font-extrabold text-2xl sm:text-3xl tracking-tight mb-8"
              >
                <span className="grad-text">Certifications</span>
              </motion.h2>

              <motion.div variants={staggerContainer} className="space-y-3">
                {portfolioData.certifications.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    variants={fadeUpVariants}
                    custom={i + 2}
                    className="glass rounded-xl border border-white/10 p-5 flex items-center
                      hover:border-white/20 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <CertIcon icon={cert.icon} />
                      <div>
                        <h5 className="font-['Sora'] font-semibold text-sm text-white">{cert.title}</h5>
                        <p className="text-white/40 text-xs font-['JetBrains_Mono'] mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
