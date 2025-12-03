"use client";

import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Users,
  Calendar,
  Building2,
} from "lucide-react";
import { modalBackdrop, modalContent } from "@/lib/animations/variants";
import { useState, useEffect } from "react";
import ImageCarousel from "@/components/ui/ImageCarousel";
import MediaViewer from "@/components/ui/MediaViewer";
import ProjectModalContribution from "@/components/projects/ProjectModalContribution";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "contribution">(
    "overview"
  );

  // 프로젝트가 바뀌면 탭을 "프로젝트 소개"로 리셋
  useEffect(() => {
    if (project) {
      setActiveTab("overview");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.id]);

  // 모달이 열리면 뒷 배경 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!project) return null;

  // 타입별 뱃지 스타일
  const typeBadgeConfig = {
    refactor: {
      label: "Refactor",
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      border: "border-purple-500/30",
    },
    migration: {
      label: "Migration",
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      border: "border-orange-500/30",
    },
  };

  // Refactor / Migration 타입인 경우 별도 렌더링
  if (project.type === "refactor" || project.type === "migration") {
    const badge = typeBadgeConfig[project.type];
    return (
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              variants={modalBackdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-surface border border-border rounded-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 ${badge.bg} ${badge.text} text-xs rounded-full border ${badge.border}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* 미디어 뷰어 (새로운 방식 - 동영상/GIF 지원) */}
                  {project.media && project.media.length > 0 && (
                    <MediaViewer media={project.media} className="mx-auto" />
                  )}

                  {/* 이미지 캐러셀 (기존 방식 - 하위 호환성) */}
                  {!project.media &&
                    project.images &&
                    project.images.length > 0 && (
                      <ImageCarousel
                        images={project.images}
                        className="mx-auto"
                      />
                    )}

                  {/* Context */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                      <Building2 className="w-4 h-4 text-primary" />
                      <span className="text-white/70">
                        {project.context.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-white/70">
                        {project.context.period}
                      </span>
                    </div>
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30">
                      {project.context.role}
                    </div>
                  </div>

                  {/* 기술 스택 */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">기술 스택</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={`${tech}-${index}`}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 내 기여 & 성과 (Showcase와 동일한 UI) */}
                  <ProjectModalContribution project={project} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // Showcase 타입 (기존 Full Project)
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-surface border border-border rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-border">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`pb-3 px-4 font-medium transition-colors relative ${
                    activeTab === "overview"
                      ? "text-primary"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  프로젝트 소개
                  {activeTab === "overview" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("contribution")}
                  className={`pb-3 px-4 font-medium transition-colors relative ${
                    activeTab === "contribution"
                      ? "text-primary"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  내 기여 & 성과
                  {activeTab === "contribution" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" ? (
                <div className="space-y-6">
                  {/* 미디어 뷰어 (새로운 방식 - 동영상/GIF 지원) */}
                  {project.overview.media &&
                    project.overview.media.length > 0 && (
                      <MediaViewer
                        media={project.overview.media}
                        className="mx-auto"
                      />
                    )}

                  {/* 이미지 캐러셀 (기존 방식 - 하위 호환성) */}
                  {!project.overview.media &&
                    project.overview.images &&
                    project.overview.images.length > 0 && (
                      <ImageCarousel
                        images={project.overview.images}
                        className="mx-auto"
                      />
                    )}

                  {/* 프로젝트 정보 */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    {project.overview.company && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-white/70">
                          {project.overview.company}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-white/70">
                        {project.overview.period}
                      </span>
                    </div>
                    {project.overview.team && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-white/70">
                          {project.overview.team}
                        </span>
                      </div>
                    )}
                    <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30">
                      {project.overview.role}
                    </div>
                  </div>

                  {/* 프로젝트 설명 */}
                  <div>
                    <p className="text-lg text-white/70 whitespace-pre-line">
                      {project.overview.description}
                    </p>
                  </div>

                  {/* 기술 스택 */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">기술 스택</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.overview.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 주요 기능 */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">주요 기능</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.overview.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-2 text-white/70"
                        >
                          <span className="text-primary mt-1">✓</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* 링크 */}
                  {project.overview.links && (
                    <div className="flex gap-4 pt-4">
                      {project.overview.links.github && (
                        <a
                          href={project.overview.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          GitHub
                        </a>
                      )}
                      {project.overview.links.demo && (
                        <a
                          href={project.overview.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-black rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <ProjectModalContribution project={project} />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
