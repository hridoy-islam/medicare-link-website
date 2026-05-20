// components/services/weekly-cleaning-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Home, 
  CheckCircle, 
  ArrowRight,
  Star,
  Calendar,
  Sparkles
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function WeeklyCleaningContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      benefitsRef.current.forEach((benefit, index) => {
        gsap.fromTo(benefit,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: benefit,
              start: "top 88%",
            }
          }
        );
      });

      gsap.fromTo(servicesListRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: servicesListRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Money",
      description: "The time and money saved with reduced fees for weekly or bi-weekly cleanings can add up significantly."
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Regular weekly cleanings free up your schedule for the things that matter most to you."
    },
    {
      icon: TrendingUp,
      title: "Better Value",
      description: "Reduced fees for weekly cleanings offer better value than occasional professional cleanings."
    },
    {
      icon: Sparkles,
      title: "Consistently Clean",
      description: "Enjoy a spotless home every single week without lifting a finger."
    }
  ];

  const cleaningServices = [
    "All Cleaning Support",
    "Domestic Cleaning Service",
    "End of Tenancy Cleaning",
    "Event/Party Cleaning",
    "Home Maid Service",
    "Move-In/Move-Out Cleaning",
    "Office Cleaning",
    "One-Off Cleaning Service",
    "Spring Cleaning",
    "Weekly Cleaners"
  ];

  return (
    <main ref={sectionRef} className="bg-white">
     

      {/* Main Content */}
      <div className="container mx-auto  py-16 lg:py-20">
        
        {/* Description */}
        <div ref={contentRef} className="bg-white mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              Why Choose Weekly Cleaning?
            </h2>
          </div>
          
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            If you've ever considered weekly house cleaning services, but you've put off hiring professional cleaners, 
            now is a better time than ever to schedule weekly cleanings.
          </p>
          
          <div className="bg-primary/5 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              You may think you're saving money or time when you only hire your cleaning company for monthly or 
              occasional professional cleanings, but the time and money saved with reduced fees for weekly or 
              bi-weekly cleanings can add up—and change the way you live your whole life.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => { benefitsRef.current[index] = el; }}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* All Cleaning Services List */}
        <div ref={servicesListRef}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              All Cleaning Services
            </h2>
            <p className="text-slate-500">
              Explore our full range of professional cleaning solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cleaningServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 cursor-pointer hover:bg-primary/10 transition-colors duration-300 group"
                onClick={() => {
                  const slug = service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                  router.push(`/services/${slug}`);
                }}
              >
                <Star className="w-3 h-3 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Note */}
        <div className="mt-12 text-center pt-8 border-t border-slate-100">
          <p className="text-slate-500 text-sm">
            Ready to transform your home with weekly cleaning? Contact us for a free quote.
          </p>
        </div>
      </div>
    </main>
  );
}