// app/services/palliative-care/page.tsx
"use client";

import { PalliativeCareContent } from "@/components/services/palliative-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function PalliativeCarePage() {
  const title = "Palliative & End of Life Care";
  const subtitle = "Specialized medical care focusing on comfort, dignity, and quality of life";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <PalliativeCareContent />
    </SmoothScroll>
  );
}