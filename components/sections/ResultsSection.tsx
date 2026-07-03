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
    <div className={`relative w-full aspect-video rounded-t-xl overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center border-b border-border/40`}>
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
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 section-container" ref={ref}>
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="pill-badge mb-4 mx-auto">Results & Case Study</div>
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

        {/* Narrative & Profile Focus */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              <TrendingUp className="w-3.5 h-3.5" />
              Instagram Organic Case Study
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight">
              Founder's Case Study: Practicing What We Preach
            </h3>
            <p className="text-muted-foreground/80 leading-relaxed text-sm sm:text-base">
              As the founder of Whiteloop Media, I wanted to prove the exact power of our AI content systems. I set out to build an authoritative brand on Instagram to capture client interest, but I didn't want to spend dozens of hours scripting and filming weekly.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-none w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">The System:</strong> We deployed our proprietary cloning tech—creating a hyper-realistic AI clone of myself, trained on my voice and visual style. I never had to sit in front of a camera.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">The Growth:</strong> In just 45 days, with only 21 posts generated by my clone, my Instagram page (@theabhisheik) grew to over 10,000 followers organically.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground font-semibold">The Results:</strong> Conversational funnels translated this viral reach directly into over 200 high-intent consulting leads on autopilot.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 border-primary/20 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 bg-primary/10 text-primary text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-bl-xl uppercase font-display border-l border-b border-primary/20">
                Founder Profile
              </div>
              
              <div className="relative w-20 h-20 rounded-full border-2 border-primary p-1 bg-neutral-900 mb-4 mt-2">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl font-display uppercase">
                  A
                </div>
              </div>

              <h4 className="text-lg font-bold text-foreground font-display">Abhishek</h4>
              <p className="text-sm text-primary font-semibold">@theabhisheik</p>
              
              <p className="text-xs text-muted-foreground max-w-xs mt-3 leading-relaxed">
                Expert in AI digital cloning, automated marketing funnels, and organic brand authority systems.
              </p>

              <div className="w-full border-t border-border/40 my-6" />

              <a 
                href="https://www.instagram.com/theabhisheik/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:neon-box-glow hover:scale-[1.02] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
                View Instagram Profile
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Top Instagram Posts Showcase */}
        <div>
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-2xl font-bold font-display text-foreground">
              Top Performing Content
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Click on any post below to watch it directly on Instagram and see the metrics in action.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {instagramPosts.map((post, i) => (
              <motion.a
                key={post.id}
                href="https://www.instagram.com/theabhisheik/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="group flex flex-col glass-card overflow-hidden hover:border-primary/40 hover:scale-[1.02] transition-all duration-300"
              >
                {/* Image Component */}
                <PostImage 
                  src={post.imagePath} 
                  alt={post.title} 
                  gradient={post.gradient}
                />

                {/* Content info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider font-display">
                        {post.title}
                      </span>
                      <Instagram className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>

                  <div className="border-t border-border/40 mt-6 pt-4 flex items-center justify-between text-xs text-muted-foreground font-semibold">
                    {post.views ? (
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {post.views} Views
                      </span>
                    ) : (
                      <span className="text-muted-foreground/45 italic font-normal">Organic Reach</span>
                    )}

                    {post.likes ? (
                      <span className="flex items-center gap-1 border-l border-r border-border/30 px-3">
                        <Heart className="w-3.5 h-3.5" />
                        {post.likes} Likes
                      </span>
                    ) : (
                      <span className="border-l border-r border-border/30 px-3 text-muted-foreground/45 italic font-normal">Active Engagement</span>
                    )}

                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments} Comments
                    </span>
                  </div>
                </div>

                {/* Hover overlay link indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-primary border border-primary/30 flex items-center gap-1">
                  Watch Post <ArrowUpRight className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
