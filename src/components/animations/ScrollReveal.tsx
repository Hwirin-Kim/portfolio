"use client";

import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations/hooks";
import { fadeUp } from "@/lib/animations/variants";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

export default function ScrollReveal({
  children,
  variants = fadeUp,
  className,
}: ScrollRevealProps) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

