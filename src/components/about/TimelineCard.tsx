"use client";

interface TimelineCardProps {
  year: string;
  title: string;
  role?: string;
  descriptions: string[];
}

export default function TimelineCard({
  year,
  title,
  role,
  descriptions,
}: TimelineCardProps) {
  return (
    <div className="relative">
      <div className="absolute -left-[51px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
      <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary transition-all">
        <span className="text-primary font-bold text-lg">{year}</span>
        <h3 className="text-2xl font-bold mt-2 mb-1">{title}</h3>
        {role && <p className="text-primary-light text-lg mb-3">{role}</p>}
        {descriptions.length === 1 ? (
          <p className="text-white/60">{descriptions[0]}</p>
        ) : (
          <ul className="space-y-2">
            {descriptions.map((description, idx) => (
              <li key={idx} className="text-white/60 flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

