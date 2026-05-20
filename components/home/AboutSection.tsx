// components/home/about-section.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { Shield, Heart, Clock, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
            start: "top 75%",
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
    <section ref={sectionRef} className="py-24  bg-white overflow-hidden">
      <div className="container  mx-auto">
        <div ref={textRef} className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our elders are the most{" "}
            <span className="text-primary">precious members</span>
            {" "}of our community
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe that elders deserve the utmost respect and care. They have endured world wars 
            and possess invaluable life experiences. Medicare Link focuses on individual needs while 
            honoring their unique personalities and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20"
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

        {/* Live-In Care Highlight */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Live-In Care Services
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our Live-In Care assistants receive training to the highest standards. 
                We provide a 24-hour telephone helpline for peace of mind in emergencies. 
                Someone will always be on hand and available to assist you.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 text-sm text-primary font-semibold">
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