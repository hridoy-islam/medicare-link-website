"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

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
        backgroundSize: "48px 48px",
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
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.5) 65%, transparent 100%)",
      }}
    />
  );
}

function BottomFade() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-20"
      style={{
        background:
          "linear-gradient(to top, rgba(100,0,0,0.35) 0%, transparent 100%)",
      }}
    />
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
        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(220,38,38,0.4) 0%, rgba(185,28,28,0.18) 45%, transparent 70%)",
        }}
      />
      {/* Top-left orb */}
      <motion.div
        animate={{ y: [-10, 14, -10], x: [-6, 10, -6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-14 -top-5 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(254,202,202,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Bottom-right orb */}
      <motion.div
        animate={{ y: [8, -18, 8], x: [12, -12, 12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-8 -right-10 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(252,165,165,0.10) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

// ─── Floating Line Accents (replaces doodles) ────────────────────────────────

function FloatingLines() {
  const lines = [
    { top: "18%", left: "8%",  width: 80,  rotate: -12, delay: 0,   duration: 7  },
    { top: "22%", left: "11%", width: 40,  rotate: -12, delay: 0.3, duration: 7  },
    { bottom: "26%", right: "10%", width: 60, rotate: 10, delay: 0,  duration: 9  },
    { bottom: "32%", right: "13%", width: 32, rotate: 10, delay: 0.4, duration: 9  },
    { top: "55%", right: "6%",  width: 50,  rotate: -8,  delay: 1,   duration: 6  },
    { bottom: "18%", left: "14%", width: 70, rotate: 14, delay: 1.5, duration: 8  },
  ];

  const diamonds = [
    { top: "15%",  right: "18%", delay: 0.5, duration: 6  },
    { bottom: "20%", left: "18%",  delay: 1,   duration: 8  },
    { top: "38%",  left: "7%",   delay: 2,   duration: 7  },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map((line, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute rounded-sm"
          style={{
            top: line.top,
            left: line.left,
            right: (line as { right?: string }).right,
            bottom: (line as { bottom?: string }).bottom,
            width: line.width,
            height: 1.5,
            background: "rgba(255,255,255,0.10)",
            transform: `rotate(${line.rotate}deg)`,
          }}
          animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: line.delay,
          }}
        />
      ))}
      {diamonds.map((d, i) => (
        <motion.div
          key={`diamond-${i}`}
          className="absolute"
          style={{
            top: d.top,
            bottom: (d as { bottom?: string }).bottom,
            left: (d as { left?: string }).left,
            right: (d as { right?: string }).right,
            width: 6,
            height: 6,
            background: "rgba(255,255,255,0.18)",
            transform: "rotate(45deg)",
          }}
          animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
        />
      ))}
    </div>
  );
}

// ─── Animated Breadcrumb ─────────────────────────────────────────────────────

function BlinkingDot() {
  return (
    <motion.span
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="inline-block h-1 w-1 rounded-full bg-white/40"
    />
  );
}

function AnimatedBreadcrumb({ title }: { title: string }) {
  return (
    <motion.nav
      aria-label="Breadcrumb"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="mb-5 flex justify-center"
    >
      <div
        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.18] bg-white/[0.08] px-3.5 py-1.5"
        style={{ backdropFilter: "blur(8px)" }}
      >
        {/* Home */}
        <Link
          href="/"
          className="flex items-center gap-1 text-[12.5px] text-white/65 transition-colors hover:text-white/90"
        >
          <Home className="h-3 w-3" aria-hidden="true" />
          <span>Home</span>
        </Link>

        {/* Separator */}
        <ChevronRight className="h-3 w-3 text-white/30" aria-hidden="true" />

        {/* Blinking dot */}
        <BlinkingDot />

        {/* Current page */}
        <motion.span
          key={title}
          initial={{ opacity: 0, x: 6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-[180px] truncate text-[12.5px] font-medium text-red-200"
        >
          {title}
        </motion.span>
      </div>
    </motion.nav>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────

function BadgeDot() {
  return (
    <motion.span
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="inline-block h-[5px] w-[5px] rounded-full bg-red-300"
    />
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

interface HeroProps {
  badgeText?: string;
  title: string;
  subtitle: string;
  buttonText?:string;
  buttonHref?:string;

}

export function Hero({ badgeText = "", title, subtitle,buttonText="",buttonHref="" }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-28 text-center md:pb-20 md:pt-36"
      style={{
        background:
          "linear-gradient(140deg, #b91c1c 0%, #991b1b 35%, #7f1d1d 65%, #450a0a 100%)",
      }}
    >
      {/* ── Layered decorative bg ── */}
      <GridLines />
      <RadialGlow />
      <FloatingLines />
      <TopEdgeShine />

      {/* ── Content ── */}
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

          {/* Breadcrumb */}
          <AnimatedBreadcrumb title={title} />

          {/* Badge */}
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-medium uppercase tracking-widest text-red-200"
            >
              <BadgeDot />
              {badgeText}
              <BadgeDot />
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
            className="mb-4 text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #fecaca 60%, #fca5a5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg"
          >
            {subtitle}
          </motion.p>

          

         
        </div>
      </div>

      <BottomFade />
    </section>
  );
}