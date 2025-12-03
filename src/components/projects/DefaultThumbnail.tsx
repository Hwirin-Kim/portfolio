"use client";

interface DefaultThumbnailProps {
  title: string;
}

export default function DefaultThumbnail({ title }: DefaultThumbnailProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(var(--color-primary-rgb), 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(var(--color-primary-rgb), 0.1) 0%, transparent 50%)
            `,
          }}
        />
        {/* 그리드 패턴 */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* 프로젝트 제목 */}
      <div className="relative z-10 px-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
          {title}
        </h3>
      </div>

      {/* 데코 요소들 */}
      <div className="absolute top-4 right-4 w-16 h-16 border border-white/5 rounded-full" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border border-white/5 rounded-lg rotate-12" />
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-primary/30 rounded-full" />
      <div className="absolute bottom-1/4 right-12 w-3 h-3 bg-primary-light/20 rounded-full" />
    </div>
  );
}

