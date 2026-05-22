// components/services/move-in-move-out-cleaning-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Move,
  Truck,
  CheckCircle,
  Clock,
  Shield,
  Star,
  Brush,
  Sparkles,
  Home,
  DoorClosed,
  PartyPopper,
  Sofa,
  Calendar,
  Flower2,
  Briefcase,
  Heart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AllService from "../shared/allService";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MoveInMoveOutCleaningContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  const features = [
    {
      icon: Shield,
      title: "Fully Insured & Vetted",
      description: "Our cleaners are insured, trained, and vetted for additional peace of mind."
    },
    {
      icon: Clock,
      title: "7 Days a Week",
      description: "We work 7 days a week including bank holidays with no extra charges."
    },
    {
      icon: Sparkles,
      title: "Top to Bottom Cleaning",
      description: "Our move-in/out cleaning is very comprehensive, cleaning your property from top to bottom."
    },
    {
      icon: Truck,
      title: "Stress-Free Moving",
      description: "Save yourself the trouble of cleaning and hire us to do it for you."
    }
  ];

;

 const cleaningServices = [
  {
    id: "domestic-cleaning",
    icon: Home,
    title: "DOMESTIC CLEANING SERVICE",
    description: "Regular domestic cleaning to keep your home spotless and organized.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    color: "from-blue-500 to-blue-600",
    link: "/services/domestic-cleaning-service",
  },
  {
    id: "end-of-tenancy",
    icon: DoorClosed,
    title: "END OF TENANCY CLEANING",
    description: "Thorough cleaning to meet landlord and agency standards for deposit return.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    color: "from-purple-500 to-purple-600",
    link: "/services/end-of-tenancy-cleaning",
  },
  {
    id: "event-party",
    icon: PartyPopper,
    title: "EVENT/PARTY CLEANING",
    description: "Pre and post-event cleaning so you can focus on enjoying your occasion.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    color: "from-pink-500 to-pink-600",
    link: "/services/event-party-cleaning",
  },
  {
    id: "home-maid",
    icon: Sparkles,
    title: "HOME MAID SERVICE",
    description: "Professional home making services for a perfectly maintained household.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    color: "from-teal-500 to-teal-600",
    link: "/services/home-maid-service",
  },
  {
    id: "housekeeping",
    icon: Sofa,
    title: "HOUSEKEEPING SERVICE",
    description: "Daily or weekly housekeeping to keep your home running smoothly.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=400&h=300&fit=crop",
    color: "from-green-500 to-green-600",
    link: "/services/housekeeping-service",
  },
  {
    id: "moving-cleaning",
    icon: Move,
    title: "MOVING IN/MOVE OUT CLEANING",
    description: "Deep cleaning for properties when moving in or out.",
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&h=300&fit=crop",
    color: "from-orange-500 to-orange-600",
    link: "/services/move-in-move-out-cleaning",
  },
  {
    id: "one-off-cleaning",
    icon: Calendar,
    title: "ONE OFF CLEANING SERVICE",
    description: "Single deep clean for special occasions or seasonal refresh.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
    color: "from-red-500 to-red-600",
    link: "/services/one-off-cleaning-service",
  },
  {
    id: "spring-cleaning",
    icon: Flower2,
    title: "SPRING CLEANING SERVICE",
    description: "Comprehensive seasonal deep clean to refresh your entire home.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=300&fit=crop",
    color: "from-emerald-500 to-emerald-600",
    link: "/services/spring-cleaning",
  },
  {
    id: "office-cleaning",
    icon: Briefcase,
    title: "OFFICE CLEANING SERVICE",
    description: "Professional cleaning for commercial and office spaces.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    color: "from-indigo-500 to-indigo-600",
    link: "/services/office-cleaning-service",
  },
  {
    id: "weekly-cleaning",
    icon: Clock,
    title: "WEEKLY CLEANING SERVICE",
    description: "Regular weekly cleaning to maintain a consistently clean home.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
    color: "from-cyan-500 to-cyan-600",
    link: "/services/weekly-cleaning",
  },
];

   const handleLearnMore = (serviceId: string, serviceLink: string) => {

      router.push(`${serviceLink}`);
    
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
              <Move className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Stress-Free Moving Cleaning
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Cleaning is an essential task for all residential and commercial properties. Hiring a professional 
              to assist with these tasks can be cumbersome and exhausting. However, it is our goal to ensure our 
              company delivers exceptional cleaning service.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                Medicare Link is the best-known cleaning company for providing specialist move-out cleaning services. 
                Moving out of a property is stressful enough, and dealing with all those cleaning chores would add 
                more strain. Save yourself the trouble of cleaning and hire us to do it for you.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              We offer top-rated cleaning services at the most competitive rates. Our cleaners are insured, trained, 
              and vetted for additional peace of mind.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
              alt="Moving in move out cleaning service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Moving Cleaning</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Move with Ease</h3>
              <p className="text-white/80">Professional cleaning for your move</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Comprehensive Cleaning Notice */}
        <div className="bg-slate-50 rounded-2xl p-8  text-center">
          <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
            Comprehensive Top to Bottom Cleaning
          </h2>
          <p className="text-slate-600">
            We'll clean your property from top to bottom, leaving it spotless for the next occupants or ready for your move-in.
          </p>
        </div>

      

             <AllService/>
       

       
      </div>
    </main>
  );
}