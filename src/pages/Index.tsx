import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import StorySection from "@/components/wedding/StorySection";
import DetailsSection from "@/components/wedding/DetailsSection";
import RsvpSection from "@/components/wedding/RsvpSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => (
  <main className="overflow-hidden">
    <HeroSection />
    <CountdownSection />
    <StorySection />
    <DetailsSection />
    <RsvpSection />
    <FooterSection />
  </main>
);

export default Index;
