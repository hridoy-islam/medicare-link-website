// app/services/one-off-cleaning-service/page.tsx
"use client";

import { OneOffCleaningContent } from "@/components/services/one-off-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function OneOffCleaningServicePage() {
  const title = "One-Off Cleaning Service";
  const subtitle = "Professional spring cleaning tailored to your schedule and needs";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
      
      />
      <OneOffCleaningContent />
    </SmoothScroll>
  );
}