"use client";

import { ShowcaseProject } from "@/types";
import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";
import ImageCarousel from "../ui/ImageCarousel";

interface ProjectModalContributionProps {
  project: ShowcaseProject;
}

export default function ProjectModalContribution({
  project,
}: ProjectModalContributionProps) {
  return (
    <div className="space-y-6">
      {/* 담당 업무 - Accordion */}
      <div>
        <h3 className="text-xl font-bold mb-3">담당 업무</h3>
        <div className="space-y-3">
          {project.myContribution.responsibilities.map((resp, index) => (
            <Accordion key={index} title={resp.title}>
              {resp.details ? (
                <div className="space-y-4">
                  {/* 이미지 먼저 */}
                  {resp.details.images && resp.details.images.length > 0 && (
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

      {/* 주요 성과 */}
      {project.myContribution.achievements &&
        project.myContribution.achievements.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-3">주요 성과</h3>
            <div className="space-y-4">
              {project.myContribution.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card/50 p-6 rounded-xl border border-border"
                >
                  <h4 className="text-lg font-bold mb-4 text-primary">
                    {achievement.title}
                  </h4>

                  {/* 이미지 먼저 */}
                  {achievement.images && achievement.images.length > 0 && (
                    <div className="mb-4">
                      <ImageCarousel images={achievement.images} />
                    </div>
                  )}

                  {/* 설명 */}
                  <p className="text-white/70 mb-4">{achievement.description}</p>

                  {/* 메트릭 */}
                  {achievement.metrics && (
                    <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 p-4 rounded-lg border border-primary">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-white/50 text-sm mb-1">Before</p>
                          <p className="text-2xl font-bold text-red-400">
                            {achievement.metrics.before}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-white/50 text-sm mb-1">After</p>
                          <p className="text-2xl font-bold text-primary">
                            {achievement.metrics.after}
                          </p>
                        </div>
                      </div>
                      <p className="text-center mt-2 text-sm text-white/60">
                        {achievement.metrics.label}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      {/* 기술적 도전 & 해결 */}
      {project.myContribution.challenges &&
        project.myContribution.challenges.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-4">기술적 도전 & 해결</h3>
            <div className="space-y-6">
              {project.myContribution.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-border hover:border-primary/50 transition-all"
                >
                  {/* Challenge Number */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white/90">
                        Challenge {index + 1}
                      </h4>
                    </div>
                  </div>

                  {/* 이미지 먼저 */}
                  {challenge.images && challenge.images.length > 0 && (
                    <div className="mb-4 ml-12">
                      <ImageCarousel images={challenge.images} />
                    </div>
                  )}

                  <div className="space-y-4 ml-12">
                    {/* Problem */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-400 font-bold text-sm">●</span>
                        <h5 className="text-sm font-bold text-red-400">문제</h5>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed pl-4 border-l-2 border-red-400/30">
                        {challenge.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-bold text-sm">●</span>
                        <h5 className="text-sm font-bold text-primary">해결</h5>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed pl-4 border-l-2 border-primary/30">
                        {challenge.solution}
                      </p>
                    </div>

                    {/* Result */}
                    {challenge.result && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-primary-light font-bold text-sm">
                            ●
                          </span>
                          <h5 className="text-sm font-bold text-primary-light">
                            결과
                          </h5>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed pl-4 border-l-2 border-primary-light/30 bg-primary/5 rounded p-2">
                          {challenge.result}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}

