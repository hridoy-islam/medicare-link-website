// app/services/healthcare-service/page.tsx
"use client";

import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { HealthcareServiceContent } from "@/components/services/healthcare-service-content";

export default function HealthcareServicePage() {
  const title = "Healthcare Services";
  const subtitle = "Comprehensive person-centred care tailored to your individual needs";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Get Care Today"
        buttonHref="/contact"
      />
      <HealthcareServiceContent />
    </SmoothScroll>
  );
}