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
import { useState } from "react";
import ImageCarousel from "@/components/ui/ImageCarousel";
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

  if (!project) return null;

  // Case Study 타입인 경우 별도 렌더링
  if (project.type === "case-study") {
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
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                      Case Study
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

                  {/* Challenge Title */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 p-6 rounded-xl border border-primary/30">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {project.challenge.title}
                    </h3>
                  </div>

                  {/* Background */}
                  <div>
                    <h4 className="text-lg font-bold mb-3">배경</h4>
                    <p className="text-white/70 whitespace-pre-line leading-relaxed">
                      {project.challenge.background}
                    </p>
                  </div>

                  {/* Problem */}
                  <div className="bg-red-500/10 p-6 rounded-xl border border-red-500/30">
                    <h4 className="text-lg font-bold mb-3 text-red-400">
                      문제 상황
                    </h4>
                    <p className="text-white/70 whitespace-pre-line leading-relaxed">
                      {project.challenge.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="bg-primary/10 p-6 rounded-xl border border-primary/30">
                    <h4 className="text-lg font-bold mb-3 text-primary">
                      해결 방법
                    </h4>
                    <p className="text-white/70 whitespace-pre-line leading-relaxed">
                      {project.challenge.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 p-6 rounded-xl border border-primary">
                    <h4 className="text-lg font-bold mb-3">결과 & 성과</h4>
                    <p className="text-white/80 whitespace-pre-line leading-relaxed mb-4">
                      {project.challenge.result}
                    </p>

                    {project.challenge.metrics && (
                      <div className="grid grid-cols-2 gap-4 mt-4 p-4 bg-background/50 rounded-lg">
                        <div className="text-center">
                          <p className="text-white/50 text-sm mb-1">Before</p>
                          <p className="text-2xl font-bold text-red-400">
                            {project.challenge.metrics.before}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-white/50 text-sm mb-1">After</p>
                          <p className="text-2xl font-bold text-primary">
                            {project.challenge.metrics.after}
                          </p>
                        </div>
                        <p className="col-span-2 text-center text-sm text-white/60">
                          {project.challenge.metrics.label}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-bold mb-3">사용 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.challenge.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  {/* 이미지 캐러셀 (작게) */}
                  {project.overview.images &&
                    project.overview.images.length > 0 && (
                      <ImageCarousel
                        images={project.overview.images}
                        className="max-w-2xl"
                      />
                    )}

                  {/* 프로젝트 정보 */}
                  <div className="flex flex-wrap gap-4 text-sm">
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
