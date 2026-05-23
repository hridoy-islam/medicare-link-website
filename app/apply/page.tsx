"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/shared/Hero";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { Download, UploadCloud, FileText, CheckCircle2, User, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ApplyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger timeline steps into view
      gsap.fromTo(
        ".timeline-step",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Drag and drop event handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <SmoothScroll>
      <div ref={containerRef} className="bg-white text-zinc-800 min-h-screen font-sans overflow-hidden">
        <Hero 
          title="Join Our Team" 
          subtitle="Follow our simple three-step digital workflow to submit your professional care application." 
        />

        <section className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          <div className="timeline-container relative border-l border-zinc-100 pl-6 md:pl-10 ml-4 md:ml-6 space-y-16">
            
            {/* ─── STEP 1: DOWNLOAD FORM ─── */}
            <div className="timeline-step relative">
              {/* Numeric Indicator Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 text-xs md:text-sm font-black text-zinc-400 group-hover:border-primary">
                01
              </div>
              <div className="space-y-3">
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-zinc-950">
                  Download Application Form
                </h2>
                <p className="text-zinc-500 font-light text-sm md:text-base max-w-xl">
                  Get started by retrieving our comprehensive candidate document form profile directly to your device.
                </p>
                <div className="pt-2">
                  <a
                    href="/documents/application-form.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-primary text-white text-xs md:text-sm font-bold uppercase tracking-wider px-5 py-3 rounded transition-all duration-300 shadow-sm active:scale-[0.98]"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Form</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ─── STEP 2: COMPLETE FORM ─── */}
            <div className="timeline-step relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 text-xs md:text-sm font-black text-zinc-400">
                02
              </div>
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-zinc-950">
                  Complete & Save Your Details
                </h2>
                <p className="text-zinc-500 font-light text-sm md:text-base max-w-xl">
                  Fill out all required information criteria within the downloaded document accurately and save it locally as a standard PDF format file.
                </p>
              </div>
            </div>

            {/* ─── STEP 3: SUBMIT FORM INTERACTION MODULE ─── */}
            <div className="timeline-step relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-0 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-zinc-50 border border-zinc-200 text-xs md:text-sm font-black text-zinc-400">
                03
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-zinc-950">
                    Upload & Submit Application
                  </h2>
                  <p className="text-zinc-500 font-light text-sm md:text-base max-w-xl">
                    Fill in your vital contact channels below and safely anchor your prepared application document.
                  </p>
                </div>

                {isSuccess ? (
                  // Success State Card Block
                  <div className="p-8 border border-emerald-100 bg-emerald-50/40 rounded-2xl text-center space-y-3 max-w-2xl animate-fade-in">
                    <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-full">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900">Application Received</h3>
                    <p className="text-zinc-500 text-sm font-light max-w-md mx-auto">
                      Thank you for applying. Our core management review committee will evaluate your records and get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  // Native Shadcn-Style Form Structure
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl border border-zinc-100 bg-zinc-50/50 p-6 md:p-8 rounded-2xl shadow-xs">
                    
                    {/* Name Input Grid Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <User className="h-3 w-3" /> First Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Contact Information Input Grid Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <Mail className="h-3 w-3" /> Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                          <Phone className="h-3 w-3" /> Phone Number <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          placeholder="+44 7123 456789"
                        />
                      </div>
                    </div>

                    {/* Drag and Drop File Upload Area */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                        <FileText className="h-3 w-3" /> Upload Completed Form <span className="text-primary">*</span>
                      </label>
                      
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative border-2 border-dashed rounded-xl p-8 text-center flex flex-col items-center justify-center cursor-pointer transition-all ${
                          isDragging
                            ? "border-primary bg-primary/5 scale-[1.01]"
                            : file
                            ? "border-primary/40 bg-white"
                            : "border-zinc-200 bg-white hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="file"
                          id="file-upload"
                          required={!file}
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />

                        {file ? (
                          <div className="space-y-2 animate-fade-in">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <FileText className="h-6 w-6" />
                            </div>
                            <div className="text-sm font-bold text-zinc-900 truncate max-w-xs md:max-w-md">
                              {file.name}
                            </div>
                            <div className="text-xs text-zinc-400">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB • Click to replace file
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-zinc-400 group-hover:text-primary transition-colors">
                              <UploadCloud className="h-6 w-6" />
                            </div>
                            <div className="text-sm font-bold text-zinc-800">
                              Drag & drop your file here, or <span className="text-primary">browse</span>
                            </div>
                            <div className="text-xs text-zinc-400">
                              Supports PDF, DOC, DOCX formats up to 25MB
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Operational Submit Action Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded shadow-md hover:bg-primary/90 transition-all disabled:opacity-50 active:scale-[0.99]"
                      >
                        {isSubmitting ? "Processing Submission..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </div>
    </SmoothScroll>
  );
}