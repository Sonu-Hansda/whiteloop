"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="final-cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container text-center relative" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Your <span className="neon-text neon-glow">Personal Brand</span>
          <br />
          Should Work For You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
        >
          Start building your authority today without recording content yourself.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="mailto:hello@whiteloop.ai"
            className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg neon-box-glow-strong hover:scale-105 transition-all duration-300 animate-glow-pulse"
          >
            Build My Brand
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          ⚡ Limited onboarding slots available.
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
