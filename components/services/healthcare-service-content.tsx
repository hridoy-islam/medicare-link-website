// components/services/healthcare-service-content.tsx
"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Home, 
  Heart, 
  Brain, 
  Hospital, 
  Clock, 
  Calendar, 
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Plus,
  Minus,
  Shield,
  Smile,
  Phone
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "../ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HealthcareServiceContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const healthcareServices = [
    {
      id: "domiciliary-care",
      icon: Home,
      title: "DOMICILIARY CARE SUPPORT (HOME CARE)",
      description: "Professional care and support in the comfort of your own home, helping with daily living activities while maintaining your independence.",
      fullDescription: "Our domiciliary care service provides assistance with personal care, medication management, meal preparation, and household tasks. We work around your schedule to ensure you receive the support you need when you need it.",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
      features: ["Personal care assistance", "Medication management", "Meal preparation", "Household tasks", "Flexible scheduling"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "companionship",
      icon: Heart,
      title: "COMPANIONSHIP & SUPPORT",
      description: "Emotional and social support to combat loneliness and improve quality of life through meaningful interactions.",
      fullDescription: "Our companionship service focuses on building genuine relationships. We provide social interaction, accompany you to appointments, engage in hobbies and interests, and offer emotional support to enhance your wellbeing.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop",
      features: ["Social interaction", "Appointment accompaniment", "Hobby engagement", "Emotional support", "Conversation and company"],
      color: "from-pink-500 to-pink-600"
    },
    {
      id: "dementia-care",
      icon: Brain,
      title: "ALZHEIMER'S & DEMENTIA CARE",
      description: "Specialized care for individuals with memory loss, focusing on safety, dignity, and maintaining cognitive function.",
      fullDescription: "Our dementia care specialists are trained in the latest techniques to support individuals with memory loss. We create a safe, familiar environment and use person-centred approaches to reduce anxiety and promote wellbeing.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
      features: ["Memory care specialists", "Safe environment", "Cognitive stimulation", "Routine-based care", "Family support"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "hospital-to-home",
      icon: Hospital,
      title: "HOSPITAL TO HOME",
      description: "Seamless transition support from hospital discharge to ensure continuity of care and recovery at home.",
      fullDescription: "Our hospital to home service ensures a smooth transition after a hospital stay. We coordinate with healthcare professionals, provide post-discharge support, assist with medication and wound care, and help you regain independence.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      features: ["Discharge coordination", "Post-hospital support", "Medication assistance", "Recovery monitoring", "Healthcare liaison"],
      color: "from-green-500 to-green-600"
    },
    {
      id: "24-7-care",
      icon: Clock,
      title: "24/7 CARE",
      description: "Round-the-clock care and support, ensuring someone is always available to assist you at any time.",
      fullDescription: "Our 24/7 care service provides continuous support with dedicated caregivers available day and night. Whether you need assistance during the night or emergency support, we're always here for you.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop",
      features: ["Continuous support", "Night assistance", "Emergency response", "Regular check-ins", "Peace of mind"],
      color: "from-orange-500 to-orange-600"
    },
 {
  id: "live-in-care",
  icon: Calendar,
  title: "LIVE IN CARE",
  description: "A dedicated caregiver living with you to provide personalized care and support around the clock.",
  fullDescription: "Our live-in care service provides a dedicated caregiver who resides in your home. This ensures consistent, personalized care and companionship while allowing you to remain in familiar surroundings.",
  image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop",
  features: ["Dedicated caregiver", "Consistent support", "Familiar environment", "Personalized care", "24/7 presence"],
  color: "from-red-500 to-red-600"
},
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Introduction Section */}
      <div ref={headerRef} className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">MEDICARE LINK</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Health Care Services
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our person-centred approach focuses on wellbeing, individual likes and dislikes, 
            and freedom to make informed choices relating to lifestyle within a harmonious environment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {healthcareServices.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r opacity-40`} />
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-xl p-2 shadow-md">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {expandedId === service.id ? service.fullDescription : service.description}
                </p>

                {/* Expandable Features */}
                {expandedId === service.id && (
                  <div className="mt-4 mb-4 pt-4 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-700 mb-3 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-slate-600 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    {expandedId === service.id ? (
                      <>
                        Show Less
                        <Minus className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Learn More
                        <Plus className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <Button
                    onClick={() => router.push('/contact')}
                    variant={'secondary'}
                    className="inline-flex items-center gap-1"
                  >
                    Enquire Now
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </main>
  );
}