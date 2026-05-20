// components/services/services-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Stethoscope, 
  Briefcase, 
  Brush, 
  Home, 
  Brain, 
  Heart, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Clock,
  Star
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Description animation
      gsap.fromTo(descriptionRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
          }
        }
      );

      // Features stagger animation
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(feature,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: feature,
              start: "top 90%",
            }
          }
        );
      });

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
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

  const handleNavigate = (service: string) => {
    router.push(`/services/${service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`);
  };

  const features = [
    {
      icon: Users,
      title: "Personally Watched Carers",
      description: "You'll get to know your carers and build a strong relationship with the people who look after you, delegated of your family values."
    },
    {
      icon: Clock,
      title: "Consistent, Reliable Service",
      description: "We pride ourselves on our reliability. Our technology ensures no visits are ever missed, giving you peace of mind."
    },
    {
      icon: Shield,
      title: "Compassionate & Understanding",
      description: "All our staff are fully qualified, DBS checked and trained to promote independence. Fully compliant with CQC National Standards."
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

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Main Description Section */}
      <div className="bg-slate-50 py-16 lg:py-20">
        <div className="container mx-auto ">
          <div ref={descriptionRef} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  Professional Care When You Need It Most
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Despite the social and technological changes which our world has seen over the last century, 
                caregiving remains a deeply personal and physically demanding activity. It's no wonder more 
                and more people are choosing to seek professional help for their homes and loved ones.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our person-centred approach focuses on wellbeing, individual likes and dislikes, and freedom 
                to make informed choices relating to lifestyle within a harmonious environment where families 
                are supported through the delivery of care.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Multiple forms of care are provided to maintain optimum mental, physical and social wellbeing. 
                Care here includes: health checks, support for people to live at home and stay independent with 
                the reassurance of support that's tailored to them.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="container mx-auto  py-20 lg:py-28">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Medicare Link
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional care with compassion and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { featuresRef.current[index] = el; }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Services Grid */}
     <div className="bg-slate-50 py-20 lg:py-28">
  <div className="container mx-auto">
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

      {/* CTA Section */}
      <div className="container mx-auto  py-20">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and let us help you find the perfect care solution
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
}