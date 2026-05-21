// components/services/respite-care-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Heart,
  Home,
  Clock,
  Building2,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function RespiteCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<(HTMLDivElement | null)[]>([]);
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

      typesRef.current.forEach((type, index) => {
        gsap.fromTo(type,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: type,
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

  const respiteTypes = [
    {
      icon: Home,
      title: "Live-in Care",
      description: "The carer lives in your house, offering support and company day and night"
    },
    {
      icon: Clock,
      title: "Visiting Care",
      description: "Extra support for a few hours each day or each week"
    },
    {
      icon: Building2,
      title: "Day Care Centres",
      description: "Taking you out of your normal routine and placing you in a day centre"
    }
  ];

const services = [
    {
      icon: Brush,
      title: "CLEANING SUPPORT",
      description: "We offer a full range of professional cleaning, using top-quality cleaning materials and products, for advice and support.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      imageAlt: "Professional cleaning service",
      link: "/services/cleaning-support"
    },
    {
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      description: "Our comprehensive approach includes services such as health checks, wellness programs, and tailored healthcare plans.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      imageAlt: "Compassionate healthcare service",
      link: "/services/healthcare-service"
    },
    {
      icon: Briefcase,
      title: "HEALTHCARE STAFFING",
      description: "We continue to provide our care staff with the best possible working conditions.",
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
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-10 mb-12 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                What is Respite Care?
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Respite care is temporary care for the elderly or individuals when their normal carers are not available. 
              Respite care, or carers respite, is typically used as part of recovery after an accident, illness, or 
              surgery when regular carers need a break, or additional specialized support is required.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                This temporary arrangement is offered by trained carers for numerous care types including assisted living, 
                residential care, types of dementia care and nursing care. Respite care is also available for elderly people 
                or those that need extra support following an operation or illness.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              While regular carers take a well-earned break from the demanding duties of being a full-time carer, 
              our team is on hand to help. This type of care is <strong>non-hierarchical</strong>. It's perfect for you if 
              you'd like more control over your day-to-day life or if you need some time off to recharge.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg  top-8">
            <Image
              src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&h=600&fit=crop"
              alt="Respite care for elderly"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Temporary Care Solutions</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Respite Care</h3>
              <p className="text-white/80">Temporary care when regular carers need a break</p>
            </div>
          </div>
        </div>

        {/* Additional Text below image section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-50 rounded-xl p-6 mb-6">
            <p className="text-slate-700 leading-relaxed">
              Caring for another person can be physically and mentally demanding, and much more than purely handling the 
              day-to-day tasks. Especially when caring for long periods at a time, the emotional strain can take its toll. 
              Respite care provides your main carer with a temporary break while ensuring your care needs are met.
            </p>
          </div>
          
          <p className="text-slate-600 leading-relaxed">
            The types of respite care available will ensure that those receiving care will have their requirements met by 
            our expert carers and management team, whilst you look after yourself. Unlike an average homecare agency, 
            our service is fully managed, and overseen by a dedicated team of senior carers and managers.
          </p>
        </div>

        {/* Types of Respite Care */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            The Different Types of Respite Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {respiteTypes.map((type, index) => (
              <div
                key={index}
                ref={(el) => { typesRef.current[index] = el; }}
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Services Section */}
        <div className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive care and cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                onClick={() => router.push(service.link)}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image Section */}
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

        {/* Key Features */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Why Choose Our Respite Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Fully Managed Service",
              "Trained Expert Carers",
              "Flexible Scheduling",
              "24/7 Support Available"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}