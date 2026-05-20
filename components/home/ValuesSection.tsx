"use client";

import { useRef, useLayoutEffect } from "react";
import { Sparkles, Smile, Flower2, Lock, CalendarHeart, Heart } from "lucide-react";
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

      // Floating animation for decorative elements
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: -15,
            duration: 3 + index * 0.5,
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
      
      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Core Principles
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Fundamental Rights of Our{" "}
            <span className="text-primary">Service Users</span>
          </h2>
          <p className="text-lg text-slate-600">
            These fundamental rights are at the heart of Medicare Link's service provision, 
            ensuring every individual receives care that honors their humanity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-slate-100 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote / Testimonial */}
        <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl text-slate-700 italic max-w-3xl mx-auto leading-relaxed">
            "We believe that the elders in any society are the most precious members of our community. 
            They have endured world wars and have the most life experiences that we can only learn from."
          </p>
          <p className="mt-4 text-primary font-semibold">— Medicare Link Philosophy</p>
        </div>
      </div>
    </section>
  );
}