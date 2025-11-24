"use client";

import { motion } from "framer-motion";

interface ToolsGridProps {
  tools: string[];
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={tool}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors cursor-default"
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-2xl">🛠️</span>
          </div>
          <p className="font-medium">{tool}</p>
        </motion.div>
      ))}
    </div>
  );
}

