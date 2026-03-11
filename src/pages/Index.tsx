import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "@/components/wedding/EnvelopeIntro";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import StorySection from "@/components/wedding/StorySection";
import DetailsSection from "@/components/wedding/DetailsSection";
import RsvpSection from "@/components/wedding/RsvpSection";
import FooterSection from "@/components/wedding/FooterSection";
import FloatingPetals from "@/components/wedding/FloatingPetals";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!introComplete && <EnvelopeIntro onComplete={() => setIntroComplete(true)} />}
      </AnimatePresence>

      {introComplete && (
        <main className="overflow-hidden">
          <FloatingPetals />
          <HeroSection />
          <CountdownSection />
          <StorySection />
          <DetailsSection />
          <RsvpSection />
          <FooterSection />
        </main>
      )}
    </>
  );
};

export default Index;
