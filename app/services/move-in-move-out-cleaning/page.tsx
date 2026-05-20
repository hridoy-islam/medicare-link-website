"use client";

import { MoveInMoveOutCleaningContent } from "@/components/services/move-in-move-out-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function MoveInMoveOutCleaningPage() {
  const title = "Moving In/Move Out Cleaning";
  const subtitle = "Professional cleaning service for a stress-free moving experience";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Get a Quote"
        buttonHref="/contact"
      />
      <MoveInMoveOutCleaningContent />
    </SmoothScroll>
  );
}