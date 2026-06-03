import React from "react";
import { motion } from "framer-motion";
import { useScrollReveal, fadeUpVariants, staggerContainer } from "../hooks/useScrollReveal";
import {
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiPython,
  SiExpress, SiDotnet, SiFastapi, SiNextdotjs, SiTailwindcss,
  SiOpencv, SiTensorflow, SiDocker, SiGit, SiPostgresql, SiRedis,
} from "react-icons/si";

type SkillIcon = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const coreSkills: SkillIcon[] = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
];

const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Express.js", icon: <SiExpress />, color: "#888" },
  { name: "ASP.NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
];

const frontendSkills = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#888" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
];

function SkillBubble({ skill, index }: { skill: SkillIcon; index: number }) {
  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      className="flex flex-col items-center gap-3 group"
      whileHover={{ y: -8 }}
    >
      <div
        className="w-20 h-20 rounded-2xl glass border border-white/10 flex items-center justify-center text-3xl 
          transition-all duration-300 group-hover:border-opacity-60 group-hover:shadow-lg"
        style={{
          "--glow": skill.color + "40",
        } as React.CSSProperties}
      >
        <span style={{ color: skill.color }}>{skill.icon}</span>
      </div>
      <span className="font-['JetBrains_Mono'] text-[11px] text-white/50 tracking-wide group-hover:text-white/80 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

function TechGrid({
  title,
  skills,
  delay,
}: {
  title: string;
  skills: Array<{ name: string; icon: React.ReactNode; color: string }>;
  delay: number;
}) {
  return (
    <motion.div
      variants={fadeUpVariants}
      custom={delay}
      className="glass rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-all duration-300"
    >
      <h3 className="font-['Sora'] font-semibold text-white/80 text-base mb-5">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg 
              text-sm text-white/60 hover:text-white/90 hover:border-white/20 transition-all duration-200 cursor-default"
          >
            <span style={{ color: skill.color }}>{skill.icon}</span>
            <span className="font-['Inter'] text-xs">{skill.name}</span>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-5 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#dfb7ff] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {/* Label */}
          <motion.p variants={fadeUpVariants} className="section-label mb-3 text-center">
            Arsenal
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center tracking-tight mb-4"
          >
            Technical{" "}
            <span className="grad-text">Expertise</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            custom={2}
            className="text-center text-[#bbc9cf] text-sm mb-14 max-w-md mx-auto"
          >
            A curated stack of battle-tested technologies and emerging tools.
          </motion.p>

          {/* Core skill bubbles */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6 mb-14"
          >
            {coreSkills.map((skill, i) => (
              <SkillBubble key={skill.name} skill={skill} index={i + 3} />
            ))}
          </motion.div>

          {/* Tech grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TechGrid title="Backend & AI" skills={backendSkills} delay={8} />
            <TechGrid title="Frontend & Tools" skills={frontendSkills} delay={9} />
          </div>

          {/* Additional tools row */}
          <motion.div
            variants={fadeUpVariants}
            custom={10}
            className="mt-4 glass rounded-2xl border border-white/10 p-5"
          >
            <h3 className="font-['Sora'] font-semibold text-white/60 text-sm mb-4">
              DevOps & Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
                { name: "Git", icon: <SiGit />, color: "#F05032" },
                { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
                { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
                { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
                { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
              ].map((skill) => (
                <motion.span
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg 
                    text-sm text-white/60 hover:text-white/90 hover:border-white/20 transition-all cursor-default"
                >
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                  <span className="font-['Inter'] text-xs">{skill.name}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
