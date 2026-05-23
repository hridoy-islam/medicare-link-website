"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About & Services", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Apply", href: "/apply" },
    { label: "Useful Links", href: "/useful-links" },
    { label: "Contact Us", href: "/contact" },
  ];

  const contactInfo = {
    name: "Elizabeth Court Rest Home",
    description: "Elizabeth Court Rest Home provides compassionate residential care in a warm, welcoming environment. Our dedicated team ensures personalized care tailored to each resident's needs.",
    address: "4 Hastings Road, Bexhill-on-Sea, East Sussex, TN40 2HH",
    phone: "01424-219105",
    email: "info@elizabethcourtresthome.co.uk",
  };

  return (
    <footer className="relative bg-gradient-to-tr from-primary via-primary/90 to-primary text-white antialiased overflow-hidden">
      {/* Subtle Top White Overlay Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-10" />

      {/* FULL-WIDTH WAVY INTERSECTING GRID PATTERN */}
      <div 
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_10%,transparent_85%)] pointer-events-none opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Cpath d='M0 20 Q25 0, 50 20 T100 20' fill='none' stroke='rgba(255, 255, 255, 0.08)' stroke-width='1.2'/%3E%3Cpath d='M0 20 Q25 40, 50 20 T100 20' fill='none' stroke='rgba(255, 255, 255, 0.04)' stroke-width='1.2'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 40px'
        }}
      />

      <div className="container mx-auto pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 xl:col-span-5">
            <Link href="/" className="relative h-20 w-64 block transition-opacity duration-300 hover:opacity-90">
              <Image
                src="/logo.png"
                alt="Elizabeth Court Rest Home - Residential Care Services"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/90 font-light">
              {contactInfo.description}
            </p>
          </div>

          {/* Navigation & Content Wrapper */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-7">
            
            {/* Quick Links Column */}
            <div className="flex flex-col gap-4 sm:justify-self-start lg:pl-12">
              <h4 className="text-xs font-bold tracking-widest uppercase text-white/90">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center text-sm text-white/90 hover:text-white transition-colors duration-200 w-fit"
                    >
                      <span className="relative overflow-hidden">
                        {item.label}
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-white/90 transition-all duration-300 group-hover:w-full" />
                      </span>
                      <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-200 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-white/90">
                Get In Touch
              </h4>
              <ul className="space-y-4 text-sm">
                
                {/* Location */}
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-white/90" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">Location</span>
                    <span className="text-white/90 leading-normal max-w-xs font-light">
                      {contactInfo.address}
                    </span>
                  </div>
                </li>
                
                {/* Phone */}
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 shrink-0 text-white/90" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">Phone</span>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-white/90 hover:text-white transition-colors duration-200 font-light"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                
                {/* Email */}
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 shrink-0 text-white/90" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-white/90">Email</span>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-white/90 hover:text-white transition-colors duration-200 break-all font-light"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/90">
            &copy; {currentYear} Elizabeth Court Rest Home Ltd. All rights reserved.
          </p>
          <div className="flex flex-col gap-1 text-xs text-white/90 sm:flex-row sm:items-center sm:gap-3">
            <span>Company No. 5550795</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-white/90">
              Registered Office: GMP Accountants, 24 Landgate, Rye, East Sussex TN31 7LJ
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}