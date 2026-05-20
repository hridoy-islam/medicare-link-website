// app/services/end-of-tenancy-cleaning/page.tsx
"use client";

import { EndOfTenancyCleaningContent } from "@/components/services/end-of-tenancy-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function EndOfTenancyCleaningPage() {
  const title = "End of Tenancy Cleaning";
  const subtitle = "Professional cleaning to help you get your deposit back";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book Now"
        buttonHref="/contact"
      />
      <EndOfTenancyCleaningContent />
    </SmoothScroll>
  );
}