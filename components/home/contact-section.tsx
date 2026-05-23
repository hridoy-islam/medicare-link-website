"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, Navigation, MessageSquare, Info } from "lucide-react";
import { cn } from "@/utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one department" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoBlockRef = useRef<HTMLDivElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: [],
      message: "",
    }
  });

  // Watch services purely to drive visual styling safely
  const watchedServices = watch("services") || [];

  const serviceOptions = [
    { id: "general-enquiry", label: "General Care Enquiry" },
    { id: "visit-booking", label: "Schedule Home Visit" },
    { id: "career-opportunities", label: "Careers & Staffing Portals" },
    { id: "feedback", label: "Provide Quality Feedback" },
  ];

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Submitted Data Profile:", data);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(infoBlockRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(formCardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden bg-white text-zinc-800">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* ─── LEFT PANEL: CONTACT INFO ─── */}
            <div ref={infoBlockRef} className="lg:col-span-5 space-y-12 lg:sticky lg:top-28">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Communications Desk
                </div>
                <h2 className="font-black text-4xl sm:text-5xl tracking-tight text-zinc-950 leading-[1.05]">
                  Connecting <br />
                  <span className="text-primary">Care & Community</span>
                </h2>
                <p className="font-light text-zinc-500 text-sm md:text-base leading-relaxed max-w-md">
                  Reach out to our administrative hub for client placements, personal care consultations, or administrative inquiries.
                </p>
              </div>

              <div className="space-y-6 border-l border-zinc-100 pl-4 py-2">
                <ContactCard 
                  icon={Phone} 
                  title="Call Central Desk" 
                  value="01424-219105" 
                  href="tel:01424219105"
                />
                <ContactCard 
                  icon={MapPin} 
                  title="Visit Our Premises" 
                  value="4 Hastings Road, Bexhill-on-Sea, East Sussex, TN40 2HH" 
                />
                <ContactCard 
                  icon={Mail} 
                  title="Electronic Correspondence" 
                  value="administration@elizabethcourt.co.uk" 
                  href="mailto:administration@elizabethcourt.co.uk"
                />
              </div>

              <div className="pt-2">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-950 hover:text-primary transition-colors group"
                >
                  <Navigation className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                  <span>Get Vector Directions</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* ─── RIGHT PANEL: FORM INTERFACE ─── */}
            <div ref={formCardRef} className="lg:col-span-7">
              <div className="bg-zinc-50/50 border border-zinc-100 p-6 sm:p-10 rounded-2xl relative overflow-hidden backdrop-blur-md">
                
                {isSubmitted && (
                  <div className="absolute inset-0 z-30 bg-white/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-400">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 ring-4 ring-primary/5">
                      <CheckCircle2 size={26} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-zinc-900">Transmission Complete</h3>
                    <p className="text-zinc-500 text-sm font-light mt-1 max-w-xs mx-auto">
                      Your correspondence packet has been safely delivered to our care routing coordinators.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Full Name <span className="text-primary">*</span>
                      </Label>
                      <Input 
                        id="name"
                        {...register("name")} 
                        placeholder="Jane Doe" 
                        className="h-11 bg-white border-zinc-200 focus:border-primary/50 transition-all rounded-lg text-sm shadow-none focus-visible:ring-primary/10"
                      />
                      {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Contact Line <span className="text-primary">*</span>
                      </Label>
                      <Input 
                        id="phone"
                        {...register("phone")} 
                        type="tel"
                        placeholder="01424 000000" 
                        className="h-11 bg-white border-zinc-200 focus:border-primary/50 transition-all rounded-lg text-sm shadow-none focus-visible:ring-primary/10"
                      />
                      {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Email Address <span className="text-primary">*</span>
                    </Label>
                    <Input 
                      id="email"
                      {...register("email")} 
                      type="email"
                      placeholder="jane.doe@example.com" 
                      className="h-11 bg-white border-zinc-200 focus:border-primary/50 transition-all rounded-lg text-sm shadow-none focus-visible:ring-primary/10"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
                  </div>

                  {/* ─── FIX: THE PERMANENT REMEDY FOR THE LOOP ─── */}
                  {/* Using native native check array structures allows hook-form to completely intercept loop errors */}
                  <div className="space-y-3 pt-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-primary" /> Select Target Department <span className="text-primary">*</span>
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => {
                        const isChecked = watchedServices.includes(service.id);
                        return (
                          <label 
                            key={service.id} 
                            htmlFor={service.id}
                            className={cn(
                              "flex items-center space-x-3 p-3 bg-white border rounded-xl cursor-pointer select-none transition-all duration-200",
                              isChecked 
                                ? "border-primary/40 ring-2 ring-primary/5 bg-primary/[0.01]" 
                                : "border-zinc-200 hover:border-zinc-300"
                            )}
                          >
                            <input
                              type="checkbox"
                              id={service.id}
                              value={service.id}
                              {...register("services")}
                              className="h-4 w-4 rounded border-zinc-300 text-primary focus:ring-primary/20 accent-primary"
                            />
                            <span className="text-zinc-700 text-xs font-medium cursor-pointer">
                              {service.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.services && <p className="text-red-500 text-xs font-medium pt-1">{errors.services.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Your Message <span className="text-primary">*</span>
                    </Label>
                    <Textarea 
                      id="message"
                      {...register("message")} 
                      placeholder="Provide clear specifications here regarding details..." 
                      className="bg-white border-zinc-200 focus:border-primary/50 transition-all rounded-lg min-h-[130px] resize-none text-sm p-4 focus-visible:ring-primary/10 shadow-none"
                    />
                    {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-12 px-6 font-bold uppercase tracking-wider text-xs bg-primary hover:bg-primary/95 text-white rounded shadow-sm transition-all active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Routing Packet...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        Transmit Request
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* ================= GOOGLE MAPS SECTION ================= */}
              <div className="scroll-section w-full bg-white relative fade-up-element">
                <div className="">
                  <div className="w-full h-[460px] bg-slate-900 relative overflow-hidden shadow-xl  grayscale hover:grayscale-0 transition-all duration-1000">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.3245!2d0.731!3d50.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU3JzAwLjAiTiAwwrA0Myc1MS42IkU!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Official Elizabeth Court Location Map Verification Frame"
                      className="opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                </div>
      
                <div className="bg-slate-950 text-white border-t-4 border-primary py-7">
                  <div className="container mx-auto px-6 lg:px-12 flex items-center justify-center gap-4 text-center sm:text-left sm:justify-start">
                    <Info className="w-5 h-5 text-primary shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium tracking-wide">
                      <strong className="text-white font-semibold">
                        Route Notice:
                      </strong>{" "}
                      Certain map application pins calculate directions with a slight
                      coordinate shift. We are mapped directly on{" "}
                      <strong className="text-primary font-bold">
                        Hastings Road
                      </strong>{" "}
                      on the southern edge of King Offa Way, looking across at
                      Greenbank.
                    </p>
                  </div>
                </div>
              </div>
    </div>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const CardTag = href ? "a" : "div";
  return (
    <CardTag 
      href={href} 
      className={cn(
        "flex gap-4 items-start py-1 group",
        href && "cursor-pointer"
      )}
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-zinc-50 border border-zinc-100 group-hover:border-primary/20 flex items-center justify-center text-zinc-500 group-hover:text-primary group-hover:scale-105 transition-all duration-300 shadow-2xs">
        <Icon size={15} className="stroke-[1.75]" />
      </div>
      <div className="space-y-0.5">
        <h4 className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">{title}</h4>
        <p className={cn(
          "text-sm font-medium tracking-tight text-zinc-800 transition-colors",
          href && "group-hover:text-primary group-hover:underline decoration-primary/30 underline-offset-4"
        )}>
          {value}
        </p>
      </div>
    </CardTag>
  );
}