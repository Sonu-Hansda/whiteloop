"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  { q: "How does AI clone work?", a: "We use advanced AI to capture your voice, speech patterns, and personality. The clone can then produce video and audio content that sounds and looks like you." },
  { q: "Do I need to record videos?", a: "No. After the initial onboarding session, you don't need to record anything. Your AI clone handles all content production." },
  { q: "How long before results?", a: "Most clients see significant growth within 60-90 days. Some have seen results as early as 30 days depending on their niche." },
  { q: "Which platforms do you post on?", a: "We post on LinkedIn, Instagram, YouTube, Twitter/X, and other platforms based on your strategy." },
  { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. We believe in delivering value, not locking you in." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container max-w-3xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          Frequently Asked <span className="neon-text">Questions</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border border-border/50 rounded-xl overflow-hidden">
                <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
