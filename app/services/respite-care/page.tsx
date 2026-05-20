// app/services/respite-care/page.tsx
"use client";

import { RespiteCareContent } from "@/components/services/respite-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function RespiteCarePage() {
  const title = "Respite Care";
  const subtitle = "Temporary care for the elderly when regular carers need a break";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <RespiteCareContent />
    </SmoothScroll>
  );
}