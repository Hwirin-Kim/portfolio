"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import ContactCard from "@/components/contact/ContactCard";
import FAQCard from "@/components/contact/FAQCard";
import { contactMethods, faqs, primaryEmail } from "@/lib/data/contact";

export default function ContactPage() {
  return (
    <main className="relative pt-16">
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
              <div className="text-center mb-16 mt-16">
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
              {contactMethods.map((method, index) => (
                <ContactCard key={method.label} method={method} index={index} />
              ))}
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
                    href={`mailto:${primaryEmail}`}
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
                {faqs.map((faq, index) => (
                  <FAQCard key={index} faq={faq} index={index} />
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
