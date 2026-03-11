import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart } from "lucide-react";

const timeline = [
  { year: "2020", title: "First Meeting", desc: "We met at a friend's dinner party and spent the entire evening talking about our shared love of travel and good food." },
  { year: "2021", title: "First Trip Together", desc: "Our first adventure took us to the coast of Portugal, where we fell in love with the sunsets — and each other." },
  { year: "2023", title: "Moving In", desc: "We found our cozy little apartment filled with plants, books, and way too many throw pillows." },
  { year: "2025", title: "The Proposal", desc: "On a quiet evening under the stars, James asked the question, and Sarah said yes before he could finish." },
];

const StorySection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="py-24 px-6 bg-background overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.p
          className="font-script text-3xl text-primary mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Our Love Story
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          How It All Began
        </motion.h2>
      </div>

      <div className="max-w-xl mx-auto relative">
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px origin-top"
          initial={{ scaleY: 0 }}
          animate={isVisible ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              className="relative flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.25 + 0.5 }}
            >
              {/* Animated dot */}
              <motion.div
                className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-2 mt-1 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.25 + 0.5, type: "spring" }}
                whileHover={{ scale: 1.5 }}
              >
                <Heart className="w-2.5 h-2.5 text-primary-foreground" />
              </motion.div>

              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className="bg-card rounded-lg p-5 border border-border shadow-sm"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 30px hsl(var(--primary) / 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-display text-gold text-sm tracking-wider">{item.year}</span>
                  <h3 className="font-display text-xl text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StorySection;
