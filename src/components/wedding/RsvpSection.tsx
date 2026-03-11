import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, Send, Sparkles } from "lucide-react";
import floralBottom from "@/assets/floral-bottom.png";

const RsvpSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We can't wait to celebrate with you! 💕");
  };

  return (
    <section ref={ref} className="relative py-24 px-6 bg-background overflow-hidden">
      <motion.img
        src={floralBottom}
        alt=""
        className="absolute bottom-0 right-0 w-48 md:w-72 opacity-50 pointer-events-none translate-x-1/4 translate-y-1/4"
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <motion.p
          className="font-script text-3xl text-primary mb-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Will You Join Us?
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          RSVP
        </motion.h2>
        <motion.p
          className="font-body text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Kindly respond by May 1, 2026
        </motion.p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="py-12"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              </motion.div>
              <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
              <p className="font-body text-muted-foreground">We can't wait to celebrate with you.</p>
              {/* Celebration particles */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: "50%", top: "40%" }}
                  animate={{
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                    opacity: [1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{ duration: 1.5, delay: i * 0.05 }}
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-4 text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" required className="bg-card border-border font-body" />
                <Input placeholder="Last Name" required className="bg-card border-border font-body" />
              </div>
              <Input type="email" placeholder="Email Address" required className="bg-card border-border font-body" />
              <select
                required
                className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm font-body text-foreground"
                defaultValue=""
              >
                <option value="" disabled>Will you attend?</option>
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
              <Input type="number" placeholder="Number of Guests" min="1" max="5" className="bg-card border-border font-body" />
              <Textarea placeholder="Dietary restrictions or special message..." className="bg-card border-border font-body min-h-[80px]" />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider">
                  <Send className="w-4 h-4 mr-2" />
                  Send RSVP
                </Button>
              </motion.div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RsvpSection;
