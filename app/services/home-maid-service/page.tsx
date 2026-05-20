// app/services/home-maid-service/page.tsx
"use client";

import { HomeMaidServiceContent } from "@/components/services/home-maid-service-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function HomeMaidServicePage() {
  const title = "Home Maid Service";
  const subtitle = "Professional home cleaning services at competitive hourly rates";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book Maid Service"
        buttonHref="/contact"
      />
      <HomeMaidServiceContent />
    </SmoothScroll>
  );
}