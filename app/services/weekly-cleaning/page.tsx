// app/services/weekly-cleaning/page.tsx
"use client";

import { WeeklyCleaningContent } from "@/components/services/weekly-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function WeeklyCleaningPage() {
  const title = "Weekly Cleaning Service";
  const subtitle = "Professional weekly house cleaning services to transform your daily life";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book Weekly Cleaning"
        buttonHref="/contact"
      />
      <WeeklyCleaningContent />
    </SmoothScroll>
  );
}