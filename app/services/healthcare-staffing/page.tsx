// app/services/healthcare-staffing/page.tsx
"use client";

import { HealthcareStaffingContent } from "@/components/services/healthcare-staffing-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function HealthcareStaffingPage() {
  const title = "Healthcare Staffing";
  const subtitle = "Quality healthcare professionals for clients across all healthcare environments";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <HealthcareStaffingContent />
    </SmoothScroll>
  );
}