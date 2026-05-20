// components/home/hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  const [activeSlide, setActiveSlide] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 50 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -50]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      duration: 60,
      dragFree: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', () => {
      setActiveSlide(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 20);
      mouseY.set((clientY / innerHeight - 0.5) * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Premium Background Layer */}
      <motion.div
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0"
      >
        {/* Carousel Viewport Wrapper - Added overflow-hidden */}
        <div className="relative w-full h-full overflow-hidden" ref={emblaRef}>
          {/* Carousel Track - Added backface-visibility hiding */}
          <div className="flex h-full [backface-visibility:hidden]">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                // Slide Container - Added transform-gpu and backface-visibility to eliminate gaps
                className="relative flex-[0_0_100%] h-full min-w-0 transform-gpu [backface-visibility:hidden]"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  // Swapped transition-all for transition-transform for better rendering performance
                  className={`object-cover transition-transform duration-1000 ${
                    index === activeSlide ? 'scale-105' : 'scale-100'
                  }`}
                  priority={index === 0}
                  quality={100}
                />
                {/* Sophisticated Gradient Overlay */}
              </div>
            ))}
          </div>
        </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

        {/* Animated Grain Texture */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </motion.div>

      {/* Floating Geometric Elements */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-[10%] w-32 h-32 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-[15%] w-24 h-24 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-[20%] w-16 h-16 bg-primary/20 blur-2xl rounded-full"
        />
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container relative z-20 max-w-6xl px-4 py-20"
      >
        <div className="text-center space-y-12">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-white text-sm font-semibold tracking-wider uppercase">
              MEDICARE LINK
            </span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
              Person-Centered Care
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 bg-primary bg-clip-text text-transparent">
                  With Dignity & Respect
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto tracking-wide"
          >
            24/7 Live-In Care • Professional Support • Person-Centered Approach
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center pt-4"
          >
            <Link href="/contact">
              <Button 
                size="xl" 
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-semibold shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Quality Care
                  <ArrowUpRight className="w-5 h-5 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === activeSlide 
                ? 'w-12 bg-primary' 
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
    </section>
  );
}