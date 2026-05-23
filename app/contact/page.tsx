"use client";

import { ContactSection } from "@/components/home/contact-section";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";

export default function ContactPage() {
const title = "Contact Us";
const subtitle = "Whether seeking dedicated support for a loved one or exploring a career in social care, our administrative hub is here to guide you.";
  return (
    <SmoothScroll>
      <Hero title={title} subtitle={subtitle} />
      <ContactSection />
    </SmoothScroll>
  );
}