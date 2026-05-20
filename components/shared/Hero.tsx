"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Decorative Background Components ────────────────────────────────────────

function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    />
  );
}

function NoiseMask() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

function RadialGlow() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Center pulse */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,100,100,0.35) 0%, rgba(220,30,30,0.12) 45%, transparent 70%)",
        }}
      />
      {/* Top-left accent orb */}
      <motion.div
        animate={{ y: [-12, 18, -12], x: [-8, 12, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-10 h-56 w-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,180,180,0.18) 0%, transparent 70%)",
        }}
      />
      {/* Bottom-right accent orb */}
      <motion.div
        animate={{ y: [10, -20, 10], x: [14, -14, 14] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-8 -right-8 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,120,120,0.14) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

function DiagonalStripes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -55deg,
          transparent,
          transparent 18px,
          rgba(255,255,255,0.8) 18px,
          rgba(255,255,255,0.8) 19px
        )`,
      }}
    />
  );
}

function TopEdgeShine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 right-0 top-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.6) 60%, transparent 100%)",
      }}
    />
  );
}

function BottomFade() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
      style={{
        background:
          "linear-gradient(to top, rgba(136,0,0,0.30) 0%, transparent 100%)",
      }}
    />
  );
}

function FloatingRing({
  size,
  top,
  left,
  delay = 0,
}: {
  size: number;
  top: string;
  left: string;
  delay?: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-full border border-white/10"
      style={{ width: size, height: size, top, left }}
      animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.6, 0.35] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

interface HeroProps {
  badgeText?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
}

export function Hero({
  badgeText = "",
  title,
  subtitle,
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden border-0 pb-24 pt-44 text-center md:pb-32 md:pt-52"
      style={{
        background:
          "linear-gradient(140deg, #b91c1c 0%, #991b1b 35%, #7f1d1d 65%, #450a0a 100%)",
      }}
    >
      {/* ── Layered decorative bg ── */}
      <GridLines />
      <NoiseMask />
      <DiagonalStripes />
      <RadialGlow />
      <TopEdgeShine />

      {/* Floating rings */}
      <FloatingRing size={320} top="-60px" left="-80px" delay={0} />
      <FloatingRing size={200} top="30%" left="82%" delay={1.5} />
      <FloatingRing size={140} top="65%" left="8%" delay={3} />

      {/* ── Content ── */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Badge */}
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-md backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-red-200" aria-hidden="true" />
              <span>{badgeText}</span>
              <Sparkles className="h-3.5 w-3.5 text-red-200" aria-hidden="true" />
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl"
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 0%, #fecaca 55%, #fca5a5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {title}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          {buttonText && buttonHref && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.55 }}
              className="flex flex-col items-center gap-4 sm:flex-row"
            >
              <Link href={buttonHref} className="group inline-block">
                <Button
                  size="xl"
                  variant="secondary"
                  className="bg-white font-semibold text-red-700 shadow-xl shadow-black/20 transition-all duration-300 hover:bg-red-50 hover:text-red-800 hover:shadow-2xl hover:shadow-black/30"
                >
                  {buttonText}
                  <ArrowRight
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      <BottomFade />
    </section>
  );
}