"use client";

import { ReactNode, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

// 별 생성 (랜덤 위치, 크기, 딜레이)
const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // %
    y: Math.random() * 100, // %
    size: Math.random() * 4 + 2, // 2-6px (더 크게)
    duration: Math.random() * 1.5 + 0.8, // 0.8-2.3초 (더 빠르게)
    delay: Math.random() * 2, // 0-2초
  }));
};

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // 클라이언트에서만 별 생성 (hydration 에러 방지)
  useEffect(() => {
    setStars(generateStars(20));
    setIsMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`relative group ${className}`}
    >
      {/* 별 반짝임 효과 - 호버 시 활성화 (클라이언트에서만 렌더링) */}
      {isMounted && (
        <div className="pointer-events-none absolute inset-0 rounded-xl overflow-hidden z-20">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(34,197,94,0.8) 50%, transparent 100%)",
                boxShadow:
                  "0 0 10px rgba(34,197,94,0.8), 0 0 20px rgba(34,197,94,0.4)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isHovered
                  ? {
                      opacity: [0, 1, 0.7, 1, 0],
                      scale: [0, 1.2, 0.8, 1.2, 0],
                    }
                  : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* 부드러운 Glow Border */}
      <div className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 via-primary-light/50 to-primary/50 blur-sm" />
      </div>

      {/* 전체 반짝임 배경 */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5" />
      </div>

      {/* 3D Shadow */}
      <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-xl shadow-[0_20px_40px_-15px_rgba(34,197,94,0.4)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 pointer-events-auto">{children}</div>
    </motion.div>
  );
}
