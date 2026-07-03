"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { 
  Instagram, 
  ArrowUpRight, 
  Eye, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Sparkles, 
  Users, 
  Send
} from "lucide-react";

// Top posts data from the Instagram page @theabhisheik
const instagramPosts = [
  {
    id: "post_realistic",
    title: "100% Realistic AI Avatar",
    caption: "Demonstrating our hyper-realistic voice and video cloning tech to produce professional reels on autopilot.",
    views: "249K",
    likes: "6,556",
    comments: "11.6K",
    imagePath: "/realistic.jpg",
    gradient: "from-lime-500/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "post_raj",
    title: "Organic Authority Campaign",
    caption: "How we scale founders' organic personal brands by positioning them as market leaders without active camera time.",
    views: "158K",
    likes: "3,396",
    comments: "2,029",
    imagePath: "/raj.jpg",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "post_girl",
    title: "Viral DM Automation Funnel",
    caption: "Converting high-volume engagement into booked calendar appointments using automated conversation flows.",
    views: null,
    likes: null,
    comments: "4,421",
    imagePath: "/girl.jpg",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
  },
];

const PostImage = ({ src, alt, gradient }: { src: string; alt: string; gradient: string }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative w-full aspect-video rounded-t-xl overflow-hidden bg-linear-to-br ${gradient} flex items-center justify-center border-b border-border/40`}>
      {!imgError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-neutral-900/60 backdrop-blur-xs">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <Instagram className="w-6 h-6 neon-text" />
          </div>
          <span className="text-sm font-semibold text-foreground tracking-wide font-display">Instagram Post Thumbnail</span>
        </div>
      )}

      {/* Subtle Grid pattern on top of images */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: "10K+", label: "Followers", sub: "Grown in 45 Days" },
    { icon: Sparkles, value: "21", label: "Posts Total", sub: "Using AI Clones" },
    { icon: Send, value: "200+", label: "Organic Leads", sub: "Inbound via Automated DMs" },
  ];

  return (
    <section id="results" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="pill-badge mb-4 mx-auto">Results</div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Real Growth. <span className="neon-text neon-glow">Proven Authority.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/70 sm:text-lg"
          >
            How our founder, Abhishek, scaled his personal brand on autopilot using our proprietary AI cloning workflows.
          </motion.p>
        </div>

        {/* Case Study Metrics Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="glass-card p-8 flex items-center gap-6 group hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <stat.icon className="w-7 h-7 neon-text" />
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-extrabold text-foreground tracking-tight font-display">
                  {stat.value}
                </span>
                <span className="block text-sm font-semibold text-foreground/90 mt-0.5">
                  {stat.label}
                </span>
                <span className="block text-xs text-muted-foreground mt-0.5">
                  {stat.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
