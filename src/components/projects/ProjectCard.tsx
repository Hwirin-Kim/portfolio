"use client";

import { Project, ProjectCategory } from "@/types";
import SpotlightCard from "../animations/SpotlightCard";
import Image from "next/image";
import DefaultThumbnail from "./DefaultThumbnail";
import { Calendar } from "lucide-react";
import { getAssetPath } from "@/lib/utils/path";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// 카테고리별 스타일
const categoryStyles: Record<ProjectCategory, { bg: string; text: string }> = {
  신규개발: { bg: "bg-blue-500/90", text: "text-white" },
  유지보수: { bg: "bg-green-500/90", text: "text-white" },
  리팩토링: { bg: "bg-purple-500/90", text: "text-white" },
  마이그레이션: { bg: "bg-yellow-500/90", text: "text-black" },
  성능개선: { bg: "bg-orange-500/90", text: "text-white" },
  기능추가: { bg: "bg-cyan-500/90", text: "text-white" },
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // 타입에 따라 기술 스택과 기간 가져오기
  const techStack =
    project.type === "showcase"
      ? project.overview.techStack
      : project.techStack;

  const period =
    project.type === "showcase"
      ? project.overview.period
      : project.context.period;

  const categoryStyle = categoryStyles[project.category];

  return (
    <SpotlightCard className="h-full">
      <div
        onClick={onClick}
        className="h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group backdrop-blur-sm"
      >
        {/* Image */}
        <div className="aspect-video bg-surface relative overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={getAssetPath(project.thumbnail)}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <DefaultThumbnail title={project.title} />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-light/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

          {/* 카테고리 뱃지 */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 ${categoryStyle.bg} ${categoryStyle.text} text-xs font-bold rounded-full`}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* 기간 */}
          <div className="flex items-center gap-1.5 text-white/50 text-xs mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{period}</span>
          </div>

          <p className="text-white/60 mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 3).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-3 py-1 bg-white/5 text-white/50 text-xs rounded-full">
                +{techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
