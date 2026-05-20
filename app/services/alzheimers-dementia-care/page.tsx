// app/services/alzheimers-dementia-care/page.tsx
"use client";

import { AlzheimersDementiaCareContent } from "@/components/services/alzheimers-dementia-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function AlzheimersDementiaCarePage() {
  const title = "Alzheimer's & Dementia Care";
  const subtitle = "Comfortable, supportive, secure, and safe environment for your loved ones";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <AlzheimersDementiaCareContent />
    </SmoothScroll>
  );
}