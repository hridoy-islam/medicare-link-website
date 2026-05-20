"use client";

import { OfficeCleaningContent } from "@/components/services/office-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function OfficeCleaningPage() {
  const title = "Office Cleaning";
  const subtitle = "A clean office is a productive office - transform your commercial space";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Get a Quote"
        buttonHref="/contact"
      />
      <OfficeCleaningContent />
    </SmoothScroll>
  );
}