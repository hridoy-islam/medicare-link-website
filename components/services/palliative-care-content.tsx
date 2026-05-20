// components/services/palliative-care-content.tsx
"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Heart,
  Droplets,
  Activity,
  Home,
  Utensils,
  PawPrint,
  ShoppingBag,
  Users,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Pill,
  Bath,
  Bed,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PalliativeCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesListRef = useRef<HTMLDivElement>(null);
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
    { icon: Bath, title: "Personal Care", description: "Assistance with bathing, dressing, and toileting" },
    { icon: Droplets, title: "Continence Care", description: "Changing continence pads, managing stoma or catheter prescriptions" },
    { icon: Pill, title: "Pain Management", description: "Support with pain management and medication" },
    { icon: Home, title: "Mobility Support", description: "Help to move around the home, gentle support or hoisted transfers" },
    { icon: Bed, title: "Housekeeping", description: "Vacuuming, dusting, changing beds, and laundry" },
    { icon: Utensils, title: "Meal Preparation", description: "Preparing meals to your tastes and washing up afterward" },
    { icon: PawPrint, title: "Pet Care", description: "Caring for your pet including feeding and walking" },
    { icon: ShoppingBag, title: "Errands", description: "Running errands to collect prescriptions or food shopping" },
    { icon: Users, title: "Companionship", description: "Supporting your independent living at home" }
  ];

  const allServices = [
    "Companionship & Support",
    "Domiciliary Care Support",
    "Elderly Care",
    "Alzheimer's & Dementia Care"
  ];

  const services = [
    {
      icon: Brush,
      title: "CLEANING SUPPORT",
      description: "We offer a full range of professional options, using top quality cleaning materials and products, to achieve brilliant results.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      imageAlt: "Professional cleaning service",
      link: "/services/cleaning-support"
    },
    {
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      description: "Our person-centred approach focuses on wellbeing, individual likes and dislikes, and freedom to make informed choices.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      imageAlt: "Compassionate healthcare service",
      link: "/services/healthcare-service"
    },
    {
      icon: Briefcase,
      title: "HEALTHCARE STAFFING",
      description: "We continue to provide our care and support services as we have done throughout the COVID crisis and beyond.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop",
      imageAlt: "Professional healthcare staffing",
      link: "/services/healthcare-staffing"
    }
  ];

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Main Content */}
      <div className="container mx-auto  py-16 lg:py-20">
        
        {/* Description Section with Image */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                What is Palliative Care?
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Palliative care is specialized medical care for people with serious or terminal illnesses such as 
              a type of dementia or advanced cancer. The support focuses on providing relief from the symptoms, 
              pain, and stress of a serious illness – keeping you as comfortable as possible.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                The ultimate goal is to improve the quality of life for both the patient and their families and 
                friends whilst reducing the emotional effects of illnesses.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1550791871-0bcd47c97881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop"
              alt="Compassionate palliative care for patient"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Palliative Care</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Comfort & Dignity</h3>
              <p className="text-white/80">Specialized care for serious illnesses</p>
            </div>
          </div>
        </div>

        {/* Care Services Grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            Palliative & End of Life Care Can Involve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careServices.map((service, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Services List */}
        <div ref={servicesListRef} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            All Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 cursor-pointer hover:bg-primary/20 transition-colors duration-300"
                onClick={() => {
                  const slug = service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                  router.push(`/services/${slug}`);
                }}
              >
                <Star className="w-3 h-3 text-primary" />
                <span className="text-sm text-slate-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services Section */}
        <div className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive care and cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                onClick={() => router.push(service.link)}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <div className="bg-primary/10 px-6 py-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:bg-primary/90 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <Button variant="secondary" className="inline-flex items-center gap-2 font-semibold transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </main>
  );
}