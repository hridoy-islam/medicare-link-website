// components/services/housekeeping-service-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Home,
  Sparkles,
  Star,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  WashingMachine,
  Bed,
  ShoppingBag,
  PawPrint,
  Utensils,
  Flower2,
  Trash2,
  Brain,
  Heart,
  Shield,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HousekeepingServiceContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tasksRef = useRef<(HTMLDivElement | null)[]>([]);
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

      tasksRef.current.forEach((task, index) => {
        gsap.fromTo(task,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: task,
              start: "top 88%",
            }
          }
        );
      });

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

  const housekeeperTasks = [
    { icon: Sparkles, title: "General house upkeep", description: "Sweeping, mopping, vacuuming, dusting, washing dishes" },
    { icon: WashingMachine, title: "Laundry duties", description: "Washing, folding and ironing clothes" },
    { icon: Bed, title: "Bedroom neatening", description: "Changing linens, picking up clothes, toys, and clutter" },
    { icon: ShoppingBag, title: "Running errands", description: "To restock food and personal care items" },
    { icon: PawPrint, title: "Pet care", description: "Cleaning litter box, feeding and walking pets" },
    { icon: Utensils, title: "Food preparation", description: "Family meals, snacks, and next day lunches" },
    { icon: Flower2, title: "General yard care", description: "Watering plants and grass, pulling weeds" },
    { icon: Trash2, title: "Garbage disposal", description: "Including separation of recyclables" }
  ];

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
              <Home className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Housekeeping Service
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Medicare Link understands that it's the little things that make you feel at peace in your own home, 
              and that's exactly what your domestic cleaner does. If you have fallen leaves piled up at your front 
              entrance, we will sweep them away. We clean the interior and exterior of your refrigerator and dust 
              the skirting boards.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                Busy schedules make it difficult to find time to maintain a proper home. The best way to ensure your 
                home is always clean and tidy is by hiring our team at Medicare Link. Whether you need weekly, every 
                other week, monthly, or occasional housekeeping services, our professionals will leave you feeling 
                comfortable in and proud of your space.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              We encourage you to give us as many instructions as you'd like, so our housekeepers can build a plan.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&h=600&fit=crop"
              alt="Professional housekeeping service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Housekeeping</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Peace of Mind</h3>
              <p className="text-white/80">Professional home care services</p>
            </div>
          </div>
        </div>

        {/* Housekeeper Tasks Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-4">
            Housekeeper Tasks
          </h2>
          <p className="text-slate-500 text-center mb-8">
            Once you have decided to obtain help from an individual housekeeper or a housekeeping service, 
            keep in mind the duties you can reasonably expect:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {housekeeperTasks.map((task, index) => (
              <div
                key={index}
                ref={(el) => { tasksRef.current[index] = el; }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
              >
                <task.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">{task.title}</h3>
                  <p className="text-slate-500 text-xs">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services Section with Cards */}
        <div className="py-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                onClick={() => router.push('#')}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
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
                  <Button  className="inline-flex items-center gap-2 font-semibold transition-all duration-300">
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