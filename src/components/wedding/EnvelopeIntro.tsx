import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import envelopeImg from "@/assets/envelope-front.png";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

const EnvelopeIntro = ({ onComplete }: EnvelopeIntroProps) => {
  const [phase, setPhase] = useState<"idle" | "opening" | "done">("idle");

  const handleOpen = () => {
    setPhase("opening");
    setTimeout(() => setPhase("done"), 1800);
    setTimeout(onComplete, 2600);
  };

  return (
    <AnimatePresence>
      {phase !== "done" ? null : undefined}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground overflow-hidden"
        initial={{ opacity: 1 }}
        animate={phase === "done" ? { opacity: 0 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: phase === "done" ? 0 : 0 }}
      >
        {/* Floating golden particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="relative flex flex-col items-center">
          {/* Envelope */}
          <motion.div
            className="relative cursor-pointer"
            onClick={phase === "idle" ? handleOpen : undefined}
            whileHover={phase === "idle" ? { scale: 1.03, y: -5 } : {}}
            animate={
              phase === "opening"
                ? { rotateX: -15, scale: 1.1 }
                : phase === "idle"
                ? { y: [0, -8, 0] }
                : {}
            }
            transition={
              phase === "idle"
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.6 }
            }
          >
            <img
              src={envelopeImg}
              alt="Wedding Invitation Envelope"
              className="w-64 md:w-80 drop-shadow-2xl"
            />

            {/* Envelope flap opening */}
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 origin-top"
              style={{ perspective: 800 }}
              animate={
                phase === "opening"
                  ? { rotateX: -180, opacity: 0 }
                  : {}
              }
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <div className="w-full h-full bg-gradient-to-b from-transparent to-transparent" />
            </motion.div>

            {/* Inner glow on open */}
            <motion.div
              className="absolute inset-0 bg-gold/20 rounded-lg"
              animate={phase === "opening" ? { opacity: [0, 0.5, 1] } : { opacity: 0 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          {/* Letter rising out */}
          <AnimatePresence>
            {phase === "opening" && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ y: 0, opacity: 0, scale: 0.8 }}
                animate={{ y: -60, opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-cream border border-border rounded-lg p-8 shadow-2xl text-center max-w-xs">
                  <p className="font-script text-2xl text-primary">You're Invited</p>
                  <div className="h-px w-12 bg-gold mx-auto my-3" />
                  <p className="font-display text-lg text-foreground">Sarah & James</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">June 15, 2026</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to action */}
          {phase === "idle" && (
            <motion.p
              className="mt-8 font-body text-cream/60 text-sm tracking-widest uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to Open
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnvelopeIntro;
