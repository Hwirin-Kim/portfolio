"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollySectionProps {
  title: string;
  children: ReactNode;
  index: number;
}

export default function ScrollySection({
  title,
  children,
  index,
}: ScrollySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent ${index % 2 === 0 ? "text-left" : "text-right"}`}>
            {title}
          </h2>
          <div className="text-lg md:text-xl text-white/70 space-y-6 text-left">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

