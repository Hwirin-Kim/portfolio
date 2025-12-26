"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
}: CTASectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <ScrollReveal>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-white/70 mb-8">{description}</p>
          <Link
            href={buttonHref}
            prefetch={false}
            className="inline-block px-8 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary-light transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            {buttonText}
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

