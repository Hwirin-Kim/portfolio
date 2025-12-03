"use client";

import { motion } from "framer-motion";
import { ContactMethod } from "@/lib/data/contact";

interface ContactCardProps {
  method: ContactMethod;
  index: number;
}

export default function ContactCard({ method, index }: ContactCardProps) {
  const Icon = method.icon;

  return (
    <motion.a
      href={method.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group hover:scale-[1.02] hover:-translate-y-1 will-change-transform"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-200">
            {method.label}
          </h3>
          <p className="text-white/60">{method.value}</p>
        </div>
      </div>
    </motion.a>
  );
}

