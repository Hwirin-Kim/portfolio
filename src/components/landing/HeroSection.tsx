"use client";

import { motion } from "framer-motion";
import RevealText from "../animations/RevealText";
import TypewriterEffect from "../animations/TypewriterEffect";
import ScrollIndicator from "./ScrollIndicator";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
              김휘린
            </h1>
          </motion.div>

          {/* Role */}
          <RevealText
            text="Frontend Developer"
            className="text-2xl md:text-3xl text-white/80 mb-8 justify-center"
            delay={0.5}
          />

          {/* Tagline with Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-white/60 mb-12"
          >
            <TypewriterEffect
              text="유지보수성과 확장성을 고려해 제품을 설계합니다."
              delay={1}
              speed={50}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="flex items-center justify-center gap-4"
          >
            <Link
              href="/about"
              className="px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <ScrollIndicator /> */}
    </section>
  );
}
