// app/services/live-in-care/page.tsx
"use client";

import { LiveInCareContent } from "@/components/services/live-in-care-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function LiveInCarePage() {
  const title = "Live In Care";
  const subtitle = "24-hour care provided to you in your own home";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <LiveInCareContent />
    </SmoothScroll>
  );
}