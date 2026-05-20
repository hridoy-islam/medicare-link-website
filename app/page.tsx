// app/page.tsx
import { Hero } from "@/components/home/hero";

import { Cta } from "@/components/home/cta";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { AboutSection } from "@/components/home/AboutSection";
import { AimsSection } from "@/components/home/AimsSection";
import { ValuesSection } from "@/components/home/ValuesSection";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex flex-col min-h-screen bg-white">
        <Hero />
        <AboutSection />
        <AimsSection />
        <ValuesSection />
        <Cta />
      </main>
    </SmoothScroll>
  );
}