// app/services/acquired-brain-injury/page.tsx
"use client";

import { AcquiredBrainInjuryContent } from "@/components/services/acquired-brain-injury-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function AcquiredBrainInjuryPage() {
  const title = "Acquired Brain Injury";
  const subtitle = "Innovative, proactive, and person-centered rehabilitation for adults with ABI";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <AcquiredBrainInjuryContent />
    </SmoothScroll>
  );
}