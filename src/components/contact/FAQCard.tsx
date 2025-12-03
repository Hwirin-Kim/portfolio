"use client";

import { motion } from "framer-motion";
import { FAQ } from "@/lib/data/contact";

interface FAQCardProps {
  faq: FAQ;
  index: number;
}

export default function FAQCard({ faq, index }: FAQCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border"
    >
      <h3 className="text-xl font-bold mb-2 text-primary">{faq.q}</h3>
      <p className="text-white/70">{faq.a}</p>
    </motion.div>
  );
}

