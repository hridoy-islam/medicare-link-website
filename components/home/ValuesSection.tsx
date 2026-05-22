// components/home/values-section.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Sparkles, Smile, Flower2, Lock, CalendarHeart, Heart, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Card stagger animation with 3D effect
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, rotationX: 15 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.7,
            delay: index * 0.12,
            ease: "back.out(0.3)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // Parallax image animation
      gsap.fromTo(imageParallaxRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // Testimonial animation
      gsap.fromTo(testimonialRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Floating animation for decorative elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -20,
            duration: 4 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    { icon: Lock, title: "Privacy", description: "An individual's right to privacy involves being free from intrusion or unwelcome attention." },
    { icon: Sparkles, title: "Dignity", description: "Respecting each person's inherent worth and treating them with the utmost respect." },
    { icon: Flower2, title: "Independence", description: "Promoting autonomy and self-determination in daily living activities." },
    { icon: Heart, title: "Security", description: "Ensuring physical and emotional safety in all care environments." },
    { icon: CalendarHeart, title: "Choice", description: "Empowering individuals to make their own decisions about their care." },
    { icon: Smile, title: "Fulfillment", description: "Supporting meaningful engagement and life satisfaction." }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative floating elements */}
      <div ref={(el) => { floatingElementsRef.current[0] = el; }} className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div ref={(el) => { floatingElementsRef.current[1] = el; }} className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto  relative z-10">
        <div ref={titleRef} className="text-center max-w-5xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Core Principles
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Fundamental Rights of Our{" "}
            <span className="text-primary relative">
              Service Users
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" preserveAspectRatio="none">
                <path d="M0 2 Q 50 6, 100 2 T 200 2" stroke="currentColor" fill="none" strokeWidth="2" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            These fundamental rights are at the heart of Medicare Link's service provision, 
            ensuring every individual receives care that honors their humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image with quote overlay */}
          <div ref={imageParallaxRef} className="relative">
            <div className="relative h-[400px] md:h-[660px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/home2.jpg"
                alt="Compassionate elder care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              {/* Quote overlay */}
              <div ref={testimonialRef} className="absolute bottom-0 left-0 right-0 p-8">
                <Quote className="w-8 h-8 text-white/50 mb-3" />
                <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                  "The elders in any society are the most precious members of our community. 
                  They have endured world wars and have the most life experiences that we can only learn from."
                </p>
                <p className="mt-4 text-primary-foreground/80 font-semibold">
                  — Medicare Link Philosophy
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          {[
            "CQC Registered",
            "DBS Checked",
            "Fully Insured",
            "Trained Professionals"
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}