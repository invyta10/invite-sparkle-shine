import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Clock, Flower2, UtensilsCrossed } from "lucide-react";

const events = [
  {
    icon: Flower2,
    title: "The Ceremony",
    time: "4:00 PM",
    location: "The Rose Garden",
    address: "Grand Garden Estate, Napa Valley, CA",
    note: "Please be seated by 3:45 PM",
  },
  {
    icon: UtensilsCrossed,
    title: "The Reception",
    time: "6:00 PM",
    location: "The Grand Ballroom",
    address: "Grand Garden Estate, Napa Valley, CA",
    note: "Dinner, dancing & celebration",
  },
];

const DetailsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p
          className={`font-script text-3xl text-primary mb-2 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Wedding Day
        </p>
        <h2
          className={`font-display text-3xl md:text-4xl text-foreground transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Event Details
        </h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <div
            key={i}
            className={`bg-background rounded-lg p-8 border border-border text-center shadow-sm hover:shadow-md transition-all duration-700 hover:-translate-y-1 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${i * 200 + 400}ms` }}
          >
            <event.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl text-foreground mb-4">{event.title}</h3>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
              <Clock className="w-4 h-4" />
              <span className="font-body text-sm">{event.time}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-1">
              <MapPin className="w-4 h-4" />
              <span className="font-body text-sm font-semibold">{event.location}</span>
            </div>
            <p className="font-body text-xs text-muted-foreground mb-4">{event.address}</p>
            <div className="h-px w-12 bg-primary/30 mx-auto mb-4" />
            <p className="font-body text-sm text-muted-foreground italic">{event.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailsSection;
