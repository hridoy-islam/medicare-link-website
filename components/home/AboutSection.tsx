// components/home/about-section.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Shield, Heart, Clock, Users, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax image reveal
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95, x: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // Text reveal animation
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(0.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // Stat counters animation
      statRefs.current.forEach((stat, index) => {
        gsap.fromTo(stat,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.8 + index * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Person-Centered Approach",
      description: "Focusing on individual needs with particular attention to physical, emotional, social, and spiritual well-being."
    },
    {
      icon: Clock,
      title: "24/7 Care & Support",
      description: "Quality care and support for our clients and their families, 365 days a year with round-the-clock assistance."
    },
    {
      icon: Shield,
      title: "Fully Vetted Staff",
      description: "High-standard training, current DBS checks, and references in line with CQC guidelines."
    },
    {
      icon: Users,
      title: "Building Communities",
      description: "Valuing staff and creating core teams to build strong, supportive communities for our service users."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden relative">
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={textRef}>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Our elders are the most{" "}
              <span className="text-primary relative inline-block">
                precious members
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 200 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10, 100 5 T 200 5" stroke="currentColor" fill="none" strokeWidth="2" />
                </svg>
              </span>
              {" "}of our community
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We believe that elders deserve the utmost respect and care. They have endured world wars 
              and possess invaluable life experiences. Medicare Link focuses on individual needs while 
              honoring their unique personalities and aspirations.
            </p>
           
          </div>

          {/* Right Image with overlay effect */}
          <div ref={imageRef} className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/home1.jpg"
                alt="Elderly woman being cared for by professional"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
           
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm font-medium">Compassionate care, personalized approach</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Live-In Care Highlight with image */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Live-In Care Services
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Live-In Care assistants receive training to the highest standards. 
                We provide a 24-hour telephone helpline for peace of mind in emergencies. 
                Someone will always be on hand and available to assist you.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary font-semibold justify-center md:justify-start">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available 24/7
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}