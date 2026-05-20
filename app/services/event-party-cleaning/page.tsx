// app/services/event-party-cleaning/page.tsx
"use client";

import { EventPartyCleaningContent } from "@/components/services/event-party-cleaning-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function EventPartyCleaningPage() {
  const title = "Event & Party Cleaning";
  const subtitle = "Before and after party cleaning services in London at the best quote";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Book Party Cleaner"
        buttonHref="/contact"
      />
      <EventPartyCleaningContent />
    </SmoothScroll>
  );
}