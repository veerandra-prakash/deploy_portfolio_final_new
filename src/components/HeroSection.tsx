import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const techBadges = ["NODE.JS", "REACT", "ASP.NET", "OPENCV", "PYTHON"];

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseOver, setMouseOver] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const textX = useTransform(springX, [-300, 300], [-8, 8]);
  const textY = useTransform(springY, [-300, 300], [-6, 6]);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 80, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 22);
    rotateY.set(x * 22);
    scale.set(1.02);
  };

  const handleCardMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setMouseOver(false);
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1ZEms0lF9vhgSxx_igUQgRQB7fkqi4Q9s",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5 overflow-hidden grid-bg"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#a4e6ff] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#dfb7ff] opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#00f8cb] opacity-[0.03] blur-[80px] pointer-events-none" />

      <motion.div
        style={{ x: textX, y: textY }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-cyan px-5 py-2 rounded-full mb-6"
        >
          <span className="font-['JetBrains_Mono'] font-bold text-[#a4e6ff] text-xs tracking-[2px] uppercase">
            Elite Full Stack Engineer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mb-4"
        >
          <h1 className="font-['Sora'] font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-[-2px] text-[#e5e2e1]">
            VEERANDRA
          </h1>
          <h1 className="font-['Sora'] font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-[-2px] grad-text">
            PRAKASH A
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-[#bbc9cf] text-base sm:text-lg max-w-lg leading-relaxed mb-8 font-['Inter']"
        >
          Crafting robust architectural solutions across the{" "}
          <span className="text-[#a4e6ff]">MERN</span> stack,{" "}
          <span className="text-[#dfb7ff]">.NET</span> ecosystems, and cutting-edge{" "}
          <span className="text-[#00f8cb]">AI development</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            data-hover
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="magnetic-btn bg-gradient-to-r from-[#a4e6ff] to-[#00d1ff] text-[#003543] px-8 py-4 rounded-full font-bold text-base
              shadow-[0_0_15px_rgba(76,214,255,0.4)] hover:shadow-[0_0_30px_rgba(76,214,255,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={handleDownload}
            data-hover
            className="glass px-8 py-4 rounded-full text-[#e5e2e1] font-bold text-base border border-white/20
              hover:border-[#a4e6ff]/40 hover:bg-white/5 transition-all duration-300 cursor-pointer"
          >
            Download Resume
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-sm mt-16"
      >
        <motion.div
          ref={cardRef}
          style={{
            rotateX,
            rotateY,
            scale,
            transformPerspective: 1000,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleCardMouseMove}
          onMouseEnter={() => setMouseOver(true)}
          onMouseLeave={handleCardMouseLeave}
          className="floating relative cursor-pointer"
        >
          <div
            className={`absolute -inset-[2px] rounded-[34px] transition-all duration-500 ${
              mouseOver
                ? "bg-gradient-to-br from-[#a4e6ff] via-[#00f8cb] to-[#dfb7ff] opacity-60"
                : "bg-gradient-to-br from-[#a4e6ff]/30 via-[#00f8cb]/20 to-[#dfb7ff]/30 opacity-40"
            } pulse-glow`}
          />

          <div className="relative glass rounded-[32px] border border-white/15 p-1.5 overflow-hidden">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#a4e6ff]/5 via-transparent to-[#dfb7ff]/5 pointer-events-none" />

            <div className="bg-[#0e0e14] rounded-[28px] p-7 flex flex-col items-center gap-5">
              <div className="relative">
                <div
                  className="absolute -inset-[3px] rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #a4e6ff, #00f8cb, #dfb7ff, #a4e6ff)",
                    animation: "rotate-slow 4s linear infinite",
                  }}
                />
                <div className="relative border-4 border-[rgba(164,230,255,0.2)] rounded-full p-1 bg-[#0e0e14]">
                  <div className="w-44 h-44 rounded-full overflow-hidden relative">
                    <img
                      src="/profile.jpg"
                      alt="Veerandra Prakash"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(164,230,255,0.25)] to-transparent" />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <p className="font-['Sora'] font-semibold text-[#a4e6ff] text-sm text-center">
                  Technical Summary
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {techBadges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-[#201f1f] border border-white/10 px-3 py-1 rounded-md text-[#bbc9cf]
                        font-['JetBrains_Mono'] text-[11px] tracking-wide"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="bg-[#1c1b1b] border border-white/5 rounded-2xl px-4 py-5 mt-1">
                  <pre className="font-['JetBrains_Mono'] text-[#00f8cb] text-xs leading-5 whitespace-pre-wrap">
{`const developer = {
  role: "AI Enthusiast &
Builder",
  focus: "Scalable Systems",
  passion: "Bridging code
with cognition"
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-['JetBrains_Mono'] tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#a4e6ff]/50 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}