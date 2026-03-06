"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, CalendarDays, Film, TrendingUp } from "lucide-react";

const steps = [
  { icon: Bot, step: "01", title: "We Build Your AI Clone", text: "We capture your voice and personality to create your AI digital clone." },
  { icon: CalendarDays, step: "02", title: "We Plan Your Content", text: "We create a strategy designed to position you as an authority." },
  { icon: Film, step: "03", title: "We Produce Videos", text: "Your AI clone produces consistent video content." },
  { icon: TrendingUp, step: "04", title: "You Become The Authority", text: "Your brand grows while you focus on your business." },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Personal Brand
            <br />
            <span className="neon-text neon-glow">Built Without Recording</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 relative group hover:border-primary/30 transition-colors duration-300"
            >
              <span className="text-5xl font-bold text-primary/10 absolute top-4 right-4 font-display">{s.step}</span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 neon-text" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="#final-cta" className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base hover:neon-box-glow transition-all duration-300 hover:scale-105">
            Start My Personal Brand
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
