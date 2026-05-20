// app/services/page.tsx
"use client";

import { ServicesContent } from "@/components/services/services-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function ServicesPage() {
  const title = "OUR SERVICES";
  const subtitle = "Comprehensive care and cleaning solutions tailored to your individual needs";

  return (
    <SmoothScroll>
      <Hero title={title} subtitle={subtitle} />
      <ServicesContent />
    </SmoothScroll>
  );
}