"use client";

import { MediaItem } from "@/types";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface MediaViewerProps {
  media: MediaItem[];
  className?: string;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function MediaViewer({
  media,
  className = "",
}: MediaViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  if (!media || media.length === 0) return null;

  const currentMedia = media[currentIndex];

  // 파일 확장자로 타입 자동 판별
  const getMediaType = (item: MediaItem): "image" | "video" | "gif" => {
    if (item.type) return item.type;

    const url = item.url.toLowerCase();
    if (url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov")) {
      return "video";
    }
    if (url.endsWith(".gif")) {
      return "gif";
    }
    return "image";
  };

  const mediaType = getMediaType(currentMedia);

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isPlaying[index]) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying({ ...isPlaying, [index]: !isPlaying[index] });
  };

  const paginate = (newDirection: number) => {
    const newIndex =
      newDirection === 1
        ? (currentIndex + 1) % media.length
        : (currentIndex - 1 + media.length) % media.length;
    setCurrentIndex(newIndex);
    setPage([newIndex, newDirection]);
  };

  const handleDragEnd = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 메인 미디어 */}
      <div className="relative rounded-xl overflow-hidden bg-card aspect-video group">
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
            {mediaType === "video" ? (
              <>
                <video
                  ref={(el) => {
                    videoRefs.current[currentIndex] = el;
                  }}
                  src={currentMedia.url}
                  poster={currentMedia.poster}
                  className="w-full h-full object-contain pointer-events-none"
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() =>
                    setIsPlaying({ ...isPlaying, [currentIndex]: true })
                  }
                  onPause={() =>
                    setIsPlaying({ ...isPlaying, [currentIndex]: false })
                  }
                >
                  <source src={currentMedia.url} type="video/mp4" />
                </video>

                {/* 재생 버튼 오버레이 */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause(currentIndex);
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto z-10"
                >
                  {isPlaying[currentIndex] ? (
                    <Pause className="w-16 h-16 text-white/90" />
                  ) : (
                    <Play className="w-16 h-16 text-white/90" />
                  )}
                </button>
              </>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentMedia.url}
                alt={currentMedia.caption || `미디어 ${currentIndex + 1}`}
                className="w-full h-full object-contain pointer-events-none"
                loading="lazy"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* 이전/다음 버튼 */}
        {media.length > 1 && (
          <>
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              ←
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20"
            >
              →
            </button>
          </>
        )}

        {/* 타입 뱃지 */}
        {(mediaType === "video" || mediaType === "gif") && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full z-20">
            {mediaType === "video" ? "VIDEO" : "GIF"}
          </div>
        )}
      </div>

      {/* Caption */}
      {currentMedia.caption && (
        <p className="text-sm text-white/60 text-center">
          {currentMedia.caption}
        </p>
      )}

      {/* 썸네일 네비게이션 */}
      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setPage([index, index > currentIndex ? 1 : -1]);
              }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-primary scale-105"
                  : "border-white/20 hover:border-white/40"
              }`}
            >
              {getMediaType(item) === "video" ? (
                <div className="w-full h-full bg-card flex items-center justify-center">
                  <Play className="w-6 h-6 text-white/50" />
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.url}
                  alt={`썸네일 ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
