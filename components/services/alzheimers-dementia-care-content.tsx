// components/services/alzheimers-dementia-care-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Brain,
  Heart,
  Shield,
  Users,
  Home,
  Clock,
  Key,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import OurService from "../shared/ourServices";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AlzheimersDementiaCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
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

      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(feature,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: feature,
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

  const features = [
    { icon: Users, text: "Specialist management and care support teams with expertise in mental health issues" },
    { icon: Clock, text: "7+ staff members available at any time" },
    { icon: Home, text: "Large personalized name/photo identification of bedrooms" },
    { icon: Shield, text: "Contained and secure gardens and outdoor patio areas" },
    { icon: Home, text: "Wide and spacious public areas that provide 'wander ways'" },
    { icon: Key, text: "24-hour call alarm in every bedroom" }
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
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Alzheimer's & Dementia Care
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              The number of older people living with Alzheimer's and Dementia in the UK is also growing. 
              In recognizing the increasing need for superior facilities for this group of service users, 
              we have designed our services to provide the most comfortable, supportive, secure, and safe environment.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Many small details that actually mean so much to the care and sense of well-being of residents 
                living with Alzheimer's and Dementia have been incorporated into the design of the home.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1773227055597-dcee26f392f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Alzheimer's and dementia care"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Dementia Care</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Specialist Care</h3>
              <p className="text-white/80">Comfortable, supportive & safe environment</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => { featuresRef.current[index] = el; }}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Description */}
        <div className="mb-16">
          <div className="bg-primary/5 rounded-xl p-6 mb-6">
            <p className="text-slate-700 leading-relaxed">
              We take the time to get to know each resident as an individual – their personal history, lifestyle, 
              and personality, defining and directing our care for who they are. We work very closely and value 
              our relationship with each resident's family in supporting their loved one's care requirements.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed">
              The ability to maintain relationships with family and friends is fundamental to dementia care – 
              our entire dementia care philosophy recognizes the importance of making residents' loved ones 
              feel welcome whenever they visit.
            </p>
          </div>
        </div>

              <OurService/>
       
       
      </div>
    </main>
  );
}