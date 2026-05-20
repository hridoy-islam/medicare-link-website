// components/services/healthcare-staffing-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Users,
  Shield,
  Clock,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Star,
  Database,
  TrendingUp,
  Award,
  UserCheck,
  Heart,
  Brain,
  Home,
  Hospital,
  Brush,
  Stethoscope,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "../ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HealthcareStaffingServiceContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
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

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        },
      );

      reasonsRef.current.forEach((reason, index) => {
        gsap.fromTo(
          reason,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: reason,
              start: "top 88%",
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

  const reasons = [
    {
      icon: Clock,
      title: "Save Time & Money",
      description:
        "Utilizing our healthcare staffing solutions will help to save the time, money and effort required for advertising and then conducting tedious screening processes.",
    },
    {
      icon: Database,
      title: "Perfect Match",
      description:
        "Our huge database of employers and employees helps in maintaining just the perfect match between the service provider and the job seeker.",
    },
    {
      icon: TrendingUp,
      title: "Years of Experience",
      description:
        "Our years of experience help in selecting just the perfect candidate for the position to be filled.",
    },
    {
      icon: UserCheck,
      title: "Support for All Candidates",
      description:
        "We help candidates of all kinds, whether fresher or experienced, to land in their dream jobs.",
    },
    {
      icon: Award,
      title: "Best-Known Staffing Firm",
      description:
        "One of the best-known healthcare staffing firms, trusted by clients across the UK.",
    },
  ];

  const serviceAreas = [
    "General Nursing",
    "Neurorehabilitation",
    "Care of the Elderly",
    "End-of-Life Care",
    "Special Needs",
    "Supported Living",
    "Mental Illness",
  ];

  const allServices = [
    "All Services",
    "Companionship & Support",
    "Domiciliary Care Support",
    "Elderly Care",
    "Alzheimer's & Dementia Care",
  ];
  const services = [
    {
      icon: Brush,
      title: "CLEANING SUPPORT",
      description:
        "We offer a full range of professional options, using top quality cleaning materials and products, to achieve brilliant results.",
      image: "/cleaning-service.jpg",
      imageAlt: "Professional cleaning service",
    },
    {
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      description:
        "Our person-centred approach focuses on wellbeing, individual likes and dislikes, and freedom to make informed choices.",
      image: "/healthcare-service.jpg",
      imageAlt: "Compassionate healthcare service",
    },
    {
      icon: Briefcase,
      title: "HEALTHCARE STAFFING",
      description:
        "We continue to provide our care and support services as we have done throughout the COVID crisis and beyond, ensuring consistent, reliable staffing for all our clients.",
      image: "/healthcare-staffing.jpg",
      imageAlt: "Professional healthcare staffing",
    },
  ];

  return (
    <main ref={sectionRef} className="bg-white">
      {/* Hero Image Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&h=400&fit=crop"
          alt="Hospital staff and healthcare professionals team"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto  py-16 lg:py-20">
        {/* Description Section */}
        <div ref={headerRef} className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-sm">
              Healthcare Staffing
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Quality Healthcare Professionals
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are committed to supplying quality healthcare professionals for
            clients across a broad range of healthcare environments. Our success
            is based on finding the right people for the right type of task -
            professionally, competitively, and with a minimum of delay or
            disruption.
          </p>
        </div>

        {/* Detailed Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-xl font-bold text-slate-800">
                  Our Commitment to Quality
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are registered with the Disclosure and Barring Service
                (formerly Criminal Records Bureau) to safeguard our service
                users. We adhere to the strictest standard whilst providing the
                best quality of care.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We work with various companies both family-held and large
                corporations and we constantly seek to improve our partnership
                through various means.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-xl font-bold text-slate-800">
                  Staff Training & Development
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                As a company we place a high significance on our staff training,
                always seeking to improve their skills, knowledge, and conduct
                thus providing a broad range of experienced professionals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We're sure you'll be happy working with us. Look around our
                website and if you have any comments or questions, please feel
                free to contact us.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-slate-50 rounded-xl p-4"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-10 md:p-12 mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            Why Choose Us as Your Healthcare Staffing Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                ref={(el) => {
                  reasonsRef.current[index] = el;
                }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto  py-20 lg:py-28">
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
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                    <h3 className="text-xl font-bold text-primary">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant={"secondary"}
                    className="inline-flex items-center gap-2  font-semibold  transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 " />
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
