"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-primary text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{
            delay: index * 0.05 + 0.2,
            duration: 1,
            ease: [0.33, 1, 0.68, 1],
          }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
        />
      </div>
    </motion.div>
  );
}

