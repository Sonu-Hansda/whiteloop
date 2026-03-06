"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Camera, RefreshCw } from "lucide-react";

const problems = [
  { icon: Clock, title: "No Time", text: "Busy professionals never get time to shoot content consistently." },
  { icon: Camera, title: "Hate Recording", text: "Most experts hate being on camera." },
  { icon: RefreshCw, title: "No System", text: "Even when they start, they quit after 2 weeks." },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight"
        >
          Why Most Founders <span className="neon-text">Never</span> Build a Personal Brand
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 text-center hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-7 h-7 neon-text" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-lg font-medium text-foreground"
        >
          That is exactly why <span className="neon-text font-bold">WhiteLoop</span> exists.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
