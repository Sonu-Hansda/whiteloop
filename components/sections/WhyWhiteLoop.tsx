"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Bot, Award, Users, CheckCircle2 } from "lucide-react";

const points = [
  { 
    icon: Zap, 
    title: "100% Done-For-You", 
    text: "Skip scripting, recording setups, and hours of editing. We handle the entire production pipeline end-to-end.",
    gradient: "group-hover:border-yellow-500/30"
  },
  { 
    icon: Bot, 
    title: "Realistic AI Clones", 
    text: "Your digital clone is trained on your exact voice and style, allowing you to generate video content 24/7.",
    gradient: "group-hover:border-primary/30"
  },
  { 
    icon: Award, 
    title: "Authority Scaling", 
    text: "No vanity metrics. We construct a content system specifically designed to position you as the top authority in your niche.",
    gradient: "group-hover:border-blue-500/30"
  },
  { 
    icon: Users, 
    title: "Inbound Lead Funnels", 
    text: "Every piece of content is engineered with DM automation to guide views straight to booked consulting calls.",
    gradient: "group-hover:border-pink-500/30"
  },
];

const checklist = [
  "Zero recording time after onboarding",
  "Scale content volume to multiple platforms",
  "Perfect voice and personality matching",
  "Automatic lead follow-up & routing"
];

const WhyWhiteLoop = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background blur decorative element */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="pill-badge">Why Whiteloop Media</div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-display text-foreground">
              Why Founders Choose <span className="neon-text neon-glow">Whiteloop</span>
            </h2>
            
            <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">
              Growing a personal brand shouldn't feel like a full-time job. We combine state-of-the-art AI video cloning with direct lead conversion workflows to build your presence while you build your business.
            </p>

            <div className="border-t border-border/40 my-6 pt-6 space-y-4">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground/95">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Grid of Value Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`glass-card p-6 md:p-8 flex flex-col group transition-all duration-300 hover:scale-[1.02] ${p.gradient}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                  <p.icon className="w-6 h-6 neon-text" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground font-display">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyWhiteLoop;
