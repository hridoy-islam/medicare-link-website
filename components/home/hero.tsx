"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

// ─── Slide data (Fixed positions in the stack) ────────────────────────────────

const IMAGES = [
  { src: "/hero-1.jpg", alt: "Elderly care recipient smiling with caregiver" },
  { src: "/hero-2.jpg", alt: "Senior citizen enjoying quality care at home" },
  {
    src: "/hero-3.jpg",
    alt: "Compassionate caregiver assisting elderly person",
  },
];

// ─── Floating card ────────────────────────────────────────────────────────────

function FloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="absolute bottom-4 left-2 sm:bottom-10 sm:left-4 z-30 w-48 sm:w-56 rounded-2xl bg-primary p-3 sm:p-4 shadow-2xl shadow-primary/30 backdrop-blur-md transition-shadow duration-300 hover:shadow-primary/50 max-sm:hidden"
    >
      <div className="mb-2 sm:mb-3 flex items-center justify-between">
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-white/70" />
      </div>
      <p className="text-xs sm:text-sm font-semibold leading-snug text-white tracking-tight">
        Fast &amp; Reliable Care Delivery
      </p>
    </motion.div>
  );
}

// ─── Image stack (Fixed/Still Left/Right/Bottom Layout) ───────────────────────

function ImageStack() {
  return (
    <div className="relative h-full w-full select-none mt-8 lg:mt-0">
      {/* Main tall card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute left-0 sm:left-4 top-0 sm:-top-6 h-[65%] sm:h-[68%] w-[62%] sm:w-[58%] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-100"
      >
        <Image
          src={IMAGES[0].src}
          alt={IMAGES[0].alt}
          fill
          className="object-cover scale-105"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </motion.div>

      {/* Tall right card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute right-0 top-8 sm:top-14 h-[48%] sm:h-[55%] w-[42%] sm:w-[38%] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-100"
      >
        <Image
          src={IMAGES[1].src}
          alt={IMAGES[1].alt}
          fill
          className="object-cover"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      </motion.div>

      {/* Bottom right card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute bottom-6 sm:bottom-0 right-0 h-[30%] sm:h-[34%] w-[65%] sm:w-[60%] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-100 z-10"
      >
        <Image
          src={IMAGES[2].src}
          alt={IMAGES[2].alt}
          fill
          className="object-cover"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        {/* "Lab-trusted" pill overlay */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 rounded-xl bg-white/95 px-2 py-1 sm:px-3 sm:py-1.5 shadow-sm backdrop-blur-md border border-slate-100">
          <p className="text-[9px] sm:text-[11px] font-bold tracking-tight text-slate-800">
            Certified &amp; Trusted Care
          </p>
        </div>
      </motion.div>

      {/* Floating card on image stack */}
      <FloatingCard />
    </div>
  );
}

// ─── Animated background shapes ───────────────────────────────────────────────

function BgShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden "
    >
      {/* large soft circle top-right */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-16 -top-16 sm:-right-32 sm:-top-32 h-[300px] w-[300px] sm:h-[520px] sm:w-[520px] rounded-full bg-primary"
        style={{ filter: "blur(90px)" }}
      />
      {/* smaller bottom-left */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute  -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-primary"
        style={{ filter: "blur(70px)" }}
      />
      {/* floating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="max-sm:hidden absolute right-[5%] sm:right-[12%] top-[5%] sm:top-[8%] h-20 w-20 sm:h-28 sm:w-28 rounded-full border border-primary/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] sm:right-[14%] top-[8%] sm:top-[10%] h-12 w-12 sm:h-16 sm:w-16 rounded-full border border-primary/10"
      />
      {/* premium dot grid accent */}
      <div
        className="absolute max-sm:hidden left-0 top-0 h-full w-full sm:w-56 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 40 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      // Safely check window exists
      if (typeof window !== "undefined") {
        mouseX.set((e.clientX / window.innerWidth - 0.5) * 16);
        mouseY.set((e.clientY / window.innerHeight - 0.5) * 16);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-white to-primary/20 flex items-center pt-20 pb-12 lg:pt-0 lg:pb-0">
      <BgShapes />

      {/* ── Main grid ── */}
      <div className="container px-4 sm:px-6 relative z-10 mx-auto flex flex-col items-center gap-8 lg:flex-row lg:gap-12 py-8 sm:py-16 lg:py-0">
        
        {/* ── Left: text ── */}
        <div className="flex flex-1 flex-col items-start text-left w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary">
              Medicare Link
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="mb-4 sm:mb-6 text-4xl sm:text-5xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
          >
            Person-Centered
            <br />
            <span className="mt-1 sm:mt-2 inline-flex items-center gap-2 sm:gap-3 lg:gap-4">
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.45,
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="inline-flex h-9 w-9 sm:h-12 sm:w-12 lg:h-16 lg:w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary shadow-lg shadow-primary/30"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21C12 21 3 15.75 3 9a9 9 0 0118 0c0 6.75-9 12-9 12z"
                  />
                </svg>
              </motion.span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent pb-2 sm:pb-5">
                Care &amp; Dignity
              </span>
            </span>
          </motion.h1>

          {/* Vertical rule + description */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-8 sm:mb-10 flex gap-3 sm:gap-4 border-l-4 border-primary/20 pl-3 sm:pl-4"
          >
            <p className="max-w-md text-sm sm:text-base md:text-lg leading-relaxed text-slate-500 font-medium">
              24/7 live-in care with a personal touch. Professional support
              delivered with deep compassion, dignity, and absolute respect for
              independence.
            </p>
          </motion.div>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.55 }}
            className="mb-4 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Link href="/contact" className="cursor-pointer w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full sm:w-auto relative cursor-pointer overflow-hidden rounded-full bg-primary px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-primary/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Quality Care
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* ── Right: image stack ── */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="relative h-[380px] sm:h-[480px] w-full flex-1 md:h-[540px] lg:h-[620px] max-sm:hidden mt-28"
        >
          <ImageStack />
        </motion.div>
      </div>
    </section>
  );
}