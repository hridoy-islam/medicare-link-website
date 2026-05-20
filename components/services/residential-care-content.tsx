// components/services/residential-care-content.tsx
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Home,
  Heart,
  Flower2,
  Users,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Briefcase,
  Building2,
  WashingMachine,
  Utensils,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ResidentialCareContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
      description: "We continue to provide our care and support services as we have done throughout the COVID crisis and beyond, ensuring consistent, reliable staffing for all our clients.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop",
      imageAlt: "Professional healthcare staffing",
      link: "/services/healthcare-staffing"
    }
  ];

  const benefits = [
    "24/7 assistance with daily tasks",
    "No chores - home kept clean by staff",
    "Laundry services included",
    "Landscaped gardens for fresh air",
    "Nutritious meals provided",
    "Social activities and companionship"
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
              <Building2 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                What is Residential Care?
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              A residential home is for people who struggle with daily life due to old age, a physical disability, 
              a learning disability, mental health problems, addiction, or other care needs.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 mb-6">
              <p className="text-slate-700 leading-relaxed">
                A residential care home can either be open to people with a variety of care needs or specialize in 
                conditions such as physical disability or dementia, supported by care assistants.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              Depending on what stage they are in, people with dementia can live in a residential setting as they 
              may need to be looked after and need help with daily activities but do not yet need nursing care.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1773227059522-acc3ae46abdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&h=600&fit=crop"
              alt="Residential care home"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Home className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Residential Care</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Comfortable Living</h3>
              <p className="text-white/80">24/7 support in a caring environment</p>
            </div>
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-xl text-slate-800">Daily Support</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Throughout the day and night with various tasks, for example getting dressed or washing. Further, 
              living in a residential care home takes away the need to do chores as the home will be kept clean by 
              staff and their clothes will be washed.
            </p>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Flower2 className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-xl text-slate-800">Beautiful Gardens</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              A landscaped garden is a common feature of a residential care setting, allowing people in their care to 
              get fresh air and enjoy the sun when the weather allows, and perhaps giving green-fingered residents an 
              opportunity to continue their hobby.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            Benefits of Residential Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary/5 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-slate-700">{benefit}</span>
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