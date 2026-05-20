// components/contact/contact-section.tsx
"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, Users, Calendar, PhoneCall, Briefcase } from "lucide-react";
import { cn } from "@/utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  location: z.string().min(2, { message: "Please enter your location" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  organisation: z.string().optional(),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  inquiryType: z.string().min(1, { message: "Please select an option" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      phone: "",
      organisation: "",
      services: [],
      inquiryType: "",
      message: "",
    }
  });

  const selectedServices = watch("services");
  const selectedInquiryType = watch("inquiryType");

  const serviceOptions = [
    { id: "personal-care", label: "Personal Care Service" },
    { id: "cleaning-support", label: "Cleaning Support" },
    { id: "healthcare-staffing", label: "Healthcare Staffing Service" },
    { id: "other-services", label: "Other Services" },
    { id: "free-assessment", label: "Book a free assessment"},
    {id: "call-back", label: "I would like a call back"},
    {id: "work-with-us", label: "I would like to work with Medicare Link"}
    
  ];

 

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form data:", data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    reset();

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // GSAP Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(mapRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: 0.3,
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleServiceToggle = (serviceId: string) => {
    const current = selectedServices || [];
    if (current.includes(serviceId)) {
      setValue("services", current.filter(id => id !== serviceId));
    } else {
      setValue("services", [...current, serviceId]);
    }
  };

  const cleaningServices = [
    "All Cleaning Support",
    "Domestic Cleaning Service",
    "End of Tenancy Cleaning",
    "Event/Party Cleaning",
    "Home Maid Service",
    "Housekeeping Service",
    "Move-In/Move-Out Cleaning",
    "Office Cleaning",
    "One-Off Cleaning Service",
    "Spring Cleaning",
    "Weekly Cleaners"
  ];

  const careServices = [
    "All Healthcare Services",
    "Companionship & Support",
    "Domiciliary Care Support",
    "Elderly Care",
    "Alzheimer's & Dementia Care",
    "Live In Care",
    "Healthcare Staffing Service"
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Join Us", href: "/join" },
    { name: "Our Service", href: "/services" }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            CUSTOMER FEEDBACK FORM
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We value your feedback and look forward to assisting you with your care needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <div ref={infoRef} className="space-y-10 lg:pt-4">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Contact Us
              </div>
              <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight text-slate-900 leading-[1.1]">
                Get in Touch
                <br />
                <span className="text-primary">With Our Team</span>
              </h2>
              <p className="font-medium text-lg leading-relaxed text-slate-600">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-4">
              <ContactItem 
                icon={MapPin} 
                title="Address" 
                content="65 Cranbrook Road, Ilford, London, IG1 4PG" 
              />
              <ContactItem 
                icon={Phone} 
                title="Phone" 
                content="02030111145" 
                href="tel:02030111145"
              />
              <ContactItem 
                icon={Mail} 
                title="Email" 
                content="info@medicarelink.co.uk" 
                href="mailto:info@medicarelink.co.uk"
              />
            </div>

            {/* Office Hours */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Office Hours
              </h3>
              <p className="text-slate-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-slate-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-slate-600 text-sm">Sunday: Closed (Emergency support available 24/7)</p>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div 
            ref={formRef}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative group"
          >
            {/* Success Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 z-10 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                <p className="text-slate-500 mt-2">Your message has been sent successfully.</p>
                <p className="text-slate-400 text-sm mt-1">We'll get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700 font-semibold">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="name"
                  {...register("name")} 
                  placeholder="Your full name" 
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 transition-all rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="email"
                  {...register("email")} 
                  type="email"
                  placeholder="your@email.com" 
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 transition-all rounded-lg"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-slate-700 font-semibold">
                  Location (City/Town) <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="location"
                  {...register("location")} 
                  placeholder="London, Manchester, etc." 
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 transition-all rounded-lg"
                />
                {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
              </div>

              {/* Telephone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-semibold">
                  Telephone Number <span className="text-red-500">*</span>
                </Label>
                <Input 
                  id="phone"
                  {...register("phone")} 
                  type="tel"
                  placeholder="020 1234 5678" 
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 transition-all rounded-lg"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
              </div>

              {/* Organisation */}
              <div className="space-y-2">
                <Label htmlFor="organisation" className="text-slate-700 font-semibold">
                  Organisation (If applicable)
                </Label>
                <Input 
                  id="organisation"
                  {...register("organisation")} 
                  placeholder="Your organisation name" 
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 transition-all rounded-lg"
                />
              </div>

              {/* Services - Checkboxes */}
              <div className="space-y-3">
                <Label className="text-slate-700 font-semibold">
                  I WOULD LIKE FURTHER INFORMATION ON: <span className="text-red-500">*</span>
                </Label>
                <div className="space-y-2">
                  {serviceOptions.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices?.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <Label htmlFor={service.id} className="text-slate-600 font-normal cursor-pointer">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.services && <p className="text-red-500 text-xs">{errors.services.message}</p>}
              </div>

              

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-700 font-semibold">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea 
                  id="message"
                  {...register("message")} 
                  placeholder="Please provide details about your requirements..." 
                  className="bg-slate-50 border-slate-200 focus:bg-white focus:border-primary/50 transition-all rounded-lg min-h-[120px] resize-none p-4"
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                size="lg"
                className="w-full h-12 font-semibold text-base group bg-primary hover:bg-primary/90 rounded-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Submit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* --- MAP SECTION --- */}
        <div ref={mapRef} className="mt-20">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-[300px] md:h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.123456789012!2d0.067891!3d51.558765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7a7a7a7a7a7%3A0x123456789abcdef!2s65%20Cranbrook%20Rd%2C%20Ilford%2C%20London%20IG1%204PG%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Medicare Link Location Map"
            />
          </div>
        </div>

        {/* --- FOOTER / SERVICES LINKS --- */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cleaning Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">CLEANING SERVICES</h3>
              <ul className="space-y-2">
                {cleaningServices.map((service, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Care Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">CARE SERVICES</h3>
              <ul className="space-y-2">
                {careServices.map((service, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-slate-500 hover:text-primary text-sm transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary">QUICK LINKS</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-slate-500 hover:text-primary text-sm transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-slate-400 text-xs">
                  65 Cranbrook Road, Ilford, London, IG1 4PG
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Email: info@medicarelink.co.uk<br />
                  Contact: 02030111145<br />
                  Website: www.medicarelink.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Item Component
function ContactItem({ icon: Icon, title, content, href }: { icon: any; title: string; content: string; href?: string }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper 
      href={href} 
      className={cn(
        "flex items-start gap-4 group",
        href && "hover:opacity-80 transition-opacity cursor-pointer"
      )}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-semibold text-slate-700 text-sm mb-0.5">{title}</h4>
        <p className="text-slate-800 text-base">{content}</p>
      </div>
    </Wrapper>
  );
}