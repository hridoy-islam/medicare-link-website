"use client";

import { AboutContent } from "@/components/about/AboutContent";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function AboutPage() {
  const title = "About Medicare Link";
  const subtitle = "Fully qualified and empathetic care providers dedicated to person-centered support";

  return (
    <SmoothScroll>
      <Hero title={title} subtitle={subtitle} />
      <AboutContent />
    </SmoothScroll>
  );
}