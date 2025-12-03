"use client";

interface ProcessCardProps {
  step: string;
  description: string;
  index: number;
}

export default function ProcessCard({
  step,
  description,
  index,
}: ProcessCardProps) {
  return (
    <div className="flex items-start gap-6 bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-border">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold">
        {index + 1}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{step}</h3>
        <p className="text-white/60">{description}</p>
      </div>
    </div>
  );
}

