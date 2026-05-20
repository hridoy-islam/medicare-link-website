"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const cleaningServices = [
    { label: "One Off Cleaning", href: "/services/one-off-cleaning-service" },
    { label: "Weekly Cleaning", href: "/services/weekly-cleaning" },
    { label: "Spring Cleaning", href: "/services/spring-cleaning" },
    { label: "Office Cleaning", href: "/services/office-cleaning-service" },
    { label: "Move In/Out Cleaning", href: "/services/move-in-move-out-cleaning" },
    { label: "House Keeping", href: "/services/housekeeping-service" },
    { label: "Home Maid Service", href: "/services/home-maid-service" },
    { label: "Event Party Cleaning", href: "/services/event-party-cleaning" },
    { label: "End of Tenancy Cleaning", href: "/services/end-of-tenancy-cleaning" },
    { label: "Domestic Cleaning", href: "/services/domestic-cleaning-service" },
    { label: "Cleaning Support", href: "/services/cleaning-support" },
  ];

  const careServices = [
    { label: "Healthcare Service", href: "/services/healthcare-service" },
    { label: "Healthcare Staffing", href: "/services/healthcare-staffing-service" },
    { label: "Respite Care", href: "/services/respite-care" },
    { label: "Residential Care", href: "/services/residential-care" },
    { label: "Palliative Care", href: "/services/palliative-care" },
    { label: "Mental Health Care", href: "/services/mental-health-care" },
    { label: "Live In Care", href: "/services/live-in-care" },
    { label: "Disability Support", href: "/services/learning-disability-care" },
    { label: "Elderly Care", href: "/services/elderly-care" },
    { label: "Domiciliary Care", href: "/services/domiciliary-care" },
    { label: "Companionship & Support", href: "/services/companionship-and-support" },
    { label: "Dementia Care", href: "/services/alzheimers-dementia-care" },
    { label: "Brain Injury Care", href: "/services/acquired-brain-injury" },
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Join Medicare Link", href: "/join-medicare-link" },
    { label: "Contact Us", href: "/contact" },
    { label: "All Services", href: "/services" },
  ];

  const contactInfo = {
    address: "123 Healthcare Street, Medical District, London, UK",
    phone: "+44 123 456 7890",
    email: "info@medicarelink.co.uk",
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block relative h-16 w-56">
              <Image
                src="/medicare-link.webp"
                alt="Medicare Link - Trusted Healthcare Services"
                fill
                className="object-contain object-left scale-120"
                priority
              />
            </Link>
            <p className="text-slate-300 text-[15px] leading-relaxed font-medium pr-4">
              Your trusted partner for professional cleaning and healthcare services. 
              We provide compassionate care and exceptional cleaning solutions tailored to your needs.
            </p>
            
            {/* Quick Links in Brand Column for Mobile */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                    >
                      <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                      <span className="text-[15px] font-medium">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cleaning Services Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Cleaning Services
            </h4>
            <ul className="space-y-2.5">
              {cleaningServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    <span className="text-[15px] font-medium">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Care Services Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Care Services
            </h4>
            <ul className="space-y-2.5">
              {careServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <ChevronRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    <span className="text-[15px] font-medium">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg tracking-wider uppercase relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Get In Touch
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <div className="mt-1 w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 font-semibold mb-1 uppercase tracking-wider text-[11px]">Location</p>
                  <span className="text-[14px] font-medium text-slate-200 leading-relaxed">
                    {contactInfo.address}
                  </span>
                </div>
              </li>
              
              <li className="flex gap-4 group">
                <div className="mt-1 w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 font-semibold mb-1 uppercase tracking-wider text-[11px]">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-[14px] font-medium text-slate-200 hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              
              <li className="flex gap-4 group">
                <div className="mt-1 w-11 h-11 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-slate-400 font-semibold mb-1 uppercase tracking-wider text-[11px]">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-[14px] font-medium text-slate-200 hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400 text-center md:text-left">
              &copy; {currentYear} Medicare Link. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/privacy-policy" 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookie-policy" 
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}