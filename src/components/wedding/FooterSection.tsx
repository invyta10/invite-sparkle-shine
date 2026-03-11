import { Heart } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 px-6 bg-foreground text-center">
    <p className="font-script text-4xl text-cream mb-2">S & J</p>
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-10 bg-cream/30" />
      <Heart className="w-4 h-4 text-primary" />
      <div className="h-px w-10 bg-cream/30" />
    </div>
    <p className="font-body text-cream/60 text-sm">June 15, 2026 • Napa Valley, California</p>
    <p className="font-body text-cream/40 text-xs mt-4">Made with love</p>
  </footer>
);

export default FooterSection;
