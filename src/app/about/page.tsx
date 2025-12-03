"use client";

import ScrollySection from "@/components/about/ScrollySection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PrincipleCard from "@/components/about/PrincipleCard";
import ProcessCard from "@/components/about/ProcessCard";
import TimelineCard from "@/components/about/TimelineCard";
import { principles, workProcess, career, timeline } from "@/lib/data/about";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-white/70">
              개발자로서의 여정, 철학, 그리고 성장 이야기
            </p>
          </motion.div>
        </div>
      </section>

      {/* My Principles */}
      <ScrollySection title="개발 철학" index={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <PrincipleCard
              key={index}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </ScrollySection>

      {/* How I Work */}
      <ScrollySection title="개발 방법" index={1}>
        <div className="space-y-8">
          {workProcess.map((process, index) => (
            <ProcessCard
              key={index}
              step={process.step}
              description={process.description}
              index={index}
            />
          ))}
        </div>
      </ScrollySection>

      {/* Career Experience */}
      <ScrollySection title="경력" index={2}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
          <div className="space-y-12 pl-12">
            {career.map((item, index) => (
              <TimelineCard
                key={index}
                year={item.year}
                title={item.title}
                role={item.role}
                descriptions={item.descriptions}
              />
            ))}
          </div>
        </div>
      </ScrollySection>

      {/* Education Timeline */}
      <ScrollySection title="교육" index={3}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
          <div className="space-y-12 pl-12">
            {timeline.map((item, index) => (
              <TimelineCard
                key={index}
                year={item.year}
                title={item.title}
                descriptions={item.descriptions}
              />
            ))}
          </div>
        </div>
      </ScrollySection>

      {/* Closing */}
      <section className="min-h-[50vh] flex items-center justify-center">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Together
            </h2>
            <p className="text-lg text-white/70 mb-8">
              함께 멋진 프로젝트를 만들어보세요
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              Contact Me
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
