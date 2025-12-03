"use client";

import { Skill, skillLevelInfo } from "@/lib/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const levelInfo = skillLevelInfo[skill.level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      {/* Header - 클릭 가능 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 bg-card/50 backdrop-blur-sm rounded-xl border transition-all ${
          isOpen
            ? "border-primary/50 bg-card/70"
            : "border-border hover:border-primary/30"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* 스킬 이름 */}
          <span className="font-semibold text-white group-hover:text-primary transition-colors">
            {skill.name}
          </span>
          {/* 레벨 뱃지 */}
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${levelInfo.bgColor} ${levelInfo.color}`}
          >
            {levelInfo.label}
          </span>
        </div>

        {/* 화살표 */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? "text-primary" : "text-white/40"}`} />
        </motion.div>
      </button>

      {/* Capabilities - 펼쳐지는 영역 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-3 pl-4 pr-4 pb-1">
              <ul className="space-y-2">
                {skill.capabilities.map((capability, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{capability}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
