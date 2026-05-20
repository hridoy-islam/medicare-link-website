// components/services/office-cleaning-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Building2,
  Clock,
  Calendar,
  WashingMachine,
  Computer,
  Sofa,
  Brush,
  Stethoscope,
  Briefcase,
  Home,
  Brain,
  Heart,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles,
  Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function OfficeCleaningContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
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

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.05,
            ease: "back.out(0.3)",
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

  const cleaningSteps = [
    {
      icon: Wind,
      title: "Windows & Surfaces",
      description: "Wash windows inside, clean every reflective surface, remove dust, grime and stains"
    },
    {
      icon: Computer,
      title: "Work Stations",
      description: "Clean computer boxes, monitors, shake off keyboards, wipe desks and polish"
    },
    {
      icon: Sofa,
      title: "Office Furniture",
      description: "Wipe down office chairs, door frames, and all metal fixtures"
    },
    {
      icon: WashingMachine,
      title: "Floors",
      description: "Vacuum excess dust and debris, leaving floors and carpeting spotless"
    }
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

  const cleaningServicesList = [
    "All Cleaning Support",
    "Domestic Cleaning Service",
    "End of Tenancy Cleaning",
    "Event/Party Cleaning",
    "Housekeeping Service",
    "Home Maid Service",
    "Move-In/Move Out Cleaning",
    "One-Off Cleaning Service",
    "Spring Cleaning",
    "Weekly Cleaners"
  ];

  const handleNavigate = (title: string) => {
    const slug = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    router.push(`/services/${slug}`);
  };

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Main Content */}
      <div className="container mx-auto  py-16 lg:py-20">
        
        {/* Description Section with Image */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                A Clean Office Is a Productive Office
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              It's a proven fact that how clean your office determines how motivated and productive your employees 
              are going to be. No one appreciates performing their duties in an unpleasant office environment.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                Dust in an office lowers indoor air quality and makes it troublesome to concentrate. With the office 
                cleaning service courtesy of Medicare Link, you'll enter a new era of productivity as your office 
                space is going to be dust-free, polished, and refreshed.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              The office cleaning crew comes in with a ready plan to transform your commercial space.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="Professional office cleaning service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Office Cleaning</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Productive Workspace</h3>
              <p className="text-white/80">Clean office, motivated employees</p>
            </div>
          </div>
        </div>

        {/* Flexible Scheduling Section */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-7 h-7 text-primary" />
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              Cleaning Done at the Best Possible Time for You
            </h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Medicare Link Clean Professionals understands you have a business to run and you need to do this with 
            office life continuing as usual. Our service is flexible and efficient to adjust to your specific schedule.
          </p>
          <p className="text-slate-600 leading-relaxed">
            In your consultation with us, we take into account the property size to create an approach that doesn't 
            take too much time, but achieves the desired end results. You can reschedule appointments with enough 
            notice beforehand.
          </p>
        </div>

        {/* What Our Cleaners Do */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            What Our Cleaners Do For You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

       

        {/* ALL SERVICES Section */}
        <div className="bg-slate-50 py-20 lg:py-28 rounded-3xl my-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ALL SERVICES
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive care solutions tailored to your unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    ref={(el) => { cardsRef.current[index] = el; }}
                    onClick={() => handleNavigate(service.title)}
                    className="group cursor-pointer bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image Section */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      {/* Icon overlay */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="p-5 text-center">
                      <h3 className="font-bold text-slate-800 mb-2 text-sm tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate(service.title);
                        }}
                        className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}