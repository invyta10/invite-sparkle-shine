import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, Send } from "lucide-react";
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
      <img
        src={floralBottom}
        alt=""
        className="absolute bottom-0 right-0 w-48 md:w-72 opacity-50 pointer-events-none translate-x-1/4 translate-y-1/4"
      />

      <div className="max-w-lg mx-auto text-center relative z-10">
        <p
          className={`font-script text-3xl text-primary mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Will You Join Us?
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl text-foreground mb-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          RSVP
        </h2>
        <p
          className={`font-body text-muted-foreground mb-10 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Kindly respond by May 1, 2026
        </p>

        {submitted ? (
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-heartbeat" />
            <h3 className="font-display text-2xl text-foreground mb-2">Thank You!</h3>
            <p className="font-body text-muted-foreground">We can't wait to celebrate with you.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 text-left transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                required
                className="bg-card border-border font-body"
              />
              <Input
                placeholder="Last Name"
                required
                className="bg-card border-border font-body"
              />
            </div>
            <Input
              type="email"
              placeholder="Email Address"
              required
              className="bg-card border-border font-body"
            />
            <select
              required
              className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm font-body text-foreground"
              defaultValue=""
            >
              <option value="" disabled>
                Will you attend?
              </option>
              <option value="yes">Joyfully Accept</option>
              <option value="no">Regretfully Decline</option>
            </select>
            <Input
              type="number"
              placeholder="Number of Guests"
              min="1"
              max="5"
              className="bg-card border-border font-body"
            />
            <Textarea
              placeholder="Dietary restrictions or special message..."
              className="bg-card border-border font-body min-h-[80px]"
            />
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wider"
            >
              <Send className="w-4 h-4 mr-2" />
              Send RSVP
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
