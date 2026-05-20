// app/join/page.tsx
"use client";

import { JoinContent } from "@/components/join-medicare-link/join-content";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function JoinPage() {
  const title = "JOIN MEDICARE LINK";
  const subtitle = "Join our team of key workers and make a difference in your community";

  return (
    <SmoothScroll>
      <Hero 
        title={title}
        subtitle={subtitle}
        buttonText="Apply Now"
        buttonHref="#apply-form"
      />
      <JoinContent />
    </SmoothScroll>
  );
}