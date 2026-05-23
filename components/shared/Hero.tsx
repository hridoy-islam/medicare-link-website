"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

interface HeroProps {
  badgeText?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
}

export function Hero({ 
  badgeText, 
  title, 
  subtitle, 
  buttonText = "", 
  buttonHref = "" ,
  image="/home/6.jpg"
}: HeroProps) {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-black py-28 md:py-36 flex items-center">
      {/* ── Background Image Layer ── */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${image})`, // ✅ Fixed - template literal outside
        }}
      />

      {/* ── High Contrast Cinematic Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* ── Edge Top Accent Line ── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10" />

      <div className="container relative z-10 mx-auto ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Block Text Column */}
          <div className="flex flex-col items-start text-left lg:col-span-9 xl:col-span-8">
            
            {/* ── Modern Breadcrumb Navigation ── */}
            <motion.nav
              aria-label="Breadcrumb"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-400"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Home className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Home</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-zinc-600" aria-hidden="true" />
              <span className="max-w-[200px] truncate text-primary uppercase tracking-wider">
                {title}
              </span>
            </motion.nav>

            {/* ── High Contrast Title ── */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-4xl font-black tracking-tight text-primary sm:text-5xl md:text-6xl lg:leading-[1.12]"
            >
              {title}
            </motion.h1>

            {/* ── Clean Contrastive Subtitle ── */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 max-w-5xl text-2xl font-semibold leading-relaxed text-zinc-200 drop-shadow-sm"
            >
              {subtitle}
            </motion.h3>

            {/* ── Dynamic Action Fields ── */}
            {buttonText && buttonHref && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link 
                  href={buttonHref} 
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded bg-white px-6 py-3.5 text-sm font-bold text-black shadow-xl transition-all duration-300 hover:bg-zinc-200 active:scale-[0.98]"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )}
          </div>

          <div className="hidden lg:col-span-3 xl:col-span-4 lg:block" />
        </div>
      </div>
    </section>
  );
}