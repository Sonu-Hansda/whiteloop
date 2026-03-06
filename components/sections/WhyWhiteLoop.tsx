"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Bot, Award, Users } from "lucide-react";

const points = [
  { icon: Zap, title: "Done For You", text: "You don't need to record daily videos." },
  { icon: Bot, title: "AI Powered", text: "Your clone works 24/7." },
  { icon: Award, title: "Authority First", text: "We build reputation not just views." },
  { icon: Users, title: "Lead Generation", text: "Your content converts into clients." },
];

const WhyWhiteLoop = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          Why Clients Choose <span className="neon-text">WhiteLoop</span>
        </motion.h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-7 h-7 neon-text" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWhiteLoop;
