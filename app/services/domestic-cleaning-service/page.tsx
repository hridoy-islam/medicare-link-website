// app/services/domestic-cleaning-service/page.tsx
"use client";

import { DomesticCleaningServiceContent } from "@/components/services/domestic-cleaning-service-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function DomesticCleaningServicePage() {
  const title = "Domestic Cleaning Service";
  const subtitle = "High-quality domestic cleaning services across all London areas";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book a Cleaner"
        buttonHref="/contact"
      />
      <DomesticCleaningServiceContent />
    </SmoothScroll>
  );
}