"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "../animations/MagneticButton";

export default function ScrollIndicator() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <MagneticButton strength={0.5}>
        <motion.button
          onClick={handleScroll}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-primary transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </MagneticButton>
    </div>
  );
}

