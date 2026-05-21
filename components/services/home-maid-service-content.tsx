// components/services/home-maid-service-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Home,
  Clock,
  Star,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Brain,
  Heart,
  Users,
  Shield,
  Calendar,
  DoorClosed,
  Flower2,
  Move,
  PartyPopper,
  Sofa,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeMaidServiceContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      servicesRef.current.forEach((service, index) => {
        gsap.fromTo(
          service,
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
            },
          },
        );
      });

      gsap.fromTo(
        servicesListRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: servicesListRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cleaningServices = [
    {
      id: "domestic-cleaning",
      icon: Home,
      title: "DOMESTIC CLEANING SERVICE",
      description:
        "Regular domestic cleaning to keep your home spotless and organized.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      color: "from-blue-500 to-blue-600",
      link: "/services/domestic-cleaning-service",
    },
    {
      id: "end-of-tenancy",
      icon: DoorClosed,
      title: "END OF TENANCY CLEANING",
      description:
        "Thorough cleaning to meet landlord and agency standards for deposit return.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
      color: "from-purple-500 to-purple-600",
      link: "/services/end-of-tenancy-cleaning",
    },
    {
      id: "event-party",
      icon: PartyPopper,
      title: "EVENT/PARTY CLEANING",
      description:
        "Pre and post-event cleaning so you can focus on enjoying your occasion.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
      color: "from-pink-500 to-pink-600",
      link: "/services/event-party-cleaning",
    },
    {
      id: "home-maid",
      icon: Sparkles,
      title: "HOME MAID SERVICE",
      description:
        "Professional home making services for a perfectly maintained household.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      color: "from-teal-500 to-teal-600",
      link: "/services/home-maid-service",
    },
    {
      id: "housekeeping",
      icon: Sofa,
      title: "HOUSEKEEPING SERVICE",
      description:
        "Daily or weekly housekeeping to keep your home running smoothly.",
      image:
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&h=300&fit=crop",
      color: "from-green-500 to-green-600",
      link: "/services/housekeeping-service",
    },
    {
      id: "moving-cleaning",
      icon: Move,
      title: "MOVING IN/MOVE OUT CLEANING",
      description: "Deep cleaning for properties when moving in or out.",
      image:
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=300&fit=crop",
      color: "from-orange-500 to-orange-600",
      link: "/services/move-in-move-out-cleaning",
    },
    {
      id: "one-off-cleaning",
      icon: Calendar,
      title: "ONE OFF CLEANING SERVICE",
      description:
        "Single deep clean for special occasions or seasonal refresh.",
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
      color: "from-red-500 to-red-600",
      link: "/services/one-off-cleaning-service",
    },
    {
      id: "spring-cleaning",
      icon: Flower2,
      title: "SPRING CLEANING SERVICE",
      description:
        "Comprehensive seasonal deep clean to refresh your entire home.",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
      color: "from-emerald-500 to-emerald-600",
      link: "/services/spring-cleaning",
    },
    {
      id: "office-cleaning",
      icon: Briefcase,
      title: "OFFICE CLEANING SERVICE",
      description: "Professional cleaning for commercial and office spaces.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-indigo-600",
      link: "/services/office-cleaning-service",
    },
    {
      id: "weekly-cleaning",
      icon: Clock,
      title: "WEEKLY CLEANING SERVICE",
      description:
        "Regular weekly cleaning to maintain a consistently clean home.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      color: "from-cyan-500 to-cyan-600",
      link: "/services/weekly-cleaning",
    },
  ];

  const handleLearnMore = (serviceId: string, serviceLink: string) => {
    router.push(`${serviceLink}`);
  };

  const allServices = [
    {
      id: "healthcare-service",
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description:
        "Professional healthcare services tailored to your medical needs with compassionate care.",
    },
    {
      id: "healthcare-staffing",
      icon: Briefcase,
      title: "HEALTHCARE STAFFING",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
      description:
        "Qualified healthcare professionals available for temporary or permanent placements.",
    },
    {
      id: "cleaning-support",
      icon: Brush,
      title: "CLEANING SUPPORT",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      description:
        "Full range of professional cleaning options using top quality materials and equipment.",
    },
    {
      id: "live-in-care",
      icon: Home,
      title: "LIVE IN CARE SERVICE",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=300&fit=crop",
      description:
        "24/7 care and support in the comfort of your own home with dedicated caregivers.",
    },
    {
      id: "dementia-care",
      icon: Brain,
      title: "ALZHEIMER'S & DEMENTIA CARE",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
      description:
        "Specialized care for individuals with memory loss, focusing on safety and dignity.",
    },
    {
      id: "companionship",
      icon: Heart,
      title: "COMPANIONSHIP & SUPPORT",
      image:
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=300&fit=crop",
      description:
        "Emotional and social support to combat loneliness and improve quality of life.",
    },
    {
      id: "domiciliary-care",
      icon: Users,
      title: "DOMICILIARY CARE SUPPORT",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop",
      description:
        "Support with daily living activities while maintaining independence at home.",
    },
    {
      id: "elderly-care",
      icon: Shield,
      title: "ELDERLY CARE SUPPORT",
      image:
        "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=400&h=300&fit=crop",
      description:
        "Compassionate care for seniors, respecting their dignity and life experiences.",
    },
  ];

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Main Content */}
      <div className="container mx-auto  py-16 lg:py-20">
        {/* Description Section with Image */}
        <div
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 mb-16 items-start"
        >
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Home Maid Service
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Depending on the size and condition of the apartment, house, or
              business, Maid-Service charges an hourly rate for home cleaning
              services. Our house cleaning professionals work hard and
              attentively to give excellent service and to make you feel at ease
              and satisfied with our work.
            </p>

            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Cleaning services for the home and workplace. We handle
                everything from modest to huge projects.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
              alt="Professional home maid service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">
                  Hourly Rates
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Professional Cleaning
              </h3>
              <p className="text-white/80">
                Quality service at competitive rates
              </p>
            </div>
          </div>
        </div>

        {/* Cleaning Services List */}
        <div ref={servicesListRef} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            Our Cleaning Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cleaningServices.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleLearnMore(service.id, service.link)}
                className="group cursor-pointer bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t  opacity-60 group-hover:opacity-70 transition-opacity duration-300`}
                  />
                  {/* Icon Overlay */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center shadow-md">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h3 className="font-bold text-slate-800 mb-2 text-sm tracking-wide leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(service.id, service.link);
                    }}
                    className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
