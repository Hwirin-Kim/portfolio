"use client";

import { motion } from "framer-motion";
import { useMagneticEffect } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils/cn";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const { ref, position } = useMagneticEffect(strength);

  return (
    <motion.button
      ref={ref as any}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("transition-colors", className)}
    >
      {children}
    </motion.button>
  );
}

