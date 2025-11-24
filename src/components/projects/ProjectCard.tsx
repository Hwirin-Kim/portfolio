"use client";

import { Project } from "@/types";
import TiltCard from "../animations/TiltCard";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
        className="h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all cursor-pointer group"
      >
        {/* Image */}
        <div className="aspect-video bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/30 text-sm">Project Image</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-white/60 mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 bg-white/5 text-white/50 text-xs rounded-full">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

