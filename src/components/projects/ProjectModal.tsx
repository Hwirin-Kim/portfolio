"use client";

import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, TrendingUp } from "lucide-react";
import { modalBackdrop, modalContent } from "@/lib/animations/variants";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState<"features" | "technical">(
    "features"
  );

  if (!project) return null;

  return (
    <AnimatePresence>
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
                  onClick={() => setActiveTab("features")}
                  className={`pb-3 px-4 font-medium transition-colors relative ${
                    activeTab === "features"
                      ? "text-primary"
                      : "text-white/50 hover:text-white/70"
                  }`}
                >
                  Features
                  {activeTab === "features" && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
                {project.technicalInsight && (
                  <button
                    onClick={() => setActiveTab("technical")}
                    className={`pb-3 px-4 font-medium transition-colors relative ${
                      activeTab === "technical"
                        ? "text-primary"
                        : "text-white/50 hover:text-white/70"
                    }`}
                  >
                    Technical Insight
                    {activeTab === "technical" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                )}
              </div>

              {/* Tab Content */}
              {activeTab === "features" ? (
                <div className="space-y-6">
                  <p className="text-lg text-white/70">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
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

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-black rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                project.technicalInsight && (
                  <div className="space-y-6">
                    {/* Problem */}
                    <div className="bg-card/50 p-6 rounded-xl border border-border">
                      <h3 className="text-xl font-bold mb-3 text-red-400">
                        Problem
                      </h3>
                      <p className="text-white/70">
                        {project.technicalInsight.problem}
                      </p>
                    </div>

                    {/* Analysis */}
                    <div className="bg-card/50 p-6 rounded-xl border border-border">
                      <h3 className="text-xl font-bold mb-3 text-yellow-400">
                        Analysis
                      </h3>
                      <p className="text-white/70">
                        {project.technicalInsight.analysis}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-card/50 p-6 rounded-xl border border-border">
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        Solution
                      </h3>
                      <p className="text-white/70">
                        {project.technicalInsight.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 p-6 rounded-xl border border-primary">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold">Results</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <p className="text-white/50 text-sm mb-1">Before</p>
                          <p className="text-4xl font-bold text-red-400">
                            {project.technicalInsight.results.before}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-white/50 text-sm mb-1">After</p>
                          <p className="text-4xl font-bold text-primary">
                            {project.technicalInsight.results.after}
                          </p>
                        </div>
                      </div>
                      <p className="text-center mt-4 text-white/70">
                        {project.technicalInsight.results.metric}
                      </p>
                      <div className="mt-4 text-center">
                        <span className="text-2xl font-bold text-primary">
                          {Math.round(
                            ((project.technicalInsight.results.before -
                              project.technicalInsight.results.after) /
                              project.technicalInsight.results.before) *
                              100
                          )}
                          % improvement
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

