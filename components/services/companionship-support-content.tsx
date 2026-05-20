// components/services/companionship-support-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Heart,
  Users,
  MessageCircle,
  Utensils,
  ShoppingBag,
  Music,
  Home,
  Car,
  Calendar,
  HeartHandshake,
  Star,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Brain,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CompanionshipSupportContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<(HTMLDivElement | null)[]>([]);
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

      examplesRef.current.forEach((example, index) => {
        gsap.fromTo(example,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: example,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const examples = [
    { icon: MessageCircle, text: "General companionship and conversation" },
    { icon: Utensils, text: "Cooking and sharing meals" },
    { icon: ShoppingBag, text: "Help with your weekly shopping" },
    { icon: Music, text: "Joining in with your favorite hobbies" },
    { icon: Home, text: "Help with general domestic tasks (cleaning, laundry, etc.)" },
    { icon: Car, text: "Help with travel arrangements" },
    { icon: Car, text: "Driving you where you would like to go" },
    { icon: Calendar, text: "Arranging and accompanying you to and from appointments" },
    { icon: Calendar, text: "Planning outings and visits" }
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
      description: "We continue to provide our care and support services as we have done throughout the COVID crisis.",
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
              <HeartHandshake className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Companionship and Support
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              We understand that sometimes it can be difficult to plan social activities around your busy schedule. 
              If it's for yourself or perhaps you have a group of friends, we are here to help. Just know that there 
              is a friendly, caring companion who visits regularly.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Companion care is one of our most requested services. When one of our Medicare Link care assistants 
                provides companionship care, they become a trusted companion who can keep you or your loved one 
                socially engaged in their own home, and also accompany you or them on visits with friends, family, 
                and to other social events.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop"
              alt="Companionship and support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Companionship</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Friendly Companion</h3>
              <p className="text-white/80">Regular visits from caring companions</p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
            Example:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {examples.map((example, index) => (
              <div
                key={index}
                ref={(el) => { examplesRef.current[index] = el; }}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 hover:bg-primary/5 transition-colors duration-300"
              >
                <example.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700 text-sm">{example.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Aim Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16 text-center">
          <p className="text-slate-700 leading-relaxed text-lg">
            The aim of our companionship services is to ensure that you or your loved ones can lead happy, healthy, 
            and stimulating lives in the comfort of their own home or residence.
          </p>
        </div>

        {/* Our Services Section */}
        <div className="py-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                onClick={() => router.push(service.link)}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
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
                  <p className="text-slate-600 leading-relaxed mb-6">
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