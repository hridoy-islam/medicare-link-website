// components/services/domestic-cleaning-service-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Home,
  Sparkles,
  Bath,
  Sofa,
  Star,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Brain,
  Heart,
  Users,
  Shield,
  CheckCircle,
  CookingPot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function DomesticCleaningServiceContent() {
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

  const kitchenTasks = [
    "Dust and wipe all cupboards, countertops, drawers, and other surfaces",
    "Wipe mirrors, windows, and glass surfaces",
    "Empty trash bins",
    "Deep clean all kitchen appliances, including ovens, fridges, microwaves, etc",
    "Vacuum and mop floors",
    "Remove cobwebs",
    "Clean and polish sinks and taps",
    "Remove limescale, mold, hard water stains, soap scum"
  ];

  const homeAreaTasks = [
    "Dust all surfaces, including shelves, drawers, wardrobes, doors, and their tops",
    "Wipe doorknobs, handles, picture frames, plugs, lampshades, light fittings, light fixtures, etc",
    "Wipe mirrors, windows, and glass surfaces",
    "Vacuum carpets and upholstered pieces",
    "Mop floors",
    "Empty trash bins"
  ];

  const bathroomTasks = [
    "Remove limescale, hard water stains, mold, soap scum",
    "Sanitize and disinfect toilets, bathtubs, basins, bidets, showers",
    "Dust all surfaces",
    "Wipe and polish mirrors, windows, and other glass surfaces",
    "Remove cobwebs",
    "Empty trash bins",
    "Vacuum and mop floors"
  ];

  const cleaningServices = [
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
      <div className="container mx-auto  py-16 lg:py-20">
        
        {/* Description Section with Image */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Domestic Cleaning Service
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Medicare Link is offering a wide range of <strong>Domestic Cleaning Services</strong> in London. 
              We cover all London areas and pride ourselves in providing a high-quality domestic cleaning service 
              to our clients. Medicare Link services focus on weekly, biweekly, monthly, and special onetime 
              cleanings. The cleaning of your home is performed by a professional cleaner. This cleaner is 
              assigned to your home on a regular basis in order to provide a more consistent service.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                London Clean Professional can supply each household with a cleaning kit that will provide all of 
                the products necessary for the cleaner to clean your home. The cleaner will bring it along on 
                her first visit upon your request.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
              alt="Domestic cleaning service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Domestic Cleaning</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Cleaner</h3>
              <p className="text-white/80">Regular consistent service</p>
            </div>
          </div>
        </div>

        {/* WHAT'S INCLUDED Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            WHAT'S INCLUDED?
          </h2>
          
          {/* KITCHEN */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <CookingPot className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-slate-800">KITCHEN</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
              {kitchenTasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-slate-600">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REFERRING ANOTHER HOME AREA */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sofa className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-slate-800">REFERRING ANOTHER HOME AREA</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
              {homeAreaTasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-slate-600">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BATHROOM */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Bath className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-slate-800">BATHROOM</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6">
              {bathroomTasks.map((task, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-slate-600">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Cleaning Support */}
        <div ref={servicesListRef} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            All Cleaning Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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

     

       
      </div>
    </main>
  );
}