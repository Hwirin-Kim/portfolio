"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";
import ImageCarousel from "../ui/ImageCarousel";
import MediaViewer from "../ui/MediaViewer";

interface ProjectModalContributionProps {
  project: Project;
}

export default function ProjectModalContribution({
  project,
}: ProjectModalContributionProps) {
  return (
    <div className="space-y-8">
      {/* 담당 업무 - Accordion */}
      <div>
        <h3 className="text-xl font-bold mb-4">담당 업무</h3>
        <div className="space-y-3">
          {project.myContribution.responsibilities.map((resp, index) => (
            <Accordion key={index} title={resp.title}>
              {resp.details ? (
                <div className="space-y-4">
                  {/* 미디어 먼저 (새로운 방식) */}
                  {resp.details.media && resp.details.media.length > 0 && (
                    <MediaViewer media={resp.details.media} />
                  )}
                  {/* 이미지 (기존 방식 - 하위 호환성) */}
                  {!resp.details.media &&
                    resp.details.images &&
                    resp.details.images.length > 0 && (
                      <ImageCarousel images={resp.details.images} />
                    )}
                  {/* 설명 */}
                  <p className="text-white/70 leading-relaxed whitespace-pre-line">
                    {resp.details.description}
                  </p>
                </div>
              ) : (
                <p className="text-white/60 text-sm">상세 정보 없음</p>
              )}
            </Accordion>
          ))}
        </div>
      </div>

      {/* 성능개선 & 문제해결 */}
      {project.myContribution.problemSolvings &&
        project.myContribution.problemSolvings.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4">성능개선 & 문제해결</h3>
            <div className="space-y-6">
              {project.myContribution.problemSolvings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/30 transition-all"
                >
                  {/* 제목 + 번호 */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white pt-1">
                      {item.title}
                    </h4>
                  </div>

                  {/* 미디어 (새로운 방식) */}
                  {item.media && item.media.length > 0 && (
                    <div className="mb-5 ml-12">
                      <MediaViewer media={item.media} />
                    </div>
                  )}
                  {/* 이미지 (기존 방식 - 하위 호환성) */}
                  {!item.media && item.images && item.images.length > 0 && (
                    <div className="mb-5 ml-12">
                      <ImageCarousel images={item.images} />
                    </div>
                  )}

                  <div className="space-y-5 ml-12">
                    {/* 문제상황 */}
                    <div className="bg-red-500/5 rounded-xl p-4 border-l-4 border-red-400">
                      <h5 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-2">
                        <span>🔴</span> 문제상황
                      </h5>
                      <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                        {item.problem}
                      </p>
                    </div>

                    {/* 해결과정 */}
                    <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
                      <h5 className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                        <span>🟢</span> 해결과정
                      </h5>
                      <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                        {item.solution}
                      </p>
                    </div>

                    {/* 결과 */}
                    <div className="bg-blue-500/5 rounded-xl p-4 border-l-4 border-blue-400">
                      <h5 className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2">
                        <span>🔵</span> 결과
                      </h5>
                      <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                        {item.result}
                      </p>
                    </div>

                    {/* 메트릭 (수치가 있는 경우) */}
                    {item.metrics && (
                      <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 rounded-xl border border-primary/30">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <p className="text-white/50 text-xs mb-1">Before</p>
                            <p className="text-xl font-bold text-red-400">
                              {item.metrics.before}
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-white/50 text-xs mb-1">After</p>
                            <p className="text-xl font-bold text-primary">
                              {item.metrics.after}
                            </p>
                          </div>
                        </div>
                        <p className="text-center mt-2 text-xs text-white/60">
                          {item.metrics.label}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}
