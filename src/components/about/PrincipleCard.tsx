"use client";

interface PrincipleCardProps {
  title: string;
  description: string;
}

export default function PrincipleCard({
  title,
  description,
}: PrincipleCardProps) {
  return (
    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all">
      <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  );
}

