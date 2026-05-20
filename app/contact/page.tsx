"use client";

import { ContactSection } from "@/components/home/contact-section";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function ContactPage() {
  const title = "Get in Touch";
  const subtitle = "We're here to help 24/7 – reach out for care, support, or career opportunities";

  return (
    <SmoothScroll>
      <Hero title={title} subtitle={subtitle} />
      <ContactSection />
    </SmoothScroll>
  );
}