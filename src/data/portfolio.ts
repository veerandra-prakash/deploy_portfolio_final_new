export const portfolioData = {
  name: "Veerandra Prakash A",
  title: "Elite Full Stack Engineer",
  tagline: "AI Enthusiast & Builder",
  bio: `Crafting robust architectural solutions across the MERN stack, .NET ecosystems, and cutting-edge AI development.`,
  email: "prakashveerandra@gmail.com",
  github: "https://github.com/veerandra-prakash",
  linkedin: "https://www.linkedin.com/in/veerandraprakash",

  stats: [
    { label: "CUMULATIVE GPA", value: "8.54", icon: "graduation" },
    { label: "LEETCODE PROBLEMS", value: "375+", icon: "code" },
    { label: "SKILLRACK REWARDS", value: "1150+", icon: "trophy" },
  ],

  skills: {
    core: [
      { name: "React", icon: "SiReact", color: "#61DAFB" },
      { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
      { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "Python", icon: "SiPython", color: "#3776AB" },
    ],
    backend: ["Node.js", "Express.js", "ASP.NET", "C#", "Python", "FastAPI"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    ai: ["OpenCV", "TensorFlow", "PyTorch", "LangChain", "Scikit-learn"],
    tools: ["MongoDB", "PostgreSQL", "Redis", "Docker", "Git", "AWS"],
  },

  projects: [
    {
      title: "Forever",
      description: "A full-stack e-commerce solution for clothing and fashion accessories with product listings, cart management, user authentication, and admin product management.",
      tech: "MERN Stack",
      gradient: "from-cyan-500/20 to-blue-600/20",
      accent: "#a4e6ff",
    },
    {
      title: "Sign Language Recognition",
      description: "Real-time gesture translation using OpenCV and Deep Learning to bridge communication gaps for non-verbal communication via webcam-based hand tracking.",
      tech: "Python · OpenCV",
      gradient: "from-purple-500/20 to-pink-600/20",
      accent: "#dfb7ff",
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive web-based system for patient records, doctor-patient scheduling, billing, and admin dashboard to streamline hospital operations.",
      tech: "HTML · PHP · MySQL",
      gradient: "from-emerald-500/20 to-teal-600/20",
      accent: "#00f8cb",
    },
  ],

  timeline: [
    {
      title: "India Innovates — Finalist",
      description: "Selected as a national finalist at India Innovates, held in New Delhi. Represented innovative AI-powered solutions on a national stage.",
      type: "award",
    },
    {
      title: "1st Runner-up — DSA & Java Contest (DAAFest)",
      description: "Secured 1st runner-up position in the DSA & Java programming contest at DAAFest.",
      type: "hackathon",
    },
    {
      title: "Wake and Code Contest — 2nd Runner-up",
      description: "Achieved 2nd runner-up in the Wake and Code programming contest.",
      type: "hackathon",
    },
    {
      title: "3rd Place — Createathon",
      description: "Secured 3rd place in the Createathon innovation challenge.",
      type: "achievement",
    },
    {
      title: "4th Place — Freshathon (Project Expo 3.0)",
      description: "Secured 4th place in Freshathon — Project Expo 3.0 among first-year participants.",
      type: "achievement",
    },
  ],

  certifications: [
    { title: "C Programming", issuer: "Infosys Springboard", icon: "infosys" },
    { title: "C/C++ Programming", issuer: "IIT Bombay", icon: "iit" },
    { title: "Electronics Foundation", issuer: "LinkedIn Learning", icon: "linkedin" },
    { title: "Mastering Python Programming", issuer: "Udemy", icon: "udemy" },
    { title: "Data Visualization using Power BI", issuer: "Great Learning", icon: "greatlearning" },
  ],

  hackathon: {
    title: "India Innovates",
    subtitle: "National Innovation Challenge",
    description:
      "Selected as a national finalist at India Innovates, held in New Delhi. Showcased innovative solutions alongside top student innovators from across the country.",
    location: "New Delhi, India",
    award: "National Finalist",
    team: "Team",
  },
};
