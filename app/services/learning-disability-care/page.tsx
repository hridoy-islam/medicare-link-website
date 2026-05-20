// app/services/learning-disability-care/page.tsx
"use client";

import { LearningDisabilityCareContent } from "@/components/services/learning-disability-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function LearningDisabilityCarePage() {
  const title = "Learning Disability Care";
  const subtitle = "Expert care for people living with disabilities in their own home";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Get Support Today"
        buttonHref="/contact"
      />
      <LearningDisabilityCareContent />
    </SmoothScroll>
  );
}