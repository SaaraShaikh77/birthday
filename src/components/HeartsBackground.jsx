import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function HeartsBackground({ count = 20 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 6,
      rotate: Math.random() * 360,
      size: 18 + Math.random() * 26
    }));
  }, [count]);

  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(h => (
        <motion.div
          key={h.id}
          className="absolute text-pink-300"
          style={{ left: `${h.left}vw`, top: "100vh", fontSize: `${h.size}px` }}
          initial={{ y: "100vh", opacity: 0, scale: 0.7 }}
          animate={{ y: "-130vh", opacity: [0, 1, 0], scale: [0.7, 1.05, 0.7], rotate: h.rotate }}
          transition={{ duration: h.duration, repeat: Infinity, repeatType: "loop", repeatDelay: h.delay, ease: "easeOut" }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
}
