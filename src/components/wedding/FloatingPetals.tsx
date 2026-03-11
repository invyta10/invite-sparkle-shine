import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const FloatingPetals = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const petals = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 16,
        delay: Math.random() * 10,
        duration: 10 + Math.random() * 10,
        rotate: Math.random() * 360,
        sway: 40 + Math.random() * 60,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    []
  );

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.size * 0.6,
            background: `radial-gradient(ellipse, hsl(var(--rose) / ${p.opacity}), hsl(var(--rose) / ${p.opacity * 0.3}))`,
            borderRadius: "50% 50% 50% 0",
            rotate: `${p.rotate}deg`,
          }}
          animate={{
            y: ["-5vh", "105vh"],
            x: [0, p.sway, -p.sway * 0.5, p.sway * 0.8, 0],
            rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" },
            x: { duration: p.duration * 0.8, repeat: Infinity, delay: p.delay, ease: "easeInOut" },
            rotate: {
              duration: p.duration * 1.2,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            },
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
