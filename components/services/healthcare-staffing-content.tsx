// components/services/healthcare-staffing-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  Shield, 
  Clock, 
  Database, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HealthcareStaffingContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      gsap.fromTo(descriptionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
          }
        }
      );

      reasonsRef.current.forEach((reason, index) => {
        gsap.fromTo(reason,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: reason,
              start: "top 88%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const serviceAreas = [
    "General Nursing",
    "Neurorehabilitation",
    "Care of the Elderly",
    "End-of-Life Care",
    "Special Needs",
    "Supported Living",
    "Mental Illness"
  ];

  const reasons = [
    {
      icon: Clock,
      title: "Save Time, Money & Effort",
      description: "Utilizing our healthcare staffing solutions will help to save the time, money and effort, required for advertising and then conducting tedious screening processes."
    },
    {
      icon: Database,
      title: "Perfect Match",
      description: "Our huge database of employers and employees, help in maintaining just the perfect match between the service provider and the job seeker."
    },
    {
      icon: TrendingUp,
      title: "Years of Experience",
      description: "Our years of experience help in selecting just the perfect candidate for the position to be filled."
    }
  ];

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Introduction Section */}
      <div ref={headerRef} className="py-12 ">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">Healthcare Staffing</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Healthcare Staffing Service
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pb-16 ">
        
        {/* Main Description */}
        <div ref={descriptionRef} className="bg-white mb-12">
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            We are committed to supplying quality healthcare professionals for clients across a broad range 
            of healthcare environments. Our success is based on finding the right people for the right type 
            of task – professionally, competitively, and with a minimum of delay or disruption.
          </p>
          
          <div className="bg-primary/5 rounded-xl p-6 my-6">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-slate-800">Registered & Compliant</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              We are registered with the Disclosure and Barring Service (formerly Criminal Records Bureau) 
              to safeguard our service users. We adhere to the strictest standard whilst providing the best 
              quality of care.
            </p>
          </div>
          
          <p className="text-slate-600 leading-relaxed mb-6">
            We work with various companies both family-held and large corporations and we constantly seek 
            to improve our partnership through various means.
          </p>
          
          <div className="bg-slate-50 rounded-xl p-6 my-6">
            <h3 className="font-semibold text-slate-800 mb-3">Our range of services includes but is not limited to:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-600 leading-relaxed">
            As a company we place a high significance on our staff training, always seeking to improve 
            their skills, knowledge, and conduct thus providing a broad range of experienced professionals. 
            We're sure you'll be happy working with us. Look around our website and if you have any 
            comments or questions, please feel free to contact us.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            Why Choose Us as Your Healthcare Staffing Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                ref={(el) => { reasonsRef.current[index] = el; }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{reason.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </main>
  );
}