"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  text: string;
  delay?: number; // 초 단위
  speed?: number; // 각 글자 타이핑 속도 (ms)
  className?: string;
}

export default function TypewriterEffect({
  text,
  delay = 0,
  speed = 30,
  className,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // 초기 딜레이 후 시작
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  // 타이핑 애니메이션
  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {displayText}
      {started && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </motion.span>
  );
}
