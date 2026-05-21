// components/about/about-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Sparkles,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const valuesRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Quote animation
      gsap.fromTo(quoteRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 80%",
          }
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.15,
            ease: "back.out(0.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // Values stagger animation
      valuesRef.current.forEach((value, index) => {
        gsap.fromTo(value,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: value,
              start: "top 90%",
            }
          }
        );
      });

      // Services stagger animation
      servicesRef.current.forEach((service, index) => {
        gsap.fromTo(service,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.12,
            scrollTrigger: {
              trigger: service,
              start: "top 85%",
            }
          }
        );
      });

      // Footer animation
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const qualities = [
    {
      icon: Heart,
      title: "Fully Qualified",
      description: "Rigorous selection process including personal interviews, competency testing, psychometric testing, reference checks, and background clearance."
    },
    {
      icon: Users,
      title: "Empathetic Care",
      description: "Emotional and moral support for clients and families is ingrained in everything we do."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock mobile phone access to experienced care team members."
    },
    {
      icon: Shield,
      title: "Trusted Caregivers",
      description: "We ask: 'Would I trust this caregiver to look after my own mother?' Only 'YES' candidates are recruited."
    }
  ];

  const values = [
    "Person-Centered Approach",
    "Individual Likes & Dislikes",
    "Freedom to Make Choices",
    "Daily Communication Records",
    "Family Peace of Mind",
    "Regular Confidential Supervision"
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
      {/* Quote Section */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto ">
          <div ref={quoteRef} className="text-center max-w-4xl mx-auto">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-700  leading-relaxed">
              "Our Clients receive their care the way they want, at a time when they want to have it delivered. 
              They are involved in all decision-making, including agreement of their personalized care plan."
            </p>
          </div>
        </div>
      </div>

      {/* Quality Cards Section */}
      <div className="container mx-auto  py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Fully Qualified & Empathetic Care Providers
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We go above and beyond national legal requirements to ensure only the best caregivers join our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((quality, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <quality.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{quality.title}</h3>
              <p className="text-slate-600 leading-relaxed">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training & Support Section */}
      <div className="bg-slate-50 py-20 lg:py-28">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Beyond Basic Training
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Once a Caregiver meets our strict criteria, it's just the beginning. Each goes through a training 
                and orientation process that guides them through our values and standards, going above and beyond 
                national legal requirements.
              </p>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-slate-700">{value}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-slate-600">24/7 Care Team Access</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about1.jpg"
                alt="Caregiver training session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
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
                        onClick={() => router.push(service.link)}

        ref={(el) => { servicesRef.current[index] = el; }}
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
            <h3 className="text-xl font-bold text-primary">{service.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-slate-600 leading-relaxed mb-6">
            {service.description}
          </p>
          <Button  className="inline-flex items-center gap-2  font-semibold  transition-all duration-300">
            Learn More
            <ArrowRight className="w-4 h-4 " />
          </Button>
        </div>
      </div>
    ))}
  </div>
</div>

    </main>
  );
}