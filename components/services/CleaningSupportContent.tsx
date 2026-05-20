// components/services/cleaning-support-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Home, 
  DoorClosed, 
  PartyPopper, 
  Sparkles, 
  Sofa, 
  Move, 
  Calendar, 
  Flower2, 
  Briefcase, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CleaningSupportContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
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

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.08,
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

  const cleaningServices = [
    {
      id: "domestic-cleaning",
      icon: Home,
      title: "DOMESTIC CLEANING SERVICE",
      description: "Regular domestic cleaning to keep your home spotless and organized.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      color: "from-blue-500 to-blue-600"
    },
  {
  id: "end-of-tenancy",
  icon: DoorClosed,
  title: "END OF TENANCY CLEANING",
  description: "Thorough cleaning to meet landlord and agency standards for deposit return.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
  color: "from-purple-500 to-purple-600"
},
{
  id: "event-party",
  icon: PartyPopper,
  title: "EVENT/PARTY CLEANING",
  description: "Pre and post-event cleaning so you can focus on enjoying your occasion.",
  image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
  color: "from-pink-500 to-pink-600"
},
    {
      id: "home-maid",
      icon: Sparkles,
      title: "HOME MAID SERVICE",
      description: "Professional home making services for a perfectly maintained household.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: "housekeeping",
      icon: Sofa,
      title: "HOUSEKEEPING SERVICE",
      description: "Daily or weekly housekeeping to keep your home running smoothly.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&h=300&fit=crop",
      color: "from-green-500 to-green-600"
    },
{
  id: "moving-cleaning",
  icon: Move,
  title: "MOVING IN/MOVE OUT CLEANING",
  description: "Deep cleaning for properties when moving in or out.",
  image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=300&fit=crop",
  color: "from-orange-500 to-orange-600"
},
{
  id: "one-off-cleaning",
  icon: Calendar,
  title: "ONE OFF CLEANING SERVICE",
  description: "Single deep clean for special occasions or seasonal refresh.",
  image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
  color: "from-red-500 to-red-600",
  link: "/services/one-off-cleaning-service"
},
    {
      id: "spring-cleaning",
      icon: Flower2,
      title: "SPRING CLEANING SERVICE",
      description: "Comprehensive seasonal deep clean to refresh your entire home.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      id: "office-cleaning",
      icon: Briefcase,
      title: "OFFICE CLEANING SERVICE",
      description: "Professional cleaning for commercial and office spaces.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      color: "from-indigo-500 to-indigo-600"
    },
   {
  id: "weekly-cleaning",
  icon: Clock,
  title: "WEEKLY CLEANING SERVICE",
  description: "Regular weekly cleaning to maintain a consistently clean home.",
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
  color: "from-cyan-500 to-cyan-600"
},
  ];

  const handleLearnMore = (serviceId: string, serviceTitle: string) => {
    if (serviceId === "one-off-cleaning") {
      router.push("/services/one-off-cleaning-service");
    } else {
      router.push(`/services/cleaning-support/${serviceId}`);
    }
  };

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Introduction Section */}
      <div ref={headerRef} className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Professional Cleaning Services</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Expert Cleaning Solutions
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a full range of professional cleaning options, using top quality cleaning materials 
            and products, to achieve brilliant results for your home or office.
          </p>
        </div>
      </div>

      {/* All Services Grid */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cleaningServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              onClick={() => handleLearnMore(service.id, service.title)}
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
                <div className={`absolute inset-0 bg-gradient-to-t  opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
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
                    handleLearnMore(service.id, service.title);
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
    </main>
  );
}