"use client";

import { skillLevelInfo, SkillLevel } from "@/lib/data/skills";
import { motion } from "framer-motion";

export default function SkillLevelGuide() {
  const levels: SkillLevel[] = ["expert", "proficient", "familiar"];

  return (
    <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border">
      <h3 className="text-lg font-bold mb-4 text-white/80">📊 레벨 기준</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {levels.map((level, index) => {
          const info = skillLevelInfo[level];
          return (
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border ${info.bgColor}`}
            >
              <div className={`font-bold text-lg mb-2 ${info.color}`}>
                {info.label}
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

