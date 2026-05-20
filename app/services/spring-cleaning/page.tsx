// app/services/spring-cleaning/page.tsx
"use client";

import { SpringCleaningContent } from "@/components/services/spring-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function SpringCleaningPage() {
  const title = "Spring Cleaning";
  const subtitle = "Professional deep cleaning to refresh your home and reduce stress";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book Spring Clean"
        buttonHref="/contact"
      />
      <SpringCleaningContent />
    </SmoothScroll>
  );
}