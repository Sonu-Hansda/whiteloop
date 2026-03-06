"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const includes = ["AI Clone", "Content Production", "Editing", "Posting", "Strategy", "Optimization"];

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          Simple <span className="neon-text">Monthly</span> Pricing
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 max-w-md mx-auto glass-card p-10 border-primary/30 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative">
            <span className="pill-badge">Most Popular</span>
            <h3 className="mt-4 text-2xl font-bold text-foreground">WhiteLoop Authority Plan</h3>
            <p className="mt-4 text-3xl md:text-4xl font-bold neon-text font-display">
              ₹50,000 – ₹2,00,000
              <span className="text-base font-normal text-muted-foreground"> / month</span>
            </p>

            <div className="mt-8 space-y-3">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 neon-text" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#final-cta"
              className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-base neon-box-glow hover:neon-box-glow-strong transition-all duration-300 hover:scale-105"
            >
              Book Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
