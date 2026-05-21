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
  Users,
  Clock,
  Calendar,
  DoorClosed,
  Move,
  PartyPopper,
  Sofa,
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

      tasksRef.current.forEach((task, index) => {
        gsap.fromTo(
          task,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: task,
              start: "top 88%",
            },
          },
        );
      });

      servicesRef.current.forEach((service, index) => {
        gsap.fromTo(
          service,
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

  const housekeeperTasks = [
    {
      icon: Sparkles,
      title: "General house upkeep",
      description: "Sweeping, mopping, vacuuming, dusting, washing dishes",
    },
    {
      icon: WashingMachine,
      title: "Laundry duties",
      description: "Washing, folding and ironing clothes",
    },
    {
      icon: Bed,
      title: "Bedroom neatening",
      description: "Changing linens, picking up clothes, toys, and clutter",
    },
    {
      icon: ShoppingBag,
      title: "Running errands",
      description: "To restock food and personal care items",
    },
    {
      icon: PawPrint,
      title: "Pet care",
      description: "Cleaning litter box, feeding and walking pets",
    },
    {
      icon: Utensils,
      title: "Food preparation",
      description: "Family meals, snacks, and next day lunches",
    },
    {
      icon: Flower2,
      title: "General yard care",
      description: "Watering plants and grass, pulling weeds",
    },
    {
      icon: Trash2,
      title: "Garbage disposal",
      description: "Including separation of recyclables",
    },
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
      <div className="container mx-auto py-16 lg:py-20">
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
                Housekeeping Service
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Medicare Link understands that it's the little things that make
              you feel at peace in your own home, and that's exactly what your
              domestic cleaner does. If you have fallen leaves piled up at your
              front entrance, we will sweep them away. We clean the interior and
              exterior of your refrigerator and dust the skirting boards.
            </p>

            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                Busy schedules make it difficult to find time to maintain a
                proper home. The best way to ensure your home is always clean
                and tidy is by hiring our team at Medicare Link. Whether you
                need weekly, every other week, monthly, or occasional
                housekeeping services, our professionals will leave you feeling
                comfortable in and proud of your space.
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              We encourage you to give us as many instructions as you'd like, so
              our housekeepers can build a plan.
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
                <span className="text-primary font-semibold text-sm">
                  Housekeeping
                </span>
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
            Once you have decided to obtain help from an individual housekeeper
            or a housekeeping service, keep in mind the duties you can
            reasonably expect:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {housekeeperTasks.map((task, index) => (
              <div
                key={index}
                ref={(el) => {
                  tasksRef.current[index] = el;
                }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
              >
                <task.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">
                    {task.title}
                  </h3>
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
