"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { projects } from "@/lib/data/projects/projects";
import { Project } from "@/types";
import { staggerContainer, fadeUp } from "@/lib/animations/variants";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="relative pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Projects
              </h1>
              <p className="text-xl text-white/70">
                실제 프로덕션 프로젝트부터 실험적인 작업까지,
                <br />
                다양한 경험을 통해 배우고 성장해왔습니다.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={fadeUp}>
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              더 많은 프로젝트를 준비 중입니다
            </h2>
            <p className="text-lg text-white/70 mb-8">
              GitHub에서 더 많은 작업물을 확인하세요
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              Visit GitHub
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
