// components/home/cta.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background Glow Pulse
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Content Reveal (Scale Up + Fade)
      gsap.fromTo(contentRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="container relative z-10  mx-auto ">
        <div 
          ref={contentRef} 
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Person-Centered Care Available
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]">
            Ready to Receive{" "}
            <span className="text-primary">Quality Care</span>?
          </h2>
          
          <p className="text-lg md:text-xl font-medium text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Contact us today for a face-to-face assessment. We'll create a personalized care plan 
            that honors your preferences, activities, dietary requirements, and family commitments.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>24/7 Support Helpline</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>CQC Compliant</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact">
              <Button size="xl" className="group">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> 24-Hour Helpline</span>
            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> info@medicarelink.co.uk</span>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Join hundreds of families who trust Medicare Link for compassionate care
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </section>
  );
}