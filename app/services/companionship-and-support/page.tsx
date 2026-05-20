// app/services/companionship-and-support/page.tsx
"use client";

import { CompanionshipSupportContent } from "@/components/services/companionship-support-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function CompanionshipSupportPage() {
  const title = "Companionship and Support";
  const subtitle = "Friendly, caring companions to keep you socially engaged";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Find a Companion"
        buttonHref="/contact"
      />
      <CompanionshipSupportContent />
    </SmoothScroll>
  );
}