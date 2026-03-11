import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import floralTop from "@/assets/floral-top.png";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Romantic sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Floral decoration */}
      <img
        src={floralTop}
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 md:w-[500px] opacity-90 animate-float pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className={`font-body text-sm md:text-base uppercase tracking-[0.4em] text-cream/80 mb-6 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We're Getting Married
        </p>

        <h1
          className={`font-script text-6xl md:text-8xl lg:text-9xl text-cream mb-4 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Sarah & James
        </h1>

        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="h-px w-16 bg-gold" />
          <span className="font-display text-lg md:text-xl text-cream/90 italic">
            June 15, 2026
          </span>
          <div className="h-px w-16 bg-gold" />
        </div>

        <p
          className={`font-body text-cream/70 text-sm md:text-base tracking-wider transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          The Grand Garden Estate • Napa Valley, California
        </p>

        {/* Scroll indicator */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-6 h-10 border-2 border-cream/40 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-cream/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
