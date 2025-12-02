"use client";

import { SkillCategory } from "@/lib/data/skills";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

interface SkillCategorySectionProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCategorySection({
  category,
  index,
}: SkillCategorySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h2 className="text-xl font-bold">{category.category}</h2>
      </div>

      {/* Skills List */}
      <div className="space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}
