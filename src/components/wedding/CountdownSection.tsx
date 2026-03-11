import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart } from "lucide-react";

const WEDDING_DATE = new Date("2026-06-15T16:00:00");

const CountdownSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-card text-center overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={isVisible ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="w-8 h-8 text-primary mx-auto mb-6" />
        </motion.div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
          Counting Down to Forever
        </h2>
        <p className="font-body text-muted-foreground mb-12">Until we say "I do"</p>

        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 40, rotateY: 90 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
            >
              <motion.div
                className="bg-background rounded-lg p-4 md:p-6 shadow-sm border border-border"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px hsl(var(--primary) / 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="font-display text-3xl md:text-5xl text-primary block"
                  key={u.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(u.value).padStart(2, "0")}
                </motion.span>
                <span className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-2 block">
                  {u.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
