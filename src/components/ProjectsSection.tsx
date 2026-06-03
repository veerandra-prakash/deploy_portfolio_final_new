import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useScrollReveal, fadeUpVariants, staggerContainer } from "../hooks/useScrollReveal";
import { portfolioData } from "../data/portfolio";


function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolioData.projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * 15);
    rotateY.set(x * 15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const gradients = [
    "linear-gradient(135deg, #0e1a2e, #0a2040)",
    "linear-gradient(135deg, #1a0e2e, #2a0a40)",
    "linear-gradient(135deg, #0e2020, #0a3028)",
  ];

  const accentColors = ["#a4e6ff", "#dfb7ff", "#00f8cb"];

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="relative group cursor-pointer"
    >
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${accentColors[index]}40, transparent)`,
        }}
      />

      <div className="relative glass rounded-2xl border border-white/10 overflow-hidden">
        {/* Image area */}
        <div
          className="relative h-48 overflow-hidden"
          style={{ background: gradients[index] }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, ${accentColors[index]}, transparent 60%)`,
            }}
          />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          {/* Project number */}
          <div className="absolute top-4 right-4">
            <span
              className="font-['Sora'] font-extrabold text-5xl opacity-10"
              style={{ color: accentColors[index] }}
            >
              0{index + 1}
            </span>
          </div>
          {/* Tech badge */}
          <div className="absolute bottom-3 left-3">
            <span
              className="px-3 py-1 rounded-md text-xs font-['JetBrains_Mono'] border"
              style={{
                background: `${accentColors[index]}15`,
                borderColor: `${accentColors[index]}40`,
                color: accentColors[index],
              }}
            >
              {project.tech}
            </span>
          </div>


        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-['Sora'] font-bold text-lg text-white mb-2">{project.title}</h3>
          <p className="text-[#bbc9cf] text-sm leading-relaxed mb-4">{project.description}</p>

          <span
            className="flex items-center gap-2 text-xs font-['JetBrains_Mono']"
            style={{ color: accentColors[index] }}
          >
            {project.tech}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-5 relative">
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#00f8cb] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.p variants={fadeUpVariants} className="section-label mb-3">
            Portfolio
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
          >
            Strategic{" "}
            <span className="grad-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            custom={2}
            className="text-[#bbc9cf] text-sm mb-12 max-w-lg"
          >
            Production-grade applications built with performance, scalability, and user experience
            at the core.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {portfolioData.projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
