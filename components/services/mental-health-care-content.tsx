// components/services/mental-health-care-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Heart,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Star,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MentalHealthCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const aimsRef = useRef<(HTMLDivElement | null)[]>([]);
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

      aimsRef.current.forEach((aim, index) => {
        gsap.fromTo(aim,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: aim,
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

  const aims = [
    "Provide ordinary living opportunities for all residents and encourage them to participate in all aspects of daily living",
    "Encourage and empower residents to take control of their own lives and reach their full potential",
    "Ensure that the personal care needs and emotional needs of residents are met",
    "Promote individual choice, informed and agreed risk taking",
    "Offer a service in the context of overall goal and life planning with residents and in any individual programme that exists",
    "Provide a service, which is sensitive to the cultural and religious needs of residents",
    "Ensure that residents use ordinary community services and maintain their social links as far as possible",
    "Ensure that the needs of residents remain central to the Service provided"
  ];

  const allServices = [
    "Companionship & Support",
    "Domiciliary Care Support",
    "Elderly Care",
    "Alzheimer's & Dementia Care"
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
      description: "We continue to provide our care and support services as we have done throughout the COVID crisis and beyond.",
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
              <Brain className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Mental Health Care
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              We offer a person-centered care approach to Mental Health, ensuring the care we provide is all about 
              you as a client, your needs, and your requirements. Our care services can range from a couple of hours 
              through to on-site support 24 hrs a day. We have experience working with different types of mental 
              health, including depression, bipolar, and anxiety.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                When we take on a mental health care package, we like to involve the individual from the very 
                beginning to ensure they feel comfortable – treating you as an individual who is not defined by 
                your condition. We like to learn about interests and activities and what level of care is required, 
                a team will then be put into place that fits an application call time & cost basis (and also takes 
                into account any other factors).
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              All of our staff are fully trained in caring for Mental Health, we also run individual training 
              sessions as and when required to ensure our staff can offer the correct level of support.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Independence and encouragement are 2 areas we like to promote across all of our services. We help 
                set realistic personal goals aimed at giving the independence to improve self-esteem and confidence 
                in a variety of situations.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop"
              alt="Mental health care support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Mental Health Care</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Person-Centered Support</h3>
              <p className="text-white/80">Compassionate care for your wellbeing</p>
            </div>
          </div>
        </div>

        {/* Aims & Objectives Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            Aims & Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aims.map((aim, index) => (
              <div
                key={index}
                ref={(el) => { aimsRef.current[index] = el; }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 text-sm leading-relaxed">{aim}</span>
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