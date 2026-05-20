
"use client";

import { useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Sparkles, 
  Clock, 
  CreditCard, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Home,
  Brush,
  Star
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Button } from "../ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function OneOffCleaningContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesListRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      gsap.fromTo(mainContentRef.current,
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

      // Features stagger animation
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(feature,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: feature,
              start: "top 85%",
            }
          }
        );
      });

      // Services list animation
      gsap.fromTo(servicesListRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: servicesListRef.current,
            start: "top 85%",
          }
        }
      );

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(0.3)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Intense & Thorough",
      description: "This is just a one-off spring clean. It's intense, thorough, and makes your home completely pristine."
    },
    {
      icon: Clock,
      title: "Up to 6 Hours",
      description: "The clean can take up to 6 hours depending on the size and condition of your home."
    },
    {
      icon: CreditCard,
      title: "One Payment",
      description: "It's one payment for a fully professional clean which will make your home spotless."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "We'll find a local domestic cleaner and fit the spring clean around your availability."
    }
  ];

  const cleaningServices = [
    "All Cleaning Support",
    "Domestic Cleaning Service",
    "End of Tenancy Cleaning",
    "Event/Party Cleaning",
    "Home Maid Service",
    "Move-In/Move-Out Cleaning",
    "Office Cleaning",
    "One-Off Cleaning Service",
    "Spring Cleaning",
    "Weekly Cleaners"
  ];

  return (
    <main ref={sectionRef} className="bg-white">
     

      <div className="container mx-auto  py-16 lg:py-24">
        {/* Main Content */}
        <div ref={mainContentRef} className="">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Brush className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                Professional Spring Cleaning Service
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              This is just a one-off spring clean. It's intense, thorough, and makes your home completely pristine. 
              The clean can take up to 6 hours depending on the size and condition of your home.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6 my-6">
              <p className="text-slate-700 leading-relaxed">
                <strong className="text-primary">One payment</strong> for a fully professional clean which will make your home spotless 
                while you're at work or doing other day-to-day activities.
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-4">
              The cost of a one-off clean varies on the location of your home. Fill out our inquiry form to get the exact prices for your area.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              We'll find a local domestic cleaner for you and fit the spring clean in around your availability.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { featuresRef.current[index] = el; }}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Why Choose Our One-Off Cleaning?
              </h2>
              <ul className="space-y-3">
                {[
                  "Fully vetted and insured professional cleaners",
                  "Top quality cleaning materials and products",
                  "Flexible scheduling to suit your availability",
                  "Spotless results guaranteed",
                  "Transparent pricing with no hidden fees"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push('/contact')}
                className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/cleaning-service.jpg"
                alt="Professional cleaning service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* All Cleaning Services List */}
        <div ref={servicesListRef}>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
              All Cleaning Services
            </h2>
            <p className="text-slate-500">
              Explore our full range of professional cleaning solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {cleaningServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2 hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
                onClick={() => {
                  const slug = service.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
                  router.push(`/services/${slug}`);
                }}
              >
                <Star className="w-3 h-3 text-primary" />
                <span className="text-sm text-slate-600 hover:text-primary transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
            Ready for a Spotless Home?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            Contact us today to schedule your one-off spring clean. Get a free quote based on your location and home size.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.push('/contact')}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
            
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Fill out our inquiry form to get exact prices for your area
          </p>
        </div>
      </div>
    </main>
  );
}