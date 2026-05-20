"use client";

import { CleaningSupportContent } from "@/components/services/CleaningSupportContent";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function CleaningSupportPage() {
  const title = "Cleaning Support";
  const subtitle = "Professional cleaning services tailored to your needs";

  return (
    <SmoothScroll>
      <Hero 
        title="Cleaning Support"
        subtitle="Professional cleaning services tailored to your needs"
        buttonText="Book a Cleaner"
        buttonHref="/contact"
      />
      <CleaningSupportContent />
    </SmoothScroll>
  );
}