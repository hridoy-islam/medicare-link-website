// app/services/elderly-care/page.tsx
"use client";

import { ElderlyCareContent } from "@/components/services/elderly-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function ElderlyCarePage() {
  const title = "Elderly Care";
  const subtitle = "Private elderly care in the comfort of your own home";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Find a Carer"
        buttonHref="/contact"
      />
      <ElderlyCareContent />
    </SmoothScroll>
  );
}