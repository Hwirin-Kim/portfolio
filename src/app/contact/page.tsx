"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",
    href: "https://github.com",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Your Name",
    href: "https://linkedin.com",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "username#0000",
    href: "#",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <ScrollReveal>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                  Let&apos;s Connect
                </h1>
                <p className="text-xl md:text-2xl text-white/70">
                  새로운 프로젝트나 협업 제안이 있으신가요?
                  <br />
                  언제든지 연락주세요!
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {method.label}
                        </h3>
                        <p className="text-white/60">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Message */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-primary/20 to-primary-light/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/50 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  빠른 답변을 원하시나요?
                </h2>
                <p className="text-lg text-white/70 mb-8">
                  이메일이 가장 빠르게 답변드릴 수 있습니다
                </p>
                <MagneticButton strength={0.5}>
                  <a
                    href="mailto:your@email.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] text-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">
                자주 묻는 질문
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "프로젝트 의뢰가 가능한가요?",
                    a: "네, 가능합니다! 프로젝트 규모와 요구사항에 따라 협의 가능합니다.",
                  },
                  {
                    q: "응답까지 얼마나 걸리나요?",
                    a: "일반적으로 24-48시간 이내에 답변드립니다.",
                  },
                  {
                    q: "원격 근무가 가능한가요?",
                    a: "네, 원격 근무 및 하이브리드 모두 가능합니다.",
                  },
                  {
                    q: "어떤 프로젝트를 선호하시나요?",
                    a: "사용자 경험과 성능 최적화가 중요한 웹 애플리케이션 프로젝트를 선호합니다.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border"
                  >
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {faq.q}
                    </h3>
                    <p className="text-white/70">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              함께 멋진 것을 만들어봐요
            </h2>
            <p className="text-xl text-white/70 mb-8">
              당신의 아이디어를 현실로 만드는 데 도움을 드리겠습니다
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/projects"
                className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/5 transition-all"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
