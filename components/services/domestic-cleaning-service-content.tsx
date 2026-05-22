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
  CookingPot,
  Clock,
  Calendar,
  DoorClosed,
  Flower2,
  Move,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AllService from "../shared/allService";

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

  const kitchenTasks = [
    "Dust and wipe all cupboards, countertops, drawers, and other surfaces",
    "Wipe mirrors, windows, and glass surfaces",
    "Empty trash bins",
    "Deep clean all kitchen appliances, including ovens, fridges, microwaves, etc",
    "Vacuum and mop floors",
    "Remove cobwebs",
    "Clean and polish sinks and taps",
    "Remove limescale, mold, hard water stains, soap scum",
  ];

  const homeAreaTasks = [
    "Dust all surfaces, including shelves, drawers, wardrobes, doors, and their tops",
    "Wipe doorknobs, handles, picture frames, plugs, lampshades, light fittings, light fixtures, etc",
    "Wipe mirrors, windows, and glass surfaces",
    "Vacuum carpets and upholstered pieces",
    "Mop floors",
    "Empty trash bins",
  ];

  const bathroomTasks = [
    "Remove limescale, hard water stains, mold, soap scum",
    "Sanitize and disinfect toilets, bathtubs, basins, bidets, showers",
    "Dust all surfaces",
    "Wipe and polish mirrors, windows, and other glass surfaces",
    "Remove cobwebs",
    "Empty trash bins",
    "Vacuum and mop floors",
  ];

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
              <Sparkles className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Domestic Cleaning Service
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Medicare Link is offering a wide range of{" "}
              <strong>Domestic Cleaning Services</strong> in London. We cover
              all London areas and pride ourselves in providing a high-quality
              domestic cleaning service to our clients. Medicare Link services
              focus on weekly, biweekly, monthly, and special onetime cleanings.
              The cleaning of your home is performed by a professional cleaner.
              This cleaner is assigned to your home on a regular basis in order
              to provide a more consistent service.
            </p>

            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                London Clean Professional can supply each household with a
                cleaning kit that will provide all of the products necessary for
                the cleaner to clean your home. The cleaner will bring it along
                on her first visit upon your request.
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
                <span className="text-primary font-semibold text-sm">
                  Domestic Cleaning
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Professional Cleaner
              </h3>
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
              <h3 className="text-xl font-bold text-slate-800">
                REFERRING ANOTHER HOME AREA
              </h3>
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
              <AllService/>
        
      </div>
    </main>
  );
}
