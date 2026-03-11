import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart } from "lucide-react";

const WEDDING_DATE = new Date("2026-06-15T16:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
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
    <section ref={ref} className="py-24 px-6 bg-card text-center">
      <div
        className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Heart className="w-8 h-8 text-primary mx-auto mb-6 animate-heartbeat" />
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
          Counting Down to Forever
        </h2>
        <p className="font-body text-muted-foreground mb-12">Until we say "I do"</p>

        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {units.map((u, i) => (
            <div
              key={u.label}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150 + 300}ms` }}
            >
              <div className="bg-background rounded-lg p-4 md:p-6 shadow-sm border border-border">
                <span className="font-display text-3xl md:text-5xl text-primary block">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-2 block">
                  {u.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
