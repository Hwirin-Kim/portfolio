"use client";

import ScrollySection from "@/components/about/ScrollySection";
import ScrollReveal from "@/components/animations/ScrollReveal";
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
      <ScrollySection title="My Principles" index={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all"
            >
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {principle.title}
              </h3>
              <p className="text-white/60">{principle.description}</p>
            </div>
          ))}
        </div>
      </ScrollySection>

      {/* How I Work */}
      <ScrollySection title="How I Work" index={1}>
        <div className="space-y-8">
          {workProcess.map((process, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{process.step}</h3>
                <p className="text-white/60">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollySection>

      {/* Career Experience */}
      <ScrollySection title="Career Experience" index={2}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
          <div className="space-y-12 pl-12">
            {career.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[51px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all">
                  <span className="text-primary font-bold text-lg">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-1">{item.title}</h3>
                  <p className="text-primary-light text-lg mb-3">{item.role}</p>
                  <ul className="space-y-2">
                    {item.descriptions.map((description, idx) => (
                      <li
                        key={idx}
                        className="text-white/60 flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollySection>

      {/* Education Timeline */}
      <ScrollySection title="Education Timeline" index={3}>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/30" />
          <div className="space-y-12 pl-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[51px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all">
                  <span className="text-primary font-bold text-lg">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
                  {item.descriptions.map((description, index) => (
                    <p key={index} className="text-white/60">
                      {description}
                    </p>
                  ))}
                </div>
              </div>
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
