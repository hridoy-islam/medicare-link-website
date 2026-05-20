// components/home/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SLIDES = [
  { id: 1, src: "/hero-1.jpg", alt: "Elderly care recipient smiling with caregiver" },
  { id: 2, src: "/hero-2.jpg", alt: "Senior citizen enjoying quality care at home" },
  { id: 3, src: "/hero-3.jpg", alt: "Compassionate caregiver assisting elderly person" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[115vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[120%] w-full top-[-10%]"
      >
        <div className="relative w-full h-full" ref={emblaRef}>
          <div className="flex h-full">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] h-full min-w-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover brightness-[0.45]"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container relative z-10 text-center max-w-5xl px-4"
      >
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-2xl md:text-4xl text-secondary font-bold tracking-[5px] uppercase "
          >
            MEDICARE LINK
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-3xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-8"
          >
            Person-Centered{" "}
            <span className="text-primary">Care</span>
            <br />
            With Dignity & Respect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mb-10"
          >
            24/7 Live-In Care • Professional Support • Person-Centered Approach
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <Link href="/contact">
              <Button size="xl" className="group">
                Get Quality Care
                <span className=" h-10 w-10  flex items-center justify-center">
                  <ArrowUpRight size={24} />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Normal bottom divider - straight line */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white z-20" />
    </section>
  );
}