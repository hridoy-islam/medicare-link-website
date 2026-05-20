// app/services/domiciliary-care/page.tsx
"use client";

import { DomiciliaryCareContent } from "@/components/services/domiciliary-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function DomiciliaryCarePage() {
  const title = "Domiciliary Care";
  const subtitle = "Receive the care you need while staying in your own home";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Get Care at Home"
        buttonHref="/contact"
      />
      <DomiciliaryCareContent />
    </SmoothScroll>
  );
}