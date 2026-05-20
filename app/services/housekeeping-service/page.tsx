// app/services/housekeeping-service/page.tsx
"use client";

import { HousekeepingServiceContent } from "@/components/services/housekeeping-service-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function HousekeepingServicePage() {
  const title = "Housekeeping Service";
  const subtitle = "Professional housekeeping to keep your home clean and comfortable";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book Housekeeper"
        buttonHref="/contact"
      />
      <HousekeepingServiceContent />
    </SmoothScroll>
  );
}