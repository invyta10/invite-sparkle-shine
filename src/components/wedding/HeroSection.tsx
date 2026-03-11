import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import floralTop from "@/assets/floral-top.png";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img src={heroBg} alt="Romantic sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </motion.div>

      {/* Floral decoration with float */}
      <motion.img
        src={floralTop}
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 md:w-[500px] opacity-90 pointer-events-none"
        animate={{ y: [0, -12, 0], rotate: [0, 1, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cinematic light rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, hsl(var(--gold) / 0.1) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          className="font-body text-sm md:text-base uppercase tracking-[0.4em] text-cream/80 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're Getting Married
        </motion.p>

        <motion.h1
          className="font-script text-6xl md:text-8xl lg:text-9xl text-cream mb-4"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        >
          Sarah & James
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={loaded ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-px w-16 bg-gold" />
          <span className="font-display text-lg md:text-xl text-cream/90 italic">June 15, 2026</span>
          <div className="h-px w-16 bg-gold" />
        </motion.div>

        <motion.p
          className="font-body text-cream/70 text-sm md:text-base tracking-wider"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          The Grand Garden Estate • Napa Valley, California
        </motion.p>

        {/* Animated scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cream/40 rounded-full mx-auto flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-cream/60 rounded-full mt-2"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
