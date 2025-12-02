"use client";

import { Skill, skillLevelInfo } from "@/lib/data/skills";
import { motion } from "framer-motion";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const levelInfo = skillLevelInfo[skill.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className="group flex items-center justify-between p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all"
    >
      {/* 스킬 이름 */}
      <span className="font-medium text-white group-hover:text-primary transition-colors">
        {skill.name}
      </span>

      {/* 레벨 + 경험 */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-white/50">{skill.experience}</span>
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium border ${levelInfo.bgColor} ${levelInfo.color}`}
        >
          {levelInfo.label}
        </span>
      </div>
    </motion.div>
  );
}
