import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollReveal, fadeUpVariants, staggerContainer } from "../hooks/useScrollReveal";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_xmekurx";
const EMAILJS_TEMPLATE_ID = "template_7rndxd8";
const EMAILJS_PUBLIC_KEY  = "S92o5nOTbaqLTazNA";

const contactLinks = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "prakashveerandra@gmail.com",
    href: "mailto:prakashveerandra@gmail.com",
    color: "#a4e6ff",
  },
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    value: "github.com/veerandra-prakash",
    href: "https://github.com/veerandra-prakash",
    color: "#dfb7ff",
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/veerandraprakash",
    href: "https://linkedin.com/in/veerandraprakash",
    color: "#00f8cb",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const { ref, controls } = useScrollReveal();
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 " +
    "font-['Inter'] focus:outline-none focus:border-[#a4e6ff]/50 transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-5 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#a4e6ff] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={controls}>

          <motion.p variants={fadeUpVariants} className="section-label mb-3">Contact</motion.p>
          <motion.h2
            variants={fadeUpVariants}
            custom={1}
            className="font-['Sora'] font-extrabold text-3xl sm:text-4xl tracking-tight mb-4"
          >
            Let's build something <span className="grad-text">exceptional.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} custom={2} className="text-[#bbc9cf] text-sm mb-10 max-w-lg">
            Have a project in mind or just want to say hello? Fill in the form and I'll get back to you.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Contact Form */}
            <motion.div variants={fadeUpVariants} custom={3} className="lg:col-span-3">
              <div className="glass rounded-2xl border border-white/10 p-6 sm:p-8">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 font-['JetBrains_Mono'] mb-1.5">Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 font-['JetBrains_Mono'] mb-1.5">Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 font-['JetBrains_Mono'] mb-1.5">Subject</label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" className={inputClass} />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 font-['JetBrains_Mono'] mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..." required rows={5} className={`${inputClass} resize-none`} />
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-[#00f8cb] text-sm">
                      <FiCheckCircle size={16} />
                      <span>Message sent! I'll get back to you soon.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <FiAlertCircle size={16} />
                      <span>Something went wrong. Try emailing me directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    data-hover
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#a4e6ff] to-[#00d1ff]
                      text-[#003543] font-bold text-sm py-3.5 rounded-xl transition-all duration-300
                      hover:shadow-[0_0_20px_rgba(76,214,255,0.4)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <FiSend size={14} /></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Links */}
          {/* Contact Links */}
<motion.div
  variants={fadeUpVariants}
  custom={4}
  className="lg:col-span-2 flex flex-col gap-4 justify-start"
>
  <p className="text-white/50 text-xs font-['JetBrains_Mono'] tracking-widest uppercase mb-1">
    Or reach me via
  </p>

   {contactLinks.map((link) => (
    <a
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      className="glass rounded-xl border border-white/10 p-4 flex items-center gap-4 group hover:border-white/20 transition-all duration-300"
    >
      <div
        className="w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          borderColor: `${link.color}40`,
          background: `${link.color}10`,
          color: link.color,
        }}
      >
        {link.icon}
      </div>

      <div className="min-w-0">
        <p className="font-['JetBrains_Mono'] text-xs text-white/30 mb-0.5">
          {link.label}
        </p>
        <p className="font-['Sora'] font-semibold text-xs text-white/70 group-hover:text-white transition-colors truncate">
          {link.value}
        </p>
      </div>
    </a>
  ))}
</motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}