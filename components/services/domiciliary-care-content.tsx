// components/services/domiciliary-care-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Home,
  Heart,
  Pill,
  Utensils,
  Sparkles,
  ShoppingBag,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import OurService from "../shared/ourServices";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function DomiciliaryCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

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
            delay: index * 0.1,
            ease: "back.out(0.3)",
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const careServices = [
    "Personal Care",
    "Administrating Medication",
    "Preparing Meals",
    "Helping with Household Tasks",
    "Companionship",
    "Day to Day Errands",
    "And So Much More"
  ];

 const services = [
    {
      icon: Brush,
      title: "CLEANING SUPPORT",
      description: "We offer a full range of professional cleaning, using top-quality cleaning materials and products, for advice and support.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      imageAlt: "Professional cleaning service",
      link: "/services/cleaning-support"
    },
    {
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      description: "Our comprehensive approach includes services such as health checks, wellness programs, and tailored healthcare plans.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      imageAlt: "Compassionate healthcare service",
      link: "/services/healthcare-service"
    },
    {
      icon: Briefcase,
      title: "HEALTHCARE STAFFING",
      description: "We continue to provide our care staff with the best possible working conditions.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop",
      imageAlt: "Professional healthcare staffing",
      link: "/services/healthcare-staffing"
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
              <Home className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Domiciliary Care
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Domiciliary care is for anyone who wants to stay at home while receiving the treatment they need. 
              This type of care can be beneficial to people of all ages. This treatment can include recuperation, 
              convalescence, and rehabilitation, amongst other areas. Our fully trained carers can provide medical 
              support including catheterization, comovee, PEG feeding, and suppositories, to name just a few. 
              All our caring staff will work with you to create a unique care plan – making your life easier as 
              you receive care in your home. We also work closely alongside district nurses and occupational 
              therapists when required to ensure that we are able to deliver care that meets your specific needs – 
              whether it be disability care, types of dementia care, nursing care, or even companionship care.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Domiciliary care at home"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Home Care</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Stay at Home</h3>
              <p className="text-white/80">Receive care where you feel most comfortable</p>
            </div>
          </div>
        </div>

        {/* Care Services Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {careServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-3"
              >
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Description */}
        <div className="mb-16">
          <div className="bg-primary/5 rounded-xl p-6 mb-6">
            <p className="text-slate-700 leading-relaxed">
              Whether you need a carer on a daily or weekly basis, we can arrange your own package of care with a 
              domiciliary carer, who will not only administer care but also become a close friend. Home care provides 
              the extra support you need to keep you where you want to be - at home. Domiciliary care services can 
              provide a helping hand with household chores, personal care, or a companionship visit. All of our home 
              care services are tailored around your needs and it is a great way to stay at home instead of going 
              to a residential care home.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              Our domiciliary care services are not just here to support you at home, but to support you to continue 
              living your life, the way you want to. We're able to take you to doctor's appointments, to the shops, 
              to meet up with your friends and family, to support you to live an independent life. Our home care 
              services allow you, and your family, the peace of mind needed to keep you in your home.
            </p>
          </div>
        </div>
       <OurService/>

      </div>
    </main>
  );
}