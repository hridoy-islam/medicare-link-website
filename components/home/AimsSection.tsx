// components/home/aims-section.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { Target, TrendingUp, Users as UsersIcon, Briefcase, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AimsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const aims = [
    {
      icon: Target,
      title: "Focus on Service Users",
      description: "Providing professional, skilled, and competent health & social care workers who promote active participation and individual rights."
    },
    {
      icon: TrendingUp,
      title: "Quality Management Systems",
      description: "Continuous examination of operations with corrective actions to ensure the highest quality service. We welcome feedback from all stakeholders."
    },
    {
      icon: UsersIcon,
      title: "Comprehensive Welfare",
      description: "Delivering holistic care packages that contribute to overall health needs while maximizing independence and community participation."
    },
    {
      icon: Briefcase,
      title: "Quality Workforce",
      description: "Training and developing care workers to recognized Best Practice Standards, exceeding all regulatory requirements."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Aims & Objectives
          </h2>
          <p className="text-lg text-slate-600">
            Medicare Link has sound principles for service delivery. The rights of service users 
            are paramount in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aims.map((aim, index) => (
            <div
              key={index}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <aim.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {aim.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {aim.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Rights Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-3 ">
            <span className="text-sm font-medium text-slate-700">Service User Rights:</span>
            <span className="text-sm text-primary font-semibold">Privacy</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-primary font-semibold">Dignity</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-primary font-semibold">Independence</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-primary font-semibold">Security</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-primary font-semibold">Choice</span>
            <span className="text-slate-300">•</span>
            <span className="text-sm text-primary font-semibold">Fulfillment</span>
          </div>
        </div>
      </div>
    </section>
  );
}