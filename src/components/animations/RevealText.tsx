"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils/cn";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealText({
  text,
  className,
  delay = 0,
}: RevealTextProps) {
  const { ref, isInView } = useScrollAnimation();
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-wrap gap-x-2", className)}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
