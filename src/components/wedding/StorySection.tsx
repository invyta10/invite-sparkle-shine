import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart } from "lucide-react";

const timeline = [
  { year: "2020", title: "First Meeting", desc: "We met at a friend's dinner party and spent the entire evening talking about our shared love of travel and good food." },
  { year: "2021", title: "First Trip Together", desc: "Our first adventure took us to the coast of Portugal, where we fell in love with the sunsets — and each other." },
  { year: "2023", title: "Moving In", desc: "We found our cozy little apartment filled with plants, books, and way too many throw pillows." },
  { year: "2025", title: "The Proposal", desc: "On a quiet evening under the stars, James asked the question, and Sarah said yes before he could finish." },
];

const StorySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p
          className={`font-script text-3xl text-primary mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Our Love Story
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl text-foreground transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          How It All Began
        </h2>
      </div>

      <div className="max-w-xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
  isVisible,
}: {
  item: (typeof timeline)[0];
  index: number;
  isVisible: boolean;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200 + 400}ms` }}
    >
      {/* Dot */}
      <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 z-10">
        <Heart className="w-3 h-3 text-primary-foreground" />
      </div>

      {/* Content */}
      <div
        className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
        }`}
      >
        <span className="font-display text-gold text-sm tracking-wider">{item.year}</span>
        <h3 className="font-display text-xl text-foreground mt-1 mb-2">{item.title}</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
};

export default StorySection;
