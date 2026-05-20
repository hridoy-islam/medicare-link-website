// app/services/mental-health-care/page.tsx
"use client";

import { MentalHealthCareContent } from "@/components/services/mental-health-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function MentalHealthCarePage() {
  const title = "Mental Health Care";
  const subtitle = "Person-centered care approach for mental health support";

  return (
    <SmoothScroll>
      <Hero 
        badgeText="Mental Health Support"
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <MentalHealthCareContent />
    </SmoothScroll>
  );
}