// components/services/elderly-care-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Heart,
  Home,
  Pill,
  Sparkles,
  Users,
  Activity,
  Move,
  Clock,
  Calendar,
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ElderlyCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const carerTasksRef = useRef<(HTMLDivElement | null)[]>([]);
  const scenariosRef = useRef<(HTMLDivElement | null)[]>([]);
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

      carerTasksRef.current.forEach((task, index) => {
        gsap.fromTo(task,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: task,
              start: "top 88%",
            }
          }
        );
      });

      scenariosRef.current.forEach((scenario, index) => {
        gsap.fromTo(scenario,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: scenario,
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

  const carerTasks = [
    { icon: Users, title: "Personal and continence care", description: "Showering, toileting, dressing and changing pads if required" },
    { icon: Pill, title: "Medication reminders", description: "Reminding your loved one to take their medication at the correct times of the day" },
    { icon: Home, title: "General housework", description: "Cooking, cleaning, shopping and all the other tasks that your loved one might be struggling with" },
    { icon: Heart, title: "Companionship care", description: "Making time to have a cup of tea and a chat to help ease feelings of loneliness" },
    { icon: Activity, title: "Clinical care", description: "Specialist support for managing colostomy bags, stomas or ventilators to name a few" },
    { icon: Move, title: "Moving and Handling", description: "Operating lifts and hoists to help you or your loved one move around the house" }
  ];

  const scenarios = [
    { 
      icon: Sparkles, 
      title: "Light Housework", 
      description: "The first stage of care might be someone needing a bit of help around the house and some companionship for a few hours a week." 
    },
    { 
      icon: Calendar, 
      title: "Daily Care", 
      description: "If you or your loved one is struggling to remember to take medication and cook meals then a carer visiting two to three times a day can help manage the situation." 
    },
    { 
      icon: Clock, 
      title: "24 Hour Care", 
      description: "If you or your loved one are requiring more intensive care and are no longer safe when left alone then a live-in carer can be much more cost-effective than a care home and allow you to remain in the home you love." 
    }
  ];

  const services = [
    {
      icon: Brush,
      title: "CLEANING SUPPORT",
      description: "We offer a full range of professional cleaning options, using top quality cleaning materials and products, to achieve brilliant results.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      imageAlt: "Professional cleaning service",
      link: "/services/cleaning-support"
    },
    {
      icon: Stethoscope,
      title: "HEALTHCARE SERVICE",
      description: "Our service includes physiotherapy, individual kiosks and displays, and freedom to make informal choices.",
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
      <div className="container mx-auto py-16 lg:py-20">
        
        {/* Description Section with Image */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Side - Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Elderly Care
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Getting older doesn't have to mean a loss of independence or leaving the comfort of your home. 
              With private elderly care in the home, you can remain in the place you feel most comfortable 
              with some extra support. Elderly care in your own home is growing in popularity and with the 
              help of direct payments from local councils; you can have more control over your own care.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                Medicare Link is an introductory service that helps you to find the best private carers in your area. 
                All the carers on our platform have already been background and DBS checked so that when you hire 
                someone you can focus on personality over paperwork. Medicare Link is the providing of assistance 
                or facilities to make it easier for you to live independently.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1773227059780-5e865ce7fb13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Elderly care at home"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Elderly Care</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Independence at Home</h3>
              <p className="text-white/80">Compassionate care in your own home</p>
            </div>
          </div>
        </div>

        {/* Carer Could Help You With Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-4">
            Carer could help you with:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {carerTasks.map((task, index) => (
              <div
                key={index}
                ref={(el) => { carerTasksRef.current[index] = el; }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
              >
                <task.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">{task.title}</h3>
                  <p className="text-slate-500 text-xs">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scenarios Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-4">
            We've listed a few examples of the sort of scenarios that we help people with regularly:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                ref={(el) => { scenariosRef.current[index] = el; }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <scenario.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{scenario.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </main>
  );
}