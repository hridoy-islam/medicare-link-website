// app/services/residential-care/page.tsx
"use client";

import { ResidentialCareContent } from "@/components/services/residential-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function ResidentialCarePage() {
  const title = "Residential Care";
  const subtitle = "Supportive living environment for those who need daily assistance";

  return (
    <SmoothScroll>
      <Hero 
        badgeText="Care Homes"
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <ResidentialCareContent />
    </SmoothScroll>
  );
}