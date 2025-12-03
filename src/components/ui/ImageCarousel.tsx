"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex =
      newDirection === 1
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* 이미지 */}
      <div className="relative aspect-video bg-surface rounded-lg overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 1000 : -1000, opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover pointer-events-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* 네비게이션 버튼 */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* 인디케이터 */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

