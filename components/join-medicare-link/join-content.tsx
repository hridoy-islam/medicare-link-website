// components/join/join-content.tsx
"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  Heart,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  Calendar,
  Briefcase,
  Zap,
  CheckCircle,
  ArrowRight,
  Brush,
  Stethoscope,
  Upload,
  FileText,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function JoinContent() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null as File | null,
    experience: ""
  });

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

      benefitsRef.current.forEach((benefit, index) => {
        gsap.fromTo(benefit,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.08,
            scrollTrigger: {
              trigger: benefit,
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

  const benefits = [
    { icon: TrendingUp, title: "Free ongoing training", description: "Catering to the needs of both home members and the Clients" },
    { icon: Clock, title: "24-hour support", description: "From Key Workers in the office" },
    { icon: MapPin, title: "Mobility", description: "Flexible work locations" },
    { icon: Briefcase, title: "Career Progressions", description: "Growth opportunities" },
    { icon: Calendar, title: "Flexible Schedule", description: "Choice WHERE and WHEN you work, including your holiday!" },
    { icon: Users, title: "Local Regular Customer", description: "Keep your own LOCAL REGULAR customer" },
    { icon: Clock, title: "Flexible Hours", description: "Choice flexible FULL-TIME & PART-TIME hours!" },
    { icon: Zap, title: "Quick Process", description: "Quick process, so you can START SOON" }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We will contact you soon.");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

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
                MEDICARE LINK
              </h2>
            </div>
            
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Medicare link is calling all people who are kind, caring, and want to make a difference by joining 
              our team of key workers. Your community needs you! We need people to talk together and join our 
              teams to support each other now whenever things become stressful or times are tough.
            </p>
            
            <div className="bg-primary/5 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed">
                As a Care at Medicare link, you'll have kindness above all in stocks upon every aspect of our 
                Dementia, Nursing, Residential, and Social Home Care. Every single person who works here understands 
                that our service isn't an apple pie just like there with their own starts to call. And, by joining us, 
                you'll have a wonderful opportunity to give something back to show people.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&h=600&fit=crop"
              alt="Join Medicare Link team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-3">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Join Our Team</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Make a Difference</h3>
              <p className="text-white/80">Become a key worker in your community</p>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            WHY JOIN US?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => { benefitsRef.current[index] = el; }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-primary/5 transition-colors duration-300"
              >
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 text-sm">{benefit.title}</h3>
                  <p className="text-slate-500 text-xs">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-primary/5 rounded-2xl p-6 mb-16 text-center">
          <p className="text-slate-700 leading-relaxed mb-4">
            Whether we're providing long or short-term conversations, or regular care, our focus is on providing 
            the highest quality service at all times. If you've looked for work that is extraordinary, meaningful 
            and valuable, then it's highly likely you'd be looking for a role that's truly meaningful.
          </p>
          <p className="text-slate-800 font-semibold">
            Please contact us on <span className="text-primary">02030111145</span> or{' '}
            <span className="text-primary">info@medicarelink.co.uk</span> to find out more about how we can help.
          </p>
        </div>

  <div className="flex items-center justify-center">

 
        <div id="apply-form" className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-16 max-w-xl items-center">
          <div className="bg-primary p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Apply Online</h2>
            <p className="text-white/80 mt-2">Please complete the following form to apply online, including a copy of your CV</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div>
              <Label htmlFor="name" className="text-slate-700 font-semibold">Your Name</Label>
              <Input
                id="name"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-slate-700 font-semibold">Your Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="cv" className="text-slate-700 font-semibold">Please attach your CV</Label>
              <div className="mt-1 flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors">
                  <Upload className="w-4 h-4 text-primary" />
                  <span className="text-sm text-slate-600">Choose File</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {formData.cv && (
                  <span className="text-sm text-slate-600 flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {formData.cv.name}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX files only (Max 5MB)</p>
            </div>

            <div>
              <Label htmlFor="experience" className="text-slate-700 font-semibold">
                Please list as many activity-related relevant information as possible
              </Label>
              <Textarea
                id="experience"
                placeholder="Tell us about your experience and relevant information..."
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="mt-1 min-h-[120px]"
              />
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-0.5" required />
                <span className="text-sm text-slate-600">
                  By applying for a role at and submitting my CV I am agreeing to this website submitted information 
                  as that may be inaccurate to. Privacy policy: I am also giving my consent to having.
                </span>
              </label>
            </div>

            <Button type="submit" className="w-full py-6 text-lg font-semibold">
              <Send className="w-5 h-5 mr-2" />
              Submit Application
            </Button>
          </form>
        </div>
 </div>
        {/* Our Services Section */}
        <div className="py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { servicesRef.current[index] = el; }}
                onClick={() => router.push(service.link)}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
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
                  <Button  className="inline-flex items-center gap-2 font-semibold transition-all duration-300">
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