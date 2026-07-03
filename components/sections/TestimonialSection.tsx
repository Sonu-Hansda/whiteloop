"use client";

import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "WhiteLoop completely transformed how we approach content. Our LinkedIn presence went from invisible to generating 3-5 inbound leads per week.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Founder & CEO",
  },
  {
    text: "The team understood our brand voice from day one. Content feels authentic, not generic — and the results speak for themselves.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Marketing Director",
  },
  {
    text: "I was skeptical about outsourcing content, but WhiteLoop made me a believer. My audience grew 10x in 3 months.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Business Coach",
  },
  {
    text: "WhiteLoop's strategy is next-level. They don't just post content — they build authority systems that compound over time.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO, TechVentures",
  },
  {
    text: "Since working with WhiteLoop, I've been invited to speak at 4 conferences and landed 2 major consulting contracts — all from content.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Strategy Consultant",
  },
  {
    text: "The ROI is insane. Every piece of content they create is strategic, on-brand, and drives real engagement.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Brand Strategist",
  },
  {
    text: "WhiteLoop helped me go from 500 followers to 15K in under 6 months. The quality of inbound opportunities changed completely.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Agency Owner",
  },
  {
    text: "They delivered beyond expectations. My personal brand now opens doors I never thought possible.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Executive Coach",
  },
  {
    text: "Working with WhiteLoop feels like having a growth team dedicated to your personal brand. Absolutely worth it.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "SaaS Founder",
  },
];

const BentoItem = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty("--mouse-x", `${x}px`);
      item.style.setProperty("--mouse-y", `${y}px`);
    };

    item.addEventListener("mousemove", handleMouseMove);
    return () => item.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={itemRef}
      className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 ${className}`}
    >
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(68 100% 50% / 0.06), transparent 40%)",
        }}
      />
      <div className="relative z-10 h-full p-6">{children}</div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  featured = false,
}: {
  testimonial: (typeof testimonials)[0];
  featured?: boolean;
}) => (
  <>
    <Quote className="h-5 w-5 text-primary/40 mb-3" />
    <p
      className={`leading-relaxed text-muted-foreground ${featured ? "text-base md:text-lg" : "text-sm"}`}
    >
      {testimonial.text}
    </p>
    <div className="mt-auto pt-5 flex items-center gap-3">
      <Image
        width={30}
        height={30}
        src={testimonial.image}
        alt={testimonial.name}
        className="h-10 w-10 rounded-full object-cover ring-2 ring-border/50"
      />
      <div>
        <p className="text-sm font-semibold text-foreground">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </>
);

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Warm amber radial glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, hsla(40, 80%, 50%, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 section-container">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="pill-badge mb-4 mx-auto">Testimonials</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            <span className="text-foreground">What Our </span>
            <span className="neon-text neon-glow">Clients</span>
            <span className="text-foreground"> Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground/70 sm:text-lg leading-relaxed">
            See how WhiteLoop has helped founders and experts build magnetic
            personal brands that attract clients on autopilot.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* Featured - spans 2 cols */}
          <BentoItem className="md:col-span-2 lg:col-span-2">
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[0]} featured />
            </div>
          </BentoItem>

          {/* Regular */}
          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[1]} />
            </div>
          </BentoItem>

          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[2]} />
            </div>
          </BentoItem>

          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[3]} />
            </div>
          </BentoItem>

          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[4]} />
            </div>
          </BentoItem>

          {/* Wide card */}
          <BentoItem className="md:col-span-2 lg:col-span-2">
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[5]} featured />
            </div>
          </BentoItem>

          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[6]} />
            </div>
          </BentoItem>

          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[7]} />
            </div>
          </BentoItem>

          <BentoItem>
            <div className="flex flex-col h-full">
              <TestimonialCard testimonial={testimonials[8]} />
            </div>
          </BentoItem>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
