// app/services/healthcare-staffing/page.tsx
"use client";

import { HealthcareStaffingServiceContent } from "@/components/services/healthcare-staffing-service-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function HealthcareStaffingPage() {
  const title = "Healthcare Staffing Service";
  const subtitle = "Quality healthcare professionals for clients across all healthcare environments";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <HealthcareStaffingServiceContent />
    </SmoothScroll>
  );
}