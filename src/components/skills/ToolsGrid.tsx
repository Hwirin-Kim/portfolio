"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tool } from "@/lib/data/skills";
import { getAssetPath } from "@/lib/utils/path";

interface ToolsGridProps {
  tools: Tool[];
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
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
          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default group"
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Image
              src={getAssetPath(tool.icon)}
              alt={tool.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="font-medium text-sm text-white/80 group-hover:text-white transition-colors">
            {tool.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
