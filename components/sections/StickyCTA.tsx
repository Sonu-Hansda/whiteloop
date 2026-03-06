"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <a
            href="#final-cta"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm neon-box-glow shadow-2xl"
          >
            Build My Brand
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
