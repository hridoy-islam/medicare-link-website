// components/services/end-of-tenancy-cleaning-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  DoorClosed,
  Home,
  Key,
  Sparkles,
  Star,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Brain,
  Heart,
  Users,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function EndOfTenancyCleaningContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
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

      servicesRef.current.forEach((service, index) => {
        gsap.fromTo(service,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "back.out(0.3)",
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
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

  const cleaningServices = [
    "All Cleaning Support",
    "Domestic Cleaning Service",
    "End of Tenancy Cleaning",
    "Event/Party Cleaning",
    "Home Maid Service",
    "Move-In/Move Out Cleaning",
    "Office Cleaning",
    "One-Off Cleaning Service",
    "Spring Cleaning",
    "Weekly Cleaners"
  ];

  const allServices = [
    { 
      id: "healthcare-service", 
      icon: Stethoscope, 
      title: "HEALTHCARE SERVICE", 
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description: "Professional healthcare services tailored to your medical needs with compassionate care." 
    },
    { 
      id: "healthcare-staffing", 
      icon: Briefcase, 
      title: "HEALTHCARE STAFFING", 
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
      description: "Qualified healthcare professionals available for temporary or permanent placements." 
    },
    { 
      id: "cleaning-support", 
      icon: Brush, 
      title: "CLEANING SUPPORT", 
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      description: "Full range of professional cleaning options using top quality materials and equipment." 
    },
    { 
      id: "live-in-care", 
      icon: Home, 
      title: "LIVE IN CARE SERVICE", 
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
      description: "24/7 care and support in the comfort of your own home with dedicated caregivers." 
    },
    { 
      id: "dementia-care", 
      icon: Brain, 
      title: "ALZHEIMER'S & DEMENTIA CARE", 
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      description: "Specialized care for individuals with memory loss, focusing on safety and dignity." 
    },
    { 
      id: "companionship", 
      icon: Heart, 
      title: "COMPANIONSHIP & SUPPORT", 
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop",
      description: "Emotional and social support to combat loneliness and improve quality of life." 
    },
    { 
      id: "domiciliary-care", 
      icon: Users, 
      title: "DOMICILIARY CARE SUPPORT", 
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
      description: "Support with daily living activities while maintaining independence at home." 
    },
    { 
      id: "elderly-care", 
      icon: Shield, 
      title: "ELDERLY CARE SUPPORT", 
      image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&h=300&fit=crop",
      description: "Compassionate care for seniors, respecting their dignity and life experiences." 
    }
  ];

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Main Content */}
      <div className="container mx-auto py-16 lg:py-20">
        
        {/* Description Section with Image */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <DoorClosed className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                End of Tenancy Cleaning
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              If you are moving out of your flat, selling the house, or you have to clean before your new tenants 
              move in, and you do not have the necessary time, products, machines, or skills – you have fallen in 
              the right place. Medicare Link will help you to complete this task.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                Contact us and we will send you a qualified team that will do the job in no time. Our employees 
                are experts with all the necessary skills to provide you with perfectly clean rooms.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Our service and cleaning methods have years of improvement and will guarantee you a welcoming atmosphere after.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Key className="w-5 h-5 text-primary" />
                <p className="text-slate-700 font-semibold">
                  If you are moving out of your rented flat or rented house and would like to receive your deposit back, 
                  do not hesitate to contact us for End of tenancy cleaning. By the end of the day, our team will turn it 
                  in the way it looked when you first moved in.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
              alt="End of tenancy cleaning service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Deposit Back Guarantee</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Move Out Stress-Free</h3>
              <p className="text-white/80">Professional end of tenancy cleaning</p>
            </div>
          </div>
        </div>

        {/* Cleaning Services List */}
        <div ref={servicesListRef} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            Our Cleaning Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cleaningServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 cursor-pointer hover:bg-primary/10 transition-colors duration-300 group"
                onClick={() => {
                  const slug = service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                  router.push(`#`);
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

       

      
      </div>
    </main>
  );
}